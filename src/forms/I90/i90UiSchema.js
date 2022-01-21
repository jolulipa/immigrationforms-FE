const uiSchema = {
  p1: {
    email: {
      "ui:widget": "email",
      "ui:help": "Must be a real working email address!",
    },
  },
  p2: {
    dateOfBirth: {
      "ui:widget": "date",
    },
    phy1DateF: {
      "ui:widget": "date",
    },
    phy1DateT: {
      "ui:widget": "date",
    },
    phy2DateF: {
      "ui:widget": "date",
    },
    phy2DateT: {
      "ui:widget": "date",
    },
    curMarriageDate: {
      "ui:widget": "date",
    },
  },
};

export default uiSchema;
