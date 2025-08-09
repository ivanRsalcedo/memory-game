import { useState } from 'react'
import './App.css'

function Banger(props) {
  return <h1 style={{ fontSize: props.fontSize }}>{props.text}</h1>
}

function App() {
  const [fontSize, setFontSize] = useState(100)

  return (
    <main style={{ textAlign: 'center', marginTop: 250 }}>

      <button onClick={() => setFontSize(f => f + 10)}>
        +
      </button>
      <Banger text="are you grateful?" fontSize={fontSize} />
    </main>
  )
}

export default App