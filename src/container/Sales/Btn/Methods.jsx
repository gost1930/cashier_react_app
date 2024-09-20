import React, { useState } from 'react'

const Methods = () => {
    const methods = [
        'سفري',
         'محلي',
         'عوائل',
         'توصيل',
         'شركات',
        ]
    const [selected, setSelected] = useState('')
    const handleClick = (index) => setSelected(index)

  return (
    <div className='w-fit flex gap-x-3'>
      {
        methods.map((method, index) => (
          <div key={index} onClick={() => handleClick(index)} className={`${index === selected ? 'bg-green-600 text-white hover:bg-green-800' : ''} border h-10 border-black text-sm w-fit p-2 rounded-lg flex items-center gap-1 cursor-pointer`}>
            {method}
          </div>
        ))
      }
    </div>
  )
}

export default Methods;
