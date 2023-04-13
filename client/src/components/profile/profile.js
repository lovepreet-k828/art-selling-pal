import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from '../loading'
import Card from '../productList/card'
import axios from 'axios'

export default function Profile() {
    const user = useSelector((state) => state.currentUser.user);
    // console.log("ouruser=> ",user)
    const path="http://localhost:5000";
    const [myCreatedArt, setMCA] = useState([]);
    const [myOwnedArt, setMOA] = useState([]);
  const [loaded1,setLoaded1] = useState(true);
  const [loaded2,setLoaded2] = useState(true); 
  var mystyle = {
    width:"75%",
    borderRadius: "5px",
  };

//   const variety = { category: folder,id:user._id };
  axios.get(`${path}/art/myCreatedArt/${user._id}`)
    .then(res => {
      setMCA(res.data)
      setLoaded1(false)
    })
    .catch((err) => { 
      // console.log('error: ', err) 
      setLoaded1(false)
    });

  axios.get(`${path}/art/${user._id}`)
    .then(res => {
      setMOA(res.data)
      setLoaded2(false)
    })
    .catch((err) => { 
      // console.log('error: ', err) 
      setLoaded2(false)
    });

    return (
<>
        <div className='d-flex justify-content-center' style={{backgroundImage: `linear-gradient(135deg, #FDEB71 5%, #F8D800 60%,#FFD800 100%)`,
        marginRight:"5%", marginLeft:"5%",borderRadius:"2%", boxShadow:"0 10px 10px #FDEB71"}}>


            <div className="col-md-4 border-right">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                    <img className="rounded-circle mt-5" width="150px" src={`${user.photo}`} alt="user"/>
                    <h4 style={{ color: "white", fontWeight: "bold" }} className="text-black-50">{user['fName']}</h4>
                    <h4 style={{ color: "white", fontWeight: "bold" }}> </h4></div>
            </div>
            <div className="col-md-4 border-right">
                <div className="p-3 py-5">
                    <div className="d-flex justify-content-between flex-grow-1 align-items-center mb-3">
                        <h4 className="text-right border px-3 py-1" style={{ fontWeight: "bold" }}>Your Contact Details</h4>
                    </div>
                    <div className="row my-2"><h4 className="labels">Name</h4>
                        <h4 style={{ color: "white", fontWeight: "bold" }}>{user['fName'] + ' '+user['lName'] || ''}</h4></div>
                    <div className="row my-2"><h4 className="labels">Email</h4>
                        <h4 style={{ color: "white", fontWeight: "bold" }}>{user['email'] || ''}</h4></div>
                    <div className="row my-2"><h4 className="labels">City/Village</h4>
                        <h4 style={{ color: "white", fontWeight: "bold" }}> {user['cityVillage'] || ''}</h4></div>
                    <div className="row my-2"><h4 className="labels">State</h4>
                        <h4 style={{ color: "white", fontWeight: "bold" }}> {user['state'] || ''}</h4> </div>

                    <div className="row my-2"><h4 className="labels">Country</h4>
                        <h4 style={{ color: "white", fontWeight: "bold" }}>{user["country"] || ''}</h4> </div>

                    <div className="mt-5 text-center">
                        <Link to="/topOfferes" >
                            <div style={{ fontWeight: "bold", boxShadow: "0 5px 5px rgba(0,0,0,0.5)" }} className="btn btn-primary profile-button" type="button">Go back</div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="col-md-4 p-3 py-5">
                <div className="d-flex justify-content-between flex-grow-1 align-items-center experience">
                    <h4 style={{ fontWeight: "bold" }} className="border px-3 py-1 ">
                        <i className="fa fa-plus"></i>&nbsp;Account info</h4></div><br />
                <div className="col-md-12"><h4 className="labels">NFT Balance</h4>
                    <h4 style={{ color: "white", fontWeight: "bold" }}> {user['nft'] || ''} </h4></div> <br />
            </div>


        </div>

        {(loaded1 || loaded2)?
        <Loading />
        :
            <>
            <div
            className="h5 py-3 d-flex justify-content-center mx-auto mt-3 text-capitalize heading"
            style={mystyle}
          >
            Arts created by you
          </div>
<div className="mx-auto outerContainer" style={mystyle}>
          {myCreatedArt && myCreatedArt.map((product) => <Card key={product["_id"]} art={product} />
          )}
</div>

<div
            className="h5 py-3 d-flex justify-content-center mx-auto mt-3 text-capitalize heading"
            style={mystyle}
          >
            Arts owned by you
          </div>
<div className="mx-auto outerContainer" style={mystyle}>
          {myOwnedArt && myOwnedArt.map((product) => <Card key={product["_id"]} art={product} />
          )}
</div>
            </>
        }
        </>
    );
}
