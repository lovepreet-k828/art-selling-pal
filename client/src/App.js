import React, { useState } from "react";
import Head from "./components/header/header.js";
import SignUp from "./components/authentication/signUp.js";
import Profile from "./components/profile/profile.js";
import Details from "./components/productList/details.js";
import ArtDetail from "./components/productList/artDetails.js";
import Footer from "./components/footer/footer.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/about/about.js";
import Categories from "./components/categories/categories.js";
import Owner from "./components/owner/owner.js";
import Home from "./components/home.js";
import Loading from "./components/loading.js";
// import { useLocation } from "react-router-dom";

function App() {
  const categories = ["polygon", "vector", "street"];

  const [isLoaded, setLoaded] = useState(true);
  // const [artId, setArtId] = useState("");
  // window.onload = function exampleFunction() {
  //   setTimeout(setLoaded(true), 3000);
  // };

  // const location = useLocation();

  // useEffect(() => {
  //   setLoaded(false);
  //   setTimeout(setLoaded(true), 5000);
  // }, [location.pathname]);

  return (
    
    <>
      <Router>
        <div
          style={{
            minWidth: "100vh",
            overflowX: "scrole",
            backgroundImage:
              "linearGradient(95deg, #1151E1 0%, #2BEBDE 40%, #E9EEB5 100%)",
            backgroundRepeat: "noRepeat",
          }}
        >
          <Head />
          <div style={{marginTop:"2%", position:"relative"}}>
          <Routes >
            <Route
              path="/"
              element={<Home/>} />
            <Route
              path="/categories"
              element={<Categories />}
            />
            <Route
              path="/signUp"
              element={<SignUp /> }
            />
            <Route
              path="/profile"
              element={<Profile /> }
            />
            {categories.map((category) => (
              <Route
                path={`/${category}`}
                element={<Details />}
              />
            ))}
            <Route
              path="/aboutUs"
              element={<About />}
            />
            <Route
              path="/artDetail"
              element={<ArtDetail />}
            />
            <Route path="/owner" element={<Owner />} />
          </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>  
    );
}

export default App;