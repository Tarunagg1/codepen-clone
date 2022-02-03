import { Box } from "@mui/system";
import React, { Fragment, useContext } from "react";
import Editor from "./Editor";
import { styled } from "@mui/material/styles";
import { DataContext } from "../context/DataProvider";

const Container = styled(Box)`
  background-color: #060606;
  height: 50vh;
  display: flex;
`;

export default function CodeBox() {
  const { htmlVal,sethtmlVal,cssVal,setcssVal,jsVal,setjsVal } = useContext(DataContext);

  return (
    <Fragment>
      <Container>
        <Editor
          heading="HTML"
          icon="/ "
          color="#FF3C41"
          language="xml"
          value={htmlVal}
          onChangeFun={sethtmlVal}
        />
        <Editor
          heading="CSS"
          icon="* "
          color="#0EBEFF"
          language="css"
          value={cssVal}
          onChangeFun={setcssVal}
        />
        <Editor
          heading="JAVASCRIPT"
          icon="{ } "
          color="#ECD000"
          language="javascript"
          value={jsVal}
          onChangeFun={setjsVal}
        />
      </Container>
    </Fragment>
  );
}
