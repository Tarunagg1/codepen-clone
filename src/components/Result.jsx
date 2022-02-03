import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataProvider";
import { styled } from "@mui/material/styles";

const Container = styled(Box)`
  height: 41vh;
`;

export default function Result() {
  const { htmlVal, jsVal, cssVal } = useContext(DataContext);
  const [Srcode, setSrcode] = useState("");

  const src = `
    <html lang="en">
        <body>${htmlVal}</body>
        <style>${cssVal}</style>
        <script>${jsVal}</script>
    </html>
    `;

  useEffect(() => {
    setTimeout(() => {
      setSrcode(src);
    }, 1000);
  }, [htmlVal, jsVal, cssVal]);

  return (
    <Container
      style={htmlVal || cssVal || jsVal ? null : { background: "#444857" }}
    >
      <iframe
        srcDoc={Srcode}
        title="Output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </Container>
  );
}
