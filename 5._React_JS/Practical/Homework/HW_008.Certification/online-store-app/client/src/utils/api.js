export const fetchProducts = async () => {
    try {
        const response = await fetch('/api/products');
        return await response.json();
    } catch (error) {
        console.error('Ошибка при получении товаров:', error);
    }
};

export const addToCart = async (productId) => {
    try {
        const response = await fetch('/api/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ productId })
        });
        return await response.json();
    } catch (error) {
        console.error('Ошибка при добавлении в корзину:', error);
    }
};