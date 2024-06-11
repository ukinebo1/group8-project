import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const FooterLayout = () => {
  return (
    <div>
      <h1 className='text-3xl text-white mb-5 ml-7'>Help center</h1>

      <p className='ml-7 text-white '>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio obcaecati, ab id voluptatem voluptas suscipit corporis incidunt corrupti culpa possimus. Amet impedit praesentium veniam placeat aliquid quaerat numquam reprehenderit dolore esse, modi aperiam exercitationem dicta doloribus sint corporis? A inventore sunt ullam. Magni reiciendis corrupti, assumenda at expedita hic atque, ut modi velit neque cupiditate mollitia quaerat cum totam asperiores facilis ex quis nulla consectetur autem omnis ab sunt nobis. Repudiandae quidem doloribus odio culpa sed ab itaque iure. Quaerat, libero. Voluptate corrupti vel nobis et nostrum temporibus officiis dolore fugit vitae animi? Soluta fuga molestias totam molestiae commodi veritatis perferendis voluptatem fugit, quae nobis unde at placeat possimus? Tempora architecto temporibus voluptatem fugit laudantium quas et assumenda culpa, voluptate, minus, iure nulla similique eius ullam delectus animi? Nemo harum itaque perspiciatis, quae ipsa unde. Repellendus consequatur libero fuga eaque facilis autem odit sed unde est quasi! Odio, molestias cum! Voluptas vero eligendi officiis totam earum, voluptate voluptatem eos exercitationem amet nihil. Nemo porro ullam aliquid quaerat rerum animi eaque nisi recusandae voluptate repellendus impedit sapiente libero ea voluptates doloribus itaque architecto deleniti alias amet mollitia pariatur, dolores omnis quos. At perspiciatis dolor facere ea, delectus nam debitis voluptatibus animi.
    </p>
    <NavLink to ='Contact' className='bg-red-700 w-10 m-40  text-center text-white   '>Contact</NavLink>



      <Outlet/>
  
    </div>

    
  )
}  

export default FooterLayout