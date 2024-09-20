import { IoAddCircleOutline } from "react-icons/io5";


const Search = ({ title }) => {
  return (
    <div>
      <form className='w-full  relative'>
       
        <div className="flex">
        <div className="relative">
       <select name="" className="shadow h-10 appearance-none  placeholder-black rounded w-36 py-2 px-3 text-gray-700 leading-tight  focus:outline-none focus:shadow-outline" id="">
          <option value="">{title}</option>
          <option value="">الكل</option>
        </select> 
        </div>
        <button type="submit" className="  text-4xl"><IoAddCircleOutline /></button> 
        </div>
      </form>
    </div>
  )
}

export default Search;
