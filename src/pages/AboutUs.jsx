import aboutImage from '../assets/Images/Rectangle 9.png'
import rectangle3 from '../assets/Images/Rectangle 3.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightDots} from '@fortawesome/free-solid-svg-icons';
import teamImg1 from '../assets/Images/Ellipse 1.png'
import teamImg2 from '../assets/Images/Ellipse 2.png'
import teamImg3 from '../assets/Images/Ellipse 1.png'
import teamImg4 from '../assets/Images/Ellipse 4.png'
const AboutUs = () => {
  return (
    <section>
      <div className='about'>
      <div className="about-row-1">
    <h1>We set out to create lovely <br/>
      <span>dining experiences</span>
       </h1>
       <img src={aboutImage} alt="img" className='hidden-img' />
    </div>

    <div className="about-row-2" >
      <h3>Together with our talented chefs and dedicated team, we strive to bring culinary excellence to your table, one dish at a time</h3>
      <img src={aboutImage} alt="img" />
    </div>

      </div>
      <div className='section-2'>
      <div className='about-section-2-row-1'>
        <img src= {rectangle3} alt="" />
        <h2>Our Story<FontAwesomeIcon icon={faArrowUpRightDots}/> </h2>
      </div>

      <div className='about-section-2-row-2'>
        <p className='p-1'>G-Ate was born from the shared vision of a group of passionate food enthusiasts who came together to create a place where every meal feels like a special occasion.</p>
        <p className='p-2'>Our journey began with an idea--to combine time-honoured techniques with contemporary flair. Each of us brought something unique to the table, whether it was culinary skills honed through years of training, a knack for discovering top-notch local suppliers, or a contagious enthusiasm for creating warm and welcooming dining experiences.</p>
        <p className='p-3'>Together, we’ve crafted a space where traditional and modern flavours meet, where friends and family can gather to share not just food, but moments and memories.</p>
      </div>
      </div>
      
<div className='section-3'>

  <div className='section-3-text'>
  <h1>Our team has over <span>10 years of combined <br /> experience!</span></h1>
  <h3>Our team is driven by a commitment to innovation while respecting <br /> traditional techniques</h3>
  </div>
  <div  className='team'> 
  <div className='single-team'>

<img src= {teamImg1} alt="" />
<p>Sara Spice</p>
<p className='p-2'>Sara Spice</p>
<p >Pastry Chef</p>

<hr />
<p>Sara’s mastery of spices and dedication makes every dish unforgettable.</p>

</div>

<div className='single-team'>

<img src= {teamImg2} alt="" />
<p>Sara Spice</p>
<p className='p-2'>Pastry Chef</p>

<hr />
<p>Sara’s mastery of spices and dedication makes every dish unforgettable.</p>

</div>
<div className='single-team'>

<img src= {teamImg1} alt="" />
<p>Sara Spice</p>
<p className='p-2'>Pastry Chef</p>

<hr />
<p>Sara’s mastery of spices and dedication makes every dish unforgettable.</p>

</div>
<div className='single-team'>

<img src= {teamImg4} alt="" />
<p>Sara Spice</p>
<p className='p-2'>Pastry Chef</p>

<hr />
<p>Sara’s mastery of spices and dedication makes every dish unforgettable.</p>

</div>
  </div>




</div>
    </section>
    
  )
}

export default AboutUs