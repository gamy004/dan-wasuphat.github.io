// lib/types.ts

export interface Project {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
}

export interface Profile {
  name: string;
  title: string;
  summary: string;
  contact: ContactInfo;
  experience: Experience[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
}
