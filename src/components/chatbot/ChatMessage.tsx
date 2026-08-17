"use client";

import { Message } from "./ChatbotWidget";

export function ChatMessage({ message }: { message: Message }) {
  return (
    <div
      className={`flex ${
        message.type === "user" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-xs px-4 py-2 rounded-lg ${
          message.type === "user"
            ? "bg-blue-600 text-white rounded-br-none"
            : "bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-white rounded-bl-none"
        }`}
      >
        <p className="text-sm leading-relaxed">{message.content}</p>
        <p
          className={`text-xs mt-1 ${
            message.type === "user"
              ? "text-blue-100"
              : "text-zinc-500 dark:text-zinc-400"
          }`}
        >
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
}
