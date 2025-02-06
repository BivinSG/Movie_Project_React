import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MovieList } from './components/MovieList'
import { MovieInput } from './components/MovieInput'

function App() {
  return (
    <>
      <MovieInput />
      <MovieList />
    </>
  )
}

export default App
