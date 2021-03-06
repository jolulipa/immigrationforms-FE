const formSchema = {
  title: "I-130 Peticion de familiar extranjero - Pagina 1",
  description:
    "Utilice este servicio si usted es ciudadano estadounidense o residente permanente legal (LPR) y necesita establecer su relación con un familiar elegible que desea venir o permanecer en los Estados Unidos permanentemente y obtener una tarjeta de residente permanente (también llamada Green Card).",
  type: "object",
  properties: {
    p1: {
      type: "object",
      title: "Part 1. Relationship",
      description: "(You are the petitioner. Your relative is the Beneficiary)",
      required: ["petitionFor", "lawful"],
      properties: {
        petitionFor: {
          type: "string",
          title: "1. I am filing this petition for my...",
          enum: ["Spouse", "Parent", "Brother/Sister", "Child"],
        },
        relationship: {
          type: "string",
          title:
            "2. If you are filling this petition for your child or parent, select the box that describes your relationship:  a) Child was born to parents who were married to each other at the time of the child's birth  b) Stepchild/Stepparent  c) Child was born to parents who were not married to each other at the time of the child's birth  d) Child was adopted (nor an Orphan or Hague Convention adoptee)",
          // enum: [1, 2, 3, 4],
          enum: ["a. ", "b. ", "c. ", "d. "],
        },
        siblingQ: {
          type: "string",
          title: `3. If the beneficiary is your brother/sister, are you related by adoption?`,
          enum: ["Yes", "No"],
        },
        lawful: {
          type: "string",
          title: `4. Did you gain lawful permanent resident status or citizenship through adoption?`,
          enum: ["Yes", "No"],
        },
      },
    },
    p2: {
      type: "object",
      title: "Part 2. Information about you (petitioner)",
      description: "(Continued)",
      required: [
        "aNumber",
        "petFullName",
        "socialSecNum",
        // "petLastName",
        // "petFirstName",
        // "mailStreet",
        // "cityTown",
        // "mailCountry",
        // "dateOfBirth",
        // "curMaritalStatus",
        // "iAmStatus",
        // "typeOfAdmission",
        // "employerName",
      ],
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
        text1: {
          type: "object",
          title: "",
          description: `Other Names Used (if any):`,
        },
        text2: {
          type: "object",
          title: "",
          description: `Provide all other names you have ever used, including aliases, 
          maiden name, and nicknames.`,
        },
        otherLastName: {
          type: "string",
          title: "5.a. Family Name (Last Name)",
        },
        otherFirstName: {
          type: "string",
          title: "5.b. Given Name (First Name)",
        },
        otherMidName: {
          type: "string",
          title: "5.c. Middle Name",
        },
        text3: {
          type: "object",
          title: "",
          description: `Other Information:`,
        },
        cityTown: {
          type: "string",
          title: "6.   City/Town/Village of Birth",
        },
        country: {
          type: "string",
          title: "7.   Country of Birth",
        },
        dateOfBirth: {
          type: "string",
          title: "8.   Date of Birth",
        },
        sex: {
          type: "string",
          title: "9.   Sex (Male or Female)",
          enum: ["Male", "Female"],
        },
        text4: {
          type: "object",
          title: "",
          description: `Mailing Address:`,
        },
        inCareName: {
          type: "string",
          title: "10.a. In Care Of Name",
        },
        mailStreet: {
          type: "string",
          title: "10.b. Street Number and Name ",
        },
        mailApt: {
          type: "string",
          title: "10.c.   Apt.     Ste.    Flr.",
        },
        mailCityTown: {
          type: "string",
          title: "10.d. City or Town",
        },
        mailState: {
          type: "string",
          title: "10.e. State ",
        },
        mailZip: {
          type: "string",
          title: "10.f. ZIP Code",
        },
        mailProvince: {
          type: "string",
          title: "10.g. Province",
        },
        mailPostal: {
          type: "string",
          title: "10.h. Postal Code ",
        },
        mailCountry: {
          type: "string",
          title: "10.i. Country",
        },
        currMail: {
          type: "string",
          title: `11.  Is your current mailing address the same as your physical address?`,
          enum: ["Yes", "No"],
        },
        text5: {
          type: "object",
          title: "",
          description: `If you answered "No" to Item Number 11., provide information on your physical address in Item Numbers 12.a. - 13.b.`,
        },
        text6: {
          type: "object",
          title: "",
          description: "Address History:",
        },
        text7: {
          type: "object",
          title: "",
          description: `Provide your physical addresses for the last five years, whether inside or outside the United States.  Provide your current address first if it is different from your mailing address in Item Numbers 10.a. - 10.i.`,
        },
        text8: {
          type: "object",
          title: "",
          description: "Physical Address 1:",
        },
        phy1Street: {
          type: "string",
          title: "12.a. Street Number and Name ",
        },
        phy1Apt: {
          type: "string",
          title: "12.b.   Apt.     Ste.    Flr.",
        },
        phy1CityTown: {
          type: "string",
          title: "12.c. City or Town",
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
        text9: {
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
        text10: {
          type: "object",
          title: "",
          description: "Your Marital Information:",
        },
        numMarriages: {
          type: "number",
          title: "16. How many times have you been married?",
        },
        curMaritalStatus: {
          type: "string",
          title: "17. Current Marital Status",
          enum: [
            "Single",
            "Never Married",
            "Married",
            "Divorced",
            "Widowed",
            "Separated",
            "Annulled",
          ],
        },
        curMarriageDate: {
          type: "string",
          title: `18.  Date of  Current Marriage (if currently married)`,
        },
        text11: {
          type: "object",
          title: "",
          description: "Place of Your Current Marriage (if married):",
        },
        curCityTown: {
          type: "string",
          title: "19.a. City or Town",
        },
        curState: {
          type: "string",
          title: "19.b. State ",
        },
        curProvince: {
          type: "string",
          title: "19.c. Province",
        },
        curCountry: {
          type: "string",
          title: "19.d. Country",
        },
        text12: {
          type: "object",
          title: "",
          description: `Names of All Your Spouses (if any)
          :`,
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
        text21: {
          type: "object",
          title: "",
          description: `Additional Information About You (Petitioner)`,
        },
        iAmStatus: {
          type: "string",
          title: `36.  I am a (Select only one box):`,
          enum: ["U.S. Citizen", "Lawful Permanent Resident"],
        },
        text22: {
          type: "object",
          title: "",
          description: `If you are a U.S. citizen, complete Item Number 37.`,
        },
        cshipType: {
          type: "string",
          title: `37.  My citizenship was acquired through (Select only one box):`,
          enum: ["Birth in the United States", "Naturalization", "Parents"],
        },
        certificationObtain: {
          type: "string",
          title: `38.  Have you obtained a Certificate of Naturalization or a Certificate of Citizenship?`,
          enum: ["Yes", "No"],
        },
        text23: {
          type: "object",
          title: "",
          description: `If you answered "Yes" to Item Number 38., complete the following:`,
        },
        certificateNumber: {
          type: "number",
          title: "39.a. Certificate Number",
        },
        placeOfIssuance: {
          type: "string",
          title: `39.b. Place of Issuance`,
        },
        dateOfIssuance: {
          type: "string",
          title: `39.c. Date of Issuance`,
        },
        text24: {
          type: "object",
          title: "",
          description: `If you are a lawful permanent resident, complete Item Numbers 40.a. - 41.`,
        },
        classOfAdmission: {
          type: "string",
          title: `40.a. Class of Admission`,
        },
        dateOfAdmission: {
          type: "string",
          title: `40.b. Date of Admission`,
        },
        text25: {
          type: "object",
          title: "",
          description: `Place of Admission:`,
        },
        cityOfAdmission: {
          type: "string",
          title: `40.c. City or Town `,
        },
        stateOfAdmission: {
          type: "string",
          title: `40.d State`,
        },
        typeOfAdmission: {
          type: "string",
          title: `41.  Did you gain lawful permanent resident status through marriage to a U.S. citizen or lawful permanent resident?`,
          enum: ["Yes", "No"],
        },
        text26: {
          type: "object",
          title: "",
          description: `Employment History`,
        },
        text27: {
          type: "object",
          title: "",
          description: `Provide your employment history for the last five years, whether inside or outside the United States.  Provide your current employment first.  If you are currently unemployed, type or print "Unemployed" in Item Number 42.`,
        },
        text28: {
          type: "object",
          title: "",
          description: `Employer 1:`,
        },
        employerName: {
          type: "string",
          title: `42.  Name of Employer/Company`,
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
        employerState: {
          type: "string",
          title: "43.d. State ",
        },
        employerZip: {
          type: "string",
          title: "43.e. ZIP Code",
        },
        employerProvince: {
          type: "string",
          title: "43.f.Province",
        },
        employerPostal: {
          type: "string",
          title: "43.g. Postal Code ",
        },
        employerCountry: {
          type: "string",
          title: "43.h. Country",
        },
        yourOccupation1: {
          type: "string",
          title: "44.  Your Occupation",
        },
        emplmntDateFrom: {
          type: "string",
          title: `45.a. Date from`,
        },
        emplmntDateTo: {
          type: "string",
          title: `45.b. Date to`,
        },
        text29: {
          type: "object",
          title: "",
          description: `Employer 2:`,
        },
        employer2Name: {
          type: "string",
          title: `46.  Name of Employer/Company`,
        },
        employer2Street: {
          type: "string",
          title: "47.a.Street Number and Name ",
        },
        employer2Apt: {
          type: "string",
          title: "47.b.  Apt.     Ste.    Flr.",
        },
        employer2CityTown: {
          type: "string",
          title: "47.c. City or Town",
        },
        employer2State: {
          type: "string",
          title: "47.d. State ",
        },
        employer2Zip: {
          type: "string",
          title: "47.e. ZIP Code",
        },
        employer2Province: {
          type: "string",
          title: "47.f. Province",
        },
        employer2Postal: {
          type: "string",
          title: "47.g. Postal Code ",
        },
        employer2Country: {
          type: "string",
          title: "47.h. Country",
        },
        yourOccupation2: {
          type: "string",
          title: "48.  Your Occupation",
        },
        emplmnt2DateFrom: {
          type: "string",
          title: `49.a. Date from`,
        },
        emplmnt2DateTo: {
          type: "string",
          title: `49.b. Date to`,
        },
      },
    },
  },
};

export default formSchema;
