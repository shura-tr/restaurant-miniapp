import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

const moods = [
  { value: 'спокойное', label: 'Спокойное' },
  { value: 'весёлое', label: 'Весёлое' },
  { value: 'романтичное', label: 'Романтичное' },
  { value: 'приключенческое', label: 'Приключенческое' }
]

const tastes = [
  { value: 'острое', label: 'Острое' },
  { value: 'нежное', label: 'Нежное' },
  { value: 'веганское', label: 'Веганское' },
  { value: 'мясное', label: 'Мясное' },
  { value: 'сладкое', label: 'Сладкое' }
]

const App = () => {
  const [mood, setMood] = useState('')
  const [taste, setTaste] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready()
      window.Telegram.WebApp.expand()
    }
  }, [])

  const handleSubmit = () => {
    if (!mood || !taste) {
      setError('Пожалуйста, выбери настроение и вкус')
      return
    }

    const data = {
      mood,
      taste,
      time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
    }

    window.Telegram.WebApp  }

  return (
    <div className="app">
      <h1>Ресторанный ассистент</h1>
      <p>Выберите настроение и вкус</p>

      <select onChange={(e) => setMood(e.target.value)} value={mood}>
        <option value="">Настроение...</option>
        {moods.map((m) => (
          <option key={m.value} value={m.value}>{m.label}</option>
        ))}
      </select>

      <select onChange={(e) => setTaste(e.target.value)} value={taste}>
        <option value="">Вкус...</option>
        {tastes.map((t) => (
          <option key={t.value} value={t.value}>{t.label}</option>
        ))}
      </select>

      {error && <p className="error">{error}</p>}

      <button onClick={handleSubmit}>Подобрать блюдо</button>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

