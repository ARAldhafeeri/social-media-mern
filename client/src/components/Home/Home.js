import React from "react";
import {Grow} from "@material-ui/core";
import FormPostContainer from "../../containers/FormPostContainer";

export default function Home() {
  return (
        <Grow in >
            <FormPostContainer  />
        </Grow>
  )
}
