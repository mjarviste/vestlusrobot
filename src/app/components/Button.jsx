import Image from 'next/image';

const Button = ({imgSrc, imgAlt, imgWidth, imgHeight}) => {
    return(
        <button className="w-16 h-12 flex justify-center items-center bg-tertiary rounded-3xl" type="submit">
            <Image src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight}></Image>
        </button>
    )
}

export default Button