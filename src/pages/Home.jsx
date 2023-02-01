import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  ListGroup,
  Row
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  filterProductsCategoryThunk,
  filterProductsHeadlineThunk,
  getProductsThunk
} from "../store/slices/products.slice";

const Home = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.news);
  const [categories, setCategories] = useState([]);
  const [productsnewsSearch, setProductsSearch] = useState("");

  useEffect(() => {
    dispatch(getProductsThunk());

    axios
      .get("https://e-commerce-api-v2.academlo.tech/api/v1/categories")
      .then((res) => setCategories(res.data));
  }, []);

  console.log(categories);

  return (
    <div>
      <Row>
        {/* CATEGORIAS */}
        <Col lg={3}>
          <ListGroup>
            {categories.map((category) => (
              <ListGroup.Item
                onClick={() => dispatch(filterProductsCategoryThunk(category.id))}
                style={{ cursor: "pointer" }}
                key={category.id}
              >
                {category.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        {/* PRODUCTOS*/}
        <Col lg={9}>
          <h1>Componente Home</h1>

          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={productsSearch}
              onChange={(e) => setProductsSearch(e.target.value)}
            />
            <Button
              variant="outline-secondary"
              onClick={() => dispatch(filterProductsHeadlineThunk(newsSearch))}
            >
              Search
            </Button>
          </InputGroup>
          <Row xs={1} md={2} lg={3} className="g-4">
            {newsList.map((productsItem) => (
              <Col key={productsnewsItem.id}>
                <Card>
                  <Link
                    to={`/products/${productsItem.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Card.Img
                      variant="top"
                      src={productsItem.image}
                      style={{ height: 200, objectFit: "cover" }}
                    />
                    <Card.Body>
                      <Card.Title>{productsItem.headline}</Card.Title>
                      <Card.Text>{productsItem.lead}</Card.Text>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Home;