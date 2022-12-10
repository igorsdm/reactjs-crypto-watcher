/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from './App'

import 'styles/global.css'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
)

/**
 * React.StrictMode disabled due to issue with react-beautiful-dnd
 * @see https://github.com/atlassian/react-beautiful-dnd/issues/2396
 */
