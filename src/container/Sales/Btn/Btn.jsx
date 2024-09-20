
const Btn = ({ titel, classname , icon }) => {
  return (
    <a className={`${classname} flex flex-row  gap-x-3 border justify-center items-center p-2 text-center rounded-lg cursor-pointer`}>{titel} {icon}</a>
  )
}

export default Btn
