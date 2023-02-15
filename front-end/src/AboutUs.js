import { Link } from 'react-router-dom'
import './AboutUs.css'
import image from "./pic.jpg"

const AboutUs = props =>{
    return(
        <>
        <h1>I'm Nancy Sun</h1>
        <p>I'm a math and computer science double major at CAS.</p>
        <p>In my free time, I enjoy bouldering, orienteering, and gaming. 
            I also traveled a lot, mostly on my own.</p>
        
        <div><img style={{ width: "50%", height: "50%" }} src={image} alt="pic" /></div>
        </>
    )
}

export default AboutUs