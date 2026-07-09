"use client";

import { useState, useRef, useEffect } from "react";
// @ts-ignore
import { useChat } from "@ai-sdk/react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  // @ts-ignore
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
                className="w-14 h-14 rounded-full shadow-2xl shadow-blue-500/50 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white transition-transform hover:scale-110 border-0"
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
              className="absolute bottom-0 right-0 w-[350px] sm:w-[400px] h-[500px] shadow-2xl origin-bottom-right"
            >
              <Card className="h-full flex flex-col bg-white border border-slate-200 overflow-hidden rounded-2xl">
                {/* Header */}
                <CardHeader className="flex flex-row items-center justify-between py-4 border-b border-slate-100 bg-slate-50">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
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
                <CardContent className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50/50">
                  {messages.length === 0 && (
                    <div className="text-center text-slate-500 text-sm mt-10">
                      <p className="font-medium text-slate-700 mb-1">Hi! I'm Logithkumar's AI assistant.</p>
                      <p>Ask me anything about his skills, projects, or experience!</p>
                    </div>
                  )}
                  {messages.map((m: any) => (
                    <div
                      key={m.id}
                      className={`flex gap-3 \${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {m.role === 'assistant' && (
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 shadow-sm">
                          <Bot size={16} className="text-blue-600" />
                        </div>
                      )}
                      <div
                        className={`rounded-2xl px-4 py-2 max-w-[80%] text-sm leading-relaxed shadow-sm \${
                          m.role === 'user'
                            ? 'bg-blue-600 text-white rounded-br-sm'
                            : 'bg-white text-slate-700 rounded-bl-sm border border-slate-100'
                        }`}
                      >
                        {m.content}
                      </div>
                      {m.role === 'user' && (
                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0 shadow-sm text-slate-600">
                          <User size={16} />
                        </div>
                      )}
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 shadow-sm">
                        <Loader2 size={16} className="text-blue-600 animate-spin" />
                      </div>
                      <div className="bg-white text-slate-700 rounded-2xl rounded-bl-sm px-4 py-2 border border-slate-100 shadow-sm flex items-center">
                        <span className="flex gap-1.5 py-1">
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
                  <form onSubmit={handleSubmit} className="flex w-full gap-2 items-center">
                    <Input
                      value={input}
                      onChange={handleInputChange}
                      placeholder="Ask about my projects..."
                      className="bg-slate-50 border-slate-200 focus-visible:ring-blue-500 rounded-full px-4"
                    />
                    <Button type="submit" size="icon" disabled={isLoading || !(input ?? '').trim()} className="shrink-0 rounded-full w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-transform active:scale-95">
                      <Send size={16} className="-ml-0.5" />
                    </Button>
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
