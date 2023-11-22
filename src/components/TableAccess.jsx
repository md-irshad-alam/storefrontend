import React from "react";
import { Table, Form } from "react-bootstrap";
function TableAccess() {
  return (
    <div className=" mt-4">
      <Table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Rate</th>
            <th>Mould</th>
            <th>Outsole wt (kg)</th>
            <th>Side Wall Wt (kg)</th>
            <th>Bottom Wt (kg)</th>
            <th>Logo (L) Wt(kg)</th>
            <th>Logo (R) Wt(kg)</th>
            <th>Side Wall & Logo Wt.(kg)</th>
            <th>Group ID</th>
            <th>WL-22-1</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Form.Control type="number" />
            </td>
            <td>
              <Form.Control type="number" />
            </td>
            <td>
              <Form.Control type="number" />
            </td>
            <td>
              <Form.Control type="number" />
            </td>
            <td>
              <Form.Control type="number" />
            </td>
            <td>
              <Form.Control type="number" />
            </td>
            <td>
              <Form.Control type="number" />
            </td>
            <td>
              <Form.Control type="number" />
            </td>
            <td>
              <Form.Control type="number" />
            </td>
            <td>
              <Form.Control type="number" />
            </td>
            <td>
              <Form.Control type="number" />
            </td>
          </tr>
          <tr>
            <td>
              <Form.Control type="number" />
            </td>
            <td>
              <Form.Control type="number" />
            </td>
            <td>
              <Form.Control type="number" />
            </td>
            <td>
              <Form.Control type="number" />
            </td>
            <td>
              <Form.Control type="number" />
            </td>
            <td>
              <Form.Control type="number" />
            </td>
            <td>
              <Form.Control type="number" />
            </td>
            <td>
              <Form.Control type="number" />
            </td>
            <td>
              <Form.Control type="number" />
            </td>
            <td>
              <Form.Control type="number" />
            </td>
            <td>
              <Form.Control type="number" />
            </td>
          </tr>
          <tr>
            <td>
              <Form.Control type="number" />
            </td>
            <td>
              <Form.Control type="number" />
            </td>
            <td>
              <Form.Control type="number" />
            </td>
            <td>
              <Form.Control type="number" />
            </td>
            <td>
              <Form.Control type="number" />
            </td>
            <td>
              <Form.Control type="number" />
            </td>
            <td>
              <Form.Control type="number" />
            </td>
            <td>
              <Form.Control type="number" />
            </td>
            <td>
              <Form.Control type="number" />
            </td>
            <td>
              <Form.Control type="number" />
            </td>
            <td>
              <Form.Control type="number" />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default TableAccess;
