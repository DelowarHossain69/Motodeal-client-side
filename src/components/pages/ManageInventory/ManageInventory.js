import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./ManageInventory.css";

const ManageInventory = () => {
  const navigate = useNavigate();
  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/cars`)
      .then((data) => setProduct(data.data));
  }, []);

  const keys = Object.keys(products[0] || {});
  const th = [];

  for (let key of keys) {
    if (key !== "description") {
      th.push(key);
    }
  }

  const handelDelete = async (id) => {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      const { data } = await axios.delete(`http://localhost:5000/car/${id}`);

      if (data.deletedCount > 0) {
        const newProducts = products.filter((p) => p._id !== id);
        setProduct(newProducts);

        toast.success("Delete successful", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

  return (
    <section style={{ width: "95%", margin: "0 auto" }} className="my-5">
      <div className="text-end mb-3">
        <Button onClick={() => navigate(`/addProduct`)}>ADD NEW</Button>
      </div>

      <Table responsive className="text-center">
        <thead>
          <tr className="text-uppercase">
            {th?.map((key) => (
              <th key={key}>{key}</th>
            ))}
            <th>Delete</th>
            <th>Update</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product._id}>
              <td>{product._id}</td>
              <td>
                <img src={product.img} />
              </td>
              <td>{product.price}</td>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.supplier}</td>

              <td>
                <Button
                  className="btn btn-danger"
                  onClick={() => handelDelete(product._id)}
                >
                  Delete
                </Button>
              </td>

              <td>
                <Button
                  className="btn btn-success"
                  onClick={() => navigate(`/update/${product._id}`)}
                >
                  Update
                </Button>
              </td>
              <td>
                <Button
                  className="btn btn-warning text-white"
                  onClick={() => navigate(`/productDetails/${product._id}`)}
                >
                  View
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default ManageInventory;
