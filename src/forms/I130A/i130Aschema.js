const formSchema = {
  title: "I-130A Peticion de cónyuge extranjero",
  description:
    "El propósito de este formulario es recopilar información adicional para un cónyuge beneficiario del Formulario I-130, Petición para Pariente Extranjero. Si su cónyuge es ciudadano estadounidense, residente permanente legal o ciudadano no ciudadano que está presentando el Formulario I-130 en su nombre, debe completar y firmar el Formulario I-130A, Información Suplementaria para El Beneficiario del Cónyuge, y presentarla al Formulario I-130 presentado por su cónyuge. Si reside en el extranjero, todavía debe completar el Formulario I-130A, pero no necesita firmar el formulario.",
  type: "object",
  properties: {
    p1: {
      type: "object",
      title: "Part 1. Information About You",
      description: "(Spouse Beneficiary)",
      required: ["petitionFor", "relationship", "siblingQ", "Lawful"],
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
        petFullName: {
          type: "string",
          title: "4.	 Your Full Name",
        },
        petLastName: {
          type: "string",
          title: "4.a. Family Name (Last Name)",
        },
        petFirstName: {
          type: "string",
          title: "4.b. Given Name (First Name)",
        },
        petMidName: {
          type: "string",
          title: "4.c. Middle Name",
        },
        texto1: {
          type: "object",
          title: "",
          description: `Address History`,
        },
        texto2: {
          type: "object",
          title: "",
          description: `Provide your physical addresses for the last five years, whether inside or outside the United States. Provide your current address first. If you need extra space to complete this section, use the space provided in Part 7. Additional Information.`,
        },

        texto8: {
          type: "object",
          title: "",
          description: "Physical Address 1:",
        },
        phy1Street: {
          type: "string",
          title: "4.a. Street Number and Name ",
        },
        phy1Apt: {
          type: "string",
          title: "4.b.   Apt.     Ste.    Flr.",
        },
        phy1CityTown: {
          type: "string",
          title: "4.c. City or Town",
        },
        phy1State: {
          type: "string",
          title: "12.d. State ",
        },
        phy1Zip: {
          type: "string",
          title: "12.e. ZIP Code",
        },
        phy1Province: {
          type: "string",
          title: "12.f. Province",
        },
        phy1Postal: {
          type: "string",
          title: "12.g. Postal Code ",
        },
        phy1Country: {
          type: "string",
          title: "12.h. Country",
        },
        phy1DateF: {
          type: "string",
          title: `13.a. Date From `,
        },
        phy1DateT: {
          type: "string",
          title: `13.b. Date To - PRESENT`,
        },
        texto9: {
          type: "object",
          title: "",
          description: "Physical Address 2:",
        },
        phy2Street: {
          type: "string",
          title: "14.a. Street Number and Name ",
        },
        phy2Apt: {
          type: "string",
          title: "14.b.   Apt.     Ste.    Flr.",
        },
        phy2CityTown: {
          type: "string",
          title: "14.c. City or Town",
        },
        phy2State: {
          type: "string",
          title: "14.d. State ",
        },
        phy2Zip: {
          type: "string",
          title: "14.e. ZIP Code",
        },
        phy2Province: {
          type: "string",
          title: "14.f. Province",
        },
        phy2Postal: {
          type: "string",
          title: "14.g. Postal Code ",
        },
        phy2Country: {
          type: "string",
          title: "14.h. Country",
        },
        phy2DateF: {
          type: "string",
          title: `15.a. Date From`,
        },
        phy2DateT: {
          type: "string",
          title: `15.b. Date To - PRESENT`,
        },
        texto6: {
          type: "object",
          title: "",
          description: "Last Physical Address Outside the United States",
        },
        texto7: {
          type: "object",
          title: "",
          description:
            "Provide your last address outside the United States of more than one year (even if listed above).",
        },
        employerStreet: {
          type: "string",
          title: "43.a.Street Number and Name ",
        },
        employerApt: {
          type: "string",
          title: "43.b.  Apt.     Ste.    Flr.",
        },
        employerCityTown: {
          type: "string",
          title: "43.c. City or Town",
        },
        employerProvince: {
          type: "string",
          title: "43.d.Province",
        },
        employerPostal: {
          type: "string",
          title: "43.e. Postal Code ",
        },
        employerCountry: {
          type: "string",
          title: "43.f. Country",
        },
        emplmntDateFrom: {
          type: "string",
          title: `45.a. Date from`,
        },
        emplmntDateTo: {
          type: "string",
          title: `45.b. Date to`,
        },
      },
    },
  },
};
