import css from "./ImageGallery.module.css"
import {ImageGalleryItem} from "../ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({images, handleOpenModal}) => {
    return(
        <ul className={css.ImageGallery}>
            {images.map(el => (
                <ImageGalleryItem key={el.id} image={el} handleOpenModal={handleOpenModal}/>
            ))}
        </ul>
    )
 
}