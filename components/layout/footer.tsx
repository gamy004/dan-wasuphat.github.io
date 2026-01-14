export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 py-6 md:py-0 bg-background/50 backdrop-blur-sm">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left font-mono">
          Built by{" "}
          <a
            href="https://www.linkedin.com/in/wasuphat-pudjaika-06185614b"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4 text-primary hover:text-primary/80"
          >
            Wasuphat Pudjaika
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
