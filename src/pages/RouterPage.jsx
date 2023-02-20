import reactLogo from 'assets/react.svg'
import 'styles/App.css'
import { useLocation } from 'react-router-dom'


function RouterPage() {
  let location = useLocation()

  const { from, pathname } = location

  console.log(location)
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>RouterPage</h1>
      <p style={{ fontSize: '1.8em', marginTop: 20 }}>你是从 {from ? from : '--'}页面 跳转到本页面 {pathname} </p>
    </div>
  )
}

export default RouterPage
