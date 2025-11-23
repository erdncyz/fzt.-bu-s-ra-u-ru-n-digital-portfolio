import React, { useState, useEffect } from 'react';
import { Instagram, Mail, MapPin, Phone, Activity, Heart, MessageCircle, Baby, Stethoscope, UserCheck, Home } from 'lucide-react';

// IMPORTANT: Replace this URL with the actual URL of your uploaded image
import profileImage from './busraa.jpg';
import logoImage from './logo.jpeg';

// IMPORTANT: Replace this URL with the actual URL of your uploaded image
const PROFILE_IMAGE_URL = profileImage;

const App: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll for navbar styling
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const openInstagram = () => {
        window.open('https://www.instagram.com/fztbusrasarikaya/', '_blank');
    };

    const openWhatsApp = () => {
        // Format: https://wa.me/905455686625
        window.open('https://wa.me/905455686625', '_blank');
    };

    const openMaps = () => {
        const address = "Mustafa Kemal Mah. 2131.Cadde NETA PLAZA 6/25 Çankaya Ankara";
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank');
    };

    const expertiseItems = [
        {
            title: 'Manuel Terapi',
            desc: 'Kişiye özel hazırlanmış manuel terapi programı',
            icon: UserCheck,
            color: 'bg-blue-50 text-blue-600'
        },
        {
            title: 'Kadın Sağlığı',
            desc: 'Pelvik taban ve doğum sonrası rehabilitasyon.',
            icon: Heart,
            color: 'bg-pink-50 text-pink-600'
        },
        {
            title: 'Klinik Pilates',
            desc: 'Reformer Pilates & Gebe Pilatesi',
            icon: Baby,
            color: 'bg-purple-50 text-purple-600'
        },
        {
            title: 'Ağrı Tedavisi',
            desc: 'Bel, boyun ve fıtık kaynaklı ağrılara çözüm. Diş sıkma ve baş ağrısı için manuel tedavi teknikleri. Omurga kaynaklı ağrılara özel tedavi teknikleri.',
            icon: Stethoscope,
            color: 'bg-teal-50 text-teal-600'
        },
        {
            title: 'Sporcu Sağlığı',
            desc: 'Yaralanma önleme ve sahalara güvenli dönüş.',
            icon: Activity,
            color: 'bg-orange-50 text-orange-600'
        }
    ];

    return (
        <div className="min-h-screen bg-[#F8F9FB] flex flex-col font-sans pb-24 md:pb-0">

            {/* Desktop Navbar */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-soft py-3' : 'bg-transparent py-5'}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg shadow-brand-navy/20 bg-white flex items-center justify-center">
                            <img src={logoImage} alt="Logo" className="w-full h-full object-contain" />
                        </div>
                        <div>
                            <span className="block font-bold text-brand-navy text-sm md:text-base leading-tight tracking-tight">UZM. FZT. BÜŞRA ÜRÜN</span>
                            <span className="hidden md:block text-[10px] text-brand-teal font-bold tracking-widest uppercase">Fizyoterapi & Danışmanlık</span>
                        </div>
                    </div>

                    <button onClick={openWhatsApp} className="hidden md:flex px-5 py-2.5 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-[#128C7E] transition-all shadow-lg shadow-green-500/20 items-center gap-2 text-sm">
                        <MessageCircle size={18} /> Randevu Al
                    </button>
                </div>
            </nav>

            <main className="flex-grow flex flex-col relative overflow-x-hidden">
                <div className="animate-fade-in">

                    {/* Hero Section */}
                    <section className="relative pt-28 pb-12 md:pt-40 md:pb-24 px-6 overflow-visible">
                        {/* Background Elements */}
                        <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-brand-teal/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none mix-blend-multiply" />
                        <div className="absolute top-[20%] left-[-10%] w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-blue-100/40 rounded-full blur-[60px] md:blur-[100px] pointer-events-none mix-blend-multiply" />

                        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">
                            {/* Content */}
                            <div className="order-2 md:order-1 text-center md:text-left">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white border border-brand-teal/20 text-brand-teal text-xs font-bold tracking-wider uppercase shadow-sm">
                                    <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
                                    Uzman Fizyoterapist
                                </div>
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-brand-navy mb-6 leading-[1.1] tracking-tight">
                                    Sağlıklı Bir<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-blue-600">Beden İçin</span>
                                </h1>
                                <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
                                    Bütüncül fizyoterapi yaklaşımları ile ağrısız bir yaşam. Kişiye özel tedavi ve egzersiz programları.
                                </p>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                    <button onClick={openWhatsApp} className="h-14 px-8 bg-brand-navy text-white rounded-2xl font-semibold hover:bg-brand-navy/90 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-brand-navy/20 flex items-center justify-center gap-2.5">
                                        <MessageCircle size={20} className="text-brand-teal" />
                                        <span>WhatsApp ile Randevu Al</span>
                                    </button>
                                    <a href="tel:05455686625" className="h-14 px-8 bg-white text-slate-800 border border-slate-200 rounded-2xl font-semibold hover:border-brand-teal hover:text-brand-teal hover:bg-brand-teal/5 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2.5">
                                        <Phone size={20} />
                                        <span>Hemen Ara</span>
                                    </a>
                                </div>
                            </div>

                            {/* Profile Image */}
                            <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
                                <div className="relative w-[280px] h-[340px] md:w-[400px] md:h-[500px]">
                                    {/* Animated Blobs */}
                                    <div className="absolute top-10 right-10 w-full h-full bg-brand-teal/20 rounded-[3rem] blur-2xl animate-pulse-soft"></div>
                                    <div className="absolute -bottom-4 -left-4 w-3/4 h-3/4 bg-blue-200/30 rounded-[3rem] blur-xl"></div>

                                    {/* Image Container */}
                                    <div className="relative w-full h-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-white/50 bg-white">
                                        <img
                                            src={PROFILE_IMAGE_URL}
                                            alt="Uzm. Fzt. Büşra Ürün"
                                            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                                        />

                                        {/* Glass Overlay on Mobile */}
                                        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent md:hidden flex items-end justify-center pb-6">
                                            <div className="text-white text-center">
                                                <p className="font-bold text-lg">Büşra Ürün</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Floating Badge - Desktop Only */}
                                    <div className="hidden md:block absolute bottom-8 -left-12 bg-white/90 backdrop-blur-md p-5 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-white animate-float">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-gradient-to-br from-brand-teal to-teal-600 w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand-teal/30">
                                                <Activity size={24} />
                                            </div>
                                            <div>
                                                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Uzmanlık</p>
                                                <p className="text-brand-navy font-bold text-lg">Manuel Terapi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Quick Actions (iOS Widgets Style) */}
                    <section className="max-w-6xl mx-auto px-6 mb-16 relative z-10">
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6">
                            {/* WhatsApp Widget */}
                            <button onClick={openWhatsApp} className="group relative overflow-hidden bg-white p-5 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 active:scale-95 text-left h-40 md:h-48 flex flex-col justify-between">
                                <div className="absolute top-0 right-0 p-20 bg-green-50 rounded-full blur-2xl translate-x-8 -translate-y-8 group-hover:bg-green-100 transition-colors"></div>
                                <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center text-[#25D366] relative z-10">
                                    <MessageCircle size={24} fill="currentColor" className="opacity-20 absolute" />
                                    <MessageCircle size={24} className="relative z-10" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="font-bold text-slate-800 text-lg leading-tight">WhatsApp</h3>
                                    <p className="text-xs text-slate-500 mt-1 font-medium">Mesaj Gönder</p>
                                </div>
                            </button>

                            {/* Instagram Widget */}
                            <button onClick={openInstagram} className="group relative overflow-hidden bg-white p-5 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 active:scale-95 text-left h-40 md:h-48 flex flex-col justify-between">
                                <div className="absolute top-0 right-0 p-20 bg-purple-50 rounded-full blur-2xl translate-x-8 -translate-y-8 group-hover:bg-purple-100 transition-colors"></div>
                                <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 relative z-10">
                                    <Instagram size={24} />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="font-bold text-slate-800 text-lg leading-tight">Instagram</h3>
                                    <p className="text-xs text-slate-500 mt-1 font-medium">Takip Et</p>
                                </div>
                            </button>

                            {/* Location Widget */}
                            <button onClick={openMaps} className="group relative overflow-hidden bg-white p-5 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 active:scale-95 text-left h-40 md:h-48 flex flex-col justify-between">
                                <div className="absolute top-0 right-0 p-20 bg-blue-50 rounded-full blur-2xl translate-x-8 -translate-y-8 group-hover:bg-blue-100 transition-colors"></div>
                                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 relative z-10">
                                    <MapPin size={24} />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="font-bold text-slate-800 text-lg leading-tight">Konum</h3>
                                    <p className="text-xs text-slate-500 mt-1 font-medium">Yol Tarifi</p>
                                </div>
                            </button>

                            {/* Call Widget */}
                            <a href="tel:05455686625" className="group relative overflow-hidden bg-white p-5 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 active:scale-95 text-left h-40 md:h-48 flex flex-col justify-between">
                                <div className="absolute top-0 right-0 p-20 bg-orange-50 rounded-full blur-2xl translate-x-8 -translate-y-8 group-hover:bg-orange-100 transition-colors"></div>
                                <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 relative z-10">
                                    <Phone size={24} />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="font-bold text-slate-800 text-lg leading-tight">Ara</h3>
                                    <p className="text-xs text-slate-500 mt-1 font-medium">0545 568 6625</p>
                                </div>
                            </a>

                            {/* Mail Widget */}
                            <a href="mailto:fztbusraurun@gmail.com" className="col-span-2 md:col-span-1 group relative overflow-hidden bg-brand-navy p-5 rounded-3xl shadow-lg hover:shadow-xl hover:shadow-brand-navy/20 transition-all duration-300 active:scale-95 text-left h-24 md:h-48 flex flex-row md:flex-col items-center md:items-start justify-between md:justify-between">
                                <div className="absolute top-0 right-0 p-20 bg-white/5 rounded-full blur-2xl translate-x-8 -translate-y-8"></div>
                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white relative z-10">
                                    <Mail size={24} />
                                </div>
                                <div className="relative z-10 text-right md:text-left">
                                    <h3 className="font-bold text-white text-lg leading-tight">E-Posta</h3>
                                    <p className="text-xs text-white/60 mt-1 font-medium">Bize Yazın</p>
                                </div>
                            </a>
                        </div>
                    </section>

                    {/* Expertise Section */}
                    <section className="py-12 md:py-20 relative">
                        <div className="max-w-6xl mx-auto px-6">
                            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                                <div>
                                    <h2 className="text-2xl md:text-4xl font-display font-bold text-brand-navy">Uzmanlık Alanları</h2>
                                    <p className="text-slate-500 mt-2 text-sm md:text-base">Kişiye özel, kanıta dayalı modern tedavi yöntemleri.</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {expertiseItems.map((item, idx) => (
                                    <div key={idx} className="group p-6 rounded-3xl bg-white border border-slate-100 hover:border-brand-teal/20 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg hover:shadow-brand-teal/5 transition-all duration-300">
                                        <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300`}>
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-lg font-bold text-brand-navy mb-2">{item.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                </div>
            </main>

            {/* Mobile Bottom Navigation - Glassmorphism */}
            <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
                <div className="bg-brand-navy/90 backdrop-blur-xl rounded-full p-2 shadow-2xl shadow-brand-navy/30 flex justify-between items-center px-6 border border-white/10">
                    {/* Home - Scroll to Top */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex flex-col items-center gap-1 p-2 rounded-xl text-white/60 hover:text-brand-teal transition-all"
                    >
                        <Home size={22} />
                    </button>

                    {/* WhatsApp (Floating Main Action) */}
                    <button
                        onClick={openWhatsApp}
                        className="relative -top-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-green-500/40 border-4 border-[#F8F9FB] transform transition-transform active:scale-95"
                    >
                        <MessageCircle size={24} fill="white" />
                    </button>

                    {/* Call */}
                    <a
                        href="tel:05455686625"
                        className="flex flex-col items-center gap-1 p-2 rounded-xl text-white/60 hover:text-orange-400 transition-colors"
                    >
                        <Phone size={22} />
                    </a>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-white border-t border-slate-100 py-8 mt-12 pb-28 md:pb-8">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Uzm. Fzt. Büşra Ürün</p>

                    <a
                        href="https://erdinc-yilmaz.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-brand-teal transition-colors font-medium group"
                    >
                        <span className="w-2 h-2 rounded-full bg-brand-teal/50 group-hover:bg-brand-teal group-hover:animate-pulse transition-all"></span>
                        Design with Mercury Software
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default App;