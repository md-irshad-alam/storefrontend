import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Card,
  Form,
  Col,
  Table,
  Button,
} from "react-bootstrap";
import { addstore } from "../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
function Store() {
  const data = useSelector((item) => item.store);
  const [inputval, setinutvla] = useState({
    store: "",
    remarks: "",
  });
  const [query, setquery] = useState("");
  const [itmes, setdata] = useState([]);
  const dispatch = useDispatch();
  const history = useNavigate();
  const handleChange = (e) => {
    setinutvla({ ...inputval, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    if (inputval.store.length > 2 && inputval.remarks.length > 2) {
      dispatch(addstore(inputval));
      toast.success("Store added successfully", {
        position: "bottom-right",
      });
    } else {
      toast.warn("Invalid input data", {
        position: "bottom-right",
      });
    }
  };

  const handlesearch = () => {
    if (query.length > 1) {
      const lowercaseValue = query.toLowerCase();
      const searchResult =
        data.length != 0
          ? data.filter((item) =>
              item.store.toLowerCase().includes(lowercaseValue)
            )
          : data.filter((item) =>
              item.store.toLowerCase().includes(lowercaseValue)
            );
      setdata(searchResult);
    }
  };
  const searchvalue = query ? itmes : data;

  useEffect(() => {
    handlesearch();
  }, [query]);

  return (
    <Container>
      <h4>Store</h4>
      <Card className="p-4 mt-4 mb-4">
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Store</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="text"
                placeholder="store"
                name="store"
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>
                Remarks <span>location</span>
              </Form.Label>
              <Form.Control
                onChange={handleChange}
                type="text"
                placeholder="remarks / location"
                name="remarks"
                required
              />
            </Form.Group>
          </Col>
          <Col className="mt-4 flex gap-x-4">
            <Button onClick={(e) => handlesubmit()}>submit</Button>
            <Button variant="danger" onClick={() => history("/")}>
              Cancel
            </Button>
          </Col>
        </Row>
      </Card>
      <Card className="p-4">
        <Row className="mt-4 lg: w-2/4 m-auto mb-4">
          <Col>
            <Form.Control
              onChange={(e) => setquery(e.target.value)}
              type="text"
              placeholder="search"
              name="search"
            />
          </Col>
        </Row>
        <Row className="mt-4 w-3/4 m-auto ">
          <Col>
            <Table className="m-auto  ">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Store</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                {searchvalue.length !== 0 ? (
                  searchvalue.map((item, index) => {
                    return (
                      <tr>
                        <td>{index === 0 ? index + 1 : index}</td>
                        <td>{item.store}</td>
                        <td>{item.remarks}</td>
                      </tr>
                    );
                  })
                ) : (
                  <tr className="text-center ">No Data Found</tr>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default Store;
