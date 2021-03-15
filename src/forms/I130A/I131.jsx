import React from "react";
import Form from "@rjsf/bootstrap-4";
import schema from "./i130Aschema";
import uiSchema from "./i130AUiSchema";

const I130A = () => {
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

export default I130A;
