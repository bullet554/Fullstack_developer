import { useParams } from 'react-router-dom';

function DetailPage({ productsList }) {
    const { id } = useParams();
    const product = productsList.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Продукт не найден</div>;
    }

    return (
        <div>
            <h2>{product.name}</h2>
            <p><strong>Описание:</strong> {product.description}</p>
            <p><strong>Цена:</strong> {product.price} руб.</p>
            <button onClick={() => window.history.go(-1)}>Назад</button>
        </div>
    );
}

export default DetailPage;
