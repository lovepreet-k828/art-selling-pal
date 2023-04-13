import React,{useState} from 'react'
import { Link } from "react-router-dom";
import Slideshow from './header/slider';
// import Text from './text/text';
import Loading from './loading';
import {useSelector} from 'react-redux'

function Home() {
  const loading =true;
//   setLoading(false);
//   window.onload = function exampleFunction() {
//   setLoading(false);
//     // Function to be executed
// }
const user = useSelector(state=>state.currentUser.user);
console.log(user)
  return (
      <>
  <div style={{display:"flex"}}>
  <div className="heading quote" style={{margin:"5%",padding:"5%",fontWeight:"bold"}}>
    {/* <Text/> */}
    <h1>
    A platform for all digital artists and art collectors
    </h1>
  </div>
    <Slideshow style={{position:"relative"}}/>
    </div>
    <div className=' mx-auto p-3 heading'
      style={{ borderRadius: "10px", marginTop: "3%", width: "80%" }}>

      {(user._id) ? <><h2>See your profile</h2>
        <Link to="/profile" ><span type="submit" className="btn btn-primary mb-3 text-capitalize">
          profile
        </span></Link></>
        :
        <><h2>Do login to explore more opperturnities</h2>
          <Link to="/SignUp" ><span type="submit" className="btn btn-primary mb-3 text-capitalize">
            connect with us
          </span></Link></>
      }
    </div>
    <div className='mx-auto p-3 heading'
      style={{ borderRadius: "10px", marginTop: "3%", width: "80%" }}>
      <h2>Explore our market section to connect with owner or customers</h2>
      <Link to="/categories" ><span type="submit" className="btn btn-primary mb-3 text-capitalize">
        visit markit
      </span></Link>
    </div>
    <div className=' mx-auto p-3 heading'
      style={{ borderRadius: "10px", marginTop: "3%", width: "80%" }}>
      <h2>Want to know more about us</h2>
      <Link to="/aboutUs" ><span type="submit" className="btn btn-primary mb-3 text-capitalize">
        About us
      </span></Link>
    </div>

  </>
   )
}

export default Home