import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import styles from './ProductCard.module.scss';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className={styles.productCard}>
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <div className={styles.productInfo}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productPrice}>${product.price}</p>
                <button
                    className={styles.addToCart}
                    onClick={() => addToCart(product)}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;