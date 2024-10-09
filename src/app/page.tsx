'use client'

import { useChat } from "ai/react";
import Image from "next/image";
export default function Home() {

  const {messages, handleSubmit, input, handleInputChange} = useChat();

  return (
    <main className="h-screen w-full flex justify-center bg-white">
      <div className="h-full max-w-screen-lg bg-stone-300 flex flex-col py-20 px-10">
        <div className="flex flex-col flex-1 overflow-y-auto text-black">
          {messages.map((message) => (
            <div key={message.id} className="flex items-center">
              <p>{message.content}</p>
            </div>
          ))}
        </div>
        <form className="flex align-center" onSubmit={handleSubmit}>
          <textarea
            className="w-full" 
            name="message"
            placeholder="Write Something..."
            value={input}
            onChange={handleInputChange}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </main>
  );
}
