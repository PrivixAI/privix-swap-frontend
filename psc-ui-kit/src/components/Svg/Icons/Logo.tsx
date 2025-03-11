import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <img
      src="https://ipfs.io/ipfs/bafybeiemthc33jrn6xpguobposngtgoyfpf5irpxbyil53j6gx2ipwnre4/omega-4926.svg" // Replace with the path to your PNG file
      alt="Logo" // Provide an appropriate alt text for accessibility
      {...props} // Spread any additional props passed to the component
    />
  );
};

export default Icon;
