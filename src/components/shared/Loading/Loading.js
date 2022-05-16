import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div
      style={{ width: "100", height: "80vh" }}
      className="d-flex align-items-center justify-content-center"
    >
      <Spinner animation="grow" variant="info" />
    </div>
  );
};

export default Loading;
