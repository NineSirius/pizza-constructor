import styles from './ControlItem.module.css'

export const ControlItem = ({ type, title, count, add }) => {
    return (
        <div className={styles.controlItem} onClick={add}>
            <img className={styles.image} src={`assets/img/${type}-icon.png`} alt={type} />
            <h4 className={styles.title}>{title}</h4>
            {count > 0 && <div className={styles.count}>{count}</div>}
        </div>
    )
}
