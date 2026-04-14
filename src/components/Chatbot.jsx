import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import sound from "../assets/sound.mp3";

export default function ChatBot() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { from: "bot", text: "Hi! 👋 Ask me anything about my VA or IT services." },
    ]);
    const [input, setInput] = useState("");
    const [typing, setTyping] = useState(false);

    const API_KEY = "AIzaSyD01px3nnD9lkdaotc7AX5PXZjNgm7idpA";

    const MAX_ASKS = 3;

    const getAskCount = () =>
        parseInt(localStorage.getItem("askCount") || "0");

    const setAskCount = (val) =>
        localStorage.setItem("askCount", val.toString());

    // 🔊 SOUND
    const playSound = () => {
        const audio = new Audio(sound);
        audio.volume = 0.5;
        audio.play();
    };

    // 🧼 CLEAN RESPONSE
    const cleanText = (text) => {
        return text
            .replace(/\*\*/g, "")
            .replace(/\*/g, "")
            .replace(/_/g, "");
    };

    // 🤖 AI CALL
    const getAIResponse = async (userMessage) => {
        try {
            const res = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${API_KEY}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        contents: [
                            {
                                parts: [
                                    {
                                        text: `
You are a professional Virtual Assistant and IT Support chatbot representing Revin De Castro's portfolio.

IMPORTANT RULES:
- Be professional, friendly, and concise
- DO NOT use markdown (** or *)
- DO NOT introduce yourself unless asked
- Focus on VA + IT services
- If asked to contact someone → redirect to contact form
- When asked "who do you work with" or similar: → Answer: "you assist revin" or similar 
- Focus on helping the client, not introducing yourself 
- If asked if available → say YES and guide to contact 
- If user asks to contact someone, reach out, or message directly:
→ Respond that you cannot directly contact people
→ Redirect them to the contact form
→ Keep tone professional and helpful

PROFILE:
Name: Revin De Castro
Email: redc1026@gmail.com
Facebook: https://www.facebook.com/jarv.is0008
Instagram: https://www.instagram.com/jarv.is0008
LinkedIn: https://www.linkedin.com/in/jarvis26

SKILLS:
- Virtual Assistance (email, scheduling, admin, data entry)
- IT Support (hardware, software, troubleshooting)
- Web Development (React, Tailwind, Node.js)

TOOLS:
C#, PHP, JavaScript, NodeJS, Express, React, MySQL, MSSQL, GitHub

EXPERIENCE:
IT Support (2023–Present)
- CCTV installation
- Network setup
- Computer troubleshooting
- Payroll system support
- Website development



CURRENT TIME:
${new Date().toLocaleString("en-PH", {
    timeZone: "Asia/Manila",
})}

User: ${userMessage}
                                        `,
                                    },
                                ],
                            },
                        ],
                    }),
                }
            );

            const data = await res.json();

            if (data?.error?.message) {
                return `API Error: ${data.error.message}`;
            }

            return (
                data?.candidates?.[0]?.content?.parts?.[0]?.text ||
                "No response from AI."
            );
        } catch (err) {
            return "Network error. Please try again.";
        }
    };

    // 💬 SEND MESSAGE
    const handleSend = async () => {
        if (!input.trim() || typing) return;

        let count = getAskCount();

        // 🚫 LIMIT CHECK
        if (count >= MAX_ASKS) {
            setMessages((prev) => [
                ...prev,
                {
                    from: "bot",
                    text: "You’ve reached the limit. Please use the contact form to continue.",
                },
            ]);
            return;
        }

        const userText = input;
        setInput("");

        setMessages((prev) => [
            ...prev,
            { from: "user", text: userText },
        ]);

        setAskCount(count + 1);

        setTyping(true);

        const aiReply = await getAIResponse(userText);

        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                { from: "bot", text: cleanText(aiReply) },
            ]);

            playSound();
            setTyping(false);
        }, 800);
    };

    return (
        <>
            {/* FLOAT BUTTON */}
            <button
                onClick={() => setOpen(!open)}
                className="fixed bottom-6 right-6 p-4 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg hover:scale-105 transition z-50"
            >
                {open ? <X /> : <MessageCircle />}
            </button>

            {/* CHAT BOX */}
            {open && (
                <div className="fixed bottom-20 right-6 w-80 h-[420px] bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col z-50 overflow-hidden">

                    {/* HEADER */}
                    <div className="p-3 border-b border-white/10 flex items-center justify-between text-white/80 text-sm">
                        <span>VA AI Assistant</span>

                        <button
                            onClick={() => setOpen(false)}
                            className="p-1 rounded-md hover:bg-white/10"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    {/* MESSAGES */}
                    <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
                        {messages.map((m, i) => (
                            <div
                                key={i}
                                className={`p-2 rounded-lg w-fit max-w-[80%] ${
                                    m.from === "user"
                                        ? "ml-auto bg-emerald-500 text-white"
                                        : "bg-white/10 text-white/80"
                                }`}
                            >
                                {m.text}
                            </div>
                        ))}

                        {typing && (
                            <div className="bg-white/10 text-white/60 p-2 rounded-lg w-fit text-xs">
                                AI is typing...
                            </div>
                        )}
                    </div>

                    {/* INPUT */}
                    <div className="p-2 border-t border-white/10 flex gap-2">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                            placeholder="Type your message..."
                            className="flex-1 px-3 py-2 rounded-lg bg-white/10 text-white text-sm outline-none"
                        />

                        <button
                            onClick={handleSend}
                            disabled={typing}
                            className="px-3 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-sm disabled:opacity-50"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}