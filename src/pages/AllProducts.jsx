//! форма при добавлении фильма

import React, { useEffect, useState } from "react";

import { Formik } from "formik";
import { useContext } from "react";
// import { adminContext } from "../contexts/AdminContext";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, InputGroup, Card, FormControl } from "react-bootstrap";
// import { createProduct } from "../redux/actions";

// import { useDispatch } from "react-redux";
import { productContext } from "../contexts/ProductContext";
import Pagination from "../components/Pagination";

const AllProducts = () => {
  const { createProduct, getProducts, products, deleteProduct } =
    useContext(productContext);
  const navigate = useNavigate();

  const [brandValue, setBrandValue] = useState("");
  let object = new URLSearchParams(window.location.search);
  let user = JSON.parse(localStorage.getItem("user"));

  function filterProducts(key, value) {
    object.set(key, value);
    let newUrl = `${window.location.pathname}?${object.toString()}`;
    navigate(newUrl);
    getProducts();
    setBrandValue(value);
  }
  useEffect(() => {
    setBrandValue(object.get("brand"));
  }, [object]);

  return (
    // ! FILTER
    <div className="all_products">
      <div className="mainFilter" name="brand">
        <div>
          {/* <InputGroup className="mb-3 createComment">
            <FormControl
              rows={2}
              as="textarea"
              placeholder="Поиск товара по ключевым словам"
              maxLength="140"
              onChange={(e) => {
                filterProducts("q", e.target.value);
              }}
            />
          </InputGroup> */}
        </div>
        <label class="rad-label">
          <input
            type="radio"
            class="rad-input"
            name="rad"
            value="new"
            onChange={(e) => {
              navigate("/products");
              getProducts();
            }}
          />
          <div class="rad-design"></div>
          <div class="rad-text">all products</div>
        </label>

        <label class="rad-label">
          <input
            type="radio"
            class="rad-input"
            name="rad"
            value="new"
            onChange={(e) => {
              filterProducts("brand", e.target.value);
            }}
          />
          <div class="rad-design"></div>
          <div class="rad-text">new</div>
        </label>

        <label class="rad-label">
          <input
            type="radio"
            class="rad-input"
            name="rad"
            value="sport"
            onChange={(e) => {
              filterProducts("brand", e.target.value);
            }}
          />
          <div class="rad-design"></div>
          <div class="rad-text">sport</div>
        </label>

        <label class="rad-label" value="jeans">
          <input
            type="radio"
            class="rad-input"
            name="rad"
            value="jeans"
            onChange={(e) => {
              filterProducts("brand", e.target.value);
            }}
          />
          <div class="rad-design"></div>
          <div class="rad-text">jeans</div>
        </label>

        <label class="rad-label" value="sweatshirt">
          <input
            type="radio"
            class="rad-input"
            name="rad"
            value="sweatshirt"
            onChange={(e) => {
              filterProducts("brand", e.target.value);
            }}
          />
          <div class="rad-design"></div>
          <div class="rad-text">sweatshirt</div>
        </label>
      </div>
      <div>
        {products ? (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {products.map((item) => {
              return (
                <Card
                  key={item.id}
                  style={{ width: "18rem", boxShadow: "grey" }}
                >
                  <Card.Body>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Title style={{ fontWeight: "bold" }}>
                      {item.name}
                    </Card.Title>
                    <Card.Subtitle>brand: {item.brand}</Card.Subtitle>
                    <Card.Text>Цена: {item.price}</Card.Text>
                    {user.role !== "guest" ? (
                      user.role === "ADMIN" && user ? (
                        <>
                          <Link to={"/products/edit/" + item.id}>
                            <Button
                              variant="outline-dark"
                              style={{
                                marginLeft: "0",
                                border: "none",
                              }}
                            >
                              Редактировать
                            </Button>
                          </Link>
                          <Button
                            variant="outline-danger"
                            style={{
                              marginLeft: "5px",
                              border: "none",
                            }}
                            onClick={() => {
                              deleteProduct(item.id);
                            }}
                          >
                            Удалить
                          </Button>
                        </>
                      ) : (
                        <></>
                      )
                    ) : (
                      <></>
                    )}
                    {user ? (
                      <Link to={"/products/detail/" + item.id}>
                        <Button
                          style={{
                            marginLeft: "50px",
                            marginTop: "10px",
                          }}
                          variant="outline-dark"
                        >
                          Подробнее
                        </Button>
                      </Link>
                    ) : (
                      <></>
                    )}
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
        {user.role === "ADMIN" && user ? (
          <Link to="/add">
            <Button>Add product</Button>
          </Link>
        ) : (
          ""
        )}
      </div>
      <Pagination />
    </div>
  );
};

export default AllProducts;
