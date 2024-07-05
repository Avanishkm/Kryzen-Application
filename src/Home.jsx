import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import "./home.css"

const Home = () => {
  const [product, setProdect] = useState([]);
  const [newProduct, setNewProduct] = useState({ title: "", thumbnailUrl: "" });
  const getProducts = async () => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
    // const data = await response.json();
    setProdect(await response.json());
    }catch(error){
        console.log("error",error);
    }
    
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div className="productList">List Of Product</div>
            <Link to={"/login"}>
            <button
              type="submit"
              className="register_register"
            >
              Log out
            </button>
            </Link>   
          
      <div className="container">
        <div className="product-item">
          {product.map((currElem) => {
            return (
              <div className="prod-id" key={currElem.id}>
                <div>
                  <div className="image">
                    <img src={currElem.thumbnailUrl} className="rounded" />
                  </div>
                  <div className="items">
                    <h4>Avansih</h4>
                    <span className="title">{currElem.title}</span>
                    <div>
                      <div className="main">
                        <span className="span1"></span>
                      </div>
                      <div className="main1">
                        <span className="span2"></span>
                      </div>
                      <div className="main2">
                        <span className="span3"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <center>
            <Link to={"/login"}>
            <button
              type="submit"
              className="register_register"
            >
              Log out
            </button>
            </Link>
            
          </center>
    </>
  );
};

export default Home;
