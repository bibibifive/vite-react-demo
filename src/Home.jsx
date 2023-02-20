import React, { useState } from 'react'
import { Layout, Menu } from 'tdesign-react'
import { Routes, Route, HashRouter, Link, BrowserRouter } from "react-router-dom"
import { HomeIcon, CalendarIcon, BulletpointIcon, BooksIcon } from 'tdesign-icons-react'

import 'styles/Home.css'

import RouterPage from 'pages/RouterPage'
import Calendar from 'pages/Calendar'
import Todolist from 'pages/Todolist'
import Notes from './pages/notes'

const { Content, Footer, Aside } = Layout
const { MenuItem } = Menu

import dayjs from 'dayjs'




function BasicUsage(props) {
  let [clock, tickTock] = useState(dayjs())
  setInterval(() => {
    tickTock((clock) => {
      if (clock !== dayjs())
        return dayjs()
    })
  }, 1000)

  const NowTime = () => {
    return (<div className='block' >{clock.format('YYYY-MM-DD dddd HH:mm:ss')}</div>)
  }

  return (
    <Menu style={{ width: '100%', height: '100%', boxShadow: 'none' }} logo={<NowTime />} {...props}>
      <Link to={'/'}>
        <MenuItem value="1" icon={<HomeIcon />}>首页</MenuItem>
      </Link>
      <Link to={'/todolist'}>
        <MenuItem value="2" icon={<BulletpointIcon />}>代办</MenuItem>
      </Link>
      <Link to={'/calendar'}>
        <MenuItem value="3" icon={<CalendarIcon />}>日历组件</MenuItem>
      </Link>
      <Link to={'/notes'}>
        <MenuItem value="4" icon={<BooksIcon />}>笔记</MenuItem>
      </Link>
    </Menu >
  )
}

export default function Home() {
  return (
    <>
      <HashRouter>
        <Layout>
          <Aside>
            <BasicUsage />
          </Aside>
          <Layout style={{ height: '100vh' }} >
            <Content>
              <Routes>
                <Route path="/" element={<RouterPage />} />123
                <Route path="/todolist" element={<Todolist />} />123
                <Route path="/calendar" element={<Calendar />} />123
                <Route path="/notes" element={<Notes />} />123
              </Routes>
            </Content>
            {/* <Footer>Copyright @ 2019-2020 Tencent. All Rights Reserved</Footer> */}
            <Footer>https://tdesign.tencent.com/starter/react/dashboard/base</Footer>
          </Layout>
        </Layout>
      </HashRouter>

    </>
  )
}