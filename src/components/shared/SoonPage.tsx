const SoonPage = ({ title }: { title: string }) => (
  <main className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-4">
    <div className="text-center">
      <h1 className="text-2xl font-semibold text-primary">{title}</h1>
      <p className="mt-2 text-muted-foreground">Halaman ini segera hadir.</p>
    </div>
  </main>
);

export default SoonPage;
