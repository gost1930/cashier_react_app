import React from 'react'

const data = [
  { label: 'الإجمالي', value: 2000 },
  { label: 'الخصم%', value: 2000 },
  { label: 'الضريبة15%', value: 2000 },
  { label: 'مبلغ التأمين', value: 2000 },
  { label: 'المبلغ', value: 2000 },
]

const Total = () => {
  return (
    <div className='flex flex-row justify-evenly items-center  gap-x-2 h-fit ml-3'>
      {data.map((item, index) => (
        <div key={index} className='flex flex-col justify-center items-center  '>
          <span className='text-sm font-bold'>{item.label}</span>
          <span className='text-lg font-bold text-black  px-3 py-1  rounded-md bg-gray-200'>
            {item.value}
          </span>
        </div>
      ))}
    </div>
  )
}

export default Total
