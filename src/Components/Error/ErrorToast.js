import React, { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

export const ErrorToast = (props) => {
    const [show, setShow] = useState(true);

  return (
    <ToastContainer className="p-3" position={`bottom-end`}>
      <Toast show={show} onClose={() => setShow(!show)} bg={`danger`}>
        <Toast.Header closeButton={true}>
          <strong className="me-auto">Error</strong>
          <small></small>
        </Toast.Header>
        <Toast.Body className="text-white">{props.error.message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};
