import css from "./Statistics.module.css"
import PropTypes from "prop-types"

export const Statistics = ({title, stats}) => {
    return(
        <section className={css.statistics}>
        {title && <h2 className={css.title}>Upload stats</h2>}

            <ul className={css.list}>
                
            {stats.map(({id, label, percentage}) => (

                <li className={css.item} key={id}>
                     <span className={css.label}>{label}</span>
                    <span className={css.percentage}>{percentage}%</span>
                </li>
            ))}    

            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title : PropTypes.string.isRequired,
    stats : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.string.isRequired,
            label : PropTypes.string.isRequired,
            percentage : PropTypes.number.isRequired,
        }).isRequired
    ).isRequired,
}