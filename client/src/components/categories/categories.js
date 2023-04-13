import React from "react";
import "./categories.css";
import "./category.scss";
// import "./category.css";
import { Link } from "react-router-dom";

export default function Categories() {
  // loading(false)
  // setTimeout(loading(true),5000);
  var categories = [
    {
      title: "POLYGON",
      image: 'polygon/panda.webp',
      body: "All polygon artworks",
      button: "See all polygon artworks",
      link: '/polygon',
    },
    {
      title: "VECTOR",
      image: 'vector/iron_man.webp',
      body: "All vector artworks",
      button: "See all vector artworks",
      link: '/vector',
    },
    {
      title: "STREET",
      image: '/street/3d_boy_curtain.webp',
      body: "All street artworks",
      button: "See all street artworks",
      link: '/street',
    },
  ];

  // const [count, setCount] = useState(0);
  
  //   setCount((count+1)%10);

  return (
  <>
{/* <div cl */}
      <div className="mx-auto mb-3 py-3 quote heading" >
        <p className="text-center">
          <q>
          If I could say it in words there would be no reason to paint.
          </q><br /> - Edward Hopper
        </p>
      </div>
      {/* <!-- top 3 Blogs start here --> */}
      <div className="h3 py-3 d-flex justify-content-center mx-auto text-capitalize heading quote">Artwork categories</div>
      {/* <!-- Blog Card 1 --> */}
      <div className="cardContainer d-flex flex-row flex-wrap bd-highlight my-3 mx-auto justify-content-center align-items-center"
      style={{backgroundImage: `linear-gradient(60deg, rgb(255 255 0) 10%, rgb(0 0 255) 60%, rgb(255 0 255) 80%)`}}>
        {categories.map(category => {
          return (
            <div className="card mx-3 my-5">
              <img src={process.env.PUBLIC_URL + `/images/${category['image']}`} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{category['title']}</h5>
                <p className="card-text">{category['body']}</p>
                <Link to={category['link']} ><span className="btn btn-primary">{category['button']}</span></Link>
              </div>
            </div>
          )
        })
        }
      </div>
      </>
  );
}

