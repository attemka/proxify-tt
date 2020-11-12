import React, {useState} from 'react'
import { ListMenuItem, ListMenuWrapper, NameItem } from './styled'

export const ListMenu = () => {
    const items = ['Start', 'Your Cart', 'Favourites', 'Your Orders']
    const [selectedItem, setSelectedItem] = useState('')

    console.log(selectedItem)
    return (
        <ListMenuWrapper>
            <NameItem>Artem</NameItem>

            {items.map((item) => (
                <ListMenuItem key={item} selected={selectedItem === item} onClick={() => setSelectedItem(item)}>{item}</ListMenuItem>
            ))}
        </ListMenuWrapper>
    )
}
