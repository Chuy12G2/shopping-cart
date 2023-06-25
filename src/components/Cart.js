import { useEffect, useState } from 'react'
import '../App.css'

const Cart = ({products, setProducts}) => {
    const [total, setTotal] = useState(0)

    useEffect(() => (
        calculateTotal()
    ), [products])

    const productsInCart = products.filter(p => p.isInCart)

    function increaseProductCount (product){
        const newProducts = products.map(p => product.name === p.name ? {...p, itemsInCart: p.itemsInCart + 1} : p)
        setProducts(newProducts)
    }

    function decreaseProductCount (product){
        if(product.itemsInCart <= 1){
            return
        }
        const newProducts = products.map(p => product.name === p.name ? {...p, itemsInCart: p.itemsInCart - 1} : p)
        setProducts(newProducts)
    }

    function calculateTotal(){
        const productsInCart = products.filter(p => p.isInCart)
        const individualTotalPrices = productsInCart.map(p => p.price * p.itemsInCart)
        const sum = individualTotalPrices.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
          },0)
        setTotal(sum)
    }    

    return(
        <div>
            <h2>Cart</h2>
            {productsInCart.map(p => (
                <div key={p.name}>
                    <p>{p.name}</p>
                    <p>$ {p.price * p.itemsInCart} </p>
                    <span className="plus-minus-sign" onClick={() => decreaseProductCount(p)}> - </span>
                    <span>Quantity: {p.itemsInCart}</span>
                    <span className="plus-minus-sign" onClick={() => increaseProductCount(p)}> + </span>
                </div>
            ))}
            <h3>Total: $ {total}</h3>
        </div>
    )
}

export default Cart
