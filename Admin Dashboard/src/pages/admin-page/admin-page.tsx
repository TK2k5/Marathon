import { Button, Pen, Plus, Status, Title, Trash } from '@/components'
import { deleteUser, getUsers } from '@/apis'
import { useEffect, useState } from 'react'

import { IUser } from '@/types'
import Swal from 'sweetalert2'
import { clsxm } from '@/utils'
import { toast } from 'react-toastify'

const AdminPage = () => {
  const [users, setUsers] = useState<IUser[]>([])

  const usersPerPage = 5
  const [currentPage, setCurrentPage] = useState<number>(1)
  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)

  const totalPage = Math.ceil(users.length / usersPerPage)

  useEffect(() => {
    ;(async () => {
      try {
        const response = await getUsers()
        if (response.status === 200) {
          const data = response.data
          setUsers(data)
        }
      } catch (error) {
        toast.error('Get user failed')
      }
    })()
  }, [])

  const handleDelete = (id: number) => {
    Swal.fire({
      title: 'Confirm Delete',
      text: 'Are you sure you want to delete Admin permanently. You can’t undo this action.!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'DELETE!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(id)
          .then(() => {
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success'
            })
            const newUsers = users.filter((user) => user.id !== id)
            setUsers(newUsers)
          })
          .catch(() => {
            Swal.fire({
              title: 'Error!',
              text: 'Delete user failed',
              icon: 'error'
            })
          })
      }
    })
  }

  return (
    <div className='w-full h-full'>
      <div className='flex gap-8'>
        <Title title='Users' className='font-semibold text-2xl' />
        <Button href='add-user' className='flex w-fit bg-gray-l10 text-white p-[10px] text-base gap-[5px]'>
          <Plus /> Add New
        </Button>
      </div>
      <div>
        <Button className='flex text-primary text-base w-fit bg-gray-l1 p-[10px]'>All (5)</Button>
      </div>
      <div className='grid grid-cols-13 mt-[14px] p-[3px] bg-gray-l1 flex-shrink rounded-[10px] border-2 border-gray-d2'>
        {['ID', 'Username', 'Email', 'Phone', 'Status', 'Create Date', 'Update Date', 'Modify'].map((item) => (
          <div
            key={item}
            className={clsxm(
              `flex items-center justify-center p-2.5 text-xs font-semibold uppercase`,
              { 'col-span-2': item !== 'ID' },
              { 'col-span-1': item === 'ID' || item === 'Modify' || item === 'Status' },
              { 'border-r-gray-l9  border-r': item !== 'Modify' }
            )}
          >
            {item}
          </div>
        ))}
      </div>
      {users && users.length === 0 && <div className='mt-5 text-center'>No data</div>}
      {currentUsers &&
        currentUsers.length > 0 &&
        currentUsers.map((user) => (
          <div
            key={user.id}
            className='grid px-[3px] grid-cols-13 mt-[14px] gap-y-2.5 p-[3px] py-2.5 flex-shrink border-b'
          >
            <div className={clsxm('col-span-1 text-center border-r')}>{user.id}</div>
            <div title='User1 asdfasdfkjlasdflasdkl' className={clsxm('col-span-2 text-left border-r truncate')}>
              {user.name}
            </div>
            <div className={clsxm('col-span-2 text-left border-r truncate')}>{user.email}</div>
            <div className={clsxm('col-span-2 text-left border-r px-4')}>{user.mobileNumber}</div>
            <div className={clsxm('col-span-1 text-center border-r flex justify-center')}>
              <Status
                className={clsxm(
                  'border w-fit p-2.5 rounded-lg flex justify-center items-center',
                  { 'border-blue-l1 text-blue-l1': user.status === true }, // status
                  { 'border-red text-red': user.status === false } // !status
                )}
                status={user.status ? 'Active' : 'InActive'}
              />
            </div>
            <div className={clsxm('col-span-2 text-center border-r')}>{user.created_at}</div>
            <div className={clsxm('col-span-2 text-center border-r')}>{user.updated_at}</div>
            <div className={clsxm('col-span-1 text-center flex gap-2 justify-center items-center ml-1')}>
              <Button href={`/admin/edit/${user.id}`}>
                <Pen
                  width={40}
                  height={40}
                  className={{ classNameSvg: 'border-4 border-gray-l9 p-[5px] rounded-md text-red-d2' }}
                />
              </Button>
              <Button onClick={() => handleDelete(user.id)}>
                <Trash
                  width={40}
                  height={40}
                  className={{ classNameSvg: 'border-4 border-gray-l9 p-[5px] rounded-md text-primary' }}
                />
              </Button>
            </div>
          </div>
        ))}
      {/* pagination */}
      <div className='flex items-center justify-center mt-5'>
        {Array.from({ length: totalPage }).map((_, index) => (
          <Button
            className={clsxm('py-2.5 px-5 mx-2 w-fit', { 'bg-gray-l10 text-white': index + 1 === currentPage })}
            key={index}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default AdminPage
