import React, { useEffect } from 'react';
import { useState } from 'react';
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Table,
  Modal,
} from 'react-bootstrap';
import { BiEdit } from 'react-icons/bi';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AiOutlineDelete } from 'react-icons/ai';
function EmployeeList() {
  const [smShow, setSmShow] = useState(false);
  const [employee_cato, setemp_cato] = useState([]);
  const [Designation, setdesign] = useState([]);
  const [filterdata, setfilter] = useState({
    Employee_Name: '',
    Code_No: '',
    Designation: '',
  });
  const [editdata, seteditdata] = useState();
  const [filtereddata, setfilterdata] = useState([]);
  const [itemId, setid] = useState('');
  const [category, setcatogory] = useState([]);
  const [modelval, setmodelval] = useState();

  const Fetchemployeecato = () => {
    axios
      .get('https://backend-hofa.onrender.com/api/Employee/get-AddEmployee')
      .then((res) => {
        setemp_cato(res.data.countries);
      })
      .catch((error) => toast.error('someting went to wrong '));
  };
  const Fetchdesign = () => {
    axios
      .get('https://backend-hofa.onrender.com/api/designation/get-designation')
      .then((res) => {
        setdesign(res.data.designations);
      })
      .catch((error) => toast.error('someting went to wrong '));
  };

  const Fetchdata = () => {
    axios
      .get(
        'https://backend-hofa.onrender.com/api/EmployeeCategory/get-EmployeeCategory'
      )
      .then((res) => {
        setcatogory(res.data.EmployeeCategorys);
      })
      .catch((error) => toast.error('someting went to wrong '));
  };

  useEffect(() => {
    Fetchdesign();
    Fetchemployeecato();
    Fetchdata();
  }, []);

  const hanldefilterchange = (e) => {
    const { name, value } = e.target;
    setfilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  };

  const hanldeFilter = () => {
    const { Employee_Name, Card_No, Designation } = filterdata;
    const newFilteredData = data.filter((employee) => {
      const nameMatch =
        employee.Employee_Name.toLowerCase().includes(
          (Employee_Name || '').toLowerCase()
        ) || Employee_Name.trim() === '';

      const cardNoMatch =
        employee.Card_No.includes(Card_No || '') || Card_No.trim() === '';

      const designationMatch =
        employee.Designation.toLowerCase().includes(
          (Designation || '').toLowerCase()
        ) || Designation.trim() === '';

      return nameMatch && cardNoMatch && designationMatch;
    });
    console.log(newFilteredData);
    setfilterdata(newFilteredData);
    if (newFilteredData.length == 0) {
      toast.warn('data is not found!');
    }
  };
  const filtercancel = () => {
    setfilterdata([]);
  };
  const edithandlechange = (e) => {
    const { name, value } = e.target;
    seteditdata((prev) => ({ ...prev, [name]: value }));
  };
  const handlemodal = (item) => {
    setmodelval(item);
    const { _id } = item;
    setid(_id);
    setSmShow(true);
  };
  useEffect(() => {}, [modelval]);
  console.log(modelval);

  const hanldeEdit = () => {
    try {
      const { Employee_Name, Card_No, Designation } = editdata;
      console.log(Employee_Name, Card_No, Designation);
      axios
        .put(
          `https://backend-hofa.onrender.com/api/Employee/update-AddEmployee/${itemId}`,
          {
            Employee_Name,
            Card_No,
            Designation,
          }
        )
        .then((res) => {
          Fetchemployeecato();
          toast.success(res.data.message);
          setSmShow(false);
        })
        .catch((error) => toast.error(error.response.data.message));
    } catch (error) {
      toast.error('something went to wrong !');
    }
  };
  const handledelte = (id) => {
    try {
      axios
        .delete(
          `https://backend-hofa.onrender.com/api/Employee/delete-AddEmployee/${id}`
        )
        .then((res) => {
          Fetchemployeecato();
          toast.success(res.data.message);
        })
        .catch((error) => toast.error(error.response.data.message));
    } catch (error) {}
  };

  const data = filtereddata.length > 0 ? filtereddata : employee_cato;
  console.log(modelval !== undefined ? modelval.Employee_Name : '');

  return (
    <Container>
      <Card className='lg md:xl:w-soloForm p-4 m-auto relative top-20 sm:border-none'>
        <Row className='mb-8'>
          <Col md={4} className='mt-4'>
            <Form.Label>Employee Name</Form.Label>
            <Form.Group>
              <Form.Select name='Employee_Name' onChange={hanldefilterchange}>
                <option disabled>---select options --</option>
                {employee_cato !== undefined &&
                  employee_cato.map((ele, id) => (
                    <option value={ele.Employee_Name}>
                      {ele.Employee_Name}
                    </option>
                  ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={4} className='mt-4'>
            <Form.Label>mployee Code</Form.Label>
            <Form.Group>
              <Form.Select name='Card_No' onChange={hanldefilterchange}>
                <option disabled>---select options --</option>
                {employee_cato !== undefined &&
                  employee_cato.map((ele, id) => (
                    <option value={ele.Code_No}>{ele.Card_No}</option>
                  ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={4} className='mt-4'>
            <Form.Label>Designation</Form.Label>
            <Form.Group>
              <Form.Select name='Designation' onChange={hanldefilterchange}>
                <option disabled>---select options --</option>
                {employee_cato !== undefined &&
                  employee_cato.map((ele, id) => (
                    <option value={ele.Designation}>{ele.Designation}</option>
                  ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <div className='flex justify-center gap-x-4  border-none mt-4'>
            <Button variant='primary' onClick={() => hanldeFilter()}>
              Search
            </Button>
            <Button variant='danger' onClick={() => filtercancel()}>
              Cancel
            </Button>
          </div>
        </Row>
        <Table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Card No.</th>
              <th>Employee Name</th>
              <th>Designation</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data !== undefined &&
              data.map((ele, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{ele.Card_No}</td>
                  <td>{ele.Employee_Name}</td>
                  <td>{ele.Designation}</td>
                  <td>{ele.Category}</td>

                  <td className='flex flex-row gap-x-2 justify-center'>
                    <Button size='sm' onClick={() => handlemodal(ele)}>
                      <BiEdit />
                    </Button>
                    <Button
                      size='sm'
                      variant='danger'
                      onClick={() => handledelte(ele._id)}
                    >
                      <AiOutlineDelete />
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Card>

      <Modal
        size='lg'
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby='example-modal-sizes-title-sm'
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-modal-sizes-title-sm'>
            Edit Employee
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6} className='mt-4'>
              <Form.Group>
                <Form.Label>Employee Name: </Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Employee Name'
                  name='Employee_Name'
                  defaultValue={
                    modelval !== undefined ? modelval.Employee_Name : ''
                  }
                  onChange={edithandlechange}
                />
              </Form.Group>
            </Col>
            <Col md={6} className='mt-4'>
              <Form.Group>
                <Form.Label>Card No. </Form.Label>
                <Form.Control
                  type='text'
                  defaultValue={modelval !== undefined ? modelval.Card_No : ''}
                  placeholder='Employee Code'
                  name='Card_No'
                  onChange={edithandlechange}
                />
              </Form.Group>
            </Col>
            <Col md={6} className='mt-4'>
              <Form.Group>
                <Form.Label>Designation </Form.Label>
                <Form.Select name='Designation' onChange={edithandlechange}>
                  <option disabled>---choose options---</option>
                  {Designation !== undefined &&
                    Designation.map((ele) => (
                      <option
                        defaultValue={
                          modelval !== undefined ? modelval.Designation : ''
                        }
                        value={ele.designation}
                      >
                        {ele.designation}
                      </option>
                    ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6} className='mt-4'>
              <Form.Group>
                <Form.Label>Category </Form.Label>
                <Form.Select name='Category' onChange={edithandlechange}>
                  <option disabled>---choose options---</option>
                  {category !== undefined &&
                    category.map((ele) => (
                      <option
                        defaultValue={
                          modelval !== undefined ? modelval.Category : ''
                        }
                        value={ele.EmployeeCategory}
                      >
                        {ele.EmployeeCategory}
                      </option>
                    ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <div className='flex justify-end gap-x-4 mt-4'>
              <Button variant='primary' onClick={() => hanldeEdit()}>
                Submit
              </Button>
              <Button variant='danger' onClick={() => setSmShow(false)}>
                Cancel
              </Button>
            </div>
          </Row>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default EmployeeList;
