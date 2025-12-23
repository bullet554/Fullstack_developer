import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../slices/productSlices";

const EditProduct = ({ product, onClose }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState(product.name);
    const [discription, setDiscription] = useState(product.discription);
    const [price, setPrice] = useState(product.price);
    const [available, setAvailable] = useState(product.available);

    useEffect(() => {
        setName(product.name);
        setDiscription(product.discription);
        setPrice(product.price);
        setAvailable(product.available);
    }, [product]);

    const handleSave = () => {
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

        dispatch(updateProduct({
            id: product.id,
            name,
            discription,
            price,
            available
        }));
        onClose();
    };

    return (
        <div className="modal">
            <h2>Редактирование продукта</h2>
            <div>
                <label>
                    Название:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Описание:
                    <textarea
                        value={discription}
                        onChange={(e) => setDiscription(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Цена:
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Доступность:
                    <input
                        type="checkbox"
                        checked={available}
                        onChange={(e) => setAvailable(e.target.checked)}
                    />
                </label>
            </div>
            <div>
                <button onClick={handleSave}>Сохранить</button>
                <button onClick={onClose}>Отмена</button>
            </div>
        </div>
    );
};

export default EditProduct;