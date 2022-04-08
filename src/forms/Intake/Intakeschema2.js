const formSchema = {
  title: "Intake Form - Immigration Services.  -  Segunda Pagina",
  description:
    "Formulario obligatorio para solicitar cualquier servicio de The Inmmigration Time.",
  type: "object",
  properties: {
    p2: {
      type: "object",
      title: "INTENDING IMMIGRANT - ASSESSMENT QUESTIONS:",
      description: "",
      required: [],
      properties: {
        text19: {
          type: "object",
          title: "",
          description: `1.	Have you ever been detained at a Port of Entry or U.S. Border Office?`,
        },
        detainedWhere: {
          type: "string",
          title: `If Yes: Where`,
        },
        detainedWhen: {
          type: "string",
          title: "If Yes: When",
        },
        text18: {
          type: "object",
          title: "",
          description: `2.	Have you ever been refused entry into the U.S.? `,
        },
        deniedWhere: {
          type: "string",
          title: `If Yes: Where`,
        },
        deniedWhen: {
          type: "string",
          title: "If Yes: When",
        },
        text17: {
          type: "object",
          title: "",
          description: `3.	Have you ever been fingerprinted by an Immigration or Border Patrol Officer? `,
        },
        fingerWhere: {
          type: "string",
          title: `If Yes: Where`,
        },
        fingerWhen: {
          type: "string",
          title: "If Yes: When",
        },
        text16: {
          type: "object",
          title: "",
          description: `4.	Have you ever appeared in front of an Immigration Judge? `,
        },
        judgeWhere: {
          type: "string",
          title: `If Yes: Where`,
        },
        judgeWhen: {
          type: "string",
          title: "If Yes: When",
        },
        text24: {
          type: "object",
          title: "",
          description: `5.	Have you ever been temporarily allowed to enter the United States for medical or other reasons without obtaining a visitor visa? `,
        },
        medicalWhere: {
          type: "string",
          title: `If Yes: Where`,
        },
        medicalWhen: {
          type: "string",
          title: "If Yes: When",
        },
        text25: {
          type: "object",
          title: "",
          description: `6.	Have you ever been denied any kind of visa?`,
        },
        visaWhere: {
          type: "string",
          title: `If Yes: Where`,
        },
        visaWhen: {
          type: "string",
          title: "If Yes: When",
        },
        text26: {
          type: "object",
          title: "",
          description: `7.	Do you have any reason to fear returning to your home country? `,
        },
        fearWhy: {
          type: "string",
          title: `If Yes: Why`,
        },
        text27: {
          type: "object",
          title: "",
          description: `8.	Have you been involved in gangs, drug cartels or political conflict in the U.S. or your Country? `,
        },
        gangWhere: {
          type: "string",
          title: `If Yes: Where`,
        },
        gangWhen: {
          type: "string",
          title: "If Yes: When",
        },
        text29: {
          type: "object",
          title: "",
          description: `9.	Have you been the victim of a crime while in the U.S.? `,
        },
        victimWhere: {
          type: "string",
          title: `If Yes: Where`,
        },
        victimWhen: {
          type: "string",
          title: "If Yes: When",
        },
        text30: {
          type: "object",
          title: "",
          description: `10.	Have you ever plead guilty or no contest to any crime in the U.S. or another country? `,
        },
        pleaWhere: {
          type: "string",
          title: `If Yes: Where`,
        },
        pleaWhen: {
          type: "string",
          title: "If Yes: When",
        },
        text31: {
          type: "object",
          title: "",
          description: `11.	Have you ever been convicted of a crime involving drugs, weapons or fraud?`,
        },
        convictWhere: {
          type: "string",
          title: `If Yes: Where`,
        },
        convictWhen: {
          type: "string",
          title: "If Yes: When",
        },
        text32: {
          type: "object",
          title: "",
          description: `12.	Have you ever been arrested for a crime and no charges were filed or they were dismissed?`,
        },
        arrestedWhere: {
          type: "string",
          title: `If Yes: Where`,
        },
        arrestedWhen: {
          type: "string",
          title: "If Yes: When",
        },
        text33: {
          type: "object",
          title: "",
          description: `13.	Have you ever accepted public assistance such as “food stamp/EBT” Cash aide or Free Medical Services while in the U.S.? `,
        },
        assistWhere: {
          type: "string",
          title: `If Yes: Where`,
        },
        assistWhen: {
          type: "string",
          title: "If Yes: When",
        },
      },
    },
  },
};
export default formSchema;
