/** @format */

const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Logo with pulse effect */}
          <div className="z-10 animate-pulse">
            <img
              src="/roxnor-logo.png"
              alt="Roxnor Logo"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
          {/* Spinner Ring */}
          <div className="absolute inset-0 border-4 border-yellow-100 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-yellow-800 rounded-full animate-spin"></div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <p className="text-primary font-bold text-2xl tracking-widest">
            ROXNOR
          </p>
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-3 h-3 bg-yellow-600 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
