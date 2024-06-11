import image from '../assets/Images/Rectangle 2.png'
import rectangle3 from '../assets/Images/Rectangle 3.png'
import { NavLink} from 'react-router-dom'

const Home = () => {
    return (
      <section>
        <div className='home-container'>
        <div className="home-text">
      <h1>
        Hungry for Something <br />
       <span>Delicious?</span> <br />
       We've Got You Covered!

      </h1>
      <div className='call-to-action'>
        <NavLink to ='menu'><button>view Menu</button></NavLink>
        <NavLink to ='reservation'><button>Book a Table</button></NavLink>

        </div>
      </div>
      <div className="row-2">
        <img src={image} alt="" />
      </div>
        </div>
       
        <div className='home-fade-img'>
      <img src= {rectangle3} alt="" width={100}/>
      </div>
      
    

      </section>
      
    )
  }
  
  export default Home