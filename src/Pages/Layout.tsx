import Banner from '../components/Banner'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <section className='layout-container'>
        <Banner />
        <Header />
        <Sidebar />
        <Outlet />
    </section>
  )
}

export default Layout