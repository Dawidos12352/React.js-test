import { DNA } from 'react-loader-spinner'
import css from "./Loader.module.css"

export const Loader = () => {


    return(
        <div className={css.LoaderBox}>
            <DNA
                visible={true}
                height="150"
                width="150"
                ariaLabel="dna-loading"
            
                wrapperClass="dna-wrapper"
            />
        </div>
    )
}
