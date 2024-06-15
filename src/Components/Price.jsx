function Price({ item }) {

    return (
        <div>  
            ${
                (item.discountPercentage && (item.price - (item.price * item.discountPercentage) / 100).toFixed(2)                
                ||
                item.price)
            } <span>{item.discountPercentage && <span> <s>${item.price}</s></span>}</span>            
        </div>
    )
}
export default Price;