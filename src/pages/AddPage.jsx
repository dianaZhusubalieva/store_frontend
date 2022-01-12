import { Formik } from "formik";
import React from "react";
import { Button, Form } from "react-bootstrap";
import Pagination from "../components/Pagination";
import * as yup from "yup";

import { useEffect, useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { productContext } from "../contexts/ProductContext";

const AddPage = () => {
  const { createProduct, getProducts } = useContext(productContext);

  const schema = yup.object({
    name: yup
      .string()
      .min(3, "Минимальное количество символов 2")
      .max(30, "Максимальное количество символов 30")
      .required("Поле обязательно для заполнения"),

    description: yup
      .string()
      .min(3, "Минимальное количество символов 2")
      .max(30, "Максимальное количество символов 30")
      .required("Поле обязательно для заполнения"),

    image: yup
      .string()

      .required("Поле обязательно для заполнения"),
    brand: yup
      .string()
      .min(3, "Минимальное количество символов 3")

      .required("Поле обязательно для заполнения"),
    price: yup
      .string()
      .min(3, "Минимальное количество символов 3")

      .required("Поле обязательно для заполнения"),
  });

  useEffect(() => {
    getProducts();
  }, []);
  const navigate = useNavigate();

  let addForm;

  // const handleSubmit = (product) => {
  //   createProduct(product);
  //   navigate("/");
  // };

  let user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    if (user.role === "ADMIN") {
      addForm = (
        <div className="add-page">
          <h2>add a product</h2>

          <Formik
            validationSchema={schema}
            onSubmit={(data, { resetForm }) => {
              createProduct(data);
              resetForm();
            }}
            initialValues={{
              name: "",
              brand: "",
              description: "",
              image: "",
              price: "",
            }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
              <Form
                style={{ width: "60%", margin: "0 auto" }}
                className="bg-light p-4"
                onSubmit={handleSubmit}
              >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Название одежды</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Введите название одежды"
                    name="name"
                    onChange={handleChange}
                    isValid={!errors.name && touched.name}
                    isInvalid={!!errors.name}
                    value={values.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail1">
                  <Form.Label>вид товара</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="brand"
                    onChange={handleChange}
                    isValid={!errors.brand && touched.brand}
                    isInvalid={!!errors.brand}
                    value={values.brand}
                  >
                    <option>Выберите тип</option>
                    <option value="new">new</option>
                    <option value="sport">sport</option>
                    <option value="sweatshirt">sweatshirt</option>
                    <option value="jeans">jeans</option>
                  </Form.Select>

                  <Form.Control.Feedback type="invalid">
                    {errors.brand}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Описание товара</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Введите описание одежды"
                    name="description"
                    onChange={handleChange}
                    isValid={!errors.description && touched.description}
                    isInvalid={!!errors.description}
                    value={values.description}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.description}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Картинка товара</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="картинка одежды"
                    name="image"
                    onChange={handleChange}
                    isValid={!errors.image && touched.image}
                    isInvalid={!!errors.image}
                    value={values.image}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.image}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail2">
                  <Form.Label>Цена товара</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Введите цену товара"
                    name="price"
                    onChange={handleChange}
                    isValid={!errors.price && touched.price}
                    isInvalid={!!errors.price}
                    value={values.price}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.price}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button
                  style={{
                    border: "none",
                    marginLeft: "0",
                    backgroundColor: "black",
                  }}
                  type="submit"
                >
                  Отправить
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      );
    }
  }

  return (
    <>
      {addForm}

      <Pagination />
    </>
  );
};

export default AddPage;
