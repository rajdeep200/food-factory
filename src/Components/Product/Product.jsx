import React, {useState} from 'react'

import "./Product.css"

const Product = ({ product }) => {
    const [liked, setLiked] = useState(false)

    const drag = (e) => {
        e.dataTransfer.setData("text", e.target.id)
    }

    const toggleLove = () => {
        setLiked(!liked)
    }

    return (
        <div id={product.id} className="product" draggable="true" onDragStart={drag} style={{backgroundColor: product.bg}}>
            <div className="product_header">
                <div className="rating_container">
                    <div className="star_sign"> <i style={{ color:"yellow"}} className="fas fa-star"></i> </div>
                    <div className="rating">{product.rating}</div>
                </div>
                <div className="love_sign" onClick={toggleLove} >
                    {
                        liked ? ( <i style={{color:"red"}} className="fas fa-heart"></i> ) : ( <i className="far fa-heart"></i> )
                    }
                </div>
            </div>
            <div className="img_container">
                <img src={ product.image} alt={product.name} />
            </div>
            <div className="details_container">
                <div className="title">{ product.name}</div>
                <div className="quantity" style={{color: product.bg}}>{ product.quantity}g</div>
            </div>
            <div className="price">${product.price}</div>
        </div>
    )
}

export default Product
