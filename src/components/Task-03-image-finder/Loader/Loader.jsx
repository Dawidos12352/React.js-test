import { Audio } from 'react-loader-spinner'
import css from "./Loader.module.css"


export const Loader = ({isLoading}) => {

    return(
        <div className={css.LoaderBox}>
            <Audio
                height="100"
                width="100"
                radius="9"
                color="#4fa94d"
                ariaLabel="audio-loading"
                className={css.Loader}
                visible={true}
            />
        </div>
    )
}



