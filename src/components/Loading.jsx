import React, { useState } from "react";
import { MoonLoader } from "react-spinners";
import { css } from "@emotion/react";

function Loading() {
  let [color] = useState("#049307");

  const override = css`
    display: block;
    margin: 0 auto;
  `;
  return (
    <div className="loading">
      <MoonLoader color={color} css={override} size={90} />
    </div>
  );
}

export default Loading;
