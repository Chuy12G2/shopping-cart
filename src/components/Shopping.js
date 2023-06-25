import "../App.css"

const Shopping = ({ products, setProducts }) => {
    console.log(products)
    function onClickButton(product) {
        const newProducts = products.map(p => product.name === p.name ? {...p, isInCart: true, itemsInCart: p.itemsInCart + 1} : p)
        setProducts(newProducts)
    }

    return(
        <div>
            <h2>Shopping</h2>
            {products.map(p => (
                <div key={p.name} className="product">
                    <p>{p.name}</p>
                    <p>{p.price} $</p>
                    <p>{p.isInCart + "1"}</p>
                    <button onClick={() => onClickButton(p)}>Add to Cart</button>
                </div>
        ))}
        </div>
    )
}

export default Shopping
