import React from "react";
import "./signUp.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Country, State } from "country-state-city";
import Loading from '../loading';

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  // setTimeout(loading(true), 5000);
  const [countryCode, setCCode] = useState("IN");
  const image =       {
    name:"photo",
    placeholder:"Choose image file",
    type:"file",
  };


  const countries = Country.getAllCountries();
  var country = countries.map((count) => {
    return <option value={count.isoCode}>{count.name}</option>;
  });

  const states = State.getStatesOfCountry(countryCode);
  var state = states.map((stat) => {
    return <option value={stat.name}>{stat.name}</option>;
  });

  const [inputs, setInputs] = useState({ state: "Punjab" });
  //   {
  //     "name": "ttmklg1_0",
  //     "experience": "15",
  //     "country": "Bhutan",
  //     "state": "Himachal Pradesh",
  //     "cityVillage": "hsjfjks",
  //     "streetName": "4444",
  //     "password": "1122",
  //     "mobileCode": "1122",
  //     "mobileNo": "1122"
  // }

  const [CPass, setCPass] = useState("");

  const handleChange = (event) => {
    var maxLength = 50;
    const name = event.target.name;
    var value = event.target.value;
    if (value.length <= maxLength) {
      if (name === "country") {
        setCCode(value);
        setInputs((values) => ({ ...values, ['state']: states[0].name }));
      }
      else 
      setInputs((values) => ({ ...values, [name]: value }));
      console.log(value,inputs);
    }
  }; 

  const handleSubmit = (event) => {
    event.preventDefault();

    if (CPass !== inputs["password"]) {
      alert("Confirm password is not matching");
      // console.log("Confirm password is not matching=>",CPass, inputs);  
    } else {
      // console.log(inputs, "<inputs are end here>", inputs["name"]);
setLoading(true);
      const entries = Object.entries(inputs);
      const formData = new FormData();
    for(const entry of entries){
      formData.append(entry[0],entry[1])
    // console.log(entry[0],entry[1]);
    }
    formData.append('country',Country.getCountryByCode(countryCode)['name']);
    // console.log('country',Country.getCountryByCode(countryCode)['name']);
      axios
        .post("/user/addNewUser", formData)
        .then((res) => {
          console.log(res);
          setCPass("");
          setInputs({ });
          alert("Account created successfully! now login to continue.");
          setLoading(false);
        })
        .catch((err) => {
          // console.log("Error in Signup: ", err);
          alert("Internall error occured try again!");
          setLoading(false);
        });
    }
  };
  const single_form_fields = [
    [
      {
        name: "fName",
        type: "text",
        label: "Enter Your first name",
        placeholder: "First name",
      },
      {
        name: "lName",
        type: "text",
        label: "Enter Your last name",
        placeholder: "Last name",
      },
    ],

    [
      {
        name: "country",
        label: "Enter Your country",
        placeholder: "country",
        value: countryCode,
        options: country,
      },
      {
        name: "state",
        label: "Enter Your state",
        placeholder: "state",
        value: inputs["state"],
        options: state,
      },
    ],
    [
      {
        name: "cityVillage",
        type: "text",
        label: "Enter Your city / village",
        placeholder: "city or village",
      },
      {
        name: "email",
        type: "email",
        label: "Enter Your Email",
        placeholder: "abc@email.com",
      },
    ],
    [
      {
        name: "password",
        type: "password",
        label: "Enter Your Password",
        placeholder: "password",
      },
      {
        name: "cPassword",
        type: "password",
        label: "Enter your password again",
        placeholder: "password",
      },
    ],
  ];
  const handlePhoto = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInputs(values => ({ ...values, [name]: value }))
  }

  return ( 
      <>
      {
        (loading)?
        (
        <Loading/>
        ): (
        <>
      <div
        className="form-signup-heading h3 d-flex my-5 mx-auto"
        style={{padding:"1%",
        backgroundImage: `linear-gradient(135deg, #FDEB71 5%, #F8D800 60%,#FFD800 100%)`,
        boxShadow: "5px 5px 5px #FDEB71",
        borderRadius:"2%"
        }}
      >
        Enter following details to create your account
      </div>

      <form encType='multipart/form-data'
        className="form-signup row g-3 d-flex my-5 mx-auto"
        style={{ boxShadow: "5px 5px 5px #FDEB71", borderRadius:"2%",
        backgroundImage: `linear-gradient(135deg, #FDEB71 5%, #F8D800 60%,#FFD800 100%)` }}
        onSubmit={handleSubmit}
      >
        {single_form_fields.map((field_pair) => {
          // setCount(count+1)
          return (
            <div className="row mt-3">
              {field_pair.map((field, index) => {
                return (
                  <div className="col-md-6" key={index}>
                    <label htmlFor="inputCountry" className="form-label">
                      {field.label}
                    </label>
                    {field.name === "country" || field.name === "state" ? (
                      <select
                        id={`input${field.name}`}
                        className="form-select"
                        name={field.name}
                        value={field.value || ""}
                        onChange={handleChange}
                        required
                      >
                        {field.options}
                      </select>
                    ) : (
                      <input
                        className="form-control"
                        placeholder={field.placeholder}
                        id={`${field.name}Id`}
                        type={field.type}
                        name = {field.name}
                        value={
                          field.name === "cPassword"
                            ? CPass
                            : inputs[field.name]
                        }
                        onChange={
                            (field.name === "cPassword")
                            ? (e) => setCPass(e.target.value)
                            : handleChange
                            }
                        required
                      />
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
        <div className="form-group" style={{width:"80%"}} >
              <label htmlFor={`${image.name}Id`}>Your profile image</label>
              
              <input type={image.type} className="form-control" id={`${image.name}Id`} placeholder={image.placeholder}
                accept = ".png, .jpg, .jpeg"
                onChange = {handlePhoto}
                name={image.name} />
            
            </div>

        <div className="leftSide row mt-3">
          <div className="col-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
                required
              />
              <label className="form-check-label" htmlFor="gridCheck">
                <strong>By checking this check box, I am agree that</strong>
                <ul>
                  <li>
                    I have read these{" "}
                    <Link to="/aboutUs" style={{ color: "white" }}>
                      terms and conditions
                    </Link>
                    .
                  </li>
                  <li>
                    All the information provided above is correct as per my
                    knowledge.
                  </li>
                </ul>
              </label>
            </div>
          </div>
        </div>

        <div className="leftSide d-flex mt-3 mx-auto justify-content-center">
          <button type="submit" className="btn btn-primary mb-3">
            Create my account
          </button>
        </div>
      </form>
    </>
        )
      }
      </>
  );
}
