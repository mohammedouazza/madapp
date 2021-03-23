import React from "react";

const FooterComponent = () => {
  const date = new Date();
  return <div>MedApp @{date.getFullYear()}, All Rights Reserved</div>;
};

export default FooterComponent;
