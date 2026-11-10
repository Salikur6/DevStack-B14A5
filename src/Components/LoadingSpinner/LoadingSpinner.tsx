
interface LoadingSpinnerProps {
  message?: string;
}

const LoadingSpinner = ({
  message = "Loading technologies...",
}: LoadingSpinnerProps) => {
  return (
    <div className="flex min-h-87.5 w-full flex-col items-center justify-center gap-5">

      {/* Spinner */}
      <div className="relative flex h-28 w-28 items-center justify-center">

        {/* Outer rotating gradient ring */}
        <div className="absolute inset-0 animate-spin rounded-full bg-[conic-gradient(from_0deg,#FF5722,#D81B7E,#7C3AED,#FF5722)]">
          <div className="absolute inset-1.25 rounded-full bg-white"></div>
        </div>

        {/* Inner logo */}
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-[#D81B7E] to-[#7C3AED] shadow-lg shadow-purple-300/50">
          <span className="text-2xl font-extrabold text-white">
            DS
          </span>
        </div>

        {/* Orbiting dot */}
        <div className="absolute inset-0 animate-spin">
          <div className="absolute -top-1 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-[#FF5722] shadow-md"></div>
        </div>

      </div>

      {/* Loading text */}
      <div className="text-center">
        <h3 className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-xl font-bold text-transparent">
          Dev Stack
        </h3>

        <p className="mt-2 animate-pulse text-sm font-medium text-gray-500">
          {message}
        </p>
      </div>

      {/* Animated loading dots */}
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 animate-bounce rounded-full bg-[#FF5722]"></span>
        <span className="h-2 w-2 animate-bounce rounded-full bg-[#D81B7E] [animation-delay:150ms]"></span>
        <span className="h-2 w-2 animate-bounce rounded-full bg-[#7C3AED] [animation-delay:300ms]"></span>
      </div>

    </div>
  );
};

export default LoadingSpinner;
