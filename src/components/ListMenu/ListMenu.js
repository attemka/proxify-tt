import React, { useState } from 'react'
import { LineBreaker, ListMenuItem, ListMenuWrapper, NameItem } from './styled'

const MENU_ITEMS = ['Start', 'Your Cart', 'Favourites', 'Your Orders', 'LB', 'Sign Out']

export const ListMenu = ({ onMenuClick }) => {
    const [selectedItem, setSelectedItem] = useState('')

    return (
        <ListMenuWrapper>
            <NameItem>Artem</NameItem>

            {MENU_ITEMS.map((item) =>
                item === 'LB' ? (
                    <LineBreaker />
                ) : (
                    <ListMenuItem
                        key={item}
                        selected={selectedItem === item}
                        onClick={() => {
                            setSelectedItem(item)
                            onMenuClick()
                        }}
                    >
                        {item}
                    </ListMenuItem>
                )
            )}
        </ListMenuWrapper>
    )
}
