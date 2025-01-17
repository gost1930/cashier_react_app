import React from 'react'
import { Link } from 'react-router-dom';
import Btn from './Btn';
import shopping_cart from '../../assets/shopping-cart.png'
import shopping_bag from '../../assets/shopping-bag.png'
import user from '../../assets/user.png'
import printer from '../../assets/printer.png'
import circled from '../../assets/circled.png'

const BtnItems = () => {
  return (
    <>
     {/* path={'/purchase'} */}
    <div className='flex flex-wrap items-center justify-center gap-3 max-w-full duration-300'>
        <Link to={'/sale'} className='hidden md:block' ><Btn  btn={<img src={shopping_cart} className=' w-6 h-6 md:w-12 md:h-12 text-center self-center' />} title="مبيعات" /></Link>
        <Link to={'/purchase'} ><Btn  btn={<img src={shopping_bag} className='w-6 h-6 md:w-12 md:h-12 text-center self-center' />} title="مشتريات" /></Link>
        <Link to={'/subgroup'}><Btn  btn={<img src={circled} className='w-6 h-6 md:w-12 md:h-12 text-center self-center' />} title="أصناف" /></Link>
        <Link to={'/account'}><Btn  btn={<img src={user} className='w-6 h-6 md:w-12 md:h-12 text-center self-center' />} title="الحسابات" /></Link>
        <Btn btn={<img src={printer} className='w-6 h-6 md:w-12 md:h-12 text-center self-center' />} title="التقارير" />
    </div>
    </>
  )
}

export default BtnItems;
