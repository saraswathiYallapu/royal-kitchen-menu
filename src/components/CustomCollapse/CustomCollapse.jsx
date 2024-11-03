/* eslint-disable react/prop-types */
// import React from 'react'

import { Collapse } from "antd";
import styled from "styled-components";
import CategoryWiseList from "./CategoryWiseList";

const StyledCollapse = styled(Collapse)`
  && {
    .ant-collapse-header {
      .ant-collapse-header-text {
        color: #ffd700;
      }
      .ant-collapse-arrow {
        color: #ffd700;
      }
    }
  }
`;

const CustomCollapse = ({ items }) => {
  return (
    <>
      <StyledCollapse
        accordion
        collapsible="header"
        defaultActiveKey={["1"]}
        items={items.map((item) => ({
          key: item.value,
          label: item.label,
          children: <CategoryWiseList />,
        }))}
        expandIconPosition={"end"}
        // bordered={false}
      />
    </>
  );
};

export default CustomCollapse;
