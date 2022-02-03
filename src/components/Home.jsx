import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import CodeBox from "./CodeBox";
import Header from "./Header";
import Result from './Result';

export default function Home() {
  return (
    <Fragment>
      <Header />
      <CodeBox />
      <Result />
    </Fragment>
  );
}
