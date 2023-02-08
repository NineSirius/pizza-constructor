import { ControlItem } from './ControlItem/ControlItem'
import styles from './Controls.module.css'

export const Controls = ({ ings, price, add }) => {
    return (
        <div>
            <h1 className={styles.title}>Выберите ингридиенты</h1>
            <div className={styles.controls}>
                {Object.keys(ings).map((type) => (
                    <ControlItem
                        key={type}
                        type={type}
                        title={ings[type].name}
                        count={ings[type].count}
                        add={() => add(type)}
                    />
                ))}
            </div>

            <div className={styles.price}>
                Итог: <span>{price}</span> сом
            </div>
        </div>
    )
}
