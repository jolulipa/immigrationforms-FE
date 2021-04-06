import React from 'react';
import Form from '@rjsf/bootstrap-4';
import schema from './i130schema';
import uiSchema from "./i130UiSchema";
import Navigation from "../../components/Navigation";

const I130 = () => {
    return <div className="container">
        <Form
            schema={schema}
            uiSchema={uiSchema}
            onSubmit={(f) => console.log(f)}
        />
    </div>
}

export default I130;
