const formSchema = {
  title: "I-130",
  type: "object",
  properties: {
    p1: {
      type: "object",
      title: "Part 1. Relationship",
      description: "(You are the petitioner. Your relative is the Beneficiary)",
      required: ["petitionFor", "relationship"],
      properties: {
        petitionFor: {
          type: "string",
          title: "1. I am filing this petition for my...",
          enum: ["Spouse", "Parent", "Brother/Sister", "Child"],
        },
        relationship: {
          type: "number",
          title:
            "2. If you are filling this petition for your child or parent, select the box that describes your relationship",
          enum: [1, 2, 3, 4],
          enumNames: [
            "Child was born to parents who were married to each other at the time of the child's birth",
            "Stepchild/Stepparent",
            "Child was born to parents who were not married to each other at the time of the child's birth",
            "Child was adopted (nor an Orphan or Hague Convention adoptee)",
          ],
        },
        siblingQ: {
          type: "boolean",
          title: `3. If the beneficiary is your brother/sister, are you related by adoption?`,
          enum: ["Yes", "No"],
        },
        Lawful: {
          type: "boolean",
          title: `4. Did you gain lawful permanent resident status or citizenship through adoption?`,
          enum: [Yes, No],
        },
      },
    },
    p2: {
      type: "object",
      title: "Part 2. Information about you (petitioner)",
      description: "(Continued)",
      required: ["dateOfMarriage"],
      properties: {
        aNumber: {
          type: "number",
          title: `1. Alien Registration Number (A-Number) (if any)`,
        },
        onLineAccNum: {
          type: "number",
          title: `2. USCIS Online Account Number (if any)`,
        },
        socialSecNum: {
          type: "number",
          title: `3. U.S. Social Security Number (if any)`,
        },
        dateOfMarriage: {
          type: "string",
          title: "Date of current marriage (if currently married)",
        },
      },
    },
  },
};

export default formSchema;
