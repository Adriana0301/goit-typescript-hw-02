import ImageCard from "./ImageCard/ImageCard"

import s from './ImageGallery.module.css'


const ImageGallery = ({ images, onImageClick }) => {
    return (
        <ul className={s.imageGalleryList}>
        {images.map(image => (
        <li key={image.id} className={s.imageGalleryListItem}>
          <ImageCard image={image} onClick={onImageClick}/>
        </li>
      ))}
        </ul>
    )
}

export default ImageGallery