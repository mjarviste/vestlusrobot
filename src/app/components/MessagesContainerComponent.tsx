import { Message } from "ai"
import { MessageListType } from ".."
import MessageComponent from "./MessageComponent"
import { RefObject } from "react"


const MessagesContainerComponent = ({messages, messageEndRef}: {messages:Message[], messageEndRef:RefObject<HTMLInputElement>}) => {
    return (
        <div className="w-full flex justify-center mb-0.5 overflow-y-auto">
            <div className="flex flex-col flex-1 gap-4 max-w-3xl">
                    {messages.map((message, index) => (
                        <MessageComponent key={index} message={message} />
                        ))}
                    <div ref={messageEndRef}></div>
            </div>
        </div>
    )
}

export default MessagesContainerComponent