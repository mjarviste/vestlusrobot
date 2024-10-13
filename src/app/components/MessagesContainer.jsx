import Message from "./Message"

const MessagesContainer = ({messages, messageEndRef}) => {
    return (
        <div className="w-full flex justify-center mb-0.5 overflow-y-auto">
            <div className="flex flex-col flex-1 gap-4 max-w-3xl">
                    {messages.map((message) => (
                        <Message key={message.id} message={message} />
                        ))}
                    <div ref={messageEndRef}></div>
            </div>
        </div>
    )
}

export default MessagesContainer