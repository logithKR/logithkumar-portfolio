

import { useState, useRef, useEffect } from "react";
// @ts-ignore
import { useChat } from "@ai-sdk/react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleCustomSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!prompt.trim() || isLoading) return;
    
    const userMsg = { id: Date.now().toString(), role: "user", content: prompt };
    setMessages(prev => [...prev, userMsg]);
    setPrompt("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] })
      });
      
      if (!res.ok) throw new Error("Server responded with " + res.status);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistantContent = "";
      
      setMessages(prev => [...prev, { id: (Date.now()+1).toString(), role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n');
        
        for (const line of lines) {
          if (line.startsWith('0:')) {
            try {
              const text = JSON.parse(line.substring(2));
              assistantContent += text;
              setMessages(prev => {
                const newMsgs = [...prev];
                newMsgs[newMsgs.length - 1].content = assistantContent;
                return newMsgs;
              });
            } catch (err) {}
          }
        }
      }
    } catch (err) {
      console.error(err);
      alert("Error connecting to AI: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
            >
              <Button
                onClick={() => setIsOpen(true)}
                size="icon"
                className="w-14 h-14 rounded-full shadow-2xl shadow-violet-500/50 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white transition-transform hover:scale-110 border-0"
              >
                <MessageCircle className="w-7 h-7" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-0 right-0 w-[350px] sm:w-[450px] h-[600px] shadow-2xl origin-bottom-right"
            >
              <Card className="h-full flex flex-col bg-white border border-slate-200 overflow-hidden rounded-2xl">
                {/* Header */}
                <CardHeader className="flex flex-row items-center justify-between py-4 border-b border-slate-100 bg-slate-50">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 shadow-sm">
                      <Bot size={20} />
                    </div>
                    <div>
                      <CardTitle className="text-base font-bold text-slate-800">AI Assistant</CardTitle>
                      <p className="text-xs text-slate-500">Online & ready to help</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:bg-slate-200 hover:text-slate-700" onClick={() => setIsOpen(false)}>
                    <X size={18} />
                  </Button>
                </CardHeader>
                
                {/* Chat Area */}
                <CardContent className="flex-grow overflow-y-auto p-5 space-y-5 bg-slate-50/50">
                  {messages.length === 0 && (
                    <div className="text-center text-slate-500 text-sm mt-10">
                      <p className="font-medium text-slate-700 mb-1">Hi! I'm Logithkumar's AI assistant.</p>
                      <p>Ask me anything about his skills, projects, or experience!</p>
                    </div>
                  )}
                  {messages.map((m) => (
                    <div
                      key={m.id}
                      className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {m.role === 'assistant' && (
                        <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center shrink-0 shadow-sm mt-1">
                          <Bot size={16} className="text-violet-600" />
                        </div>
                      )}
                      <div
                        className={`rounded-2xl px-4 py-3 max-w-[85%] text-sm leading-relaxed shadow-sm ${
                          m.role === 'user'
                            ? 'bg-violet-600 text-white rounded-br-sm'
                            : 'bg-white text-slate-700 rounded-bl-sm border border-slate-100'
                        }`}
                      >
                        {m.role === 'user' ? (
                          m.content
                        ) : (
                          <div className="prose prose-sm prose-slate max-w-none">
                            <ReactMarkdown 
                              remarkPlugins={[remarkGfm]}
                              components={{
                                a: ({node, ...props}) => (
                                  <a 
                                    {...props} 
                                    className="inline break-all text-violet-600 font-bold hover:text-violet-700 bg-violet-50 px-2 py-0.5 rounded-md border border-violet-100 transition-colors leading-normal" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                  />
                                ),
                                ul: ({node, ...props}) => <ul className="list-disc pl-5 my-2 space-y-1 marker:text-violet-500" {...props} />,
                                ol: ({node, ...props}) => <ol className="list-decimal pl-5 my-2 space-y-1 marker:text-violet-500" {...props} />,
                                li: ({node, ...props}) => <li className="leading-relaxed pl-1" {...props} />,
                                p: ({node, ...props}) => <p className="mb-3 last:mb-0 leading-relaxed" {...props} />,
                                strong: ({node, ...props}) => <strong className="font-semibold text-slate-800" {...props} />
                              }}
                            >
                              {m.content}
                            </ReactMarkdown>
                          </div>
                        )}
                      </div>
                      {m.role === 'user' && (
                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0 shadow-sm text-slate-600 mt-1">
                          <User size={16} />
                        </div>
                      )}
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center shrink-0 shadow-sm">
                        <Loader2 size={16} className="text-violet-600 animate-spin" />
                      </div>
                      <div className="bg-white text-slate-700 rounded-2xl rounded-bl-sm px-4 py-3 border border-slate-100 shadow-sm flex items-center h-[44px]">
                        <span className="flex gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]" />
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]" />
                        </span>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </CardContent>

                {/* Input Area */}
                <CardFooter className="p-3 border-t border-slate-100 bg-white">
                  <form 
                    onSubmit={handleCustomSubmit}
                    className="flex w-full gap-2 items-center"
                  >
                    <Input
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="Ask about my projects..."
                      className="bg-slate-50 border-slate-200 focus-visible:ring-violet-500 rounded-full px-4"
                    />
                    <button 
                      type="submit" 
                      disabled={isLoading || !prompt.trim()} 
                      className="shrink-0 rounded-full w-10 h-10 bg-violet-600 hover:bg-violet-700 text-white shadow-md transition-transform active:scale-95 border-0 flex items-center justify-center disabled:opacity-50"
                    >
                      <Send size={16} className="-ml-0.5" />
                    </button>
                  </form>
                </CardFooter>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
