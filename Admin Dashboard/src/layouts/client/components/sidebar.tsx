import { NavigateBar } from '.'
import { initialData } from '..'
import { useState } from 'react'

export const SidebarLayout = () => {
  const [value, setValue] = useState<number>(0)

  const handleClick = (index: number) => {
    setValue(index)
  }
  return (
    <div className='mt-5'>
      <div className='w-[350px] h-screen pl-10 pr-5 border-r border-r-gray-l9'>
        <div className='border border-black rounded-[5px] px-2 py-3'>
          {initialData.map((data, index) => (
            <NavigateBar
              handleClick={handleClick}
              id={value}
              index={index}
              name={data.name}
              title={data.title}
              url={data.url}
              icon={data.icons}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
