import React, { useEffect, useState } from 'react';
import {
  Container,
  Card,
  Row,
  Col,
  Form,
  Button,
  CardHeader,
} from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
function AddEmployee() {
  const [desigination, setdesi] = useState([]);
  const [catogory, setcato] = useState([]);
  const [inputdata, setinput] = useState({});
  const Fetchdesigination = () => {
    axios
      .get('http://localhost:3100/api/designation/get-designation')
      .then((res) => {
        setdesi(res.data.designations);
      })
      .catch((error) => console.log(error));
  };
  const Fetchcatogory = () => {
    axios
      .get('http://localhost:3100/api/EmployeeCategory/get-EmployeeCategory')
      .then((res) => {
        console.log(res.data);
        setcato(res.data.EmployeeCategorys);
      })
      .catch((error) => toast.error(error.response.data.message));
  };

  useEffect(() => {
    Fetchdesigination();
    Fetchcatogory();
  }, []);

  const handleinputchange = (e) => {
    const { name, value } = e.target;
    setinput({ ...inputdata, [name]: value });
  };
  const handlesubmit = (e) => {
    console.log(inputdata);
    try {
      const { Employee_Name, Card_No, Designation, Category } = inputdata;

      axios
        .post('http://localhost:3100/api/Employee/add-AddEmployee', {
          Employee_Name,
          Card_No,
          Designation,
          Category,
          isActive: false,
        })
        .then((res) => {
          toast.success('Employee added successfully');
        })
        .catch((error) => toast.error(error.response.data.message));
    } catch (error) {
      toast.warn('data adding process faild');
    }
  };
  return (
    <Container>
      <Card className='lg md:xl:w-soloForm p-4 m-auto relative top-20 sm:border-none'>
        <h4 className='card-header'>Add Employee</h4>
        <Row>
          <Col lg={6} md={6} className='mt-4'>
            <Form.Group>
              <Form.Label>Employee Name: </Form.Label>
              <Form.Control
                type='text'
                name='Employee_Name'
                placeholder='Employee Name'
                onChange={handleinputchange}
              />
            </Form.Group>
          </Col>
          <Col lg={6} md={6} className='mt-4'>
            <Form.Group>
              <Form.Label>Card No. </Form.Label>
              <Form.Control
                type='text'
                placeholder='Employee Name'
                name='Card_No'
                maxLength={50}
                minLength={2}
                onChange={handleinputchange}
              />
            </Form.Group>
          </Col>
          <Col lg={6} md={6} className='mt-4'>
            <Form.Group>
              <Form.Label>Designation </Form.Label>
              <Form.Select name='Designation' onChange={handleinputchange}>
                <option value='choose option' disabled>
                  -- Select an option --
                </option>
                {desigination !== undefined &&
                  desigination.map((ele, index) => (
                    <option key={index} value={ele.designation}>
                      {ele.designation}
                    </option>
                  ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col lg={6} md={6} className='mt-4'>
            <Form.Group>
              <Form.Label>Category </Form.Label>
              <Form.Select name='Category' onChange={handleinputchange}>
                <option value='choose option' disabled>
                  -- Select an option --
                </option>
                {catogory !== undefined &&
                  catogory.map((ele, index) => (
                    <option key={index} value={ele.EmployeeCategory}>
                      {ele.EmployeeCategory}
                    </option>
                  ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <div className='flex justify-center gap-x-4 mt-4'>
          <Button variant='primary' onClick={() => handlesubmit()}>
            Submit
          </Button>
          <Button variant='danger'>Cancel</Button>
        </div>
      </Card>
    </Container>
  );
}

export default AddEmployee;
