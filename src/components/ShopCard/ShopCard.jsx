import './shopCard.css';

export const ShopCard = (props) => {
    const { card, viewMode } = props;

    return (
        <div className={`card${viewMode === 'module' ? ' card-module' : ''}`}>
            <h3 className="card-name">{card.name}</h3>
            <span className="card-color">{card.color}</span>
            <img src={card.img} alt={card.name}></img>
            <div className="card-price">
                <div>${card.price}</div>
                <button className="btn">Add to cart</button>
            </div>
        </div>
    )
}
