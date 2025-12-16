function List({ renderItems }) {
    return (
        <ul>
            {renderItems()}
        </ul>
    );
}

export default List;