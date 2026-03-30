import React from 'react'
import ReactDOM from 'react-dom/client'
// @ts-ignore: Could not find a declaration file for module './ConjunctionLesson'.
import ConjunctionLesson from './ConjunctionLesson'

ReactDOM.createRoot(document.getElementById('app')!).render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(ConjunctionLesson, null)
  )
)