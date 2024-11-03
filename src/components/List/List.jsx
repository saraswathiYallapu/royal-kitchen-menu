// import React from "react";
// import { Space } from "antd";
import CustomCollapse from "../CustomCollapse";
// import ListItem from "./components/ListItem";
import "./list.css";
import { categories } from "../../data/constants";

const List = () => {
  return (
    <div className="list-container">
      <CustomCollapse items={categories} />
    </div>
  );
};

export default List;
