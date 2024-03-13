import css from "./ImageGalleryItem.module.css"

export const ImageGalleryItem = ({image, handleOpenModal}) => {

    const {webformatURL, id, tags} = image

    return(
        <li className={css.ImageGalleryItem} key={id} onClick={() =>  handleOpenModal(id)}>
            <img src={webformatURL} alt={tags} className={css.ImageGalleryItemImage}/>
        </li>
    )
 
}