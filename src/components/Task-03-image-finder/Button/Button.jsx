import css from "./Button.module.css"

export const Button = ({loadMore, page}) => {

    const loadOneMorePage = () => {

        const updatedPage = page + 1;
        loadMore(updatedPage)
    }

    return(
        <button type="button"  className={css.Button} onClick={loadOneMorePage}>Load more...</button>
    )
}