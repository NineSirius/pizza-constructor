import { useState } from 'react'
import Pizza from '../components/Pizza/Pizza'

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

    return (
        <div>
            <Pizza ings={ings} />
            <h2>Controls here</h2>
        </div>
    )
}

export default PizzaBuilder
