import { Dashboard, ExcutiveIcon, UserIcon } from '@/components'

export const initialData = [
  {
    id: 0,
    name: 'Dashboard',
    title: 'Main',
    icons: <Dashboard />,
    url: '/dashboard'
  },
  {
    id: 1,
    name: 'Admin',
    title: 'User Details',
    icons: <UserIcon />,
    url: '/admin'
  },
  {
    id: 2,
    name: 'Excutives',
    title: 'User Details',
    icons: <ExcutiveIcon />,
    url: '/executive'
  }
]
