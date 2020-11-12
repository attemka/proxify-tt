import styled from 'styled-components'

export const ListMenuItem = styled.div`
    ${({
        theme: { MENU_FONT, H4, MENU_ITEM_COLOR, MENU_ITEM_COLOR_SELECTED, MENU_ITEM_BG, MENU_ITEM_BG_SELECTED },
        selected
    }) => `
        width: 175px;
        height: 51px;
        border-radius: 15.5px;
        font: ${H4} ${MENU_FONT};
        color: ${selected ? MENU_ITEM_COLOR_SELECTED : MENU_ITEM_COLOR};
        background: ${selected ? MENU_ITEM_BG_SELECTED : MENU_ITEM_BG};
        padding: 0 0 0 30px;
        display: flex;
        align-items: center;
        &:hover {
            color: ${MENU_ITEM_COLOR_SELECTED} ;
        }
`}
`

export const NameItem = styled.div`
    font: ${({ theme: { NAME_FONT, H2 } }) => `${H2} ${NAME_FONT}`};
    color: ${({ theme: { NAME_COLOR } }) => NAME_COLOR};
    text-align: center;
    width: 176px;
    margin-bottom: 57px;
`

export const ListMenuWrapper = styled.div`
    background: ${({ theme: { MENU_BG } }) => MENU_BG};
    border-radius: 48px;
    height: 690px;
    padding: 122px 0 0 27px;
`
