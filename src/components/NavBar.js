import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const eachLink = links.map(link => (

    <a href={"#" + link} key={link} > 
      {link} 
    </a>

  ))

  return <nav>{eachLink}</nav>;
}

export default NavBar;
