import React, {useState, useEffect } from "react";
import axios from "axios";
import GitComponent from "../components/git"
import LayoutOne from "../layout/header";


const GitSection = () => {

  return (
    <LayoutOne>
      <GitComponent/>
    </LayoutOne>
  );
};

export default GitSection;
