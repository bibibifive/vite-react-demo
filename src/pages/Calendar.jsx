import { useState } from 'react'
import 'styles/App.css'




function Calendar() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Calendar</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

    </div>
  )
}

export default Calendar
