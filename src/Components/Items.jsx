import React from 'react'
import './Items.css'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


function Items({ work,id,deleteItem,Edit}) {

    return (
        <div className='item borde md:w-96 m-2  rounded-md p-1 bg-purple-900'>

            <div >{work}</div>


            <div className=" details flex justify-between items-center text-4xl p-2">
                <button onClick={()=>Edit(id)}  className=' hover:bg-white hover:text-black rounded-lg  px-1'>
                    <FaRegEdit />
                </button>

                <button onClick={()=>deleteItem(id)} className='  hover:bg-white hover:text-black rounded-lg  px-1'>
                    <MdDelete />
                </button>
            </div>

        </div>
    )
}

export default Items

