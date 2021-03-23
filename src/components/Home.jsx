import React from "react";
import { Card, Row } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

const cardStyle = {
  width: 240,
  margin: 10,
  borderRadius: 20,
};

const pages = [
  {
    title: "Binary Conversion",
    description: "Convert decimals to binary",
    path: "/binary-conversion",
  },
  {
    title: "Hexadecimal Conversion",
    description: "Convert decimals to hexadecimal",
    path: "/hexa-conversion",
  },
];
const Home = () => {
  return (
    <>
      <Row>
        {pages.map((page, index) => (
          <Card hoverable style={cardStyle} key={index}>
            <Link to={page.path}>
              <Meta title={page.title} description={page.description} />
            </Link>
          </Card>
        ))}
      </Row>
    </>
  );
};

export default Home;
