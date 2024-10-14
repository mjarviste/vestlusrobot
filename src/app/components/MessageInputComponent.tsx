import Textarea from 'react-textarea-autosize';
import ButtonComponent from './ButtonComponent'
import { ChangeEvent } from 'react';

const MessageInputComponent = ({handleSubmit, onEnterPress, input, handleInputChange}:
    {handleSubmit:() => void, onEnterPress:(e: React.KeyboardEvent<HTMLTextAreaElement>) => void, input:string, handleInputChange:(e: ChangeEvent<HTMLTextAreaElement>)=> void}) => {
    return (
        <form onSubmit={handleSubmit} className="flex justify-center" id="form-el">
            <div className="flex flex-1 max-w-3xl items-end bg-secondary rounded-3xl">
                <Textarea 
                    minRows={1} 
                    maxRows={2} 
                    className="w-full leading-8 text-white bg-inherit rounded-3xl align-center py-2 px-6 flex select-none resize-none focus:outline-none"
                    name="message"
                    placeholder="Write Something" 
                    value={input} 
                    onChange={handleInputChange} 
                    onKeyDown={onEnterPress}
                />
                <ButtonComponent btnId={"submit-btn"} imgSrc={'/assets/sendIcon.svg'} imgAlt={'Send Icon'} imgWidth={32} imgHeight={32}/>
            </div>
        </form>
    )
}

export default MessageInputComponent;