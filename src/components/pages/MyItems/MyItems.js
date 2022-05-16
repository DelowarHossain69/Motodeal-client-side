import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../shared/Loading/Loading";
import MyItemCart from "./MyItemCart";

const MyItems = () => {
  const [user, loading] = useAuthState(auth);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/myItems?email=${user?.email}`)
      .then((data) => setProducts(data.data));
  }, []);

  if (loading) {
    return <Loading />;
  }

  const handelDelete = async (id) => {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      const { data } = await axios.delete(`http://localhost:5000/car/${id}`);

      if (data.deletedCount > 0) {
        const newProducts = products.filter((p) => p._id !== id);
        setProducts(newProducts);

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
    <div className="my-5 container mx-auto">
        <h3 className="mb-5">My items :</h3>
      <Row xs={1} md={3} className="g-4">
        {products?.map((car) => (
          <MyItemCart key={car._id} carInfo={car} handelDelete={handelDelete}></MyItemCart>
        ))}
      </Row>
    </div>
  );
};

export default MyItems;
