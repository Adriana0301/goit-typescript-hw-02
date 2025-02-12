import { Image } from "../../../App.types";
import s from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }: ImageCardProps) => {
  return (
    <div onClick={() => onClick(image)} className={s.imageCardWrapper}>
      <img
        src={image?.urls.small}
        alt={image?.alt_description || "Image"}
        className={s.imageCardImage}
      />
    </div>
  );
};

export default ImageCard;

interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
}
