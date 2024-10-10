'use client'
import { useChat } from "ai/react";
import Message from './components/Message'
import Image from "next/image";
export default function Home() {

  const {messages, handleSubmit, input, handleInputChange} = useChat();

  return (
    <main className="h-screen w-full flex justify-center bg-primary">
      <div className="h-full flex-1 max-w-screen-lg flex flex-col py-8 px-6">
        <div className="flex flex-col flex-1 overflow-y-auto text-black gap-2">
          {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex align-center bg-secondary rounded-full">
            <textarea className="w-full h-12 leading-8 bg-inherit text-white rounded-full align-center py-2 px-4 flex select-none focus:outline-none" name="message"placeholder="Write Something" value={input} onChange={handleInputChange}/>
            <button className="rounded-full bg-tertiary w-16 flex justify-center items-center" type="submit">
              <Image src='/sendIcon.svg' alt="Send Icon" width={32} height={32}></Image>
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
