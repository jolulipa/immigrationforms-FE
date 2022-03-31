const formSchema = {
  title: "Intake Form - Immigration Services.  -   Primera Pagina",
  description:
    "Utilice este formulario si usted va a solicitar cualquier servicio de The Inmmigration Time. El llenado de este formulario es el primer paso para iniciar los procedimientos necesarios para ayudarle a conseguir sus objetivos migratorios.",
  type: "object",
  properties: {
    p1: {
      type: "object",
      title: "Part 1. Información sobre el cliente",
      description: "Information of the PETITIONER (You):",
      required: ["email", "aNumber", "socialSecNum", "petFullName"],
      properties: {
        email: {
          type: "string",
          title: `Su correo electrónico es obligatorio, éntrelo aqui:`,
        },
        phone: {
          type: "string",
          title: `Phone:`,
          minLength: 10,
        },
        aNumber: {
          type: "number",
          title: `Alien Registration Number (A-Number) (if any)`,
        },
        socialSecNum: {
          type: "number",
          title: `U.S. Social Security Number (if any)`,
        },
        petFullName: {
          type: "string",
          title: "Your Full Name",
        },
        petLastName: {
          type: "string",
          title: "a. Family Name (Last Name)",
        },
        petFirstName: {
          type: "string",
          title: "b. Given Name (First Name)",
        },
        petMidName: {
          type: "string",
          title: "c. Middle Name",
        },
        text1: {
          type: "object",
          title: "",
          description: `ADDRESS`,
        },
        text2: {
          type: "object",
          title: "",
          description: `Provide your physical current address inside the United States.`,
        },
        phy1Street: {
          type: "string",
          title: "a. Street Number and Name ",
        },
        phy1Apt: {
          type: "string",
          title: "b.   Apt.     Ste.    Flr.",
        },
        phy1CityTown: {
          type: "string",
          title: "c. City or Town",
        },
        phy1State: {
          type: "string",
          title: "d. State ",
        },
        phy1Zip: {
          type: "string",
          title: "e. ZIP Code",
        },
        petBirthDate: {
          type: "string",
          title: `Date of Birth`,
        },
        petSex: {
          type: "string",
          title: "Sex",
          enum: ["male", "female"],
        },
        petMaritalSts: {
          type: "string",
          title: `Marital Status:`,
        },
        petCurrImmSts: {
          type: "string",
          title: `Current Immigration Status?`,
        },
        petCityEntry: {
          type: "string",
          title: `City and State you entered the US:`,
        },
        petDateEntry: {
          type: "string",
          title: `Date you entered the US:`,
        },
        petHowEntry: {
          type: "string",
          title: "How did you enter the US?",
        },
        petWhenRes: {
          type: "string",
          title: `If Applicable, when did you get your lawful permanent residency? `,
        },
        petPendCourt: {
          type: "string",
          title: `Do you have any pending applications with USCIS or Immigration Court? `,
        },
        petCourtWhat: {
          type: "string",
          title: `If so, what applications? `,
        },
        text17: {
          type: "object",
          title: "",
          description: `Information About your BENEFICIARY (YOUR RELATIVE/INTENDING IMMIGRANT):`,
        },
        benPhone: {
          type: "string",
          title: `Phone:`,
        },
        benFullName: {
          type: "string",
          title: "Full Name of BENEFICIARY",
        },
        benLastName: {
          type: "string",
          title: "a. Family Name (Last Name)",
        },
        benFirstName: {
          type: "string",
          title: "b. Given Name (First Name)",
        },
        benMidName: {
          type: "string",
          title: "c. Middle Name",
        },
        text10: {
          type: "object",
          title: "",
          description: `ADDRESS`,
        },
        text20: {
          type: "object",
          title: "",
          description: `Provide BENEFICIARY current address.`,
        },
        phy2Street: {
          type: "string",
          title: "a. Street Number and Name ",
        },
        phy2Apt: {
          type: "string",
          title: "b.   Apt.     Ste.    Flr.",
        },
        phy2CityTown: {
          type: "string",
          title: "c. City or Town",
        },
        phy2State: {
          type: "string",
          title: "d. State ",
        },
        phy2Zip: {
          type: "string",
          title: "e. ZIP Code",
        },
        phy2Province: {
          type: "string",
          title: "f. Province",
        },
        phy2Postal: {
          type: "string",
          title: "g. Postal Code ",
        },
        phy2Country: {
          type: "string",
          title: "h. Country",
        },
        benEmail: {
          type: "string",
          title: `Correo electrónico/email:`,
        },
        benBirthDate: {
          type: "string",
          title: `Date of Birth`,
        },
        benSex: {
          type: "string",
          title: "Sex",
          enum: ["male", "female"],
        },
        benMaritalSts: {
          type: "string",
          title: `Marital Status:`,
        },
        benCurrImmSts: {
          type: "string",
          title: `Current Immigration Status?`,
        },
        benCityEntry: {
          type: "string",
          title: `City and State you entered the US:`,
        },
        benDateEntry: {
          type: "string",
          title: `Date you entered the US:`,
        },
        benHowEntry: {
          type: "string",
          title: "How did you enter the US?",
        },
        benWhenRes: {
          type: "string",
          title: `If Applicable, when did you get your lawful permanent residency? `,
        },
        benPendCourt: {
          type: "string",
          title: `Do you have any pending applications with USCIS or Immigration Court? `,
        },
        benCourtWhat: {
          type: "string",
          title: `If so, what applications? `,
        },
        text21: {
          type: "object",
          title: "",
          description: `PENDING CHARGES`,
        },
        benCourtCharges: {
          type: "string",
          title: `What are the charges? `,
        },
        benCourtCounts: {
          type: "number",
          title: `How many counts? `,
        },
        benSameDay: {
          type: "string",
          title: `Are all offenses on the same day? `,
        },
        text22: {
          type: "object",
          title: "",
          description: `CRIMINAL RECORD`,
        },
        benPriors: {
          type: "string",
          title: `Do you have prior arrests in the United States or any other countries? `,
        },
        benPriorsBasis: {
          type: "string",
          title: `If yes, what was the basis of the arrest? `,
        },
        benPriorsWhere: {
          type: "string",
          title: `If yes, where did it happen?`,
        },
        benPriorsWhen: {
          type: "string",
          title: `When did it happen?`,
        },

        text23: {
          type: "object",
          title: "",
          description: `REMOVAL PROCEEDINGS`,
        },
        benPrecedings: {
          type: "string",
          title: `Have you ever been placed in deportation or removal proceedings?`,
        },
        benPrecWhere: {
          type: "string",
          title: `If yes, when and where?`,
        },
      },
    },
  },
};
export default formSchema;
