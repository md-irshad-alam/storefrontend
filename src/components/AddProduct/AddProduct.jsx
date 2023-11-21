import React, { useState, useRef, useContext } from "react";
import { Container, Card, Form, Col, Button, Row } from "react-bootstrap";

import ForClintRef from "./ForClintRef";
import ForProductionRef from "./ForProdRef";
import SizeWeight from "./Size&weight";
import style from "../../ModuleCss/AddProduct.module.css";
import { useStateContext } from "../../contexts/ContextProvider";
import { useSelector } from "react-redux";
function AddProduct() {
  const [validated, setvalidated] = useState(false);
  const formReset = useRef(null);
  const { ClintData, prodData, tabledata } = useStateContext();

  const val = useSelector((state) => state.categories);
  console.log(val);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
    } else {
    }
    setvalidated(true);
  };

  return (
    <>
      <div className=" container m-auto sm:md:w-fullWidth">
        <div className="card xxl:lg:w-Productwidth sm:md:w-innerWidth2  m-auto p-4">
          <h4 className="card-title  mb-4">Add Product</h4>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
              <Col lg={6} md={6} className="mb-4">
                <Form.Group as={Col}>
                  <Form.Label> Article Code </Form.Label>
                  <Form.Control type="text" required placeholder="" />
                </Form.Group>
              </Col>
              <Col lg={6} md={6} className="mb-4">
                <Form.Group as={Col}>
                  <Form.Label>Article Name </Form.Label>
                  <Form.Control type="text" required placeholder="" />
                </Form.Group>
              </Col>

              <Col lg={6} md={6} className="mb-4">
                <Form.Group>
                  <Form.Label> Group </Form.Label>
                  <Form.Select aria-Label="Default select example">
                    <option>select menu</option>
                    <option value="1">Clarks</option>
                    <option value="2">1300 Series</option>
                    <option value="3">Keen</option>
                    <option value="4">NNZ & Sister Concern</option>
                    <option value="5">Others</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col lg={6} md={6} className="mb-4">
                <Form.Group>
                  <Form.Label>Category </Form.Label>
                  <Form.Select aria-Label="Default select example">
                    <option>select menu</option>
                    {val.map((itesm) => {
                      return <option>{itesm.category}</option>;
                    })}
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col lg={6} md={6} className="mb-4">
                <Form.Group>
                  <Form.Label> Heel Cate </Form.Label>
                  <Form.Select aria-Label="Default select example">
                    <option>select menu</option>
                    <option value="1">Clarks</option>
                    <option value="2">1300 Series</option>
                    <option value="3">Keen</option>
                    <option value="4">NNZ & Sister Concern</option>
                    <option value="5">Others</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col lg={6} md={6} className="mb-4">
                <Form.Group>
                  <Form.Label> ForePart </Form.Label>
                  <Form.Select aria-Label="Default select example">
                    <option>select menu</option>
                    <option value="1">Clarks</option>
                    <option value="2">1300 Series</option>
                    <option value="3">Keen</option>
                    <option value="4">NNZ & Sister Concern</option>
                    <option value="5">Others</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col lg={6} md={6} className="mb-4">
                <Form.Group>
                  <Form.Label> UOM</Form.Label>
                  <Form.Select aria-Label="Default select example">
                    <option>select menu</option>
                    <option value="1">Pair</option>
                    <option value="2">PCS</option>
                    <option value="3">Kg</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col lg={6} md={6} className="mb-4">
                <Form.Group>
                  <Form.Label> Hardness</Form.Label>
                  <Form.Control type="text" required placeholder="" />
                </Form.Group>
              </Col>

              <Col lg={6} md={6} className="mb-4">
                <Form.Group>
                  <Form.Label> Price </Form.Label>
                  <Form.Control type="number" placeholder="" required />
                </Form.Group>
              </Col>
              <Col lg={6} md={6} className="mb-4">
                <Form.Group>
                  <Form.Label>GSTIN (%) </Form.Label>
                  <Form.Control type="text" required placeholder="" />
                </Form.Group>
              </Col>

              <Col lg={6} md={6} className="mb-4">
                <Form.Group>
                  <Form.Label> HSN</Form.Label>
                  <Form.Control type="text" required placeholder="" />
                </Form.Group>
              </Col>
              <Col lg={6} md={6} className="mb-4">
                <Form.Group>
                  <Form.Label> Remarks </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={1}
                    required
                    placeholder=""
                  />
                </Form.Group>
              </Col>

              <Col lg={6} md={6} className="mb-4">
                <Form.Group
                  as={Col}
                  className="md=4"
                  controlId="validationCustom01"
                >
                  <Form.Label> Type</Form.Label>
                  <Form.Select aria-Label="Default select example">
                    <option>select menu</option>
                    <option value="1">Out Sole</option>
                    <option value="2">Fhylon</option>
                    <option value="3">Mid Sole</option>
                    <option value="3">Row Meterial</option>
                    <option value="3">Lab Item</option>
                    <option value="3">Finished Product</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col lg={6} md={6} className="mb-4">
                <Form.Group
                  as={Col}
                  className="md=4"
                  controlId="validationCustom01"
                >
                  <Form.Label> Type </Form.Label>
                  <Form.Select aria-Label="Default select example">
                    <option>select menu</option>
                    <option value="1">Out Sole</option>
                    <option value="2">Fhylon</option>
                    <option value="3">Mid Sole</option>
                    <option value="3">Row Meterial</option>
                    <option value="3">Lab Item</option>
                    <option value="3">Finished Product</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col lg={6} md={6} className="mb-4">
                <Form.Group
                  as={Col}
                  className="md=4"
                  controlId="validationCustom01"
                >
                  <Form.Label> Image </Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
              </Col>
              <Col lg={6} md={6} className="mb-4">
                <Form.Group
                  as={Col}
                  className="md=4"
                  controlId="validationCustom01"
                >
                  <Form.Label> Tikki </Form.Label>
                  <Form.Select>
                    <option value="1">Select Menu</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col lg={6} md={6} className="mb-4">
                <Form.Group
                  as={Col}
                  className="md=4"
                  controlId="validationCustom01"
                >
                  <Form.Label> Tikki 1 </Form.Label>
                  <Form.Select>
                    <option value="1">Select Menu</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col lg={6} md={6} className="mb-4">
                <Form.Group
                  as={Col}
                  className="md=4"
                  controlId="validationCustom01"
                >
                  <Form.Label> Tikki 2 </Form.Label>
                  <Form.Select>
                    <option value="1">Select Menu</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <div className={style.breakLine}></div>
              {/* <SizeTypeForm /> */}
              <ForClintRef />
              <div className={style.breakLine}></div>
              <ForProductionRef />
              <div className={style.breakLine}></div>
              <SizeWeight />

              <Row className="mb-4 mt-4">
                <Col className=" md:mt-4" lg={6} md={6}>
                  <Form.Group className="md-4">
                    <Form.Label>No of pai manufactured per hour</Form.Label>
                    <Form.Control type="number" defaultValue={5} />
                  </Form.Group>
                </Col>
                <Col lg={6} md={6}>
                  <Form.Group className="mb-4">
                    <Form.Label> Target 2 </Form.Label>
                    <Form.Control type="number" aria-disabled />
                  </Form.Group>
                </Col>

                <Col lg={6} md={6} className=" md:mt-4 mb-4">
                  <Form.Group className="mb=4">
                    <Form.Label> Dummy Mould </Form.Label>
                    <Form.Control type="number" placeholder="8-8/2,6.5/7.7" />
                  </Form.Group>
                </Col>
                <Col lg={6} md={6} className="mb=4">
                  <Form.Group className="mb-4">
                    <Form.Label> Target 2 </Form.Label>
                    <Form.Select>
                      <option value="">Select Store</option>
                      {val.map((itesm) => {
                        return <option>{itesm.store}</option>;
                      })}
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="flex gap-x-4 items-center justify-center">
                <Button type="submit" variant="primary">
                  Submit form
                </Button>
                <Button type="submit" variant="danger">
                  Cancel
                </Button>
              </Form.Group>
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
