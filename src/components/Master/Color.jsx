import React from "react";
import { useReducer } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Table,
  Button,
} from "react-bootstrap";
import { AddColor } from "../../Redux/Actions";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
function Color() {
  const [query, setquery] = useState("");
  const [data, setdata] = useState([]);
  const dispatch = useDispatch();
  const storedaa = useSelector((item) => item.color);
  const [inputval, setinputval] = useState("");
  const history = useNavigate();
  const handlechange = (event) => {
    const data = {
      color: event.target.value,
    };
    setinputval(data);
  };

  const handlesubmit = (event) => {
    if (inputval.color.length > 1) {
      dispatch(AddColor(inputval));
      toast.success("Color added suessfully ", {
        position: "bottom-right",
      });
    } else {
      toast.warn("invalid input ", {
        position: "bottom-right",
      });
    }
  };
  const handlesearch = () => {
    const lowercaseValue = query.toLowerCase();
    const searchResult = storedaa.filter((item) =>
      item.color.toLowerCase().includes(lowercaseValue)
    );
    setdata(searchResult);
  };
  const searchvalue = query ? data : storedaa;

  useEffect(() => {
    handlesearch();
  }, [query]);
  return (
    <Container>
      <h4>Add Colors</h4>
      <Card className="p-4 mb-4 mt-4">
        <Row>
          <Col md={12} lg={6}>
            <Form.Group>
              <Form.Label>Color</Form.Label>
              <Form.Control
                type="text"
                placeholder="Color"
                onChange={handlechange}
                name="color"
                value={inputval.color}
              />
            </Form.Group>
          </Col>
          <Col className="flex gap-x-4 justify-center mt-4" md={12} lg={6}>
            <Button onClick={() => handlesubmit()}>save</Button>
            <Button variant="danger" onClick={(e) => history("/")}>
              cancel
            </Button>
          </Col>
        </Row>
      </Card>
      <Card className="p-4 mt-4">
        <Row>
          <Table bordered>
            <thead className="p-3 align-middle text-center bg-green-800">
              <tr className=" bg-red-500 ">
                <th>S.No.</th>
                <th className="flex items-center gap-x-2 justify-around m-auto ">
                  <Form.Control
                    type="text"
                    placeholder="search"
                    onChange={(e) => setquery(e.target.value)}
                    size="sm"
                    style={{ width: "50%" }}
                  />
                  Color
                </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {searchvalue.map((item, index) => {
                return (
                  <tr>
                    <td>{index === 0 ? index + 1 : index + 1}</td>
                    <td>{item.color}</td>
                    <td>
                      <BiEdit />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Row>
      </Card>
    </Container>
  );
}

export default Color;
