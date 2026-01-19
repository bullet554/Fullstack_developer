import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Subscribe from "../components/Subscribe/Subscribe";

const Cart = () => {
    const { cart } = useContext(CartContext);

    const total = cart.reduce((acc, item) => {
        return acc + item.quantity * item.product.price;
    }, 0);

    return (
        <div>
            <div className={styles.cart}>
                <h2 className={styles.cartTitle}>Корзина</h2>
                {cart.map(item => (
                    <div key={item.product.id} className={styles.cartItem}>
                        <ProductCard product={item.product} />
                        <div className={styles.quantityControl}>
                            <input
                                type="number"
                                value={item.quantity}
                                className={styles.quantityInput}
                                onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value))}
                            />
                            <button
                                className={styles.removeButton}
                                onClick={() => removeFromCart(item.product.id)}
                            >
                                Удалить
                            </button>
                        </div>
                    </div>
                ))}
                <div className={styles.total}>
                    <p>Итого: ${total.toFixed(2)}</p>
                </div>
            </div>
            <Subscribe />
        </div>
    );
}

export default Cart;