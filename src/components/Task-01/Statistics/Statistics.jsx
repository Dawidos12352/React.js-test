import css from "./Statistics.module.css"
import PropTypes from "prop-types"

export const Statistics = ({title, stats}) => {
    return(
        <div className={css.box}>
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.list}>
        {stats.map(el => (
            <StatisticsItem stats = {el} key = {el.id}/>
        ))}
  </ul>
</section>
</div>
    )
}

const StatisticsItem = ({stats}) => {
    
    const {label, percentage} = stats

    return(
        <li className={css.item}>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
      </li>
    )
}

Statistics.propTypes = {
    stats : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.string.isRequired,
            percentage : PropTypes.number.isRequired,
            label : PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
}
