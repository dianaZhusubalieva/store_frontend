import { Button } from "react-bootstrap";
import React, { useContext, useEffect } from "react";
import { productContext } from "../../contexts/ProductContext";
import "./pagination.css";

const Pagination = () => {
  const { products, getProducts, countOfProducts } = useContext(productContext);
  const pageNumbers = [];
  const handlePage = (page) => {
    getProducts(page.toString());
  };
  useEffect(() => {
    getProducts();
  }, []);
  // console.log(countOfProducts)
  for (let i = 1; i <= Math.ceil(countOfProducts / 3); i++) {
    pageNumbers.push(i);
  }
  console.log(products);
  return (
    <div className="pagination">
      <ul>
        {pageNumbers.map((page) => (
          <li key={page}>
            <Button
              // variant="outline-success"
              style={{
                backgroundColor: "rgb(15, 15, 15)",
                border: "none",
                padding: "0 20px",
                display: "inline-block",
                height: "30px",
                marginTop: "13px",
                marginRight: "10px",
                color: "white",
              }}
              onClick={() => {
                handlePage(page);
              }}
            >
              {page}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
