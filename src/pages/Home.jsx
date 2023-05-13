import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import Category from "../components/Category";

import React from "react";

function home() {
  return (
    <div>
      <Popular />
      <Veggie />
    </div>
  );
}

export default home;
