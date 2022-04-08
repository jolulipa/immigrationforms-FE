const formSchema = {
  title: "Intake Form - Immigration Services  -  Cuarta Pagina",
  description:
    "Formulario obligatorio para solicitar cualquier servicio de The Inmmigration Time.",
  type: "object",
  properties: {
    p4: {
      type: "object",
      title: "RESIDENCE – LAST 5 YEARS:",
      description: "",
      properties: {
        address1: {
          type: "string",
          title: `Address1`,
        },
        address1From: {
          type: "string",
          title: "From",
        },
        address1To: {
          type: "string",
          title: "To",
        },
        address2: {
          type: "string",
          title: `Address2`,
        },
        address2From: {
          type: "string",
          title: "From",
        },
        address2To: {
          type: "string",
          title: "To",
        },
        address3: {
          type: "string",
          title: `Address3`,
        },
        address3From: {
          type: "string",
          title: "From",
        },
        address3To: {
          type: "string",
          title: "To",
        },
        address4: {
          type: "string",
          title: `Address4`,
        },
        address4From: {
          type: "string",
          title: "From",
        },
        address4To: {
          type: "string",
          title: "To",
        },
        address5: {
          type: "string",
          title: `Address5`,
        },
        address5From: {
          type: "string",
          title: "From",
        },
        address5To: {
          type: "string",
          title: "To",
        },
        text13: {
          type: "object",
          title: "",
          description: `Last Address outside the United States of more than 1 year`,
        },
        address6: {
          type: "string",
          title: `Address6`,
        },
        address6From: {
          type: "string",
          title: "From",
        },
        address6To: {
          type: "string",
          title: "To",
        },
      },
    },
    p5: {
      type: "object",
      title: "OCCUPATIONS – LAST 5 YEARS:",
      description: "",
      properties: {
        employer1: {
          type: "string",
          title: `Employer Name`,
        },
        employer1Address: {
          type: "string",
          title: `Address`,
        },
        employer1Title: {
          type: "string",
          title: "Title",
        },
        employer1From: {
          type: "string",
          title: "From",
        },
        employer1To: {
          type: "string",
          title: "To",
        },
        employer2: {
          type: "string",
          title: `Employer Name`,
        },
        employer2Address: {
          type: "string",
          title: `Address`,
        },
        employer2Title: {
          type: "string",
          title: "Title",
        },
        employer2From: {
          type: "string",
          title: "From",
        },
        employer2To: {
          type: "string",
          title: "To",
        },
        employer3: {
          type: "string",
          title: `Employer Name`,
        },
        employer3Address: {
          type: "string",
          title: `Address`,
        },
        employer3Title: {
          type: "string",
          title: "Title",
        },
        employer3From: {
          type: "string",
          title: "From",
        },
        employer3To: {
          type: "string",
          title: "To",
        },
        employer4: {
          type: "string",
          title: `Employer Name`,
        },
        employer4Address: {
          type: "string",
          title: `Address`,
        },
        employer4Title: {
          type: "string",
          title: "Title",
        },
        employer4From: {
          type: "string",
          title: "From",
        },
        employer4To: {
          type: "string",
          title: "To",
        },
        employer5: {
          type: "string",
          title: `Employer Name`,
        },
        employer5Address: {
          type: "string",
          title: `Address`,
        },
        employer5Title: {
          type: "string",
          title: "Title",
        },
        employer5From: {
          type: "string",
          title: "From",
        },
        employer5To: {
          type: "string",
          title: "To",
        },
        text14: {
          type: "object",
          title: "",
          description: `Last Employer outside the United States of more than 1 year`,
        },
        employer6: {
          type: "string",
          title: `Employer Name`,
        },
        employer6Address: {
          type: "string",
          title: `Address`,
        },
        employer6Title: {
          type: "string",
          title: "Title",
        },
        employer6From: {
          type: "string",
          title: "From",
        },
        employer6To: {
          type: "string",
          title: "To",
        },
      },
    },
  },
};
export default formSchema;
