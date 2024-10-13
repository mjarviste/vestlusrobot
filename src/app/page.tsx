'use client'
import { useChat } from "ai/react";
import Message from './components/Message'
import MessageInputField from './components/MessageInputField'
import MessagesContainer from './components/MessagesContainer'
import NoMessagesContainer from './components/NoMessagesContainer'
import { useEffect, useRef } from "react";
export default function Home() {

  const {messages, handleSubmit, input, handleInputChange} = useChat();

  const messageEndRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({behavior: "smooth"})
  }

  const onEnterPress = (e) => {
    if(e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      const formEl = document.querySelector('#form-el')
      formEl?.requestSubmit()
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
        <NoMessagesContainer/>
        :
        <MessagesContainer messages={messages} messageEndRef={messageEndRef}/>
        }
        <MessageInputField handleSubmit={handleSubmit} onEnterPress={onEnterPress} input={input} handleInputChange={handleInputChange}/>
      </div>
    </main>
  );
}
