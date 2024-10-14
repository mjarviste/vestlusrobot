'use client'
import { useChat } from "ai/react";
import MessageInputComponent from './components/MessageInputComponent'
import MessagesContainerComponent from './components/MessagesContainerComponent'
import NoMessagesContainerComponent from './components/NoMessagesContainerComponent'
import { useEffect, useRef } from "react";
export default function Home() {

  const {messages, handleSubmit, input, handleInputChange} = useChat();

  const messageEndRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({behavior: "smooth"})
  }

  const onEnterPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if(e.key == 'Enter' && e.shiftKey == false) {
      e.preventDefault();
      e.currentTarget.form?.requestSubmit()
    }
  }
  
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <main className="h-screen w-full flex justify-center bg-primary font-ubuntu">
      <div className="h-full w-full flex flex-col py-8 sm:py-12 px-4 sm:px-8 justify-between">
        {messages.length === 0 
        ?
        <NoMessagesContainerComponent/>
        :
        <MessagesContainerComponent messages={messages} messageEndRef={messageEndRef}/>
        }
        <MessageInputComponent handleSubmit={handleSubmit} onEnterPress={onEnterPress} input={input} handleInputChange={handleInputChange}/>
      </div>
    </main>
  );
}
