import banner from '../bannerVideo.mp4';
import './Banner.scss';
import { FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const Banner = () => {

  return (
    <div id='banner'>
        <video autoPlay muted>
          <source src={banner} type='video/mp4' />
        </video>
        <div id='bannerDetails'>
          <h1 id='bannerTitle'>AARYA</h1>
          <div>
          <ul id='extralDetails'>
            <li id='first'>2024</li>
            <li>3 Seasons</li>
            <li>7 Languages</li>
            <li id='rating'><span>U/A 16+</span></li>
          </ul>
          </div>
          <p id="bannerDescription">PART 2 - ANTIM VAAR OUT. The Sherni is back again, and she is all set to end it all. Will she succeed?</p>
          <p id="bannerGenre">Drama | Thriller | Mystery | Crime</p>
          <div id='buttons'>
            <button id="bannerPlayButton"><FaPlay />Watch Now</button>
            <FaPlus id='addTo'/>
          </div>
          
        </div>
    </div>
  )
}

export default Banner