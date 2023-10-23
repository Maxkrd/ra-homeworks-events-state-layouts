import { useState } from 'react'
import { IconSwitch } from '../IconSwitch';
import { CardsView } from '../CardsView';
import products from '../../data/products';

export const Store = () => {
    const [icon, setIcon] = useState("view_list");
    const [viewMode, setViewMode] = useState("list");

    const handleSwitch = () => {
        if (icon === 'view_list') {
            setIcon('view_module');
            setViewMode('module');
        } else {
            setIcon('view_list');
            setViewMode('list');
        }
    }

    return (
        <>
            <IconSwitch icon={icon} onSwitch={handleSwitch}/>
            <CardsView cards={products} viewMode={viewMode}/>
        </>
    )
}
