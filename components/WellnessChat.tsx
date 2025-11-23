import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles, ChevronLeft } from 'lucide-react';
import { generateWellnessAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

interface WellnessChatProps {
    className?: string;
}

export const WellnessChat: React.FC<WellnessChatProps> = ({ className }) => {
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: 'welcome',
            role: 'model',
            text: 'Merhaba! Ben Fzt. Büşra Ürün\'ün dijital asistanıyım. Fizyoterapi, egzersiz veya genel sağlık hakkında merak ettiklerinizi bana sorabilirsiniz. Size nasıl yardımcı olabilirim?',
            timestamp: Date.now()
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMsg: ChatMessage = {
            id: Date.now().toString(),
            role: 'user',
            text: input,
            timestamp: Date.now()
        };

        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        const responseText = await generateWellnessAdvice(input, messages);

        const aiMsg: ChatMessage = {
            id: (Date.now() + 1).toString(),
            role: 'model',
            text: responseText,
            timestamp: Date.now()
        };

        setMessages(prev => [...prev, aiMsg]);
        setIsLoading(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className={`flex flex-col bg-white overflow-hidden ${className}`}>
            {/* Header - Subtle */}
            <div className="bg-white border-b border-gray-50 p-4 flex items-center justify-between sticky top-0 z-10">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                        <Bot size={18} />
                    </div>
                    <div>
                        <h3 className="font-bold text-brand-navy text-sm">Fizyoterapi Asistanı</h3>
                        <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-[10px] text-gray-400 font-medium">Çevrimiçi</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-[#F8F9FB] scroll-smooth">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`flex gap-3 max-w-[85%] md:max-w-[75%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                            {/* Avatar */}
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-white/50 shadow-sm ${msg.role === 'user' ? 'bg-brand-navy' : 'bg-white'}`}>
                                {msg.role === 'user' ? <User size={14} className="text-white" /> : <Sparkles size={14} className="text-brand-teal" />}
                            </div>
                            
                            {/* Bubble */}
                            <div className={`p-4 rounded-2xl text-[15px] leading-relaxed shadow-sm ${
                                msg.role === 'user' 
                                    ? 'bg-brand-navy text-white rounded-tr-sm' 
                                    : 'bg-white text-slate-700 border border-gray-100 rounded-tl-sm'
                            }`}>
                                {msg.text}
                            </div>
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start w-full pl-11">
                        <div className="bg-white px-4 py-3 rounded-2xl border border-gray-100 rounded-tl-sm shadow-sm flex items-center gap-2">
                             <Loader2 className="w-4 h-4 text-brand-teal animate-spin" />
                             <span className="text-xs text-gray-400 font-medium">Yanıt oluşturuluyor...</span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-50">
                <div className="relative flex items-center gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Bir soru sorun..."
                        className="w-full bg-gray-50 text-slate-800 placeholder:text-gray-400 border-none rounded-2xl py-3.5 pl-5 pr-12 focus:outline-none focus:ring-2 focus:ring-brand-teal/20 transition-all font-medium"
                        disabled={isLoading}
                    />
                    <button
                        onClick={handleSend}
                        disabled={isLoading || !input.trim()}
                        className="absolute right-2 p-2 bg-brand-navy text-white rounded-xl hover:bg-brand-navy/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95 shadow-lg shadow-brand-navy/20"
                    >
                        <Send size={18} />
                    </button>
                </div>
                <div className="text-center mt-3">
                     <p className="text-[10px] text-gray-300 font-medium">Bu asistan tıbbi teşhis koymaz, sadece bilgilendirme amaçlıdır.</p>
                </div>
            </div>
        </div>
    );
};