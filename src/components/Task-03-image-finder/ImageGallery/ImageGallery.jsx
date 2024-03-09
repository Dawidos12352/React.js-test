import css from "./ImageGallery.module.css"
import {ImageGalleryItem} from "../ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({images}) => {


    return(
        <ul className={css.ImageGallery}>
            {images.map((el) => (
                <ImageGalleryItem  el={el} key={el.id}/>
            ))}
        </ul>
    )
} 