import React from 'react';
import { Row } from 'react-bootstrap';

function About() {
  return (
    <div className='container p-4 '>
      <h1>About web applications </h1>
      <Row>
        <div className='col'>
          <p className=' w-[80%] p-4'>
            I have developed a comprehensive web application tailored for
            footwear sellers to efficiently manage their inventory, products,
            and sales operations. The application offers a range of features
            designed to streamline business processes, improve inventory
            tracking, and enhance customer service.
          </p>
          <h4>Key Features</h4>

          <div className='ml-10'>
            <h6> Product Management</h6>
            <li>Add, edit, and delete products.</li>
            <li>
              Manage product details such as name, description, price, and SKU.
            </li>
            <br />
            <h6> Inventory Management:</h6>
            <li>Track product availability in different stores.</li>
            <li>Monitor stock levels and receive alerts for low stock.</li>
            <br />
            <h6> Store Availability:</h6>
            <li>
              View and manage which products are available at specific store
              locations.
            </li>
            <li>Check real-time inventory levels across all stores.</li>
            <br />
            <h6>Order Management:</h6>
            <li>Add and update shipping addresses.</li>
            <li>Add and update billing addresses.</li>
            <li>Track order status from placement to delivery.</li>
          </div>
        </div>
      </Row>
    </div>
  );
}

export default About;
