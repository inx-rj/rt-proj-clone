import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow-sm border-y flex items-center justify-end">
      <p className="px-3 py-[10px]">
        Copyright &copy;{" "}
        {new Date().getFullYear() === 2022
          ? new Date().getFullYear()
          : 2022 + "-" + new Date().getFullYear()}{" "}
        - RailsText All Rights Reserved.
      </p>
    </footer>
  );
};
export default Footer;
