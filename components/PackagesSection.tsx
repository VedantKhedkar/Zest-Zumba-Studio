"use client";
import { FiCheckCircle } from 'react-icons/fi';
import clsx from 'clsx';

const PackagesSection = () => {
  const packages = [
    {
      title: "Monthly Plan",
      price: "1,000",
      frequency: "/month",
      features: ["Daily Workout Session", "Cardio + Zumba", "Personalized Diet Plans", "BMI Checkup", "Personal Guide"],
      isPopular: false
    },
    {
      title: "6 Months Plan",
      price: "5,500",
      frequency: "/6 months",
      features: ["Daily Workout Session", "Cardio + Zumba", "Personalized Diet Plans", "BMI Checkup", "Personal Guide"],
      isPopular: true
    },
    {
      title: "Yearly Plan",
      price: "10,000",
      frequency: "/year",
      features: ["Daily Workout Session", "Cardio + Zumba", "Personalized Diet Plans", "BMI Checkup", "Personal Guide"],
      isPopular: false
    },
  ];

  return (
    /* UPDATED: py-12 on mobile to remove extra top/bottom space */
    <section id="packages" className="py-12 md:py-24 relative overflow-hidden bg-slate-50">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-50 via-white to-purple-50 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* UPDATED: Reduced bottom margin for mobile header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-3 md:mb-4 font-heading tracking-tight ">
            Membership <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-500">Plans</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg font-medium max-w-md mx-auto leading-snug">
            Invest in your health. Choose the rhythm that fits you.
          </p>
        </div>

        {/* MODERN GRID LAYOUT - UPDATED: gap-8 for mobile spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={clsx(
                "relative flex flex-col p-6 md:p-8 rounded-[2rem] border transition-all duration-300",
                pkg.isPopular 
                  ? "bg-gradient-to-b from-purple-100 to-white border-purple-200 shadow-2xl shadow-purple-900/10 z-10 scale-100 md:scale-105" 
                  : "bg-gradient-to-b from-yellow-50 to-white border-yellow-100 shadow-lg text-slate-800 hover:border-yellow-200"
              )}
            >
              {/* Popular Badge */}
              {pkg.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-purple-900 text-[10px] font-black uppercase py-1.5 px-4 rounded-full shadow-md tracking-widest whitespace-nowrap">
                  Best Value
                </div>
              )}

              <div className="text-center mb-6 md:mb-8 mt-2">
                <h3 className={clsx("text-lg md:text-xl font-black mb-2 md:mb-4 font-heading uppercase tracking-wide", pkg.isPopular ? "text-purple-700" : "text-slate-700")}>
                    {pkg.title}
                </h3>
                <div className="flex items-start justify-center text-slate-800">
                  <span className="text-lg font-bold mt-2 text-slate-400">₹</span>
                  <span className={clsx("text-4xl md:text-5xl font-black tracking-tighter mx-1", pkg.isPopular ? "text-purple-900" : "text-slate-900")}>
                    {pkg.price}
                  </span>
                  <span className="font-bold self-end mb-2 text-[10px] uppercase tracking-wider text-slate-400">
                    {pkg.frequency}
                  </span>
                </div>
              </div>

              {/* FEATURES LIST */}
              <ul className="space-y-3 md:space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-medium text-sm">
                    <FiCheckCircle 
                      className={clsx("flex-shrink-0", pkg.isPopular ? "text-yellow-500" : "text-purple-300")} 
                      size={18} 
                    />
                    <span className="text-slate-600 leading-tight">
                        {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CALL TO ACTION */}
              <button 
                className={clsx(
                  "w-full py-3 md:py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-sm active:scale-95",
                  pkg.isPopular 
                    ? "bg-purple-600 text-white shadow-purple-500/20 hover:bg-purple-700 hover:shadow-purple-500/40" 
                    : "bg-white text-purple-700 border border-purple-100 hover:bg-purple-50 hover:text-purple-800"
                )}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;