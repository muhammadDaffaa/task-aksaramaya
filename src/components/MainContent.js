import React from "react";
import { Grid, GridColumn, GridRow, Icon } from "semantic-ui-react";
import Side from "./Side";

const MainContent = () => {
  return (
    <>
      <div
        className="header"
        style={{
          width: "100%",
          height: "50px",
          boxShadow: "10px 0 5px 3px #7d7d7d",
          backgroundColor: "azure",
          position: "relative",
        }}
      />
      <Side />
    </>
  );
};

export default MainContent;
