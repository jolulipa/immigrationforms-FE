const formSchema = {
  title: "Intake Form - Immigration Services",
  description:
    "Utilice este formulario si usted va a solicitar cualquier servicio de The Inmmigration Time. El llenado de este formulario es el primer paso para iniciar los procedimientos necesarios para ayudarle a conseguir sus objetivos migratorios.",
  type: "object",
  properties: {
    p1: {
      type: "object",
      title: "Part 1. Información sobre el cliente",
      description: "Information of the PETITIONER:",
      // required: ["email", "aNumber", "relationship", "siblingQ", "Lawful"],
      required: ["email", "aNumber"],
      properties: {
        email: {
          type: "string",
          title: `Su correo electrónico es obligatorio, éntrelo aqui:`,
        },
        phone: {
          type: "string",
          title: `Phone:`,
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
        phy1Province: {
          type: "string",
          title: "f. Province",
        },
        phy1Postal: {
          type: "string",
          title: "g. Postal Code ",
        },
        phy1Country: {
          type: "string",
          title: "h. Country",
        },
        text17: {
          type: "object",
          title: "",
          description: `Information About your BENEFICIARY (YOUR RELATIVE/INTENDING IMMIGRANT):`,
        },
        phone2: {
          type: "string",
          title: `Phone:`,
        },
        text18: {
          type: "object",
          title: "",
          description: `Full Name of BENEFICIARY`,
        },
        BenLastName: {
          type: "string",
          title: "a. Family Name (Last Name)",
        },
        BenFirstName: {
          type: "string",
          title: "b. Given Name (First Name)",
        },
        BenMidName: {
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
          description: `Provide your physical current address inside the United States.`,
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
        BenBirthDate: {
          type: "string",
          title: `Date of Birth`,
        },
        BenSex: {
          type: "string",
          title: "Sex",
          enum: ["male", "female"],
        },
        BenMaritalSts: {
          type: "string",
          title: `Marital Status:`,
        },
        BenCurrImmSts: {
          type: "string",
          title: `Current Immigration Status?`,
        },
        BenCityEntry: {
          type: "string",
          title: `City and State you entered the US:`,
        },
        BenDateEntry: {
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
        BenPendCourt: {
          type: "string",
          title: `Do you have any pending applications with USCIS or Immigration Court? `,
        },
        BenCourtWhat: {
          type: "string",
          title: `If so, what applications? `,
        },
        text21: {
          type: "object",
          title: "",
          description: `PENDING CHARGES`,
        },
        BenCourtCharges: {
          type: "string",
          title: `What are the charges? `,
        },
        BenCourtCounts: {
          type: "number",
          title: `How many counts? `,
        },
        BenSameDay: {
          type: "string",
          title: `Are all offenses on the same day? `,
        },
        text22: {
          type: "object",
          title: "",
          description: `CRIMINAL RECORD`,
        },
        BenPriors: {
          type: "string",
          title: `Do you have prior arrests in the United States or any other countries? `,
        },
        BenPriorsBasis: {
          type: "string",
          title: `If yes, what was the basis of the arrest? `,
        },
        BenPriorsWhere: {
          type: "string",
          title: `If yes, where did it happen?`,
        },
        BenPriorsWhen: {
          type: "string",
          title: `When did it happen?`,
        },

        text23: {
          type: "object",
          title: "",
          description: `REMOVAL PROCEEDINGS`,
        },
        BenPrecedings: {
          type: "string",
          title: `Have you ever been placed in deportation or removal proceedings?`,
        },
        BenPrecWhere: {
          type: "string",
          title: `If yes, when and where?`,
        },
      },
    },
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
