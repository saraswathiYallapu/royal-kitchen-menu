/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useState } from "react";

import { Radio } from "antd";
import ListItem from "./ListItem";
import styled from "styled-components";
import VegIcon from "../../Icons/VegIcon";
import NonVegIcon from "../../Icons/NonVegIcon";

const StyledRadioGroup = styled(Radio.Group)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledRadioButton = styled(Radio.Button)`
  display: flex;
  align-items: center;
  gap: 8px; /* Space between icon and text */
  background-color: #f0f2f5; /* Background color */
  border: 1px solid #ccc; /* Border color */
  color: #333; /* Text color */

  &:hover {
    background-color: #e6f7ff; /* Background color on hover */
  }

  &.ant-radio-button-wrapper-checked {
    background-color: #ffd700; /* Background color when checked */
    border-color: #ffd700; /* Border color when checked */
    color: #000000;
  }

  &.ant-radio-button-wrapper-checked:hover {
    background-color: #ffd700; /* Darker green on hover when checked */
    color: #000000;
  }
`;

const CategoryWiseList = ({ category }) => {
  const [foodType, setFoodType] = useState("veg");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <StyledRadioGroup
        value={foodType}
        onChange={(e) => setFoodType(e.target.value)}
      >
        <StyledRadioButton value="veg">
          <div style={{ display: "flex", gap: 8 }}>
            <VegIcon />
            <div>Veg</div>
          </div>
        </StyledRadioButton>
        <StyledRadioButton value="non-veg">
          <div style={{ display: "flex", gap: 8 }}>
            <NonVegIcon />
            <div>Non-Veg</div>
          </div>
        </StyledRadioButton>
      </StyledRadioGroup>

      {category && foodType && (
        <ListItem category={category} foodType={foodType} />
      )}
    </div>
  );
};

export default CategoryWiseList;
