import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { filterProductsCategoryThunk } from "../store/slices/products.slice";

const ProductsDetail = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({});

  const allProducts = useSelector((state) => state.products);

  const productsFiltered = allProducts.filter((products) => products.id !== Number(id));

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}/`).then((res) => {
      setProducts(res.data);
      dispatch(filterProductsCategoryThunk(res.data.category.id));
    });
  }, [id]);

  return (
    <div>
      <h1>{products.headline}</h1>
      <p>By: {products.author}</p>
      <p>{products.date}</p>
      <Row>
        {/* DESCRIPCION DE NOTICIA */}
        <Col lg={9}>
          <img src={products.image} alt="" className="img-fluid" />
          <p className="text-muted">{products.image_description}</p>
          {products.body?.map((p) => (
            <p key={p.id}>{p.paragraph}</p>
          ))}
        </Col>

        {/* NOTICIAS RELACIONADAS */}
        <Col lg={3}>
          <h3>Related Products:</h3>
          <ListGroup variant="flush">
            {productsFiltered.map((productsItem) => (
              <ListGroup.Item key={productsItem.id}>
                <Link to={`/products/${productsItem.id}`}>
                  <img src={productsItem.image} alt="" className="img-fluid" />
                  {productsItem.headline}
                </Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default ProductsDetail;