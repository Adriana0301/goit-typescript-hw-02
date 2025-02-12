import Modal from 'react-modal';
import s from './ImageModal.module.css'
import { useEffect } from 'react';

const ImageModal = ({ isOpen, onClose, image }) => {
    useEffect(() => {
        const handleKeyDown = e => {
          if (e.key === 'Escape') {
            onClose();
          }
        };
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
          }
      
          return () => {
            window.removeEventListener('keydown', handleKeyDown);
          };
        }, [isOpen, onClose]);

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            ariaHideApp={false}
            className={s.modal}
            overlayClassName={s.overlay}
        >
            {image && (
                <div className={s.ImageModalWrapper}>
                    <img src={image?.urls?.regular} alt={image.alt_description} />
                    <div className={s.wrapperText}>
                    <p>{image.description}</p>
                    <p>Author: {image.user.name}</p>
                    <p>Likes: {image.likes}</p></div>
                </div>
            )}
        </Modal>
    );
};

export default ImageModal;
