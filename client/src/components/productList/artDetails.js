import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {signIn} from "../../features/user";
import axios from "axios";
import Loading from '../loading';

export default function ArtDetail() {
    const artData = useState(useSelector((state) => state.currentArt.art));
    const art = artData[0];
    const navigate = useNavigate();
    const userData = useState(useSelector((state) => state.currentUser.user));
    const [loaded, setLoaded] = useState(false);
    const user = userData[0];
    const dispatch = useDispatch();
    console.log("ourart=> ",art)
    const path="http://localhost:5000";
//     loading(false)
//  setTimeout(loading(true),5000);

 const inputs = {
    artName:art.name,
    artId:art._id,
    oldOwnerId:art.ownerId,
    oldOwnerName:art.ownerName,
    newOwnerId:user._id,
    newOwnerName:user.fName+" "+user.lName,
    price : parseFloat((art.price)?art.price.$numberDecimal:0),
    basePrice: parseFloat((art.basePrice)?art.basePrice.$numberDecimal:0),
    count:art.count,
    nft:user.nft,
 }
 console.log("user: ",user)
 console.log("art: ",art)
 console.log("inputs: ",inputs)
const doPayment = ()=>{
    setLoaded(true)
    if(inputs.price>user.nft){
        alert("You have not enough nft to buy this art.");
        setLoaded(false);}
        else if(art.sell===false){
            alert("This art is not to be sold.");
            setLoaded(false);
        }
        else if(!user._id){
            alert("You are not logged in!")
            setLoaded(false);
        }
        else if(inputs.newOwnerId===inputs.oldOwnerId){
            alert("You are already owner of this art!")
            setLoaded(false);
        }
    else {
        console.log(inputs)
 axios.post(`${path}/payment/addPayment`, inputs)
    .then(res => {
        dispatch(signIn(res.data[0]))
        console.log(res,"hello", res.data)
        alert("success: art bought succesfully!")
        navigate('profile')
        setLoaded(false)
    })
    .catch((err) => { 
        alert('Internal error occured! try again later.')
        setLoaded(false)
     });
}
}
    return (
        <>
        {(loaded)?
            <Loading/>
            :
            <div className="quote heading" style={{width:"80%", backgroundColor:"gold",color:"black", fontSize:"large" , marginLeft:"10%", paddingTop:"5%"}}>
        <div className="card m-auto my-3" style={{ boxShadow: "0 5px 5px rgba(0,0,0,0.5)", }}>
            <img className="card-img-top" src={`${art.photo}`} alt=".." />
            <div >
                <h5 className="card-title p-3 text-capitalize">{art.name}</h5>
            </div>
        </div>
        <div className="d-flex justify-content-center p-1">
            <div>
            <div>
                    Category: {art["category"]}
                </div>
                <div>
                    Creater: {art["creatorName"]}
                </div>
                <div>
                    Owner: {art["ownerName"]}
                </div>
                <div>
                    Price: {(art["price"])?art["price"]["$numberDecimal"]:""}
                </div>
                <div>
                    Number of times sold: {art["count"]}
                </div>
                
                <button onClick={doPayment} className="btn btn-primary m-3" >
                        Buy this artwork</button> 

            </div>
        </div>
        </div>
    }
    </>
    )
}
