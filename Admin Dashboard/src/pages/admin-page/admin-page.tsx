import { Button, Pen, Plus, Status, Title, Trash } from '@/components'

import React from 'react'
import { clsxm } from '@/utils'

const AdminPage = () => {
  return (
    <div className='w-full h-full'>
      <div className='flex gap-8'>
        <Title title='Users' className='font-semibold text-2xl' />
        <Button className='flex w-fit bg-gray-l10 text-white p-[10px] text-base gap-[5px]'>
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
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className='grid px-[3px] grid-cols-13 mt-[14px] gap-y-2.5 p-[3px] py-2.5 flex-shrink border-b'>
          <div className={clsxm('col-span-1 text-center border-r')}>1</div>
          <div title='User1 asdfasdfkjlasdflasdkl' className={clsxm('col-span-2 text-left border-r truncate')}>
            User1
          </div>
          <div className={clsxm('col-span-2 text-left border-r')}>user1@gmail.com</div>
          <div className={clsxm('col-span-2 text-left border-r')}>9876543210</div>
          <div className={clsxm('col-span-1 text-center border-r')}>
            <Status status='Active' className='px-2 py-1 border-2 border-blue rounded-md text-blue mx-1' />
          </div>
          <div className={clsxm('col-span-2 text-center border-r')}>
            2023-03-12 <br /> 12:24:22 AM
          </div>
          <div className={clsxm('col-span-2 text-center border-r')}>
            2023-03-12 <br /> 12:24:22 AM
          </div>
          <div className={clsxm('col-span-1 text-center flex gap-2 justify-center items-center ml-1')}>
            <Pen
              width={40}
              height={40}
              className={{ classNameSvg: 'border-4 border-gray-l9 p-[5px] rounded-md text-red-d2' }}
            />
            <Trash
              width={40}
              height={40}
              className={{ classNameSvg: 'border-4 border-gray-l9 p-[5px] rounded-md text-primary' }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default AdminPage
