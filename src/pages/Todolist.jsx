import { useState, useEffect } from 'react'
import 'styles/todolist.scss'



function TodolistHeader(props) {

  return (
    <div className="header">
      <p>ToDolist</p>
      <input type="text" placeholder="请输入ToDo" id='addtodo' />
      <button className="add" id='addtodoButton' >添加</button>
    </div>
  )
}

const IngZone = (props) => {

  const ingData = props.ingData

  return ingData.map((v, i) => {
    return (
      <li key={i} >
        <input type="checkbox"
        // @click="zoneSwitch($event, ingData)" 
        />
        <p>{v.text}</p>
        <div className="icon"
        // onClick={deleteTodo($event, ingData)}
        >
          <svg width="25" height="25" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 12L16.2 5H31.8L33 12" stroke="#333" strokeWidth="4" strokeLinejoin="round" />
            <path d="M6 12H42" stroke="#333" strokeWidth="4" strokeLinecap="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M37 12L35 43H13L11 12H37Z" fill="#333" stroke="#333"
              strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19 35H29" stroke="#FFF" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>
      </li >
    )
  })
}

const DoneZone = (props) => {

  const doneData = props.doneData

  return doneData.map((v, i) => {
    return (
      <li key={i} >
        <input type="checkbox"
        // @click="zoneSwitch($event, ingData)" 
        />
        <p>{v.text}</p>
        <div className="icon"
        // onClick={deleteTodo($event, ingData)}
        >
          <svg width="25" height="25" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 12L16.2 5H31.8L33 12" stroke="#333" strokeWidth="4" strokeLinejoin="round" />
            <path d="M6 12H42" stroke="#333" strokeWidth="4" strokeLinecap="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M37 12L35 43H13L11 12H37Z" fill="#333" stroke="#333"
              strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19 35H29" stroke="#FFF" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>
      </li >
    )
  })
}

function Todolist() {

  const [ingData, setIngData] = useState([
    { text: '提醒我定闹钟' },
    { text: '明天带伞' },
  ])
  const [doneData, setDoneData] = useState([
    { text: '今晚整理衣物' }
  ])

  



  useEffect(() => {
    console.log(ingData, doneData)
    const addtodo = document.querySelector('#addtodo')
    const addtodoButton = document.querySelector('#addtodoButton')


    const Addtodo = () => {
      const text = addtodo.value.trim()
      if (!text) return
      setIngData((ingData) => {
        let tmp = [...ingData]
        tmp.push({ text })
        return tmp
      })
      addtodo.value = null
    }
    
    function ifEnter(e) {
      if (e.key == 'Enter') {
        Addtodo()
      }
    }



    addtodo.addEventListener('keypress', ifEnter)

    addtodoButton.addEventListener('click', Addtodo)
    
    return () => {
      addtodo.removeEventListener('keypress', ifEnter)
      addtodoButton.removeEventListener('click', Addtodo)
    }
  })

  return (
    <div id="App" style={{ width: '40vw' }}>
      <TodolistHeader />
      <div className="content">
        <div className="ing">
          <h2>正在进行</h2>
          <ul>
            <IngZone ingData={ingData} />
          </ul >
        </div >
        <div className="ing">
          <h2>正在进行</h2>
          <ul>
            <DoneZone doneData={doneData} />
          </ul >
        </div >
      </div>
    </div>
  )
}

export default Todolist
