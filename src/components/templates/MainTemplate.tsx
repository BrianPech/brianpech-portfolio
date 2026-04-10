interface MainTemplateProps {
  children: React.ReactNode;
}

export default function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      {/* Grain Texture Overlay */}
      <div className="grain" />

      {/* Main Content */}
      <main className="relative pt-32 px-6 md:px-12 lg:px-24">
        {/* Background Atmosphere */}
        <div className="glow-sphere -top-48 -right-48" />
        <div className="glow-sphere top-1/2 -left-48" />

        {children}
      </main>
    </>
  );
}
