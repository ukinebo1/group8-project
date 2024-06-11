import { NavLink} from 'react-router-dom'
import twitterIcon from '../assets/Images/formkit_twitter.png'
import facebookIcon from '../assets/Images/ic_baseline-facebook.png'
import instaIcon from '../assets/Images/mdi_instagram.png'
import pinterestIcon from '../assets/Images/mdi_pinterest.png'
const Footer = () => (
  <div className="footer-container">

    <div className='footer-text-container'>
    <div className='footerText'>
        <h3>Something for everyone</h3>
      <p>APPETIZERS + MAINCOURSE + BEVERAGES</p>
      
    </div>
    

    </div>
    

    <div className='media-icons'>
      <a href="#"><img src= {twitterIcon} alt=""/></a>
     <a href="#"> <img src= {pinterestIcon} alt="" /></a>
     <a href="#"> <img src= {instaIcon} alt="" /></a>
      <a href="#"><img src= {facebookIcon} alt="" /></a>

    </div>

  </div>
)
  
  export default Footer