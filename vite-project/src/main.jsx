import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div> 
      <h1>Custom App | chai</h1>
    </div>
  )
}

const ReactElement = {
  type : 'a',
  props : {
      href : 'https://google.com',
      target : '_blank',
  },
  children : 'click me to visit google'
}

ReactDOM.createRoot(document.getElementById('root')).
render(
  ReactElement()
)
