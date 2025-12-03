function EventCard({title, date, location} ) {
    return ( 
        <div className="event-card">
            <h2 className="event-card__title">Название: {title}</h2>
            <p className="event-card__date">Дата проведения: {date}</p>
            <p className="event-card__location">Место проведения: {location}</p>
        </div>
     );
}

export default EventCard;