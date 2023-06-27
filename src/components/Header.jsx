import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import HighlightIcon from '@mui/icons-material/Highlight';

function Header() {
  return (
    <header>
      <h1><FontAwesomeIcon icon={faEnvelope} />Keeper</h1>
    </header>
  );
}

export default Header;
