import Image from "next/image"

const Message = ({message}) => {
    console.log(message.role)
    return (
        <div key={message.id} className={`flex gap-2 items-center ${message.role === 'assistant' ? "flex-row" : " flex-row-reverse"}`} >
            {message.role === 'assistant' ? 
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center self-start justify-center bg-tertiary flex-shrink-0 relative">
                    <Image src='/aiIcon.svg' alt="AI Icon" objectFit="cover" fill className="p-2 object-cover"></Image>
                </div>
                :
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center bg-secondary flex-shrink-0 relative">
                    <Image src='/userIcon.svg' alt="User Icon" objectFit="cover" fill className="p-2 object-cover"></Image>
                </div>
            }
            <p className={`py-2 px-4 text-white rounded-3xl w-fit ${message.role === 'user' ? 'border-2 border-secondary border-solid' : 'border border-tertiary border-solid'}`}>{message.content}</p>
        </div>
    )
}

export default Message