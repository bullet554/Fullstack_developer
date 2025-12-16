import { Link } from 'react-router-dom';

function ListPage({ productsList }) {
    return (
        <ul>
            {productsList.map((product) => (
                <li key={product.id}>
                    <Link to={`/detail/${product.id}`}>
                        {product.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default ListPage;
