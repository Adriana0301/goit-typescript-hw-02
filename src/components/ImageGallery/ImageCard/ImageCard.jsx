import s from './ImageCard.module.css'

const ImageCard = ({ image, onClick }) => {
    return (
        <div onClick={() => onClick(image)} className={s.imageCardWrapper}>
            <img src={image.urls.small} alt={image.alt_description || 'Image'} className={s.imageCardImage} />
        </div>
    )
}

export default ImageCard