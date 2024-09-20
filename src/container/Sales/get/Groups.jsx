import { useState } from "react";
const Groups = () => {
    const groups = [
        {
          id: 1,
          name: "دجاج بشاور مثلوثة",
        },
        {
          id: 2,
          name: "دجاج حنيذ شعبي",
        },
        {
          id: 3,
          name: "قسم اللحوم",
        },
        {
          id: 4,
          name: "المطبخ",
        }, 
        {
          id: 5,
          name: "الإيدامات والسلطات",
        },
        {
          id: 6,
          name: "الرز",
        },
        {
          id: 7,
          name: "اخرى+صحن عميل",
        },
        {
          id: 8,
          name: "الزيادات",
        },
        {
          id: 9,
          name: "مشروبات وحلى",
        },
        {
          id: 10,
          name: "السادة والني",
        },
        {
          id: 11,
          name: "الشعبيات",
        },
        {
          id: 12,
          name: "بدون",
        },
        {
          id: 13,
          name: "الفطور",
        },
        {
          id: 14,
          name: "بدون",
        },
        {
          id: 15,
          name: "الفطور",
        },
        {
          id: 16,
          name: "الفطور",
        },
        {
          id: 17,
          name: "بدون",
        },
        {
          id: 18,
          name: "الفطور",
        },

      ]
      const [choosed, setChose] = useState(1)
      const handelChose = (id) => setChose(id)
  return (
    <div className="w-full h-fit grid grid-cols-3 gap-1 overflow-y-scroll">
            {
              groups.map(group => (
                <div key={group.id} onClick={() => handelChose(group.id)} className={`w-full border border-black text-sm py-2  text-center  h-14 hover:bg-gray-600 hover:text-white cursor-pointer ${choosed === group.id ? 'bg-gray-600 text-white' : 'bg-white' }`}> {group.name} </div>
                
              ))
            }
        </div>
  )
}

export default Groups;

