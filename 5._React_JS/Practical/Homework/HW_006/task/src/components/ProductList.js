import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { availableProduct, deleteProduct } from "../slices/productSlices";
import EditProduct from "./EditProduct";

const ProductList = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.products);
    const [editingProduct, setEditingProduct] = useState(null);

    const handleDeleteProduct = (id) => {
        dispatch(deleteProduct({ id }));
    }

    const handleToggleProduct = (id) => {
        dispatch(availableProduct({ id }));
    }

    const handleEdit = (product) => {
        setEditingProduct(product);
    }

    const handleCloseEdit = () => {
        setEditingProduct(null);
    }

    return (
        <section>
            <h2>Список товаров:</h2>
            <ul style={{ display: "flex", gap: "10px" }}>
                {products.map(product =>
                    <li key={product.id} style={{ width: "180px" }}>
                        <div>
                            <h3>{product.name}</h3>
                            <p>{product.discription}</p>
                            <p>{product.price} руб.</p>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <button
                                onClick={() => handleToggleProduct(product.id)}
                                style={{ marginRight: '10px' }}
                            >
                                {product.available ? 'Отключить' : 'Включить'}
                            </button>
                            <button
                                onClick={() => handleDeleteProduct(product.id)}
                            >
                                Удалить карточку
                            </button>
                        </div>
                        <button
                            onClick={() => handleEdit(product)}
                            style={{ 
                                width: "180px",
                                height: "37px",
                                marginTop: "10px"
                            }}
                        >
                            Редактировать
                        </button>
                    </li>
                )}
            </ul>

            {editingProduct && (
                <div className="modal-overlay">
                    <div className="modal">
                        <EditProduct
                            product={editingProduct}
                            onClose={handleCloseEdit}
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProductList;