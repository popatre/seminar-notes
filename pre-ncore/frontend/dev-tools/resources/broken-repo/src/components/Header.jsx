import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <h1>The page</h1>
      <h2> A working page, i promise</h2>
      <Link to="/counter">
        <button>Counter</button>
      </Link>
      <Link to="/auth">
        <button>Auth</button>
      </Link>
      <Link to="/checklist">
        <button>Checklist</button>
      </Link>
      <Link to="/picture">
        <button>Picture</button>
      </Link>
    </div>
  );
}
