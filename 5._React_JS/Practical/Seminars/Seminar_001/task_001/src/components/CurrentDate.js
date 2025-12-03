function CurrentDate() {
    const date = new Date();
    return (
        <div className="time">
            <h2>Текущее время: {date.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})}</h2>
            <h2>Текущее дата: {date.toLocaleDateString()}</h2>
        </div>
    );
}

export default CurrentDate;