const formSchema = {
  title: "Intake Form - Immigration Services  -  Tercera Pagina",
  description:
  "Formulario obligatorio para solicitar cualquier servicio de The Inmmigration Time.",
  type: "object",
  properties: {
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
