import React from 'react'
import { HomeScreenWrapper, MenuBlockWrapper, MenuIcon } from './styled'

export const HomeScreen = ({ onMenuClick, menuOpened }) => {
    return (
        <HomeScreenWrapper isOpen={menuOpened}>
            <MenuBlockWrapper>
                <MenuIcon onClick={onMenuClick} />
                start
            </MenuBlockWrapper>
        </HomeScreenWrapper>
    )
}
