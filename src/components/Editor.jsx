import { Box } from "@mui/system";
import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import { styled } from "@mui/material/styles";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { Controlled as ControlledEditor } from "react-codemirror2";

import "codemirror/theme/material.css";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px 12px;
`;

const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  color: #aaaebc;
  font-width: 700;
`;

const Container = styled(Box)`
  flex-grow: 1;
  flex-basic: 0;
  display: flex;
  flex-direction: column;
  padding: 0 8px 8px;
`;

export default function Editor({
  heading,
  icon,
  color,
  language,
  value,
  onChangeFun,
}) {
  const [open, setopen] = useState(true);

  const handelChange = (editor,data,value) => {
    onChangeFun(value);
  };

  return (
    <Fragment>
      <Container style={open ? null : { flexGrow: 0 }}>
        <Header>
          <Heading>
            <Box
              component="span"
              style={{
                background: color,
                height: 20,
                width: 20,
                display: "flex",
                placeContent: "center",
                paddingBottom: 2,
                borderRadius: 5,
                marginRight: 5,
              }}
            >
              {icon}
            </Box>
            {heading}
          </Heading>

          <CloseFullscreenIcon
            fontSize="small"
            style={{ alignSelf: "center", cursor: "pointer" }}
            onClick={() => setopen((prevState) => !prevState)}
          />
        </Header>
        <ControlledEditor
          value={value}
          onBeforeChange={handelChange}
          options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            lineNumbers: true,
            theme: "material",
          }}
        />
      </Container>
    </Fragment>
  );
}
