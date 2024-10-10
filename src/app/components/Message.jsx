const Message = ({message}) => {
    console.log(message.role)
    return (
        <div key={message.id} className={`flex items-center ${message.role === 'assistant' ? "justify-start" : "justify-end"}`} >
            <p className={`py-1 px-3 text-white ${message.role === 'user' ? 'bg-secondary' : ''}`}>{message.content}</p>
        </div>
    )
}

export default Message