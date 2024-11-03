/* eslint-disable react/prop-types */
// import React from 'react'

import { Collapse } from "antd";
import styled from "styled-components";
import CategoryWiseList from "./CategoryWiseList";
import { useState } from "react";

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
    .ant-collapse-content-box {
      padding: 8px 16px;
      background-color: #000000;
    }
  }
`;

const CustomCollapse = ({ items }) => {
  const [activeCollapseKey, setActiveCollapseKey] = useState(null);

  console.log({ activeCollapseKey });
  return (
    <>
      <StyledCollapse
        accordion
        collapsible="header"
        activeKey={activeCollapseKey}
        items={items.map((item) => ({
          key: item.value,
          label: item.label,
          children: (
            <CategoryWiseList category={activeCollapseKey?.[0] || null} />
          ),
        }))}
        expandIconPosition={"end"}
        onChange={(val) => setActiveCollapseKey(val)}
      />
    </>
  );
};

export default CustomCollapse;
