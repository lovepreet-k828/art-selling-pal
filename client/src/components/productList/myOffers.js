import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";
import Loading from '../loading';

export default function MyOffers({ titl, folder }) {
  const [loaded,setLoaded] = useState(false);
  const path="http://localhost:5000";
  const image =       {
    name:"photo",
    placeholder:"Choose image file",
    type:"file",
  }; 

  const category = {
    name:"category",
    type:"text",
  };
  const sell = {
    name:"sell",
    type:"text",
  };

  const content = [
    {
      name:"name",
      placeholder:"Artwork name",
      type:"text",
    },
    {
      name:"price",
      placeholder:"Price in NFT",
      type:"number",
    },
    {
      name:"password",
      placeholder:"Your password",
      type:"password",
    },
  ];

  var [s, ss] = useState(false);

  const options = ['Polygon', 'Vector', 'Street'];
  var ops = options.map((op) => {
    return (
      <option value={op}>{op}</option>
    )
  })

  const currentUser = useSelector((state) => state.currentUser.user);

  const [inputs, setInputs] = useState({ name: "", category: titl, photo:"", price:0.0, 
  password:"", creatorId: currentUser._id, creatorName: currentUser.fName+" "+currentUser.lName, sell:"Yes"});
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handlePhoto = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInputs(values => ({ ...values, [name]: value }))
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoaded(true);
    if(!currentUser._id){
      alert('You are not logged in!!');
      setLoaded(false);
    }
    else {
      const entries = Object.entries(inputs);
    // console.log("entries",entries)
    const formData = new FormData();
    for(const entry of entries){
      formData.append(entry[0],entry[1])
    // console.log(entry[0],entry[1]);
    }
    // console.log("formData",formData)
    axios.post(`${path}/art/addNewArt`, formData)
    .then(res=>{
      alert('Art uploaded Successfully!!')
      // console.log(res)
      setLoaded(false)
    })
    .catch(err => {
      alert('Internal error occured! try again later.')
      // console.log(err)
      setLoaded(false)
    });}
  }

  return (
    <>
    {
      (loaded)?
      <Loading />
      :
      <>
      <button onClick={() => { ss(!s) }} className='btn btn-primary mx-auto'
        style={{ maxHeight: "10rem", minWidth: "80%", minHeight: "3rem"}}>
        Upload your artwork
      </button>
      
        {s && <div className='mt-3 mx-auto border border-dark p-3 heading'
          style={{ minWidth: "80%", maxWidth: "80%", color:"black" }}>
          <div className="h5 text-center" >Enter following details of your artwork</div>
          <form onSubmit={handleSubmit} encType='multipart/form-data'>
                          
                <div className="form-group mt-3">
              <label htmlFor={`${category.name}Id`}>Choose category of artwoek</label>
              <select id={`${category.name}Id`} className="form-select form-control" aria-label="Default select example"
                value={inputs[category.name]}
                onChange={handleChange}
                name={category.name}
              >
                {ops}</select>
            </div>

            <div className="form-group mt-3">
              <label htmlFor={`${sell.name}Id`}>Want to sell this art</label>
              <select id={`${sell.name}Id`} className="form-select form-control" aria-label="Default select example"
                value={inputs[sell.name]}
                onChange={handleChange}
                name={sell.name}
              >
                {['Yes','No'].map((op) => <option value={op}>{op}</option>)}
                </select>
            </div>
              
              
            <div className="form-group mt-3">
              <label htmlFor={`${image.name}Id`}>Upload image of artwork</label>
              
              <input type={image.type} className="form-control" id={`${image.name}Id`} placeholder={image.placeholder}
                accept = "image/*"
                onChange = {handlePhoto}
                name={image.name} />
            
            </div>

              {content.map((field) => {
return (
                <div className="form-group mt-3">
              {
              field.name==='password'
              ?
                <label htmlFor={`${field.name}Id`}>Enter your password</label>
              :
              <label htmlFor={`${field.name}Id`}>Enter {field.name} of artwork</label>
              }
              <input type={field.type} className="form-control" id={`${field.name}Id`} placeholder={field.placeholder}
                value={inputs[field.name]}
                onChange = {handleChange}
                name={field.name} />
            
            </div>
            )
            })}
            
            
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
          </form>
        </div> }
    </>
  }
  </>
  );
}