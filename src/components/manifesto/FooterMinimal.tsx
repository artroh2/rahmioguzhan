const FooterMinimal = () => {
  return (
    <footer className="py-8 px-6 bg-background text-center">
      <p className="text-xs text-muted-foreground tracking-[0.2em]">
        © {new Date().getFullYear()} R. OGUZHAN (2) — All rights reserved.
      </p>
    </footer>
  );
};

export default FooterMinimal;
