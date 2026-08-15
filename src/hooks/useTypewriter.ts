import { useState, useEffect, useRef, useCallback } from "react";

interface TypewriterOptions {
    initialDelay?: number;
    typingSpeed?: number;
    deleteSpeed?: number;
    pauseDuration?: number;
    loop?: boolean;
}

export function useTypewriter(
    initialWord: string,
    sequence: string[],
    options: TypewriterOptions = {}
) {
    const {
        initialDelay = 1000,
        typingSpeed = 120,
        deleteSpeed = 40,
        pauseDuration = 2000,
        loop = false,
    } = options;

    const [phraseIndex, setPhraseIndex] = useState(-1); // -1 for initialWord
    const [text, setText] = useState("");
    const [isComplete, setIsComplete] = useState(false);
    const [phase, setPhase] = useState<"typing" | "pausing" | "deleting" | "idle">("idle");

    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const hasStartedRef = useRef(false);

    // Helper to schedule next tick
    const schedule = useCallback((callback: () => void, delay: number) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(callback, delay);
    }, []);

    useEffect(() => {
        // Start initial delay
        if (!hasStartedRef.current) {
            hasStartedRef.current = true;
            schedule(() => {
                setPhase("typing");
            }, initialDelay);
        }
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [initialDelay, schedule]);

    useEffect(() => {
        if (phase === "idle" || isComplete) return;

        // Determine current word based on phraseIndex
        let currentPhrase = "";
        if (phraseIndex === -1) {
            currentPhrase = initialWord;
        } else {
            currentPhrase = sequence[phraseIndex % sequence.length];
        }

        if (phase === "typing") {
            if (text.length < currentPhrase.length) {
                // Humanize typing speed
                const randomVariance = Math.random() * 50 - 25;
                const nextChar = currentPhrase.slice(0, text.length + 1);

                schedule(() => {
                    setText(nextChar);
                }, typingSpeed + randomVariance);
            } else {
                // Finished typing
                schedule(() => setPhase("pausing"), 0);
            }
        }

        if (phase === "pausing") {
            // Check if this was the last phrase AND looping is disabled
            // Use logic: if index is last in sequence (accounting for initialWord being -1)
            const isLastInSequence = phraseIndex === sequence.length - 1;

            if (isLastInSequence && !loop) {
                setIsComplete(true);
                setPhase("idle");
                return;
            }

            schedule(() => {
                setPhase("deleting");
            }, pauseDuration);
        }

        if (phase === "deleting") {
            if (text.length > 0) {
                const nextText = text.slice(0, -1);
                schedule(() => {
                    setText(nextText);
                }, deleteSpeed);
            } else {
                // Finished deleting
                if (phraseIndex === -1) {
                    setPhraseIndex(0);
                } else {
                    // If looping, this modulus might be redundant if we just increment, 
                    // but let's just increment and handle modulus in currentPhrase selection
                    // actually, better to keep index cleanly bounded if we can, but unbounded is fine for React state
                    // Let's wrap it to avoid overflow eventually?
                    const nextIndex = (phraseIndex + 1) % sequence.length;
                    setPhraseIndex(nextIndex);
                }
                setPhase("typing");
            }
        }
    }, [text, phase, phraseIndex, initialWord, sequence, typingSpeed, deleteSpeed, pauseDuration, schedule, isComplete, loop]);

    return { text, isComplete, phase };
}
