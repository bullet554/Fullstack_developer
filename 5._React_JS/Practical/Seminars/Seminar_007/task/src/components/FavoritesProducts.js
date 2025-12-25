import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../slices/favoritesSlice";

const FavoritesProducts = () => {
    const dispatch = useDispatch();
    const favoriteList = useSelector(state => state.favorites);

    const handleDeleteProduct = (id) => {
        dispatch(deleteProduct({ id }));
    }

    return (
        <div>
            <h2>Список избранных товаров:</h2>
            <ul style={{ display: "flex", flexWrap: "wrap" }}>
                {favoriteList.map(product =>
                    <li key={product.id} style={{ width: "180px" }}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                        <button onClick={() =>handleDeleteProduct(product.id)}>Удалить из избранного</button>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default FavoritesProducts;