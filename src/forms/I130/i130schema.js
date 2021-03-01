const formSchema = {
    title: "I-131",
    type: "object",
    properties: {
        p1: {
            type: "object",
            title: "Part 1. Relationship",
            description: "(You are the petitioner. Your relative is the Beneficiary)",
            required: ['petitionFor', 'relationship'],
            properties: {
                petitionFor: {
                    type: "string",
                    title: "I am filing this petition for my...",
                    enum: [
                        "Spouse",
                        "Parent",
                        "Brother/Sister",
                        "Child"
                    ]
                },
                relationship: {
                    type: "number",
                    title: "If you are filling this petition for your child or parent, select the box that describes your relationship",
                    enum: [1, 2, 3, 4],
                    enumNames: [
                        "Child was born to parents who were married to each other at the time of the child's birth",
                        "Stepchild/Stepparent",
                        "Child was born to parents who were not married to each other at the time of the child's birth",
                        "Child was adopted (nor an Orphan or Hague Convention adoptee)"
                    ]
                }
            }
        },
        p2: {
            type: "object",
            title: "Information about you (petitioner)",
            description: "(Continued)",
            required: ['dateOfMarriage'],
            properties: {
                dateOfMarriage: {
                    type: "string",
                    title: "Date of current marriage (if currently married)",
                },
            }
        }
    }
};

export default formSchema;
