import css from "./ImageGalleryItem.module.css"

export const ImageGalleryItem = ({el}) => {

    const { id, webformatURL, tags} = el

    return(
        <li className={css.ImageGalleryItem} key={id}>
            <img src={webformatURL} alt={tags} className={css.ImageGalleryItemImage}/>
        </li>
    )
} 