import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Castle, Coins, Cloud, Moon, Sun, Star, Bird, Trees, Waves } from 'lucide-react';

interface BackgroundProps {
    population: number;
    gold: number;
    timeOfDay: 'DAY' | 'NIGHT';
}

export const Background: React.FC<BackgroundProps> = ({ population, gold, timeOfDay }) => {
    // Calculate number of houses based on population (e.g., 1 house per 8 pop)
    const houseCount = Math.min(Math.floor(population / 8), 12); 
    
    // Calculate gold piles (e.g., 1 pile per 25 gold)
    const goldCount = Math.min(Math.floor(gold / 25), 8);

    const isNight = timeOfDay === 'NIGHT';

    // Predefined positions for houses to look like a village
    // x: percentage from left, y: percentage from bottom
    const housePositions = [
        { x: 10, y: 35 }, { x: 20, y: 30 }, { x: 15, y: 40 }, // Left Village
        { x: 75, y: 32 }, { x: 85, y: 38 }, { x: 90, y: 30 }, // Right Village
        { x: 5, y: 28 }, { x: 25, y: 42 }, { x: 80, y: 45 },
        { x: 65, y: 35 }, { x: 30, y: 35 }, { x: 95, y: 35 }
    ];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Sky Gradient */}
            <motion.div 
                className="absolute inset-0 transition-colors duration-1000"
                initial={false}
                animate={{
                    background: isNight 
                        ? 'linear-gradient(to bottom, #0f172a 0%, #312e81 100%)' 
                        : 'linear-gradient(to bottom, #38bdf8 0%, #bae6fd 100%)'
                }}
            />

            {/* Stars (Night Only) */}
            <AnimatePresence>
                {isNight && (
                    <div className="absolute inset-0">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <motion.div
                                key={`star-${i}`}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
                                className="absolute text-yellow-100"
                                style={{ top: `${Math.random() * 50}%`, left: `${Math.random() * 100}%` }}
                            >
                                <Star className="w-2 h-2 fill-current" />
                            </motion.div>
                        ))}
                    </div>
                )}
            </AnimatePresence>

            {/* Celestial Body */}
            <motion.div 
                className="absolute top-8 right-8 z-10"
                initial={false}
                animate={{ 
                    y: isNight ? 0 : 20, 
                    opacity: 1, 
                    rotate: isNight ? -15 : 0,
                    scale: isNight ? 0.9 : 1.1
                }}
                transition={{ duration: 1.5, type: "spring" }}
            >
                {isNight ? (
                    <div className="relative">
                        <Moon className="w-16 h-16 text-slate-100 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]" fill="currentColor" />
                    </div>
                ) : (
                    <div className="relative">
                        <Sun className="w-20 h-20 text-yellow-400 drop-shadow-[0_0_40px_rgba(250,204,21,0.8)]" fill="currentColor" />
                    </div>
                )}
            </motion.div>

            {/* Clouds */}
            <div className="absolute inset-0 opacity-70">
                <motion.div 
                    animate={{ x: [0, 100, 0] }} 
                    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                    className={`absolute top-16 left-10 ${isNight ? 'text-slate-500/30' : 'text-white/80'}`}
                >
                    <Cloud className="w-24 h-24" fill="currentColor" />
                </motion.div>
                <motion.div 
                    animate={{ x: [0, -50, 0] }} 
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className={`absolute top-32 right-20 ${isNight ? 'text-slate-500/20' : 'text-white/60'}`}
                >
                    <Cloud className="w-20 h-20" fill="currentColor" />
                </motion.div>
            </div>

            {/* Background Hills */}
            <div className={`absolute bottom-20 left-0 w-full h-64 rounded-t-[100%] scale-125 transition-colors duration-1000 ${isNight ? 'bg-indigo-950' : 'bg-emerald-700'} opacity-80`}></div>
            <div className={`absolute bottom-0 left-0 w-full h-48 rounded-t-[40%] scale-110 transition-colors duration-1000 ${isNight ? 'bg-slate-900' : 'bg-emerald-600'}`}></div>

            {/* River */}
            <div className="absolute bottom-0 w-full h-24 bg-blue-500/80 overflow-hidden flex items-center justify-center border-t-4 border-blue-300/50">
                <motion.div 
                    animate={{ x: [-20, 0, -20] }} 
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="flex gap-10 opacity-50"
                >
                    {Array.from({ length: 10 }).map((_, i) => (
                        <Waves key={i} className="w-12 h-12 text-blue-200" />
                    ))}
                </motion.div>
            </div>

            {/* Bridge */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-32 h-12 bg-stone-400 rounded-t-full border-t-4 border-stone-300 flex items-end justify-center z-20 shadow-lg">
                <div className="w-24 h-8 bg-stone-800 rounded-t-full opacity-50"></div>
            </div>

            {/* Castle (Center) */}
            <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 drop-shadow-2xl">
                <Castle className={`w-64 h-64 ${isNight ? 'text-slate-800' : 'text-slate-200'} transition-colors duration-1000`} fill="currentColor" strokeWidth={1.5} />
                
                {/* Windows */}
                {isNight && (
                    <>
                        <div className="absolute top-20 left-[42%] w-4 h-6 bg-yellow-500/80 blur-[1px] animate-pulse rounded-t-full"></div>
                        <div className="absolute top-32 left-[25%] w-3 h-4 bg-orange-500/60 blur-[1px] animate-pulse delay-75"></div>
                        <div className="absolute top-32 right-[25%] w-3 h-4 bg-orange-500/60 blur-[1px] animate-pulse delay-150"></div>
                    </>
                )}
            </div>

            {/* Trees (Decorative) */}
            <div className={`absolute bottom-28 left-[10%] ${isNight ? 'text-emerald-900' : 'text-emerald-800'} transition-colors duration-1000`}>
                <Trees className="w-16 h-16" fill="currentColor" />
            </div>
            <div className={`absolute bottom-32 right-[15%] ${isNight ? 'text-emerald-900' : 'text-emerald-800'} transition-colors duration-1000`}>
                <Trees className="w-12 h-12" fill="currentColor" />
            </div>
             <div className={`absolute bottom-24 right-[5%] ${isNight ? 'text-emerald-900' : 'text-emerald-800'} transition-colors duration-1000`}>
                <Trees className="w-20 h-20" fill="currentColor" />
            </div>

            {/* Houses (Population) - Dynamically Placed */}
            {housePositions.slice(0, houseCount).map((pos, i) => (
                <motion.div
                    key={`house-${i}`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.1, type: "spring" }}
                    className="absolute z-10"
                    style={{ 
                        left: `${pos.x}%`, 
                        bottom: `${pos.y}%` 
                    }}
                >
                    <Home 
                        className={`w-8 h-8 ${isNight ? 'text-slate-700 fill-slate-800' : 'text-amber-800 fill-amber-100'} drop-shadow-md transition-colors duration-1000`} 
                        strokeWidth={1.5}
                    />
                    {isNight && (
                        <div className="absolute top-3 left-3 w-1.5 h-1.5 bg-yellow-400/90 rounded-full blur-[1px] animate-pulse"></div>
                    )}
                </motion.div>
            ))}

            {/* Treasury (Gold) - Piles near the bridge/river bank */}
            <div className="absolute bottom-6 right-6 flex flex-wrap-reverse gap-1 w-32 justify-end z-30 opacity-90 pointer-events-none">
                {Array.from({ length: goldCount }).map((_, i) => (
                    <motion.div
                        key={`gold-${i}`}
                        initial={{ scale: 0, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        transition={{ delay: i * 0.05, type: "spring" }}
                        className="relative"
                    >
                        <Coins className="w-5 h-5 text-yellow-400 drop-shadow-sm" fill="currentColor" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
