import React from "react";
import { ImgHTMLAttributes } from "react"; // Import ImgHTMLAttributes for type definitions

interface LogoProps extends ImgHTMLAttributes<HTMLImageElement> { // Update props type to ImgHTMLAttributes<HTMLImageElement>
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <img
      src="https://ipfs.io/ipfs/bafybeiemthc33jrn6xpguobposngtgoyfpf5irpxbyil53j6gx2ipwnre4/omega-4926.svg" // Replace with the path to your PNG file
      alt="Logo" // Provide an appropriate alt text for accessibility
      style={{ color: textColor }} // Example style usage
      {...props} // Spread any additional props passed to the component
    />
  );
};

export default Logo;
