import { ShopCard } from '../ShopCard';
import './CardsView.css';

export const CardsView = (props) => {
    const { cards, viewMode } = props;

    return (
        <div className={`cards${viewMode === 'module' ? ' cards-module' : ''}`}>
            {cards.map((card,index) => <ShopCard key={index} card={card} viewMode={viewMode}/>)}
        </div>
    )
}
