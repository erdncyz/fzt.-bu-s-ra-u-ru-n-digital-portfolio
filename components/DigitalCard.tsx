import React, { useState } from 'react';
import { Phone, MapPin, QrCode, Smartphone, Info } from 'lucide-react';

export const DigitalCard: React.FC = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => setIsFlipped(!isFlipped);

    return (
        <div className="w-full max-w-md mx-auto h-[260px] perspective-1000 cursor-pointer group" onClick={handleFlip}>
            <div className={`relative w-full h-full transition-all duration-700 transform-style-3d shadow-xl rounded-xl ${isFlipped ? 'rotate-y-180' : ''}`}>
                
                {/* FRONT SIDE */}
                <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden bg-white border border-gray-100">
                    <div className="absolute inset-0 bg-hex-pattern opacity-60"></div>
                    <div className="relative z-10 h-full flex flex-row items-center p-6">
                        
                        {/* Logo Area */}
                        <div className="w-1/3 flex justify-center items-center border-r border-gray-200 pr-4">
                            <div className="relative">
                                {/* Stylized Spine Logo Construction */}
                                <div className="h-24 w-12 relative">
                                    <div className="absolute top-0 left-0 text-3xl font-bold text-brand-navy">B</div>
                                    <svg viewBox="0 0 100 200" className="absolute top-0 left-0 w-full h-full overflow-visible">
                                        <path d="M40,10 Q80,50 40,90 T40,170" fill="none" stroke="#2BC096" strokeWidth="12" strokeLinecap="round" />
                                        <line x1="25" y1="50" x2="55" y2="50" stroke="white" strokeWidth="3" />
                                        <line x1="25" y1="90" x2="55" y2="90" stroke="white" strokeWidth="3" />
                                        <line x1="25" y1="130" x2="55" y2="130" stroke="white" strokeWidth="3" />
                                    </svg>
                                    <div className="absolute bottom-2 right-[-10px] text-3xl font-bold text-brand-navy">Ü</div>
                                </div>
                            </div>
                        </div>

                        {/* Info Area */}
                        <div className="w-2/3 pl-6 flex flex-col justify-center">
                            <h1 className="text-2xl font-bold text-brand-navy tracking-tight leading-none mb-1">BÜŞRA ÜNLÜ</h1>
                            <p className="text-brand-teal text-xs font-bold tracking-widest uppercase mb-6">UZMAN FİZYOTERAPİST</p>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <Phone className="w-4 h-4 text-brand-teal shrink-0" />
                                    <span className="text-sm text-brand-navy font-medium">0545 568 66 25</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-4 h-4 text-brand-teal shrink-0 mt-1" />
                                    <div className="text-xs text-brand-navy leading-tight">
                                        <p>Mustafa Kemal Mah. 2131.Cadde</p>
                                        <p>NETA PLAZA 6/25 Çankaya/Ankara</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Visual Hint to Flip */}
                    <div className="absolute bottom-2 right-3 text-[10px] text-gray-400 flex items-center gap-1 animate-pulse">
                        <Info size={10} />
                        <span>Arka yüz için tıkla</span>
                    </div>
                </div>

                {/* BACK SIDE */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl overflow-hidden bg-brand-navy text-white">
                    <div className="absolute inset-0 bg-hex-pattern-dark opacity-30"></div>
                    <div className="relative z-10 h-full flex items-center justify-between px-8 py-6">
                        
                        {/* Logo Left */}
                        <div className="h-24 w-12 relative opacity-90">
                            <div className="absolute top-0 left-0 text-3xl font-bold text-white">B</div>
                            <svg viewBox="0 0 100 200" className="absolute top-0 left-0 w-full h-full overflow-visible">
                                <path d="M40,10 Q80,50 40,90 T40,170" fill="none" stroke="#2BC096" strokeWidth="12" strokeLinecap="round" />
                                <line x1="25" y1="50" x2="55" y2="50" stroke="#1B2432" strokeWidth="3" />
                                <line x1="25" y1="90" x2="55" y2="90" stroke="#1B2432" strokeWidth="3" />
                                <line x1="25" y1="130" x2="55" y2="130" stroke="#1B2432" strokeWidth="3" />
                            </svg>
                            <div className="absolute bottom-2 right-[-10px] text-3xl font-bold text-white">Ü</div>
                        </div>

                        {/* Divider */}
                        <div className="h-32 w-px bg-white/20 mx-4"></div>

                        {/* QR Placeholder */}
                        <div className="flex flex-col items-center justify-center text-center">
                            <div className="w-24 h-24 border-2 border-dashed border-white/50 rounded-lg flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm mb-3">
                                <QrCode className="w-8 h-8 text-white/80 mb-1" />
                                <span className="text-[9px] font-bold text-white/70">QR KOD<br/>BURAYA</span>
                            </div>
                            <span className="text-[10px] font-medium tracking-wide text-white/80 uppercase">Detaylı Bilgi İçin<br/>Taratin</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};