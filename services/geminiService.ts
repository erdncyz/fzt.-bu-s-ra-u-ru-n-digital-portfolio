import { GoogleGenAI } from "@google/genai";

let ai: GoogleGenAI | null = null;

const getAIClient = (): GoogleGenAI => {
    if (!ai) {
        if (!process.env.API_KEY) {
            throw new Error("API Key not found");
        }
        ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    }
    return ai;
};

export const generateWellnessAdvice = async (
    userQuery: string,
    history: { role: string; text: string }[]
): Promise<string> => {
    try {
        const client = getAIClient();
        
        // Construct a conversation context
        const prompt = `
        Sen Uzman Fizyoterapist Büşra Ürün'ün yapay zeka asistanısın.
        Kullanıcı sana kas, iskelet sistemi, ağrılar veya sağlıklı yaşam hakkında sorular soruyor.
        
        Rolün:
        1. Nazik, profesyonel ve empatik ol.
        2. Tıbbi teşhis koyma, sadece genel sağlık ve egzersiz tavsiyeleri ver.
        3. Ciddi durumlarda mutlaka bir uzmana (Fzt. Büşra Ürün'e) görünmelerini öner.
        4. Cevapların kısa, net ve anlaşılır olsun. Türkçe cevap ver.
        
        Kullanıcı sorusu: "${userQuery}"
        `;

        const response = await client.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                temperature: 0.7,
            }
        });

        return response.text || "Üzgünüm, şu an cevap veremiyorum. Lütfen daha sonra tekrar deneyin.";
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "Bağlantıda bir sorun oluştu. Lütfen internet bağlantınızı kontrol edin.";
    }
};