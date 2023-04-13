import React from 'react'

function About() {
  return ( 
    <div className='mt-3 mx-auto p-3 my-5 heading'
      style={{ borderRadius: "20px", width: "80%" }}>

      <div className="h2 text-center mx-auto my-2" style={{ width: "80%", fontWeight: "bold" }} >
        About us</div>
      <div className="h5 text-center mx-auto my-5" style={{ width: "80%",  fontWeight: "bold" }} >
        This web app is build for Digital artists to provide them a
        platform to connect with their customers directly and get the best value of their
        artworks. This webapp will help digital art collector also to find artworks easily.</div>
      
      <div className="h5 text-center mx-auto my-5" style={{ width: "80%",  fontWeight: "bold" }} >
        Our team wishes this platform fullfill its user's above mentioned needs and add value in their
        bussiness, Best of luck</div>
      <div className="h3 text-right ml-auto mr-0" style={{ width: "80%", fontWeight: "bold" }} >
        team Art Selling Pal.
      </div>
    </div>
  )
}

export default About