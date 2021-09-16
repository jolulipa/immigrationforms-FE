const formSchema = {
  title: "DATOS DEL CONCESIONARIO",
  description:
    "Formulario para crear y modificar los datos de un concesionario del sistema de The Immigration Time",
  type: "object",
  properties: {
    p1: {
      type: "object",
      title: "CONCESIONARIO",
      description: "The owner or administrator of an office",
      required: [],
      properties: {
        conType: {
          type: "string",
          title: "User type (concessionaries can have 2 users)",
          enum: ["owner", "inCharge"],
        },
        conName: {
          type: "string",
          title: "User Name",
        },
        conEmail: {
          type: "string",
          title: `E-mail`,
        },
        conOffice: {
          type: "string",
          title: `Concessionary Office`,
        },
        rentRate: {
          type: "number",
          title: `Monthly Rent Rate`,
        },
        text4: {
          type: "object",
          title: "",
          description: `Concessionary Address:`,
        },
        inCareName: {
          type: "string",
          title: "In Care Of Name",
        },
        mailStreet: {
          type: "string",
          title: "Street Number and Name ",
        },
        mailApt: {
          type: "string",
          title: "Apt.     Ste.    Flr.",
        },
        mailCityTown: {
          type: "string",
          title: "City or Town",
        },
        mailState: {
          type: "string",
          title: "State ",
        },
        mailZip: {
          type: "string",
          title: "ZIP Code",
        },
        mailProvince: {
          type: "string",
          title: "Province",
        },
        mailPostal: {
          type: "string",
          title: "Postal Code ",
        },
        mailCountry: {
          type: "string",
          title: "Country",
        },
      },
    },
  },
};

export default formSchema;
