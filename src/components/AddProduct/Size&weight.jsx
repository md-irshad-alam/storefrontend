import React, { useState } from "react";
import { Table, Form, Button } from "react-bootstrap";
import style from "../../ModuleCss/Table.module.css";
import { useContext } from "react";
import { useStateContext } from "../../contexts/ContextProvider";
function SizeWeight() {
  const [tabledata, settabledata] = useState([]);
  const [rows, setRows] = useState([{ id: 1 }]);

  // const { setTabledata, tabledata } = useStateContext(MyContext);

  const handleAddRow = () => {
    const newRow = { id: rows.length + 1 };
    setRows([...rows, newRow]);
  };
  const handleRemoveRow = () => {
    if (rows.length > 1) {
      const updatedRows = rows.slice(0, -1); // Remove the last row
      setRows(updatedRows);
    }
  };

  const handleChange = (e, rowId) => {
    console.log(rowId);
    // Create a new array with the updated data for the specific row
    const updatedTableData = { ...tabledata };
    updatedTableData[rowId] = {
      ...updatedTableData[rowId],
      [e.target.name]: e.target.value,
    };
    console.log(updatedTableData);

    settabledata(updatedTableData);
  };

  return (
    <div className="cntainer-fluid">
      <h4 className="card-title text-left  text-lg mb-4 text-title">
        Size & Standard Weights
      </h4>
      <Table className={style.table} bordered>
        <thead className={style.tablehead}>
          <tr>
            <th scope="col">Size</th>
            <th scope="col">Out-Size</th>
            <th scope="col">Mould</th>
            <th scope="col">Outsole Wt(kg)</th>
            <th scope="col">Boootm Wt(kg)</th>
            <th scope="col">Logo(L) Wt(kg)</th>
            <th scope="col">Logo(R) Wt(kg)</th>
            <th scope="col">Side Wall & Logo Wt(kg)</th>
            <th scope="col">Group ID</th>
            <th scope="col">WL-22-1</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr>
              <td>
                <Form.Control
                  type="number"
                  name="size"
                  onChange={(e) => handleChange(e, row.id)}
                />
              </td>
              <td>
                <Form.Control
                  type="number"
                  name="out-size"
                  onChange={(e) => handleChange(e, row.id)}
                />
              </td>
              <td>
                <Form.Control
                  type="number"
                  name="mould "
                  onChange={(e) => handleChange(e, row.id)}
                />
              </td>
              <td>
                <Form.Control
                  type="number"
                  name="outsole"
                  onChange={(e) => handleChange(e, row.id)}
                />
              </td>
              <td>
                <Form.Control
                  type="number"
                  name="bottomsole"
                  onChange={(e) => handleChange(e, row.id)}
                />
              </td>
              <td>
                <Form.Control
                  type="number"
                  name="logoL"
                  onChange={(e) => handleChange(e, row.id)}
                />
              </td>
              <td>
                <Form.Control
                  type="number"
                  name="logoR"
                  onChange={(e) => handleChange(e, row.id)}
                />
              </td>
              <td>
                <Form.Control
                  type="number"
                  name="sideWall"
                  onChange={(e) => handleChange(e, row.id)}
                />
              </td>
              <td>
                <Form.Control
                  type="number"
                  name="groupId"
                  onChange={(e) => handleChange(e, row.id)}
                />
              </td>
              <td>
                <Form.Control
                  type="number"
                  name="wl"
                  onChange={(e) => handleChange(e, row.id)}
                />
              </td>
              <td>
                <Button
                  size="sm"
                  key={index}
                  onClick={index === 0 ? handleAddRow : handleRemoveRow}
                  variant={index === 0 ? "primary" : "danger"}
                >
                  {index === 0 ? "+" : "-"}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default SizeWeight;
