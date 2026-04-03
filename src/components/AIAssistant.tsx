import React, { useState, useRef, useEffect } from 'react';
import { useChat } from '@ai-sdk/react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[60] w-14 h-14 bg-red-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-red-700 transition-colors"
        aria-label="Ask Joseph AI"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-400 border-2 border-red-600 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed inset-0 sm:inset-auto sm:bottom-24 sm:right-6 z-[60] w-full h-full sm:w-96 sm:h-[500px] bg-white dark:bg-slate-900 sm:rounded-[2rem] shadow-2xl border border-slate-100 dark:border-slate-800 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 bg-red-600 text-white flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-black text-sm uppercase tracking-widest leading-none mb-1 flex items-center gap-2">
                  Joseph-AI
                  <span className="flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-tighter">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                    Online
                  </span>
                </h3>
                <p className="text-[10px] text-white/70 font-bold uppercase tracking-wide">Professional Portfolio Assistant</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="ml-auto p-1 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-grow p-6 overflow-y-auto space-y-4 bg-slate-50/50 dark:bg-slate-950/50"
            >
              {messages.length === 0 && (
                <div className="text-center py-8">
                  <div className="w-12 h-12 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Sparkles size={24} />
                  </div>
                  <p className="text-slate-900 dark:text-white font-black text-sm mb-2">How can I help you?</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-medium px-4">Ask me about Joseph's tech stack, detailed projects, or how to contact him.</p>
                </div>
              )}
              
              {messages.map((m) => (
                <div 
                  key={m.id} 
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] flex gap-2 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${m.role === 'user' ? 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400' : 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'}`}>
                      {m.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm font-medium leading-relaxed shadow-sm ${
                      m.role === 'user' 
                        ? 'bg-red-600 text-white rounded-tr-none' 
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-100 dark:border-slate-700 rounded-tl-none'
                    }`}>
                      {m.content}
                    </div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 p-4 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
                    <span className="w-1.5 h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              {error && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-100 text-red-600 text-[10px] font-bold uppercase tracking-wider text-center">
                  Connection Error: {error.message || 'AI Service temporarily unavailable.'}
                  <button 
                    onClick={() => window.location.reload()} 
                    className="block mx-auto mt-2 underline opacity-60 hover:opacity-100"
                  >
                    Refresh Page
                  </button>
                </div>
              )}
            </div>

            {/* Input Area */}
            <form 
              onSubmit={handleSubmit}
              className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex gap-2"
            >
              <input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask me anything about Joseph..."
                className="flex-grow px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-600 font-medium text-slate-900 dark:text-white"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="w-11 h-11 bg-red-600 text-white rounded-xl flex items-center justify-center hover:bg-red-700 disabled:bg-slate-200 dark:disabled:bg-slate-800 disabled:text-slate-400 transition-all shadow-lg shadow-red-900/10"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
