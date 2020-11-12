import React from 'react'
import { ListMenu } from './components/ListMenu/ListMenu'
import { defaultTheme } from './themes/default'
import { ThemeProvider } from 'styled-components'

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <ListMenu />
        </ThemeProvider>
    )
}

export default App
