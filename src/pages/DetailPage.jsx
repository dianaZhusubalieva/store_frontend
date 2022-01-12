import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comment from "../components/comments/Comment";
import { productContext } from "../contexts/ProductContext";

const DetailPage = () => {
  const { getProductsToEdit, productToEdit } = useContext(productContext);
  const params = useParams();
  useEffect(() => {
    getProductsToEdit(params.id);
  }, []);
  let user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <div>
        {productToEdit ? (
          <>
            <div className="detail-page">
              <div className="detailImage">
                <img width="300px" src={productToEdit.image} alt="" />
              </div>

              <div className="movie-desc">
                <h3>{productToEdit.name}</h3>
                <p>{productToEdit.description}</p>
              </div>
            </div>
          </>
        ) : (
          <h2>loading...</h2>
        )}
      </div>
      <Comment />
    </>
  );
};

export default DetailPage;
