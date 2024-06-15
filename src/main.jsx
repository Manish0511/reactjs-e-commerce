import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import mainStore from './store/index.js'
import ErrorBoundary from './Components/ErrorBoundary.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ErrorBoundary fallback={<div>Custom fallback UI</div>}>
      <Provider store={mainStore}>
        <App />
      </Provider>
    </ErrorBoundary>
  ,
)
