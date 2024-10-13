import Textarea from 'react-textarea-autosize';
import Button from './Button'

const MessageInputField = ({handleSubmit, onEnterPress, input, handleInputChange }) => {
    return (
        <form onSubmit={handleSubmit} className="flex justify-center" id="form-el">
            <div className="flex flex-1 max-w-3xl items-end bg-secondary rounded-3xl">
                <Textarea minRows={1} maxRows={2} className="w-full leading-8 text-white bg-inherit rounded-3xl align-center py-2 px-6 flex select-none resize-none focus:outline-none" name="message"placeholder="Write Something" value={input} onChange={handleInputChange} onKeyDown={onEnterPress}/>
                {/* <button className="w-16 h-12 flex justify-center items-center bg-tertiary rounded-3xl" type="submit">
                    <Image src='/sendIcon.svg' alt="Send Icon" width={32} height={32}></Image>
                </button> */}
                <Button imgSrc={'/sendIcon.svg'} imgAlt={'Send Icon'} imgWidth={32} imgHeight={32}/>
            </div>
        </form>
    )
}

export default MessageInputField;