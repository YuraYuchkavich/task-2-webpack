import React from 'react'
import reactDOM from 'react-dom'
import './styles/style.css'

const App = () => {
    return <h1>Hello Webpack component</h1>
}

reactDOM.render(<App />, document.getElementById('root'))