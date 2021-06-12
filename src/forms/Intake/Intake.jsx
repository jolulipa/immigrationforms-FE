import React from "react";
import Form from "@rjsf/bootstrap-4";
import schema from "./Intakeschema";
import uiSchema from "./IntakeUiSchema";
import {createForm} from "../../api/formsAccess";

const Intake = () => {
    const extractData = async ({formData}) => {
        const obj = {data: JSON.stringify(formData), formId: "Intake"};
        await createForm(obj);
    };

    return (
        <div className="container">
            <Form schema={schema} uiSchema={uiSchema} onSubmit={extractData}/>
        </div>
    );
};
export default Intake;
