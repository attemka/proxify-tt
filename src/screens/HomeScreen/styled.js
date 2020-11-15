import styled from 'styled-components'
import { Menu } from '@styled-icons/boxicons-regular'

export const HomeScreenWrapper = styled.div`
    background: #eee;
    width: 100%;
    position: relative;
    height: 850px;
    z-index: 5;
    border-radius: 48px;
    transition: all 0.5s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(-10deg) translate(170px, 25px);' : '')};
    transform-origin: top center;
`

export const MenuBlockWrapper = styled.div`
    width: 160px;
    height: 33px;
    padding: 43px 0 0 36px;
    text-transform: uppercase;
    font: ${({ theme: { H3, HEADER_FONT } }) => `${H3} ${HEADER_FONT}`};
    color: ${({ theme: { START_COLOR } }) => START_COLOR};
`

export const MenuIcon = styled(Menu)`
    height: 30px;
    width: 30px;
    margin-right: 35px;
    color: ${({ theme: { MENU_ICON_COLOR } }) => MENU_ICON_COLOR};
`
