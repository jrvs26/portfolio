import { useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import sound from "../assets/sound.mp3";

export default function ChatBot() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { from: "bot", text: "Hi! 👋 Ask me anything about my VA or IT services." },
    ]);
    const [input, setInput] = useState("");
    const [typing, setTyping] = useState(false);

    const messagesEndRef = useRef(null);

    const MAX_ASKS = 3;

    // -----------------------
    // SAFE localStorage access
    // -----------------------
    const getAskCount = () => {
        if (typeof window === "undefined") return 0;
        return parseInt(localStorage.getItem("askCount") || "0");
    };

    const setAskCount = (val) => {
        if (typeof window === "undefined") return;
        localStorage.setItem("askCount", val.toString());
    };

    // -----------------------
    // SOUND
    // -----------------------
    const playSound = () => {
        try {
            const audio = new Audio(sound);
            audio.volume = 0.5;
            audio.play();
        } catch (e) {
            console.log("Sound error:", e);
        }
    };

    // -----------------------
    // CLEAN AI RESPONSE
    // -----------------------
    const cleanText = (text) => {
        return String(text)
            .replace(/\*\*/g, "")
            .replace(/\*/g, "")
            .replace(/_/g, "")
            .trim();
    };

    // -----------------------
    // AUTO SCROLL
    // -----------------------
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, typing]);

    // -----------------------
    // API CALL
    // -----------------------
    const getAIResponse = async (userMessage) => {
        try {
            const res = await fetch(
                "https://project-lcx9g.vercel.app/api/chat",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ message: userMessage }),
                }
            );

            const data = await res.json();

            if (!res.ok || data?.error) {
                return data?.error || "API Error occurred.";
            }

            return data?.reply || "No response from AI.";
        } catch (err) {
            return "Network error. Please try again.";
        }
    };

    // -----------------------
    // SEND MESSAGE
    // -----------------------
    const handleSend = async () => {
        if (!input.trim() || typing) return;

        let count = getAskCount();

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

        const userText = input.trim();
        setInput("");

        setMessages((prev) => [
            ...prev,
            { from: "user", text: userText },
        ]);

        setAskCount(count + 1);
        setTyping(true);

        const aiReply = await getAIResponse(userText);

        setMessages((prev) => [
            ...prev,
            { from: "bot", text: cleanText(aiReply) },
        ]);

        playSound();
        setTyping(false);
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

                        <div ref={messagesEndRef} />
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