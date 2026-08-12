"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

interface ContentModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export function ContentModal({ isOpen, onClose, title, children }: ContentModalProps) {
    // Prevent scrolling on the body when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // Handle escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown);
        }
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    const modalContent = (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                        onClick={onClose}
                    />
                    
                    {/* Modal Window */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.4, type: "spring", bounce: 0.15 }}
                        className="relative w-full max-w-3xl max-h-[85vh] bg-[#0a0a0c] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/[0.02]">
                            <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight">{title}</h3>
                            <button 
                                onClick={onClose}
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        
                        {/* Scrollable Content Body */}
                        <div className="p-6 sm:p-8 overflow-y-auto">
                            <div className="prose prose-invert prose-blue max-w-none prose-p:text-zinc-400 prose-p:leading-relaxed prose-headings:text-white">
                                {children}
                            </div>
                        </div>
                        
                        {/* Optional Bottom Fade */}
                        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0a0a0c] to-transparent pointer-events-none" />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );

    // Use portal to mount modal at the end of the DOM to avoid stacking context issues
    if (typeof window !== "undefined") {
        return createPortal(modalContent, document.body);
    }
    
    return null;
}
