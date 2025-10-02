import ReactDOM from 'react-dom/client'
import App from './App'
// Schnittstelle zwischen App und index.html

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <App/>    //Schnittstelle zum HTML
  )
 
} else {
  console.error("Root-Element nicht gefunden!")
}


