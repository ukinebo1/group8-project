import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faSearch,} from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/Images/Frame 11.png'
import { NavLink, Outlet } from 'react-router-dom'
import rectangle3 from '../assets/Images/Rectangle 3.png'

const Rootlayout = () => {
  return (
    <div >
<header className="header">
        <div className='logo'>
        <img src={logo} alt="" />
        <h1> <span>G</span>-Ate</h1>
       </div>
    <nav> 
        <div className='nav-links'>
        <NavLink to='/'
        style={({isActive})=>({
          color:isActive ? '#990000' : '#000'
        })}>Home</NavLink> 
        
        <NavLink to='menu'

         style={({isActive})=>({
          color : isActive ? '#990000' : "#000"
        })} >Menu</NavLink> 
         
         <NavLink to='about us' style={({isActive})=>({
          color : isActive ? '#990000' : "#000"
        })}
         
         >About Us</NavLink> 

         <NavLink to='reservation'
          style={({isActive})=>({
            color : isActive ? '#990000' : "#000"
          })}
          >Reservation</NavLink>
        </div>
       
    </nav>

    <div className='flex-row-3'>
      <input type="text" placeholder="Search" />
      <p> <FontAwesomeIcon icon={faSearch}/> </p>
    </div>
</header>

<main>
<Outlet/>
</main>

    </div>
  )
}

export default Rootlayout  