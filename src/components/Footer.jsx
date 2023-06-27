import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} build by Tharun Tej</p>
    </footer>
  );
}

export default Footer;
