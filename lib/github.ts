// lib/github.ts

import { Project } from './types';

const GITHUB_GRAPHQL_API = 'https://api.github.com/graphql';

interface GitHubPinnedRepoResponse {
  data?: {
    user?: {
      pinnedItems: {
        nodes: Array<{
          name: string;
          description: string | null;
          url: string;
          primaryLanguage: { name: string } | null;
          stargazerCount: number;
          forkCount: number;
        }>;
      };
    };
  };
  errors?: Array<{ message: string }>;
}

/**
 * Fetches pinned repositories for a given GitHub username.
 * Uses the GitHub GraphQL API.
 * 
 * Requires a GITHUB_TOKEN environment variable for authenticated requests.
 * Without a token, the API will return a 401 error.
 */
export async function getPinnedProjects(username: string): Promise<Project[]> {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    console.warn('[GitHub] GITHUB_TOKEN is not set. Returning empty array.');
    return [];
  }

  const query = `
    query GetPinnedRepos($username: String!) {
      user(login: $username) {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              url
              primaryLanguage {
                name
              }
              stargazerCount
              forkCount
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(GITHUB_GRAPHQL_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        query,
        variables: { username },
      }),
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      console.error(`[GitHub] API request failed with status: ${response.status}`);
      return [];
    }

    const json: GitHubPinnedRepoResponse = await response.json();

    if (json.errors) {
      console.error('[GitHub] GraphQL errors:', json.errors);
      return [];
    }

    const pinnedItems = json.data?.user?.pinnedItems?.nodes ?? [];

    return pinnedItems.map((repo) => ({
      name: repo.name,
      description: repo.description,
      html_url: repo.url,
      language: repo.primaryLanguage?.name ?? null,
      stargazers_count: repo.stargazerCount,
      forks_count: repo.forkCount,
    }));
  } catch (error) {
    console.error('[GitHub] Failed to fetch pinned projects:', error);
    return [];
  }
}
