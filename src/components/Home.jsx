import React, { useState } from "react";
import { Form, Input, Alert } from "antd";

function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

const Home = () => {
  const [number, setNumber] = useState(1234);
  const [binaryNumber, setBinaryNumber] = useState(dec2bin(1234));
  const [form] = Form.useForm();

  const handleNumberChange = (e) => {
    let newVal = e.target.value;
    if (!newVal) {
      setNumber(1234);
      setBinaryNumber(dec2bin(1234));
    } else {
      setNumber(newVal);
      setBinaryNumber(dec2bin(newVal));
    }
  };
  return (
    <div style={{ padding: 30, textAlign: "center" }}>
      <h1>Binary Conversion</h1>
      <Form form={form} layout="horizontal">
        <Form.Item required>
          <Input
            placeholder={"1234"}
            onChange={handleNumberChange}
            type="number"
            style={{ height: "5vh", borderRadius: 20 }}
          />
        </Form.Item>
      </Form>
      {number && (
        <Alert
          message="Binary conversion Result"
          description={`The binary conversion of the number ${number} is : ${binaryNumber}`}
          type="success"
          closable
          style={{ borderRadius: 20 }}
        />
      )}
    </div>
  );
};

export default Home;
