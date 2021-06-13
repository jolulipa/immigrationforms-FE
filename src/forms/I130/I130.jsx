import React, {useState} from "react";
import Form from "@rjsf/bootstrap-4";
import schema from "./i130schema";
import uiSchema from "./i130UiSchema";

const I130 = () => {
    // const [formData, setFormData] = useState()
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

export default I130;
