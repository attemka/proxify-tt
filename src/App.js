import React, { useState } from 'react'
import { ListMenu } from './components/ListMenu/ListMenu'
import { defaultTheme } from './themes/default'
import { ThemeProvider } from 'styled-components'
import { HomeScreen } from './screens/HomeScreen/HomeScreen'

function App() {
    const [menuOpened, setMenuOpened] = useState(false)
    const handleMenuClick = () => setMenuOpened(!menuOpened)

    return (
        <ThemeProvider theme={defaultTheme}>
            <HomeScreen menuOpened={menuOpened} onMenuClick={handleMenuClick} />
            <ListMenu onMenuClick={handleMenuClick} />
        </ThemeProvider>
    )
}

export default App
