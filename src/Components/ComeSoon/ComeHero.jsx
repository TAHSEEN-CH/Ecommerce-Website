import { useEffect, useState } from "react";

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [email, setEmail] = useState("");

  useEffect(() => {
    const targetDate = new Date("2025-06-01T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="relative h-screen flex items-center justify-center text-center bg-cover bg-center px-4 sm:px-6 lg:px-12" style={{ backgroundImage: "url('/about/cosonbg.webp')" }}>
      <div className="absolute inset-0 bg-gray-700 opacity-50"></div>
      <div className="relative z-10 text-white w-full max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">We Are Coming Soon</h1>
        <p className="mt-4 text-sm sm:text-lg">Integer sed varius tortor, a fringilla nisi. Vivamus dapibus gravida vehicula.</p>

        <div className="flex justify-center space-x-3 sm:space-x-6 mt-6 text-xl sm:text-2xl">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col items-center">
              <div className="py-2 w-16 sm:w-20 border border-white rounded-md bg-opacity-25">
                <span className="block text-lg sm:text-xl font-bold">{value}</span>
              </div>
              <span className="text-xs sm:text-sm font-bold uppercase mt-2">{unit}</span>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <p className="text-lg sm:text-xl mb-2 font-semibold">Subscribe For Our Next Update</p>
          <div className="relative w-full max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your e-mail..." 
              className="w-full px-4 py-2 pr-24 border border-white rounded-full text-white bg-transparent focus:outline-none placeholder-white"
              value={email} 
              onChange={handleInputChange} 
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 text-white font-bold rounded-lg transition hover:text-yellow-500">SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </div>
  );
}