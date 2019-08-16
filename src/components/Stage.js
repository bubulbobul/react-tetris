import React from "react";

import Cell from "./Cell";

const Stage = ({ stage }) => (
  <div>
    {stage.map(row =>
      row.map((cell, x) => {
        return <Cell key={x} type={cell[0]} />;
      })
    )}
  </div>
);

export default Stage;
