import styles from './Pizza.module.css'
import { Ingredient } from './Ingredient/Ingredient'

const Pizza = ({ ings }) => {
    let ingList = []

    {
        Object.keys(ings).forEach((type) => {
            if (ings[type].count) {
                ingList.push(<Ingredient key={type} type={type} />)
            }
        })
    }

    if (!ingList.length) ingList = <h1 className={styles.title}>Добавьте ингридиенты</h1>

    return <div className={styles.pizza}>{ingList}</div>
}

export default Pizza
