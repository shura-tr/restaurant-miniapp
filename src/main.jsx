import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

const App = () => {
  return (
    <div className="app">
      <h1>Ресторанный ассистент</h1>
      <p>Выберите настроение и вкус, чтобы начать.</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
