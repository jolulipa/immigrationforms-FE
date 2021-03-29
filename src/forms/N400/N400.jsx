import React from "react";
import Form from "@rjsf/bootstrap-4";
import schema from "./N400schema";
import uiSchema from "./N400UiSchema";

const N400 = () => {
  return (
    <div className="container">
      <Form
        schema={schema}
        uiSchema={uiSchema}
        onSubmit={(f) => console.log(f)}
      />
    </div>
  );
};

export default N400;
