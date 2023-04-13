import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

var profilePic = process.env.PUBLIC_URL + `/images/vegetables.jpg`;

export default function Owner() {
    const user = useSelector((state) => state.currentOwner.owner);

    return (

        <div className='d-flex justify-content-center'>


            <div className="col-md-4 border-right">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                    <img className="rounded-circle mt-5" width="150px" src={profilePic} alt="owner"/>
                    <h4 style={{ color: "green", fontWeight: "bold" }} className="text-black-50">{user['name']}</h4>
                    <h4 style={{ color: "green", fontWeight: "bold" }}> </h4></div>
            </div>
            <div className="col-md-4 border-right">
                <div className="p-3 py-5">
                    <div className="d-flex justify-content-between flex-grow-1 align-items-center mb-3">
                        <h4 className="text-right border px-3 py-1" style={{ fontWeight: "bold" }}>Owner Contact Details</h4>
                    </div>
                    <div className="row my-2"><h4 className="labels">Name</h4>
                        <h4 style={{ color: "green", fontWeight: "bold" }}>{user['name'] || ''}</h4></div>
                    <div className="row my-2"><h4 className="labels">Mobile Number</h4>
                        <h4 style={{ color: "green", fontWeight: "bold" }}>{user['mobileCode']+' '+user['mobileNo'] || ''}</h4></div>
                    <div className="row my-2"><h4 className="labels">Street\House Number</h4>
                        <h4 style={{ color: "green", fontWeight: "bold" }} > {user['streetName'] || ''}</h4></div>
                    <div className="row my-2"><h4 className="labels">City</h4>
                        <h4 style={{ color: "green", fontWeight: "bold" }}> {user['cityVillage'] || ''}</h4></div>
                    <div className="row my-2"><h4 className="labels">State</h4>
                        <h4 style={{ color: "green", fontWeight: "bold" }}> {user['state'] || ''}</h4> </div>

                    <div className="row my-2"><h4 className="labels">Country</h4>
                        <h4 style={{ color: "green", fontWeight: "bold" }}>{user["country"] || ''}</h4> </div>

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
                        <i className="fa fa-plus"></i>&nbsp;Owner Experience</h4></div><br />
                <div className="col-md-12"><h4 className="labels">Experience in Farming</h4>
                    <h4 style={{ color: "green", fontWeight: "bold" }}> {user['experience'] || ''} years</h4></div> <br />
                <div className="col-md-12">
                    <h4 className="labels">Customer Review Rating</h4>
                    <h4 style={{ color: "green", fontWeight: "bold" }}> 4.5 </h4> </div>
            </div>


        </div>

    );
}
