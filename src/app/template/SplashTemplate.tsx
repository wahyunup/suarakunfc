const SplashTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-menu-pattern bg-cover bg-no-repeat"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#345FCB66]/40 to-[#345FCB66]/100"></div>
      <div className="relative container z-10 flex items-center justify-center h-full flex-col">
        {children}
      </div>
    </div>
  );
};

export default SplashTemplate;
