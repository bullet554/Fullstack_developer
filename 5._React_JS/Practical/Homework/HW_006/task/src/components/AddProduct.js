import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../slices/productSlices";

const AddProduct = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [discription, setDiscription] = useState('');
    const [price, setPrice] = useState('');

    const handleAddProduct = () => {
        if (!name.trim()) {
            alert('Введите название продукта');
            return;
        }
        if (!discription.trim()) {
            alert('Введите описание продукта');
            return;
        }
        if (!price.trim() || isNaN(price)) {
            alert('Введите корректную цену');
            return;
        }

        dispatch(addProduct({
            name: name,
            discription: discription,
            price: price,
            available: true
        }))

        setShow(false);
        setName('');
        setDiscription('');
        setPrice('');
    }

    return (
        <div>
            <button onClick={() => setShow(!show)}>Создать карту товара</button>
            {show && <div>
                <input
                    type="text"
                    placeholder="Введите название"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /><br />
                <textarea
                    placeholder="Введите описание"
                    value={discription}
                    onChange={(e) => setDiscription(e.target.value)}
                /><br />
                <input
                    type="number"
                    placeholder="Введите стоимость"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                /><br />
                <button onClick={handleAddProduct}>Добавить в каталог</button>
            </div>}
        </div>
    );
};

export default AddProduct;