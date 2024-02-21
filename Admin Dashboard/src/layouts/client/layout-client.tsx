import { HeaderLayout, SidebarLayout } from './components'

import { Outlet } from 'react-router-dom'

const LayoutClient = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      {/* header */}
      <HeaderLayout />

      <div className='flex'>
        <SidebarLayout />
        <Outlet />
      </div>
    </div>
  )
}

export default LayoutClient
