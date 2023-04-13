import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./details.css";
import "./detail.sass";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import MyOffers from "./myOffers";
import axios from "axios";
import Card from "./card";
import  Loading from '../loading';

export default function Details() {
  
  const currentUser = useSelector((state) => state.currentUser.user);

  const loc = useLocation();
  var titl = loc.pathname;
  titl = titl.substring(1);
  const path="http://localhost:5000";
  // var vegetables = [
  //   { photo: "deer_in_forest" },
  //   { photo: "desert_camp" },
  //   { photo: "doctor_strange" },
  //   { photo: "foxes_on_bonfire" },
  //   { photo: "icy_mountain" },
  //   { photo: "mighty_lion" },
  //   { photo: "olive_drab_low_poly" },
  //   { photo: "parrot" },
  //   { photo: "red_planet" },
  //   { photo: "reindeer" },
  //   { photo: "rottweiler" },
  //   { photo: "waterfalls" }
  // ];

  var options = ['polygon','free','modern'];
  var folder = titl;

  const [defaultList, setDL] = useState([]);
  const [offerList, setOL] = useState([]);
  const [loaded1,setLoaded1] = useState(true);
  const [loaded2,setLoaded2] = useState(true); 

  const variety = { category: folder,id:currentUser._id };
  axios.post(`${path}/art/`, variety)
    .then(res => {
      setDL(res.data)
      setLoaded1(false)
    })
    .catch((err) => { 
      console.log('error: ', err) 
      setLoaded1(false)
    });

  axios.get(`${path}/art/${currentUser._id}`)
    .then(res => {
      setOL(res.data)
      setLoaded2(false)
    })
    .catch((err) => { 
      console.log('error: ', err) 
      setLoaded2(false)
    });

  // useEffect(()=>{
  //   defaultList = go(defaultProducts);
  // }, [defaultProducts]);

  // setDL(vegetables);

  var mystyle = {
    width:"75%",
    borderRadius: "5px",
  };

  // var list_of = vegetables.map((product) => (
  //   <Card key={product["image"]} art={product} />
  // ))
  return (
    <>
    {(loaded1 || loaded2)?
      <Loading/>
      :
      <>
      <div className="mx-auto outerContainer" style={mystyle}>
        <div
          className="h3 py-3 d-flex justify-content-center mx-auto mt-1 text-capitalize data-splitting heading"
          style={mystyle}
        >
          {titl} Artworks
        </div>
        <div className="container p-3 d-flex flex-row flex-wrap">
          <Link to="/categories">
            <button
              className="btn btn-primary mr-1"
              style={{
                minHeight: "3rem",
                minWidth: "15%",
              }}
            >
              Go back
            </button>
          </Link>

          <MyOffers options={options} titl={titl} folder={folder} />
</div>
</div>
<div
            className="h5 py-3 d-flex justify-content-center mx-auto mt-3 text-capitalize heading"
            style={mystyle}
          >
            Your Artworks
          </div>
<div className="mx-auto outerContainer" style={mystyle}>
          {offerList && offerList.map((product) => <Card key={product["_id"]} art={product} />
          )}
</div>
<div className="h5 py-3 d-flex justify-content-center mx-auto mt-3 text-capitalize heading"
            style={mystyle}
          >
            Other's Artworks
          </div>
<div className="mx-auto outerContainer" style={mystyle}>
          
          {defaultList && defaultList.map((product) => <Card key={product["photo"]} art={product} />
          )}
        </div>

    </>
  }
  </>
  );
}
