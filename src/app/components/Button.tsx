import Image from 'next/image';

const Button = (
    { btnId, imgSrc, imgAlt, imgWidth, imgHeight }
    :{ btnId: string, imgSrc: string, imgAlt: string, imgWidth: number, imgHeight: number }
    ) => {
    return (
        <button id={btnId} className="w-16 h-12 flex justify-center items-center bg-tertiary rounded-3xl" type="submit">
            <Image src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight}></Image>
        </button>
    )
}

export default Button