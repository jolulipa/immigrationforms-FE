const formSchema = {
  title: "I485 Form - Immigration Services",
  description:
    "Utilice este formulario si usted va a solicitar cualquier servicio de The Inmmigration Time. El llenado de este formulario es el primer paso para iniciar los procedimientos necesarios para ayudarle a conseguir sus objetivos migratorios.",
  type: "object",
  properties: {
    p1: {
      type: "object",
      title: "Part 1. Información sobre el cliente",
      description: "Information of the PETITIONER You):",
      required: ["email", "aNumber", "socialSecNum", "petFullName"],
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
    p3: {
      type: "object",
      title: "PETITIONER - Biographic Information",
      description:
        "NOTE:  Provide the biographic information about you, the petitioner.",
      // required: [
      //   "ethnicity",
      //   "race",
      //   "heightFeet",
      //   "heightInches",
      //   "weight",
      //   "eyeColor",
      //   "hairColor",
      // ],
      properties: {
        placeBirth: {
          type: "string",
          title: "Place of Birth",
        },
        petCitizenship: {
          type: "string",
          title: "Citizenship",
        },
        ethnicity: {
          type: "string",
          title: "1.   Ethnicity (Select only one box)",
          enum: ["Hispanic or Latino", "Not Hispanic or Latino"],
        },
        race: {
          type: "string",
          title: "2.   Race (Select all applicable boxes)",
          enum: [
            "White",
            "Asian",
            "Black or African American",
            "American Indian or Alaska Native",
            "Native Hawaiian or Other Pacific Islander",
          ],
        },
        heightFeet: {
          type: "number",
          title: `3.a   Height Feet`,
        },
        heightInches: {
          type: "number",
          title: `3.b   Height Inches`,
        },
        weight: {
          type: "number",
          title: `4.   Weight in Pounds`,
        },
        eyeColor: {
          type: "string",
          title: "5.   Eye Color (Select only one box)",
          enum: [
            "Black",
            "Blue",
            "Brown",
            "Gray",
            "Green",
            "Hazel",
            "Maroon",
            "Pink",
            "Unknown/Other",
          ],
        },
        hairColor: {
          type: "string",
          title: "6.   Hair Color (Select only one box)",
          enum: [
            "Bald (no hair)",
            "Black",
            "Blond",
            "Brown",
            "Gray",
            "Red",
            "Sandy",
            "White",
            "Unknown/Other",
          ],
        },
        text16: {
          type: "object",
          title: "",
          description: `Information About Your Parents`,
        },
        text17: {
          type: "object",
          title: "",
          description: `Parent 1's Information:`,
        },
        text18: {
          type: "object",
          title: "",
          description: `Full Name of Parent 1`,
        },
        par1LastName: {
          type: "string",
          title: "24.a. Family Name (Last Name)",
        },
        par1FirstName: {
          type: "string",
          title: "24.b. Given Name (First Name)",
        },
        par1MidName: {
          type: "string",
          title: "24.c. Middle Name",
        },
        par1BirthDate: {
          type: "string",
          title: `25.  Date of Birth`,
        },
        par1Sex: {
          type: "string",
          title: "26.  Sex",
          enum: ["male", "female"],
        },
        par1CountryBirth: {
          type: "string",
          title: `27.  Country of Birth`,
        },
        par1City: {
          type: "string",
          title: `28.  City/Town/Village of Residence`,
        },
        par1CountryResidence: {
          type: "string",
          title: `29.  Country of Residence`,
        },
        text19: {
          type: "object",
          title: "",
          description: `Parent 2's Information:`,
        },
        text20: {
          type: "object",
          title: "",
          description: `Full Name of Parent 2`,
        },
        par2LastName: {
          type: "string",
          title: "30.a. Family Name (Last Name)",
        },
        par2FirstName: {
          type: "string",
          title: "30.b. Given Name (First Name)",
        },
        par2MidName: {
          type: "string",
          title: "30.c. Middle Name",
        },
        par2BirthDate: {
          type: "string",
          title: `31.  Date of Birth`,
        },
        par2Sex: {
          type: "string",
          title: "32.  Sex",
          enum: ["male", "female"],
        },
        par2CountryBirth: {
          type: "string",
          title: `33.  Country of Birth`,
        },
        par2City: {
          type: "string",
          title: `34.  City/Town/Village of Residence`,
        },
        par2CountryResidence: {
          type: "string",
          title: `35.  Country of Residence`,
        },
        text13: {
          type: "object",
          title: "",
          description: `Provide information on your current spouse (if currently married) first and then list all your prior spouses (if any).`,
        },
        text14: {
          type: "object",
          title: "",
          description: `Spouse 1:.`,
        },
        wife1LastName: {
          type: "string",
          title: "20.a. Family Name (Last Name)",
        },
        wife1FirstName: {
          type: "string",
          title: "20.b. Given Name (First Name)",
        },
        wife1MidName: {
          type: "string",
          title: "20.c. Middle Name",
        },
        wife1MarriageDate: {
          type: "string",
          title: `21.  Date Marriage Ended`,
        },
        text15: {
          type: "object",
          title: "",
          description: `Spouse 2:.`,
        },
        wife2LastName: {
          type: "string",
          title: "22.a. Family Name (Last Name)",
        },
        wife2FirstName: {
          type: "string",
          title: "22.b. Given Name (First Name)",
        },
        wife2MidName: {
          type: "string",
          title: "22.c. Middle Name",
        },
        wife2MarriageDate: {
          type: "string",
          title: `23.  Date Marriage Ended`,
        },
      },
    },
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
