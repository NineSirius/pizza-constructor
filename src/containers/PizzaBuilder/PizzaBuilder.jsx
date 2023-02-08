import { useState } from 'react'
import { Controls } from '../../components/Controls/Controls'
import Pizza from '../../components/Pizza/Pizza'

import styles from './PizzaBuilder.module.css'

const PizzaBuilder = () => {
    const [ings, setIngs] = useState({
        cheese: {
            name: 'Сыр',
            price: 150,
            count: 0,
        },
        olives: {
            name: 'Оливки',
            price: 25,
            count: 0,
        },
        sausage: {
            name: 'Колбаска',
            price: 35,
            count: 0,
        },
        mushrooms: {
            name: 'Грибы',
            price: 20,
            count: 0,
        },
    })

    const addIngredient = (type) => {
        setIngs(() => {
            const ing = { ...ings[type] }
            ing.count++
            return {
                ...ings,
                [type]: { ...ing },
            }
        })
        setPrice((price) => {
            return (price += ings[type].price)
        })
    }

    const [price, setPrice] = useState(0)

    return (
        <div className={styles.pizzaWrap}>
            <Pizza ings={ings} />
            <Controls ings={ings} price={price} add={addIngredient} />
        </div>
    )
}

export default PizzaBuilder
