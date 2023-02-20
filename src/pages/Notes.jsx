import { useState } from 'react'
import 'styles/App.css'

function Notes() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>notes</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default Notes
