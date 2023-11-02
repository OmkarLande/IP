import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

class Car extends React.Component {
  render() {
    return <h2>Car is class component</h2>;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Car/>
  </React.StrictMode>,
)
