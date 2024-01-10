import React from 'react';
import { useState } from 'react';

export const TodoList = () => {
    const arrayName = ['Huy', 'Hùng', 'Hà', 'Hưng', 'Hải', 'Hà'];

	const [data, setData] = useState(arrayName);
	const handleClick = (name) => {
		const newDate = data.filter((nameItem) => {
			if (name !== nameItem) {
				return nameItem;
			}
		});
		setData(newDate);
	};

	return (
        <div className="flex flex-col gap-4 w-96 bg-white px-5 py-8 rounded">
            <p className='text-4xl font-bold'>Todo App</p>
            <div className='items-center flex'>
                <input type="text" className='border-solid border-2 border-slate-600  px-2 py-2 w-full' placeholder='Add your new todo'/>
                <button className=' bg-violet-400 size-11 ml-2 text-4xl px-2 text-white'>+</button>
            </div>
            {data.map((name, index) => {
                return (
                    <div key={index} className="flex items-center bg-slate-100 rounded px-3 py-1">
                        <p className='grow'>{name}</p>
                        <button
                            onClick={() => handleClick(name)}
                            className="bg-red-500 py-2 px-4 rounded text-white  "
                        >
                            Delete
                        </button>
                    </div>
                );
            })}
            <div className='flex justify-center items-center'>
                <p className='grow'>You have 4 pending task</p>
                <button className='bg-violet-400 px-3 py-3 text-white'>Clear All</button>
            </div>
            
        </div>
    )
}