import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="product__item">
            <div className="product__image-wrapper">
                <img
                    src={product.img}
                    alt={product.name}
                    className="product__img"
                />
                <button
                    className="product__add"
                    onClick={() => addToCart(product)}
                >Add to Cart</button>
            </div>
            <div className="product__content">
                <Link to={`/product/${product.id}`} className="product__name">{product.name}</Link>
                <p className="product__info">{product.info}</p>
                <Link to="#" className="product__price">${product.price}</Link>
            </div>
        </div>
    );
};

export default ProductCard;