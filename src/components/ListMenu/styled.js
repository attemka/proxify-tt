import styled from 'styled-components'

export const ListMenuItem = styled.div`
    width: 175px;
    height: 51px;
    border-radius: 15.5px;
    padding: 0 0 0 30px;
    display: flex;
    align-items: center;
    margin: 19px 0;
    ${({
        theme: { MENU_FONT, H4, MENU_ITEM_COLOR, MENU_ITEM_COLOR_SELECTED, MENU_ITEM_BG, MENU_ITEM_BG_SELECTED },
        selected
    }) => `
        font: ${H4} ${MENU_FONT};
        color: ${selected ? MENU_ITEM_COLOR_SELECTED : MENU_ITEM_COLOR};
        background: ${selected ? MENU_ITEM_BG_SELECTED : MENU_ITEM_BG};
`}
`

export const LineBreaker = styled.hr`
    width: 175px;
    margin: 60px 0;
    color: ${({ theme: { LINE_BREAKER_COLOR } }) => LINE_BREAKER_COLOR};
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
    height: calc(850px - 122px);
    width: calc(100% - 27px);
    z-index: 1;
    padding: 122px 0 0 27px;
    position: relative;
    top: -850px;
    left: 0;

    @font-face {
        font-family: 'Avenir';
        src: url('//db.onlinewebfonts.com/t/1a045963159927274c92b0444fb83c17.eot');
        src: url('//db.onlinewebfonts.com/t/1a045963159927274c92b0444fb83c17.eot?#iefix') format('embedded-opentype'),
            url('//db.onlinewebfonts.com/t/1a045963159927274c92b0444fb83c17.woff2') format('woff2'),
            url('//db.onlinewebfonts.com/t/1a045963159927274c92b0444fb83c17.woff') format('woff'),
            url('//db.onlinewebfonts.com/t/1a045963159927274c92b0444fb83c17.ttf') format('truetype'),
            url('//db.onlinewebfonts.com/t/1a045963159927274c92b0444fb83c17.svg#Avenir') format('svg');
    }
`
