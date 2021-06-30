const formSchema = {
  title: "I-130 Peticion de familiar extranjero",
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
            "2. If you are filling this petition for your child or parent, select the box that describes your relationship",
          // enum: [1, 2, 3, 4],
          enum: [
            "a. Child was born to parents who were married to each other at the time of the child's birth",
            "b. Stepchild/Stepparent",
            "c. Child was born to parents who were not married to each other at the time of the child's birth",
            "d. Child was adopted (nor an Orphan or Hague Convention adoptee)",
          ],
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
          type: "boolean",
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
    p3: {
      type: "object",
      title: "Part 3. Biographic Information",
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
      },
    },
    p4: {
      type: "object",
      title: "Part 4.  Information About Beneficiary",
      description: "",
      // required: [
      //   "PetANumber",
      //   "benFullName",
      //   "benLastName",
      //   "benFirstName",
      //   "benDateBirth",
      //   "benCountryResidence",
      // ],
      properties: {
        PetANumber: {
          type: "number",
          title: `1. Alien Registration Number (A-Number) (if any)`,
        },
        petOnLineAccNum: {
          type: "number",
          title: `2. USCIS Online Account Number (if any)`,
        },
        petSocialSecNum: {
          type: "number",
          title: `3. U.S. Social Security Number (if any)`,
        },
        text29: {
          type: "object",
          title: "",
          description: `Beneficiary's Full Name`,
        },
        benFullName: {
          type: "string",
          title: "4.	 Your Full Name",
        },
        benLastName: {
          type: "string",
          title: "4.a. Family Name (Last Name)",
        },
        benFirstName: {
          type: "string",
          title: "4.b. Given Name (First Name)",
        },
        benMidName: {
          type: "string",
          title: "4.c. Middle Name",
        },
        text30: {
          type: "object",
          title: "",
          description: `Other Names Used (if any):`,
        },
        text31: {
          type: "object",
          title: "",
          description: `Provide all other names the beneficiary has ever used, including aliases, maiden name, and nicknames.`,
        },
        otherLastName: {
          type: "string",
          title: "4.a. Family Name (Last Name)",
        },
        otherFirstName: {
          type: "string",
          title: "4.b. Given Name (First Name)",
        },
        otherMidName: {
          type: "string",
          title: "4.c. Middle Name",
        },
        text32: {
          type: "object",
          title: "",
          description: `Other Information About Beneficiary `,
        },
        benCity: {
          type: "string",
          title: `6.  City/Town/Village of Birth`,
        },
        benCountryResidence: {
          type: "string",
          title: `7.  Country of Birth`,
        },
        benDateBirth: {
          type: "string",
          title: `8.   Date of Birth`,
        },
        benSex: {
          type: "string",
          title: `9.  Sex`,
          enum: ["Male", "female"],
        },
        benHas: {
          type: "string",
          title: `10.   Has anyone else ever filed a petition for the beneficiary?`,
          enum: ["Yes", "Not", "Unknown"],
        },
        text33: {
          type: "object",
          title: "",
          description: `NOTE:  Select "Unknown" only if you do not know, and  the beneficiary also does not know, if anyone else has ever filed a petition for the beneficiary.`,
        },
        text34: {
          type: "object",
          title: "",
          description: `Beneficiary's Physical Address:`,
        },
        text35: {
          type: "object",
          title: "",
          description: `If the beneficiary lives outside the United States in a home without a street number or name, leave Item Numbers 11.a. and 11.b. blank.`,
        },
        benInCareName: {
          type: "string",
          title: "11.a. In Care Of Name",
        },
        benStreet: {
          type: "string",
          title: "11.b. Street Number and Name ",
        },
        benApt: {
          type: "string",
          title: "11.c.   Apt.     Ste.    Flr.",
        },
        benCityTown: {
          type: "string",
          title: "11.d. City or Town",
        },
        benState: {
          type: "string",
          title: "11.e. State ",
        },
        benZip: {
          type: "string",
          title: "11.f. ZIP Code",
        },
        benProvince: {
          type: "string",
          title: "11.g. Province",
        },
        benPostal: {
          type: "string",
          title: "11.h. Postal Code ",
        },
        benCountry: {
          type: "string",
          title: "11.i. Country",
        },
        text36: {
          type: "object",
          title: "",
          description: "Other Address and Contact Information:",
        },
        text37: {
          type: "object",
          title: "",
          description: `Provide the address in the United States where the beneficiary intends to live, if different from Item Numbers 11.a. - 11.h.  If the address is the same, type or print "SAME" in Item Number 12.a.`,
        },
        benLiveStreet: {
          type: "string",
          title: "12.a. Street Number and Name ",
        },
        benLiveApt: {
          type: "string",
          title: "12.b.   Apt.     Ste.    Flr.",
        },
        benLiveCityTown: {
          type: "string",
          title: "12.c. City or Town",
        },
        benLiveState: {
          type: "string",
          title: "12.d. State ",
        },
        benLiveZip: {
          type: "string",
          title: "12.e. ZIP Code",
        },
        text38: {
          type: "object",
          title: "",
          description: `Provide the beneficiary's address outside the United States, if different from Item Numbers 11.a. - 11.h.  If the address is the same, type or print "SAME" in Item Number 13.a.`,
        },
        benOutStreet: {
          type: "string",
          title: "13.a. Street Number and Name ",
        },
        benOutApt: {
          type: "string",
          title: "13.b.   Apt.     Ste.    Flr.",
        },
        benOutCityTown: {
          type: "string",
          title: "13.c. City or Town",
        },
        benOutState: {
          type: "string",
          title: "13.d. State ",
        },
        benOutZip: {
          type: "string",
          title: "13.e. ZIP Code",
        },
        benOutCountry: {
          type: "string",
          title: "13.f. Country",
        },
        dayTel: {
          type: "number",
          title: `14.  Daytime Telephone Number (if any)`,
        },
        mobileTel: {
          type: "number",
          title: `15.  Mobile Telephone Number (if any)`,
        },
        emailTel: {
          type: "string",
          title: `16.  Email Address (if any)`,
        },
        text39: {
          type: "object",
          title: "",
          description: `Beneficiary's Marital Information:`,
        },
        benNumMarriages: {
          type: "number",
          title: `17.  How many times has the beneficiary been married?`,
        },
        benMaritalStatus: {
          type: "string",
          title: "18. Current Marital Status",
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
        benMarriageDate: {
          type: "string",
          title: `19.  Date of  Current Marriage (if currently married)`,
        },
        text40: {
          type: "object",
          title: "",
          description: "Place of Beneficiary's Current Marriage (if married):",
        },
        benMarCityTown: {
          type: "string",
          title: "20.a. City or Town",
        },
        benMarState: {
          type: "string",
          title: "20.b. State ",
        },
        benMarProvince: {
          type: "string",
          title: "20.c. Province",
        },
        benMarCountry: {
          type: "string",
          title: "20.d. Country",
        },
        text41: {
          type: "object",
          title: "",
          description: `Names of Beneficiary's Spouses (if any):`,
        },
        text42: {
          type: "object",
          title: "",
          description: `Provide information on the beneficiary's current spouse (if currently married) first and then list all the beneficiary's prior spouses (if any)`,
        },
        text43: {
          type: "object",
          title: "",
          description: `Spouse 1:.`,
        },
        brnWife1LastName: {
          type: "string",
          title: "21.a. Family Name (Last Name)",
        },
        benWife1FirstName: {
          type: "string",
          title: "21.b. Given Name (First Name)",
        },
        benWife1MidName: {
          type: "string",
          title: "21.c. Middle Name",
        },
        benWife1MarriageDate: {
          type: "string",
          title: `22.  Date Marriage Ended`,
        },
        text44: {
          type: "object",
          title: "",
          description: `Spouse 2:.`,
        },
        benWife2LastName: {
          type: "string",
          title: "23.a. Family Name (Last Name)",
        },
        benWife2FirstName: {
          type: "string",
          title: "23.b. Given Name (First Name)",
        },
        benWife2MidName: {
          type: "string",
          title: "23.c. Middle Name",
        },
        benWife2MarriageDate: {
          type: "string",
          title: `24.  Date Marriage Ended`,
        },
        text45: {
          type: "object",
          title: "",
          description: `Information About Beneficiary's Family `,
        },
        text46: {
          type: "object",
          title: "",
          description: `Provide information about the beneficiary's spouse and children. `,
        },
        text47: {
          type: "object",
          title: "",
          description: `Person 1`,
        },
        per1LastName: {
          type: "string",
          title: "25.a. Family Name (Last Name)",
        },
        per1FirstName: {
          type: "string",
          title: "25.b. Given Name (First Name)",
        },
        per1MidName: {
          type: "string",
          title: "25.c. Middle Name",
        },
        per1Relationship: {
          type: "string",
          title: `26.  Relationship`,
        },
        per1BirthDate: {
          type: "string",
          title: `27.  Date of Birth`,
        },
        per1CountryBirth: {
          type: "string",
          title: `28.  Country of Birth`,
        },
        text48: {
          type: "object",
          title: "",
          description: `Person 2`,
        },
        per2LastName: {
          type: "string",
          title: "29.a. Family Name (Last Name)",
        },
        per2FirstName: {
          type: "string",
          title: "29.b. Given Name (First Name)",
        },
        per2MidName: {
          type: "string",
          title: "29.c. Middle Name",
        },
        per2Relationship: {
          type: "string",
          title: `30.  Relationship`,
        },
        per2BirthDate: {
          type: "string",
          title: `31.  Date of Birth`,
        },
        per2CountryBirth: {
          type: "string",
          title: `32.  Country of Birth`,
        },
        text49: {
          type: "object",
          title: "",
          description: `Person 3`,
        },
        per3LastName: {
          type: "string",
          title: "33.a. Family Name (Last Name)",
        },
        per3FirstName: {
          type: "string",
          title: "33.b. Given Name (First Name)",
        },
        per3MidName: {
          type: "string",
          title: "33.c. Middle Name",
        },
        per3Relationship: {
          type: "string",
          title: `34.  Relationship`,
        },
        per3BirthDate: {
          type: "string",
          title: `35.  Date of Birth`,
        },
        per3CountryBirth: {
          type: "string",
          title: `36.  Country of Birth`,
        },
        text50: {
          type: "object",
          title: "",
          description: `Person 4`,
        },
        per4LastName: {
          type: "string",
          title: "37.a. Family Name (Last Name)",
        },
        per4FirstName: {
          type: "string",
          title: "37.b. Given Name (First Name)",
        },
        per4MidName: {
          type: "string",
          title: "37.c. Middle Name",
        },
        per4Relationship: {
          type: "string",
          title: `38.  Relationship`,
        },
        per4BirthDate: {
          type: "string",
          title: `39.  Date of Birth`,
        },
        per4CountryBirth: {
          type: "string",
          title: `40.  Country of Birth`,
        },
        text51: {
          type: "object",
          title: "",
          description: `Person 5`,
        },
        per5LastName: {
          type: "string",
          title: "41.a. Family Name (Last Name)",
        },
        per5FirstName: {
          type: "string",
          title: "41.b. Given Name (First Name)",
        },
        per5MidName: {
          type: "string",
          title: "41.c. Middle Name",
        },
        per5Relationship: {
          type: "string",
          title: `42.  Relationship`,
        },
        per5BirthDate: {
          type: "string",
          title: `43.  Date of Birth`,
        },
        per5CountryBirth: {
          type: "string",
          title: `44.  Country of Birth`,
        },
        text52: {
          type: "object",
          title: "",
          description: `Beneficiary's Entry Information `,
        },
        benEverInUS: {
          type: "string",
          title: `45.  Was the beneficiary EVER in the United States?`,
          enum: ["Yes", "No"],
        },
        text53: {
          type: "object",
          title: "",
          description: `If the beneficiary is currently in the United States, complete Items Numbers 46.a. - 46.d. `,
        },
        benClassAdmission: {
          type: "string",
          title: `46.a. He or she arrived as a (Class of Admission):`,
        },
        benI94Num: {
          type: "string",
          title: `46.b. Form I-94 Arrival-Departure Record Number`,
        },
        benDateArrival: {
          type: "string",
          title: `46.c. Date of Arrival`,
        },
        benDateExpired: {
          type: "string",
          title: `46.d. Date authorized stay expired, or will expire, as shown on Form I-94 or Form I-95 (mm/dd/yyyy) or type or print "D/S" for Duration of Status`,
        },
        benPassNum: {
          type: "string",
          title: `47.  Passport Number`,
        },
        benTravelDocNum: {
          type: "string",
          title: `48.  Travel Document Number`,
        },
        benCountryIssuance: {
          type: "string",
          title: `49.  Country of Issuance for Passport or Travel Document`,
        },
        benPassExpiration: {
          type: "string",
          title: `50.  Expiration Date for Passport or Travel Document`,
        },
        text54: {
          type: "object",
          title: "",
          description: `Beneficiary's Employment Information`,
        },
        text55: {
          type: "object",
          title: "",
          description: `Provide the beneficiary's current employment information (if applicable), even if they are employed outside of the United States.  If the beneficiary is currently unemployed, type or print "Unemployed" in Item Number 51.a. `,
        },
        benEmployerName: {
          type: "string",
          title: `51.a.  Name of Current Employer (if applicable)`,
        },
        benEmployerStreet: {
          type: "string",
          title: "51.b. Street Number and Name ",
        },
        benEmployerApt: {
          type: "string",
          title: "51.c.  Apt.     Ste.    Flr.",
        },
        benEmployerCityTown: {
          type: "string",
          title: "51.d. City or Town",
        },
        benEmployerState: {
          type: "string",
          title: "51.e. State ",
        },
        benEmployerZip: {
          type: "string",
          title: "51.f. ZIP Code",
        },
        benEmployerProvince: {
          type: "string",
          title: "51.g. Province",
        },
        benEmployerPostal: {
          type: "string",
          title: "51.h. Postal Code ",
        },
        benEmployerCountry: {
          type: "string",
          title: "51.i. Country",
        },
        emplmntDateFrom: {
          type: "string",
          title: `52.  Date Employment Began`,
        },
        text56: {
          type: "object",
          title: "",
          description: `Additional Information About Beneficiary`,
        },
        text57: {
          type: "object",
          title: "",
          description: `If the beneficiary is currently in the United States, complete Items Numbers 46.a. - 46.d.`,
        },
        benEverImm: {
          type: "string",
          title: `53.  Was the beneficiary EVER in immigration proceedings?`,
          enum: ["Yes", "No"],
        },
        benTypeImm: {
          type: "string",
          title: `54.  If you answered "Yes," select the type of proceedings and provide the location and date of the proceedings.`,
          enum: [
            "Removal",
            "Exclusion/Deportation",
            "Rescission",
            "Other Judicial Proceedings",
          ],
        },
        immProcCityTown: {
          type: "string",
          title: "55.a. City or Town",
        },
        immProcState: {
          type: "string",
          title: "55.b. State ",
        },
        immProcDate: {
          type: "string",
          title: `56.  Date`,
        },
        text58: {
          type: "object",
          title: "",
          description: `If the beneficiary's native written language does not use Roman letters, type or print his or her name and foreign address in their native written language.`,
        },
        benNativeLastName: {
          type: "string",
          title: "57.a. Family Name (Last Name)",
        },
        benNativeFirstName: {
          type: "string",
          title: "57.b. Given Name (First Name)",
        },
        benNativeMidName: {
          type: "string",
          title: "57.c. Middle Name",
        },
        benNativeStreet: {
          type: "string",
          title: "58.a. Street Number and Name ",
        },
        benNativeApt: {
          type: "string",
          title: "58.b   Apt.     Ste.    Flr.",
        },
        benNativeCityTown: {
          type: "string",
          title: "58.c. City or Town",
        },
        benNativeProvince: {
          type: "string",
          title: "58.d. Province",
        },
        benNativePostal: {
          type: "string",
          title: "58.e. Postal Code ",
        },
        benNativeCountry: {
          type: "string",
          title: "58.f. Country",
        },
        text59: {
          type: "object",
          title: "",
          description: `If filing for your spouse, provide the last address at which you physically lived together.  If you never lived together, type or print, "Never lived together" in Item Number 59.a`,
        },
        benSpouseStreet: {
          type: "string",
          title: "59.a. Street Number and Name ",
        },
        benSpouseApt: {
          type: "string",
          title: "59.b   Apt.     Ste.    Flr.",
        },
        benSpouseCityTown: {
          type: "string",
          title: "59.c. City or Town",
        },
        benSpouseState: {
          type: "string",
          title: "59.d. State ",
        },
        benSpouseZip: {
          type: "string",
          title: "59.e. ZIP Code",
        },
        benSpouseProvince: {
          type: "string",
          title: "59.f. Province",
        },
        benSpousePostal: {
          type: "string",
          title: "59.g. Postal Code ",
        },
        benSpouseCountry: {
          type: "string",
          title: "59.h. Country",
        },
        benSpouseDateF: {
          type: "string",
          title: `60.a. Date From `,
        },
        benSpouseDateT: {
          type: "string",
          title: `60.b. Date To`,
        },
        text60: {
          type: "object",
          title: "",
          description: `The beneficiary is in the United States and will apply for adjustment of status to that of a lawful permanent resident 
          at the U.S. Citizenship and Immigration Services (USCIS) office in:`,
        },
        adjustmentCityTown: {
          type: "string",
          title: "61.a. City or Town",
        },
        adjustmentState: {
          type: "string",
          title: "61.b. State ",
        },
        text61: {
          type: "object",
          title: "",
          description: `The beneficiary will not apply for adjustment of status in the United States, but he or she will apply for an immigrant visa abroad at the U.S. Embassy or U.S. Consulate in:`,
        },
        adjustment2CityTown: {
          type: "string",
          title: "62.a. City or Town",
        },
        adjustment2State: {
          type: "string",
          title: "62.b. State ",
        },
        adjustment2Country: {
          type: "string",
          title: "62.c. Country ",
        },
        text62: {
          type: "object",
          title: "",
          description: `NOTE:  Choosing a U.S. Embassy or U.S. Consulate outside the country of the beneficiary's last residence does not guarantee that it will accept the beneficiary's case for processing.  In these situations, the designated U.S. Embassy or U.S. Consulate has discretion over whether or not to accept the beneficiary's case.`,
        },
      },
    },
    p5: {
      type: "object",
      title: "Part 5.  Other Information",
      description: "",
      // required: ["benEverPrev"],
      properties: {
        benEverPrev: {
          type: "string",
          title: `1.   Have you EVER previously filed a petition for this beneficiary or any other alien?`,
          enum: ["Yes", "No"],
        },
        text64: {
          type: "object",
          title: "",
          description: `If you answered "Yes," provide the name, place, date of filing, and the result.`,
        },
        OtherPetLastName: {
          type: "string",
          title: "2.a. Family Name (Last Name)",
        },
        OtherPetFirstName: {
          type: "string",
          title: "2.b. Given Name (First Name)",
        },
        OtherPetMidName: {
          type: "string",
          title: "2.c. Middle Name",
        },
        OtherPetCityTown: {
          type: "string",
          title: "3.a. City or Town",
        },
        OtherPetDate: {
          type: "string",
          title: "4.   Date Filed",
        },
        OtherPetResult: {
          type: "string",
          title: "5.   Result (for example, approved, denied, withdrawn)",
        },
        text65: {
          type: "object",
          title: "",
          description: `If you are also submitting separate petitions for other relatives, 
          provide the names of and your relationship to each relative. `,
        },
        text66: {
          type: "object",
          title: "",
          description: "Relative 1",
        },
        OtherPet1LastName: {
          type: "string",
          title: "6.a. Family Name (Last Name)",
        },
        OtherPet1FirstName: {
          type: "string",
          title: "6.b. Given Name (First Name)",
        },
        OtherPet1MidName: {
          type: "string",
          title: "6.c. Middle Name",
        },
        OtherPet1Relationship: {
          type: "string",
          title: "7. Relationship",
        },
        text67: {
          type: "object",
          title: "",
          description: "Relative 2",
        },
        OtherPet2LastName: {
          type: "string",
          title: "8.a. Family Name (Last Name)",
        },
        OtherPet2FirstName: {
          type: "string",
          title: "8.b. Given Name (First Name)",
        },
        OtherPet2MidName: {
          type: "string",
          title: "8.c. Middle Name",
        },
        OtherPet2Relationship: {
          type: "string",
          title: "9. Relationship",
        },
        text68: {
          type: "object",
          title: "",
          description: `WARNING:  USCIS investigates the claimed relationships and Petitioner's Declaration and Certification verifies the validity of documents you submit.  If you falsify a family relationship to obtain a visa, USCIS may seek to have you criminally prosecuted.`,
        },
        text69: {
          type: "object",
          title: "",
          description: `PENALTIES:  By law, you may be imprisoned for up to 5 years or fined $250,000, or both, for entering into a marriage contract in order to evade any U.S. immigration law.  In addition, you may be fined up to $10,000 and imprisoned for up to 5 years, or both, for knowingly and willfully falsifying or concealing a material fact or using any false document in submitting this petition. `,
        },
      },
    },
    p6: {
      type: "object",
      title:
        "Part 6.  Petitioner's Statement, Contact Information, Declaration, and Signature",
      description:
        "NOTE:  Read the Penalties section of the Form I-130 Instructions before completing this part. ",
      required: [],
      properties: {
        text72: {
          type: "object",
          title: "",
          description: `Petitioner's Statement`,
        },
        text73: {
          type: "object",
          title: "",
          description: `NOTE:  Select the box for either Item Number 1.a. or 1.b.  If applicable, select the box for Item Number 2.`,
        },
        text74: {
          type: "object",
          title: "",
          description: `1.a.     I can read and understand English, and I have read and understand every question and instruction on this petition and my answer to every question.`,
        },
        text75: {
          type: "object",
          title: "",
          description: `1.b.     The interpreter named in Part 7. read to me every question and instruction on this petition and my answer to every question in _______________________  a language in which I am fluent.  I understood all of this information as interpreted.`,
        },
        text76: {
          type: "object",
          title: "",
          description: `2.       At my request, the preparer named in Part 8.,_____________ prepared this petition for me based only upon information I provided or authorized.  `,
        },
        text77: {
          type: "object",
          title: "",
          description: `Petitioner's Contact Information`,
        },
        PetContactTel1: {
          type: "string",
          title: "3.   Petitioner's Daytime Telephone",
        },
        PetContactTel2: {
          type: "string",
          title: "4.   Petitioner's Mobile Telephone",
        },
        PetContactEmail: {
          type: "string",
          title: "5.   Petitioner's Email Address (if any)",
        },
        text78: {
          type: "object",
          title: "",
          description: `Petitioner's Declaration and Certification`,
        },
        text79: {
          type: "object",
          title: "",
          description: `Copies of any documents I have submitted are exact photocopies of unaltered, original documents, and I understand that USCIS may require that I submit original documents to USCIS at a later date. Furthermore, I authorize the release of any information from any of my records that USCIS may need to determine my eligibility for the immigration benefit I seek.
          `,
        },
        text80: {
          type: "object",
          title: "",
          description: `I further authorize release of information contained in this petition, in supporting documents, and in my USCIS records to other entities and persons where necessary for the administration and enforcement of U.S. immigration laws.`,
        },
        text81: {
          type: "object",
          title: "",
          description: `I understand that USCIS may require me to appear for an appointment to take my biometrics (fingerprints, photograph, and/or signature) and, at that time, if I am required to provide biometrics, I will be required to sign an oath reaffirming that:`,
        },
        text82: {
          type: "object",
          title: "",
          description: `1) I provided or authorized all of the information contained in, and submitted with, my petition;
          2) I reviewed and understood all of the information in, and submitted with, my petition; and
          3) All of this information was complete, true, and correct at the time of filing.`,
        },
        text83: {
          type: "object",
          title: "",
          description: `I certify, under penalty of perjury, that all of the information in my petition and any document submitted with it were provided or authorized by me, that I reviewed and understand all of the information contained in, and submitted with, my petition, and that all of this information is complete, true, and correct.`,
        },
        PetSignature: {
          type: "string",
          title: "6.a. Petitioner's Signature (sign in ink)",
        },
        PetSignatureDate: {
          type: "string",
          title: "6.b. Date of Signature ",
        },
        text84: {
          type: "object",
          title: "",
          description: `NOTE TO ALL PETITIONERS:  If you do not completely fill out this petition or fail to submit required documents listed in the Instructions, USCIS may deny your petition.`,
        },
      },
    },
    p7: {
      type: "object",
      title:
        "Part 7.  Interpreter's Contact Information, Certification, and Signature ",
      description:
        "Provide the following information about the interpreter if you used one.",
      required: [],
      properties: {
        text86: {
          type: "object",
          title: "",
          description: `Interpreter's Full Name`,
        },
        intLastName: {
          type: "string",
          title: "1.a. Interpreter's Family Name (Last Name)",
        },
        intFirstName: {
          type: "string",
          title: "1.b. Interpreter's Given Name (First Name)",
        },
        intMidName: {
          type: "string",
          title: "2.   Interpreter's Business or Organization Name (if any)",
        },
        text87: {
          type: "object",
          title: "",
          description: "Interpreter's Mailing Address",
        },
        intStreet: {
          type: "string",
          title: "3.a. Street Number and Name ",
        },
        intApt: {
          type: "string",
          title: "3.b.   Apt.     Ste.    Flr.",
        },
        intCityTown: {
          type: "string",
          title: "3.c. City or Town",
        },
        intState: {
          type: "string",
          title: "3.d. State ",
        },
        intZip: {
          type: "string",
          title: "3.e. ZIP Code",
        },
        intProvince: {
          type: "string",
          title: "3.f. Province",
        },
        intPostal: {
          type: "string",
          title: "3.g. Postal Code ",
        },
        intCountry: {
          type: "string",
          title: "3.h. Country",
        },
        text77: {
          type: "object",
          title: "",
          description: `Interpreter's Contact Information`,
        },
        PetContactTel1: {
          type: "string",
          title: "4.   Interpreter's Daytime Telephone Number",
        },
        PetContactTel2: {
          type: "string",
          title: "5.   Interpreter's Mobile Telephone Number (if any)",
        },
        PetContactEmail: {
          type: "string",
          title: "6.   Interpreter's Email Address (if any)",
        },
        text88: {
          type: "object",
          title: "",
          description: `Interpreter's Certification`,
        },
        text89: {
          type: "object",
          title: "",
          description: `I certify, under penalty of perjury,   you  I am fluent in English and ____________________  which is the same language provided in Part 6., Item Number 1.b., and I have read to this petitioner in the identified language every question and instruction on this petition and his or her answer to every question.  The petitioner informed me that he or she understands every instruction, question, and answer on the petition, including the Petitioner's Declaration and Certification, and has verified the accuracy of every answer.`,
        },
        text90: {
          type: "object",
          title: "",
          description: `Interpreter's Signature`,
        },
        intSignature: {
          type: "string",
          title: "7.a. Interpreter's Signature (sign in ink)",
        },
        intSignatureDate: {
          type: "string",
          title: "7.b. Date of Signature ",
        },
      },
    },
    p8: {
      type: "object",
      title:
        "Part 8.  Contact Information, Declaration, and Signature of the Person Preparing this Petition, if Other Than the Petitioner",
      description: "Provide the following information about the preparer.",
      required: [],
      properties: {
        text91: {
          type: "object",
          title: "",
          description: `Preparer's Full Name`,
        },
        prepLastName: {
          type: "string",
          title: "1.a. Preparer's Family Name (Last Name)",
        },
        prepFirstName: {
          type: "string",
          title: "1.b. Preparer's Given Name (First Name)",
        },
        prepMidName: {
          type: "string",
          title: "2.   Preparer's Business or Organization Name (if any)",
        },
        text92: {
          type: "object",
          title: "",
          description: "Preparer's Mailing Address",
        },
        prepStreet: {
          type: "string",
          title: "3.a. Street Number and Name ",
        },
        prepApt: {
          type: "string",
          title: "3.b.   Apt.     Ste.    Flr.",
        },
        prepCityTown: {
          type: "string",
          title: "3.c. City or Town",
        },
        prepState: {
          type: "string",
          title: "3.d. State ",
        },
        prepZip: {
          type: "string",
          title: "3.e. ZIP Code",
        },
        prepProvince: {
          type: "string",
          title: "3.f. Province",
        },
        prepPostal: {
          type: "string",
          title: "3.g. Postal Code ",
        },
        prepCountry: {
          type: "string",
          title: "3.h. Country",
        },
        text77: {
          type: "object",
          title: "",
          description: `Preparer's Contact Information`,
        },
        PetContactTel1: {
          type: "string",
          title: "4.   Preparer's Daytime Telephone Number",
        },
        PetContactTel2: {
          type: "string",
          title: "5.   Preparer's Mobile Telephone Number (if any)",
        },
        PetContactEmail: {
          type: "string",
          title: "6.   Preparer's Email Address (if any)",
        },
        text93: {
          type: "object",
          title: "",
          description: `Preparer's Statement`,
        },
        text94: {
          type: "object",
          title: "",
          description: `7.a.     I am not an attorney or accredited representative but have prepared this petition on behalf of the petitioner  and with the petitioner's consent.
          7.b.     I am an attorney or accredited representative and my representation of the petitioner in this case extends does not extend beyond the preparation of this petition.`,
        },
        text95: {
          type: "object",
          title: "",
          description: ` NOTE:  If you are an attorney or accredited representative whose representation extends beyond preparation of this petition, you may be obliged to  submit a completed Form G-28, Notice of Entry of Appearance as Attorney or Accredited Representative, with this petition.`,
        },
        text96: {
          type: "object",
          title: "",
          description: `Preparer's Certification`,
        },
        text97: {
          type: "object",
          title: "",
          description: `By my signature, I certify, under penalty of perjury, that I prepared this petition at the request of the petitioner.  The petitioner then reviewed this completed petition and informed me that he or she understands all of the information contained in, and submitted with, his or her petition, including the Petitioner's Declaration and Certification, and that all of this information is complete, true, and correct.  I completed this petition based only on information that the petitioner provided to me or authorized me to obtain or use.`,
        },
        text98: {
          type: "object",
          title: "",
          description: `Preparer's Signature`,
        },
        intSignature: {
          type: "string",
          title: "8.a. Preparer's Signature (sign in ink)",
        },
        intSignatureDate: {
          type: "string",
          title: "8.b. Date of Signature ",
        },
      },
    },
    p9: {
      type: "object",
      title: "Part 9.  Additional Information",
      description:
        "If you need extra space to provide any additional information within this petition, use the space below.  If you need more space than what is provided, you may make copies of this page to complete and file with this petition or attach a separate sheet of paper.  Type or print your name and A-Number (if any) at the top of each sheet; indicate the Page Number, Part Number, and Item Number to which your answer refers; and sign and date each sheet.",
      required: [],
      properties: {
        yourLastName: {
          type: "string",
          title: "1.a. Family Name (Last Name)",
        },
        yourFirstName: {
          type: "string",
          title: "1.b. Given Name (First Name)",
        },
        yourMidName: {
          type: "string",
          title: "1.c. Middle Name",
        },
        yourAnumber: {
          type: "string",
          title: "2.   A-Number (if any)",
        },
        page1Number: {
          type: "string",
          title: "3.a. Page Number",
        },
        part1Number: {
          type: "string",
          title: "3.b. Part Number",
        },
        item1Number: {
          type: "string",
          title: "3.c. Item Number ",
        },
        Text1Number: {
          type: "string",
          title: "3.d.",
        },
        page2Number: {
          type: "string",
          title: "4.a. Page Number",
        },
        part2Number: {
          type: "string",
          title: "4.b. Part Number",
        },
        item2Number: {
          type: "string",
          title: "4.c. Item Number ",
        },
        Text2Number: {
          type: "string",
          title: "4.d.",
        },
        page3Number: {
          type: "string",
          title: "5.a. Page Number",
        },
        part3Number: {
          type: "string",
          title: "5.b. Part Number",
        },
        item3Number: {
          type: "string",
          title: "5.c. Item Number ",
        },
        Text3Number: {
          type: "string",
          title: "5.d.",
        },
        page4Number: {
          type: "string",
          title: "6.a. Page Number",
        },
        part4Number: {
          type: "string",
          title: "6.b. Part Number",
        },
        item4Number: {
          type: "string",
          title: "6.c. Item Number ",
        },
        Text4Number: {
          type: "string",
          title: "6.d.",
        },
        page5Number: {
          type: "string",
          title: "7.a. Page Number",
        },
        part5Number: {
          type: "string",
          title: "7b. Part Number",
        },
        item5Number: {
          type: "string",
          title: "7.c. Item Number ",
        },
        Text5Number: {
          type: "string",
          title: "7.d.",
        },
      },
    },
  },
};

export default formSchema;
