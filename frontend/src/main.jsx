import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { Toaster } from 'react-hot-toast'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
  </StrictMode>
)


// terminal -> npm create vite@latest
//    *) creates a rect app using vite

// terminal -> npm i react-router react-hot-toast
//    *) react-router  --->  for routing
//    *) react-hot-toast  --->  for notification

// terminal -> npm install -D tailwindcss@3 postcss autoprefixer
//    *) tailwindcss  --->  for stylesheet free styling
//    *) postcss  --->  tool for tailwindcss for transforming CSS with JavaScript plugins
//    *) autoprefixer  --->  PostCSS plugin adds vendor prefixes (-webkit-, -moz-, etc.) ensuring better browser compatibility

// terminal -> npx tailwindcss init -p
//    *) init  --->  initializes tailwindcss with 'tailwind.config.js'
//    *) -p  --->  specifically creates 'postcss.config.js' adds tailwindcss and autoprefixer plugins

// terminal -> npm install daisyui
//    *) daisyui  --->  faster, cleaner, easier tailwindcss development components

// terminal -> npm i lucide-react axois
//    *) lucide-react  --->  for react icons
//    *) axios  --->  for api connectivity