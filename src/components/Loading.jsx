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
    <div style={{ marginTop: "6rem" }}>
      <MoonLoader color={color} css={override} size={70} />
    </div>
  );
}

export default Loading;
