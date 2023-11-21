import React, { useState, useEffect } from "react";
import { Form, Stack, Card, Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
function ViewProduct() {
  // const { id } = useParams();
  // console.log(id);
  const locaton = useLocation();
  const url = locaton.href;
  console.log(url);
  return (
    <Container>
      <Card>
        <h4 className="card-title">View Product List </h4>
      </Card>
    </Container>
  );
}

export default ViewProduct;
