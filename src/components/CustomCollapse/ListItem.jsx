/* eslint-disable react/prop-types */
// import React from "react";

import { List, Typography } from "antd";
import { getMenuItems } from "../../helpers";
import styled from "styled-components";
import VegIcon from "../../Icons/VegIcon";
import NonVegIcon from "../../Icons/NonVegIcon";

const StyledList = styled(List)`
  && {
    .ant-list-items {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .ant-empty-description {
      color: white;
    }
  }
`;

const ListItem = ({ category, foodType }) => {
  console.log({ category, foodType });
  const listItems = getMenuItems({ category, foodType });

  console.log(listItems);
  return (
    <StyledList
      itemLayout="horizontal"
      dataSource={listItems}
      renderItem={(item) => (
        <List.Item
          style={{
            // border: `1px solid ${foodType === "veg" ? "#689f38" : "#c33"}`,
            borderRadius: "8px",
            padding: "8px 12px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#FFD700",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {foodType === "veg" ? <VegIcon /> : <NonVegIcon />}
            <Typography.Text>{item.label}</Typography.Text>
          </div>
          <Typography.Text>₹ {item.price}</Typography.Text>
        </List.Item>
      )}
    />
  );
};

export default ListItem;
