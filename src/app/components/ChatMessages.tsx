import { Message } from "ai"
import ChatMessage from "./ChatMessage"
import { RefObject } from "react"


const ChatMessages = ({messages, messageEndRef}: {messages:Message[], messageEndRef:RefObject<HTMLInputElement>}) => {
    return (
        <div className="w-full flex justify-center mb-0.5 overflow-y-auto">
            <div className="flex flex-col flex-1 gap-4 max-w-3xl">
                    {messages.map((message, index) => (
                        <ChatMessage key={index} message={message} />
                        ))}
                    <div ref={messageEndRef}></div>
            </div>
        </div>
    )
}

export default ChatMessages