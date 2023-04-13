import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { getOwner } from '../../features/owners';
import "./details.css";
import { artDetails } from '../../features/art';
// import { Link } from 'react-router-dom';

export default function Card({ art }) {
    // const [flag,setflag] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const artData = useState(useSelector((state) => state.currentArt.art));
//     const handleClick = ()=> {
//         (art) => dispatch(artDetails(art)) 
//             .then(()=> navigate('/artDetail'))
//             .catch(()=> navigate('/artDetail'))
// }
// if(flag){
//     navigate('/artDetail')
// }
// useEffect(()=>console.log(artData),[artData])
    return (
        <div className="card m-auto my-3" style={{backgroundImage: "inear-gradient(160deg, rgb(43, 255, 0) 10%, rgb(0 0 255) 10%)"}}>
            <img className="card-img-top" src={`${art.photo}`} alt=".." />
            <div >
                <h5 className="card-title p-3 text-capitalize">{art.name}</h5>
                
                <div className="d-flex justify-content-center pb-1">
                     <button onClick={
                        () => {
                            dispatch(artDetails(art)) 
                            console.log(artData)
                            navigate('/artDetail')
                }
            }
                    className="btn btn-primary mb-3" >
                        More Info</button> 
                        
             </div> 
            </div>
        </div>
    )
}
