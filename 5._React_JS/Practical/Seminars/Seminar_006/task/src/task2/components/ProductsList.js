import { useDispatch } from "react-redux";
import { addProduct } from "../slices/favoritesSlice";

const ProductsList = () => {
    const dispatch = useDispatch();
    const list = [
        {
            id: 1,
            name: 'Product 1',
            discription: 'Some kind of description for product No. 1',
            price: 100
        },
        {
            id: 2,
            name: 'Product 2',
            discription: 'Some kind of description for product No. 2',
            price: 200
        },
        {
            id: 3,
            name: 'Product 3',
            discription: 'Some kind of description for product No. 3',
            price: 300
        },
        {
            id: 4,
            name: 'Product 4',
            discription: 'Some kind of description for product No. 4',
            price: 400
        }
    ];

    const handleAddProductToList = (product) => {
        dispatch(addProduct(product));
    }

    return (
        <div>
            <h2>Список товаров:</h2>
            <ul style={{ display: "flex" }}>
                {list.map(product =>
                    <li key={product.id} style={{ width: "180px" }}>
                        <h3>{product.name}</h3>
                        <p>{product.discription}</p>
                        <p>{product.price}</p>
                        <button onClick={() => handleAddProductToList(product)}>Добавить в избранное</button>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default ProductsList;