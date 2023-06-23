const Cart = ({products, setProducts}) => {
    const productsInCart = products.filter(p => p.isInCart)
    return(
        <div>
            <h2>Cart</h2>
            {productsInCart.map(p => (
                <div key={p.name}>
                    <p>{p.name}</p>
                    <span>{p.price}</span>
                </div>
            ))}
        </div>
    )
}

export default Cart
