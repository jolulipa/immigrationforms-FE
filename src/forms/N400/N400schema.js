const formSchema = {
  title: "USCIS Form N-400 Application for Naturalization",
  description: ` START HERE - Type or print in black ink.  Type or print "N/A" if an item is not applicable or the answer is none, unless otherwise indicated.  Failure to answer all of the questions may delay U.S. Citizenship and Immigration Services (USCIS) processing your Form N-400.  NOTE:  You must complete Parts 1. - 15.
    ► A-
    Action Block Receipt
    Application for Naturalization 
     Department of Homeland Security 
    U.S. Citizenship and Immigration Services 
    USCIS 
    Form N-400 
    OMB No. 1615-0052 
    Expires 09/30/2022
    ►
    1.
    If your biological or legal adoptive mother or father is a U.S. citizen by birth, or was naturalized before you reached your 18th birthday, you may already be a U.S. citizen.  Before you consider filing this application, please visit the USCIS Website at www.uscis.gov for more information on this topic and to review the instructions for Form N-600, Application for Certificate of Citizenship, and Form N-600K, Application for Citizenship and Issuance of Certificate Under Section 322.
    NOTE:  Are either of your parents a United States citizen?  If you answer “Yes,” then complete Part 6.  Information About Your Parents as part of this application.  If you answer “No,” then skip Part 6. and go to Part 7.  Biographic Information.`,
  type: "object",
  properties: {
    p1: {
      type: "object",
      title:
        "Part 1.  Information About Your Eligibility (Select only one box or your Form N-400 may be delayed)",
      description: "(Spouse Beneficiary)",
      // required: ["petitionFor", "relationship", "siblingQ", "Lawful"],
      properties: {
        aNumber: {
          type: "number",
          title: `Alien Registration Number (A-Number) (if any)`,
        },
        text1: {
          type: "object",
          title: "",
          description: "1. You are at least 18 years of age and:",
        },
        ageMayor: {
          type: "boolean",
          title: "1. You are at least 18 years of age and:",
        },
        ageMayorAnd: {
          type: "string",
          title:
            "1. You are at least 18 years of age and:            A) Have been a lawful permanent resident of the United States for at least 5 years. B) Have been a lawful permanent resident of the United States for at least 3 years.  In addition, you have been married to and living with the same U.S. citizen spouse for the last 3 years, and your spouse has been a U.S. citizen for the last 3 years at the time you filed your Form N-400. C) Are a lawful permanent resident of the United States and you are the spouse of a U.S. citizen and your U.S. citizen spouse is regularly engaged in specified employment abroad.  (See the Immigration and Nationality Act (INA) section 319(b).)  If your residential address is outside the United States and you are filing under Section 319(b), select the USCIS Field Office from the list below where you would like to have your naturalization interview: D) Are applying on the basis of qualifying military service. E) Other (explain):",
          enum: ["A. ", "B. ", "C. ", "D. ", "E. "],
        },
      },
    },
    p2: {
      type: "object",
      title:
        "Part 2.  Information About You (Person applying for naturalization)",
      description: "1. Your Current Legal Name (do not provide a nickname)",
      // required: ["petitionFor", "relationship", "siblingQ", "Lawful"],
      properties: {
        lastName: {
          type: "string",
          title: "Family Name (Last Name)",
        },
        firstName: {
          type: "string",
          title: "Given Name (First Name)",
        },
        midName: {
          type: "string",
          title: "Middle Name (if applicable)",
        },
        text2: {
          type: "object",
          title: "",
          description:
            "2. Your Name Exactly As It Appears on Your Permanent Resident Card (if applicable)",
        },
        resLastName: {
          type: "string",
          title: "Family Name (Last Name)",
        },
        resFirstName: {
          type: "string",
          title: "Given Name (First Name)",
        },
        resMidName: {
          type: "string",
          title: "Middle Name (if applicable)",
        },
        text3: {
          type: "object",
          title: "",
          description:
            "3. Other Names You Have Used Since Birth (include nicknames, aliases, and maiden name, if applicable)",
        },
        other1LastName: {
          type: "string",
          title: "Family Name (Last Name)",
        },
        other1FirstName: {
          type: "string",
          title: "Given Name (First Name)",
        },
        other1MidName: {
          type: "string",
          title: "Middle Name (if applicable)",
        },
        other2LastName: {
          type: "string",
          title: "Family Name (Last Name)",
        },
        other2FirstName: {
          type: "string",
          title: "Given Name (First Name)",
        },
        other2MidName: {
          type: "string",
          title: "Middle Name (if applicable)",
        },
        text4: {
          type: "object",
          title: "",
          description:
            "4. Name Change (Optional) Read the Form N-400 Instructions before you decide whether or not you would like to legally change your name.",
        },
        changeName: {
          type: "boolean",
          title: `Would you like to legally change your name?`,
          enum: ["Yes", "No"],
        },
        text5: {
          type: "object",
          title: "",
          description: `If you answered "Yes," type or print the new name you would like to use in the spaces provided below.`,
        },
        changedLastName: {
          type: "string",
          title: "Family Name (Last Name)",
        },
        changedFirstName: {
          type: "string",
          title: "Given Name (First Name)",
        },
        changedMidName: {
          type: "string",
          title: "Middle Name (if applicable)",
        },
        socialSecNum: {
          type: "number",
          title: `5. U.S. Social Security Number (if any)`,
        },
        onLineAccNum: {
          type: "number",
          title: `6. USCIS Online Account Number (if any)`,
        },
        gender: {
          type: "string",
          title: "7.   Sex (Male or Female)",
          enum: ["Male", "Female"],
        },
        dateOfBirth: {
          type: "string",
          title: "8. Date of Birth",
        },
        dateLawfulResident: {
          type: "string",
          title: "9. Date You Became a Lawful Permanent Resident ",
        },
        countryBirth: {
          type: "string",
          title: "10. Country of Birth",
        },
        countryCitizen: {
          type: "string",
          title: "11. Country of Citizenship or Nationality",
        },
        disability: {
          type: "boolean",
          title: `12. Do you have a physical or developmental disability or mental impairment that prevents you from demonstrating your knowledge and understanding of the English language and/or civics requirements for naturalization?`,
          enum: ["Yes", "No"],
        },
        text6: {
          type: "object",
          title: "",
          description: `If you answered "Yes," submit a completed Form N-648, Medical Certification for Disability Exceptions, when you file your Form N-400.`,
        },
        text7: {
          type: "object",
          title: "",
          description: `13. Exemptions from the English Language Test`,
        },
        eng5020: {
          type: "boolean",
          title: `A. Are you 50 years of age or older and have you lived in the United States as a lawful permanent resident for periods totaling at least 20 years at the time you file your Form N-400?`,
          enum: ["Yes", "No"],
        },
        eng5515: {
          type: "boolean",
          title: `B. Are you 55 years of age or older and have you lived in the United States as a lawful permanent resident for periods totaling at least 15 years at the time you file your Form N-400?`,
          enum: ["Yes", "No"],
        },
        eng6520: {
          type: "boolean",
          title: `C. Are you 65 years of age or older and have you lived in the United States as a lawful permanent resident for periods totaling at least 20 years at the time you file your Form N-400?  (If you meet this requirement, you will also be given a simplified version of the civics test.)`,
          enum: ["Yes", "No"],
        },
      },
    },
    p3: {
      type: "object",
      title:
        "Part 3.  Accommodations for Individuals With Disabilities and/or Impairments",
      description:
        "NOTE:  Read the information in the Form N-400 Instructions before completing this part.",
      // required: ["petitionFor", "relationship", "siblingQ", "Lawful"],
      properties: {
        ageMayor: {
          type: "boolean",
          title: "1. You are at least 18 years of age and:",
        },
        ageMayorAnd: {
          type: "string",
          title: "1. You are at least 18 years of age and:",
          enum: [
            "A. Have been a lawful permanent resident of the United States for at least 5 years.",
            "B. Have been a lawful permanent resident of the United States for at least 3 years.  In addition, you have been married to and living with the same U.S. ",
          ],
        },
      },
    },
    p4: {
      type: "object",
      title: "Part 4.  Information to Contact You ",
      description: "",
      // required: ["petitionFor", "relationship", "siblingQ", "Lawful"],
      properties: {
        dayTel: {
          type: "number",
          title: `1.  Daytime Telephone Number`,
        },
        workTel: {
          type: "number",
          title: `2.  Work Telephone Number (if any)`,
        },
        eveningTel: {
          type: "number",
          title: `3.  Evening Telephone Number`,
        },
        mobileTel: {
          type: "number",
          title: `4.  Mobile Telephone Number (if any)`,
        },
        emailTel: {
          type: "string",
          title: `5.  Email Address (if any)`,
        },
      },
    },
    p5: {
      type: "object",
      title: "Part 5.  Information About Your Residence",
      description:
        "1. Where have you lived during the last five years?  Provide your most recent residence and then list every location where you have lived during the last five years.  If you need extra space, use additional sheets of paper.",
      // required: ["petitionFor", "relationship", "siblingQ", "Lawful"],
      properties: {
        text8: {
          type: "object",
          title: "",
          description: "A. Current Physical Address:",
        },
        phy1Street: {
          type: "string",
          title: "Street Number and Name ",
        },
        phy1Apt: {
          type: "string",
          title: "Apt.     Ste.    Flr.",
        },
        phy1CityTown: {
          type: "string",
          title: "City or Town",
        },
        phy1State: {
          type: "string",
          title: "State ",
        },
        phy1Zip: {
          type: "string",
          title: "ZIP Code",
        },
        phy1Province: {
          type: "string",
          title: "Province",
        },
        phy1Postal: {
          type: "string",
          title: "Postal Code ",
        },
        phy1Country: {
          type: "string",
          title: "Country",
        },
        phy1DateF: {
          type: "string",
          title: `Date of Residence From `,
        },
        phy1DateT: {
          type: "string",
          title: `Date of Residence To`,
        },
        text9: {
          type: "object",
          title: "",
          description:
            "B. Current Mailing Address (if different from the address above)",
        },
        inCareName: {
          type: "string",
          title: "In Care Of Name (if any)",
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
        text10: {
          type: "object",
          title: "",
          description: "C. Physical Address 2:",
        },
        phy2Street: {
          type: "string",
          title: "Street Number and Name ",
        },
        phy2Apt: {
          type: "string",
          title: "Apt.     Ste.    Flr.",
        },
        phy2CityTown: {
          type: "string",
          title: "City or Town",
        },
        phy2State: {
          type: "string",
          title: "State ",
        },
        phy2Zip: {
          type: "string",
          title: "ZIP Code",
        },
        phy2Province: {
          type: "string",
          title: "Province",
        },
        phy2Postal: {
          type: "string",
          title: "Postal Code ",
        },
        phy2Country: {
          type: "string",
          title: "Country",
        },
        phy2DateF: {
          type: "string",
          title: `Date of Residence From`,
        },
        phy2DateT: {
          type: "string",
          title: `Date of Residence to`,
        },
        text11: {
          type: "object",
          title: "",
          description: "D. Physical Address 3:",
        },
        phy3Street: {
          type: "string",
          title: "Street Number and Name ",
        },
        phy3Apt: {
          type: "string",
          title: "Apt.     Ste.    Flr.",
        },
        phy3CityTown: {
          type: "string",
          title: "City or Town",
        },
        phy3State: {
          type: "string",
          title: "State ",
        },
        phy3Zip: {
          type: "string",
          title: "ZIP Code",
        },
        phy3Province: {
          type: "string",
          title: "Province",
        },
        phy3Postal: {
          type: "string",
          title: "Postal Code ",
        },
        phy3Country: {
          type: "string",
          title: "Country",
        },
        phy3DateF: {
          type: "string",
          title: `Date of Residence From`,
        },
        phy3DateT: {
          type: "string",
          title: `Date of Residence to`,
        },
        text12: {
          type: "object",
          title: "",
          description: "E. Physical Address 4:",
        },
        phy4Street: {
          type: "string",
          title: "Street Number and Name ",
        },
        phy4Apt: {
          type: "string",
          title: "Apt.     Ste.    Flr.",
        },
        phy4CityTown: {
          type: "string",
          title: "City or Town",
        },
        phy4State: {
          type: "string",
          title: "State ",
        },
        phy4Zip: {
          type: "string",
          title: "ZIP Code",
        },
        phy4Province: {
          type: "string",
          title: "Province",
        },
        phy4Postal: {
          type: "string",
          title: "Postal Code ",
        },
        phy4Country: {
          type: "string",
          title: "Country",
        },
        phy4DateF: {
          type: "string",
          title: `Date of Residence From`,
        },
        phy4DateT: {
          type: "string",
          title: `Date of Residence to`,
        },
      },
    },
    p6: {
      type: "object",
      title: "Part 6.  Information About Your Parents",
      description:
        "If neither one of your parents is a United States citizen, then skip this part and go to Part 7.",
      // required: ["petitionFor", "relationship", "siblingQ", "Lawful"],
      properties: {
        parentsMarried: {
          type: "boolean",
          title: `1. Were your parents married before your 18th birthday?`,
          enum: ["Yes", "No"],
        },
        text13: {
          type: "object",
          title: "",
          description: "Information About Your Mother",
        },
        motherCitizen: {
          type: "boolean",
          title: `2. Is your mother a U.S. citizen?`,
          enum: ["Yes", "No"],
        },
        text14: {
          type: "object",
          title: "",
          description: `If you answered "Yes," complete the following information.  If you answered "No," go to Item Number 3.`,
        },
        text16: {
          type: "object",
          title: "",
          description: "A. Current Legal Name of U.S. Citizen Mother",
        },
        motherLastName: {
          type: "string",
          title: "Family Name (Last Name)",
        },
        motherFirstName: {
          type: "string",
          title: "Given Name (First Name)",
        },
        motherMidName: {
          type: "string",
          title: "Middle Name (if applicable)",
        },
        motherCountryBirth: {
          type: "string",
          title: "B. Mother's Country of Birth",
        },
        motherDateOfBirth: {
          type: "string",
          title: "C. Mother's Date of Birth",
        },
        MotherDateLawfulResident: {
          type: "string",
          title: "D. Date Mother Became a U.S. Citizen (if known)",
        },
        mother_aNumber: {
          type: "number",
          title: `E. Mother's A-Number (if any)`,
        },
        text15: {
          type: "object",
          title: "",
          description: "Information About Your Father",
        },
        fatherCitizen: {
          type: "boolean",
          title: `2. Is your father a U.S. citizen?`,
          enum: ["Yes", "No"],
        },
        text17: {
          type: "object",
          title: "",
          description: `If you answered "Yes," complete the following information.  If you answered "No," go to Part 7.`,
        },
        text18: {
          type: "object",
          title: "",
          description: "A. Current Legal Name of U.S. Citizen Father",
        },
        fatherLastName: {
          type: "string",
          title: "Family Name (Last Name)",
        },
        fatherFirstName: {
          type: "string",
          title: "Given Name (First Name)",
        },
        fatherMidName: {
          type: "string",
          title: "Middle Name (if applicable)",
        },
        fatherCountryBirth: {
          type: "string",
          title: "B. Father's Country of Birth",
        },
        fatherDateOfBirth: {
          type: "string",
          title: "C. Father's Date of Birth",
        },
        fatherDateLawfulResident: {
          type: "string",
          title: "D. Date Father Became a U.S. Citizen (if known)",
        },
        father_aNumber: {
          type: "number",
          title: `E. Father's A-Number (if any)`,
        },
      },
    },
    p7: {
      type: "object",
      title: "Part 7.  Biographic Information",
      description: "",
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
        text19: {
          type: "object",
          title: "",
          description:
            "NOTE:  USCIS requires you to complete the categories below to conduct background checks.  (See the Form N-400 Instructions for more information.)",
        },
        ethnicity: {
          type: "string",
          title: "",
          description: "1. Ethnicity (Select only one box)",
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
    p8: {
      type: "object",
      title:
        "Part 8.  Information About Your Employment and Schools You Attended",
      description: `List where you have worked or attended school full time or part time during the last five years.  Provide information for the complete time period.  Include all military, police, and/or intelligence service.  Begin by providing information about your most recent or current employment, studies, or unemployment (if applicable).  Provide the locations and dates where you worked, were self-employed, were unemployed, or have studied for the last five years.  If you worked for yourself, type or print "self-employed."  If you were unemployed, type or print "unemployed."  If you need extra space, use additional sheets of paper.`,
      // required: ["petitionFor", "relationship", "siblingQ", "Lawful"],
      properties: {
        employer1Name: {
          type: "string",
          title: `1. Employer or School Name `,
        },
        employer1Street: {
          type: "string",
          title: "Street Number and Name ",
        },
        employer1Apt: {
          type: "string",
          title: "Apt.     Ste.    Flr.",
        },
        employer1CityTown: {
          type: "string",
          title: "City or Town",
        },
        employer1State: {
          type: "string",
          title: "State ",
        },
        employer1Zip: {
          type: "string",
          title: "ZIP Code",
        },
        employer1Province: {
          type: "string",
          title: "Province (foreign address only)",
        },
        employer1Postal: {
          type: "string",
          title: "Postal Code (foreign address only)",
        },
        employer1Country: {
          type: "string",
          title: "Country (foreign address only)",
        },
        emplmnt1DateFrom: {
          type: "string",
          title: `Date from`,
        },
        emplmnt1DateTo: {
          type: "string",
          title: `Date to`,
        },
        yourOccupation1: {
          type: "string",
          title: "Your Occupation",
        },
        employer2Name: {
          type: "string",
          title: `Name of Employer/Company`,
        },
        employer2Street: {
          type: "string",
          title: "Street Number and Name ",
        },
        employer2Apt: {
          type: "string",
          title: " Apt.     Ste.    Flr.",
        },
        employer2CityTown: {
          type: "string",
          title: "City or Town",
        },
        employer2State: {
          type: "string",
          title: "State ",
        },
        employer2Zip: {
          type: "string",
          title: "ZIP Code",
        },
        employer2Province: {
          type: "string",
          title: "Province (foreign address only)",
        },
        employer2Postal: {
          type: "string",
          title: "Postal Code (foreign address only)",
        },
        employer2Country: {
          type: "string",
          title: "Country (foreign address only)",
        },
        yourOccupation2: {
          type: "string",
          title: "Your Occupation",
        },
        emplmnt2DateFrom: {
          type: "string",
          title: `Date from`,
        },
        emplmnt2DateTo: {
          type: "string",
          title: `Date to`,
        },
      },
    },
    p9: {
      type: "object",
      title: "Part 9.  Time Outside the United States",
      description: "",
      // required: ["petitionFor", "relationship", "siblingQ", "Lawful"],
      properties: {
        dayOutUs: {
          type: "number",
          title: `1.  How many total days (24 hours or longer) did you spend outside the United States during the last 5 years? `,
        },
        workTel: {
          type: "number",
          title: `2.  How many trips of 24 hours or longer have you taken outside the United States during the last 5 years? `,
        },
        eveningTel: {
          type: "number",
          title: `3.  List below all the trips of 24 hours or longer that you have taken outside the United States during the last 5 years.  Start with your most recent trip and work backwards.  If you need extra space, use additional sheets of paper.`,
        },
        mobileTel: {
          type: "number",
          title: `4.  Mobile Telephone Number (if any)`,
        },
        emailTel: {
          type: "string",
          title: `5.  Email Address (if any)`,
        },
      },
    },
    p10: {
      type: "object",
      title: "Part 10.  Information About Your Marital History ",
      description: "",
      // required: ["petitionFor", "relationship", "siblingQ", "Lawful"],
      properties: {
        MaritalStatus: {
          type: "string",
          title: "1. What is your current marital status?",
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
        text20: {
          type: "object",
          title: "",
          description:
            "If you are single and have never married, go to Part 11.",
        },
        lawful: {
          type: "boolean",
          title: `2.  If you are married, is your spouse a current member of the U.S. armed forces?`,
          enum: ["Yes", "No"],
        },
        text21: {
          type: "object",
          title: "",
          description:
            "4.  If you are married now, provide the following information about your current spouse.",
        },
        text22: {
          type: "object",
          title: "",
          description: "A. Current Spouse's Legal Name",
        },
        wife1LastName: {
          type: "string",
          title: "Family Name (Last Name)",
        },
        wife1FirstName: {
          type: "string",
          title: "Given Name (First Name)",
        },
        wife1MidName: {
          type: "string",
          title: "Middle Name",
        },
        text23: {
          type: "object",
          title: "",
          description: `B. Current Spouse's Previous Legal Name`,
        },
        wife2LastName: {
          type: "string",
          title: "Family Name (Last Name)",
        },
        wife2FirstName: {
          type: "string",
          title: "Given Name (First Name)",
        },
        wife2MidName: {
          type: "string",
          title: "Middle Name",
        },
        text24: {
          type: "object",
          title: "",
          description: `C. Other Names Used by Current Spouse (include nicknames, aliases, and maiden name, if applicable)`,
        },
        wife3LastName: {
          type: "string",
          title: "Family Name (Last Name)",
        },
        wife3FirstName: {
          type: "string",
          title: "Given Name (First Name)",
        },
        wife3MidName: {
          type: "string",
          title: "Middle Name",
        },
        wifeBirthDate: {
          type: "string",
          title: `D. Current Spouse's Date of Birth`,
        },
        wifeMarriageDate: {
          type: "string",
          title: `E. Date You Entered into Marriage with Current Spouse `,
        },
        text25: {
          type: "object",
          title: "",
          description: `F. Current Spouse's Present Home Address`,
        },
        mailStreet: {
          type: "string",
          title: "Street Number and Name ",
        },
        mailApt: {
          type: "string",
          title: " Apt.     Ste.    Flr.",
        },
        mailCityTown: {
          type: "string",
          title: "City or Town",
        },
        mailCounty: {
          type: "string",
          title: "County",
        },
        mailState: {
          type: "string",
          title: "State",
        },
        mailZip: {
          type: "string",
          title: "ZIP Code + 4",
        },
        mailProvince: {
          type: "string",
          title: "Province or Region (foreign address only)",
        },
        mailPostal: {
          type: "string",
          title: "Postal Code (foreign address only)",
        },
        mailCountry: {
          type: "string",
          title: "Country (foreign address only)",
        },
        spouseEmployer: {
          type: "string",
          title: "G. Current Spouse's Current Employer or Company",
        },
        spouseUsCitizen: {
          type: "string",
          title: `5. Is your current spouse a U.S. citizen?`,
          enum: ["Yes", "No"],
        },
        text26: {
          type: "object",
          title: "",
          description: `If you answered ''Yes," answer Item Number 6.  If you answered ''No," go to Item Number 7. `,
        },
        text27: {
          type: "object",
          title: "",
          description: `6. If your current spouse is a U.S. citizen, complete the following information.`,
        },
        text28: {
          type: "object",
          title: "",
          description: `A. When did your current spouse become a U.S. citizen?`,
        },
        whenCitizen1: {
          type: "boolean",
          title: "At Birth - Go to Item Number 8.",
        },
        whenCitizen2: {
          type: "boolean",
          title: "Other - Complete the following information.",
        },
        dateCitizen2: {
          type: "string",
          title: "B. Date Your Current Spouse Became a U.S. Citizen.",
        },
        text29: {
          type: "object",
          title: "",
          description: `7. If your current spouse is not a U.S. citizen, complete the following information.`,
        },
        countryCitizen2: {
          type: "string",
          title: "A. Current Spouse's Country of Citizenship or Nationality ",
        },
        spouseANumber: {
          type: "number",
          title: `B. Current Spouse's A-Number (if any)`,
        },
        text30: {
          type: "object",
          title: "",
          description: `C. Current Spouse's Immigration Status`,
        },
        currSpouseStatus: {
          type: "boolean",
          title: "Lawful Permanent Resident",
        },
        currSpouseStatus2: {
          type: "boolean",
          title: "Other",
        },
        currSpouseOther: {
          type: "string",
          title: "if other - Explain:",
        },
        numOfMarriages: {
          type: "number",
          title:
            "How many times has your current spouse been married (including annulled marriages, marriages to other people, and marriages to the same person)?  If your current spouse has been married before,  provide the following information about your current spouse's prior spouse.",
        },
        text31: {
          type: "object",
          title: "",
          description:
            "If your current spouse has had more than one previous marriage, provide that information on additional sheets of paper.",
        },
        text32: {
          type: "object",
          title: "",
          description: "A. Legal Name of My Current Spouse's Prior Spouse",
        },
        priorLastName: {
          type: "string",
          title: "Family Name (Last Name)",
        },
        priorFirstName: {
          type: "string",
          title: "Given Name (First Name)",
        },
        priorMidName: {
          type: "string",
          title: "Middle Name (if applicable)",
        },
        text33: {
          type: "object",
          title: "",
          description: `B. Immigration Status of My Current Spouse's Prior Spouse (if known)`,
        },
        priorSpouseStatus0: {
          type: "boolean",
          title: "U.S. Citizen",
        },
        priorSpouseStatus1: {
          type: "boolean",
          title: "Lawful Permanent Resident",
        },
        priorSpouseStatus2: {
          type: "boolean",
          title: "Other",
        },
        priorSpouseOther2: {
          type: "string",
          title: "if other - Explain:",
        },
        priorDateOfBirth2: {
          type: "string",
          title: "C. Date of Birth of My Current Spouse's Prior Spouse ",
        },
        PriorCountryBirth2: {
          type: "string",
          title: "D. Country of Birth of My Current Spouse's Prior Spouse",
        },
        PriorCountryCitizen2: {
          type: "string",
          title:
            "E. Country of Citizenship or Nationality of My Current Spouse's Prior Spouse",
        },
        PriorDateMarriage2: {
          type: "string",
          title: "F. My Current Spouse's Date of Marriage with Prior Spouse ",
        },
        PriorEndedMarriage2: {
          type: "string",
          title:
            "G. Date My Current Spouse's Marriage Ended with Prior Spouse ",
        },
        howMarriageEnd2: {
          type: "string",
          title: "H. How My Current Spouse's Marriage Ended with Prior Spouse?",
          enum: ["Annulled", "Divorced", "Spouse Deceased", "Other"],
        },
        howMarriageEndOther2: {
          type: "string",
          title: "if other - Explain:",
        },
        text34: {
          type: "object",
          title: "",
          description: `9. If you were married before, provide the following information about your prior spouse.  If you have more than one previous marriage, provide that information on additional sheets of paper.  `,
        },
        text35: {
          type: "object",
          title: "",
          description: "A. My Prior Spouse's Legal Name",
        },
        priorSpLastName: {
          type: "string",
          title: "Family Name (Last Name)",
        },
        priorSpFirstName: {
          type: "string",
          title: "Given Name (First Name)",
        },
        priorSpMidName: {
          type: "string",
          title: "Middle Name (if applicable)",
        },
        text36: {
          type: "object",
          title: "",
          description: `B. My Prior Spouse's Immigration Status When My Marriage Ended (if known)`,
        },
        priorSpouseStatus: {
          type: "boolean",
          title: "U.S. Citizen",
        },
        priorSpouseStatusA: {
          type: "boolean",
          title: "Lawful Permanent Resident",
        },
        priorSpouseStatusB: {
          type: "boolean",
          title: "Other",
        },
        priorSpouseOtherC: {
          type: "string",
          title: "if other - Explain:",
        },
        priorDateOfBirth: {
          type: "string",
          title: "C.  My Prior Spouse's Date of Birth",
        },
        PriorCountryBirth: {
          type: "string",
          title: "D. My Prior Spouse's Country of Birth ",
        },
        PriorCountryCitizen: {
          type: "string",
          title: "E. My Prior Spouse's Country of Citizenship or Nationality",
        },
        PriorDateMarriage: {
          type: "string",
          title: "F. Date of Marriage with My Prior Spouse ",
        },
        PriorEndedMarriage: {
          type: "string",
          title: "G. Date of Marriage Ended with My Prior Spouse ",
        },
        howMarriageEnd: {
          type: "string",
          title: "H. How Marriage Ended with My Prior Spouse?",
          enum: ["Annulled", "Divorced", "Spouse Deceased", "Other"],
        },
        howMarriageEndOther: {
          type: "string",
          title: "if other - Explain:",
        },
      },
    },
    p11: {
      type: "object",
      title: "Part 11.  Information About Your Children",
      description: "",
      // required: ["petitionFor", "relationship", "siblingQ", "Lawful"],
      properties: {
        dayOutUs: {
          type: "number",
          title: `1.  Indicate your total number of children.  (You must indicate ALL children, including:  children who are alive, missing, or deceased; children born in the United States or in other countries; children under 18 years of age or older; children who are currently married or unmarried; children living with you or elsewhere; current stepchildren; legally adopted children; and children born when you were not married.)`,
        },
        text35: {
          type: "object",
          title: "",
          description:
            "2. Provide the following information about all your children (sons and daughters) listed in Item Number 1., regardless of age. To list any additional children, use additional sheets of paper.",
        },
        text36: {
          type: "object",
          title: "",
          description: "A. Child 1  Current Legal Name",
        },
        Child1LastName: {
          type: "string",
          title: "Family Name (Last Name)",
        },
        Child1FirstName: {
          type: "string",
          title: "Given Name (First Name)",
        },
        Child1MidName: {
          type: "string",
          title: "Middle Name (if applicable)",
        },
        child1ANumber: {
          type: "number",
          title: `A-Number (if any)`,
        },
        Child1DateBirth: {
          type: "string",
          title: "Date of Birth",
        },
        Child1CountryBirth: {
          type: "string",
          title: "Country of Birth",
        },
        text37: {
          type: "object",
          title: "",
          description: "Current Address",
        },
        phy1Street: {
          type: "string",
          title: "Street Number and Name ",
        },
        phy1Apt: {
          type: "string",
          title: " Apt.     Ste.    Flr.",
        },
        phy1CityTown: {
          type: "string",
          title: "City or Town",
        },
        phy1County: {
          type: "string",
          title: "County",
        },
        phy1State: {
          type: "string",
          title: "State ",
        },
        phy1Zip: {
          type: "string",
          title: "ZIP Code",
        },
        phy1Province: {
          type: "string",
          title: "Province (foreign address only)",
        },
        phy1Postal: {
          type: "string",
          title: "Postal Code (foreign address only)",
        },
        phy1Country: {
          type: "string",
          title: "Country (foreign address only)",
        },
        phy1Relationship: {
          type: "string",
          title: `What is your child's relationship to you? (for example, biological child, stepchild, legally adopted child)`,
        },
        text38: {
          type: "object",
          title: "",
          description: "A. Child 2  Current Legal Name",
        },
        Child2LastName: {
          type: "string",
          title: "Family Name (Last Name)",
        },
        Child2FirstName: {
          type: "string",
          title: "Given Name (First Name)",
        },
        Child2MidName: {
          type: "string",
          title: "Middle Name (if applicable)",
        },
        child2ANumber: {
          type: "number",
          title: `A-Number (if any)`,
        },
        Child2DateBirth: {
          type: "string",
          title: "Date of Birth",
        },
        Child2CountryBirth: {
          type: "string",
          title: "Country of Birth",
        },
        text39: {
          type: "object",
          title: "",
          description: "Current Address",
        },
        phy2Street: {
          type: "string",
          title: "Street Number and Name ",
        },
        phy2Apt: {
          type: "string",
          title: " Apt.     Ste.    Flr.",
        },
        phy2CityTown: {
          type: "string",
          title: "City or Town",
        },
        phy2County: {
          type: "string",
          title: "County",
        },
        phy2State: {
          type: "string",
          title: "State ",
        },
        phy2Zip: {
          type: "string",
          title: "ZIP Code",
        },
        phy2Province: {
          type: "string",
          title: "Province (foreign address only)",
        },
        phy2Postal: {
          type: "string",
          title: "Postal Code (foreign address only)",
        },
        phy2Country: {
          type: "string",
          title: "Country (foreign address only)",
        },
        phy2Relationship: {
          type: "string",
          title: `What is your child's relationship to you? (for example, biological child, stepchild, legally adopted child)`,
        },
        text40: {
          type: "object",
          title: "",
          description: "A. Child 3  Current Legal Name",
        },
        Child3LastName: {
          type: "string",
          title: "Family Name (Last Name)",
        },
        Child3FirstName: {
          type: "string",
          title: "Given Name (First Name)",
        },
        Child3MidName: {
          type: "string",
          title: "Middle Name (if applicable)",
        },
        child3ANumber: {
          type: "number",
          title: `A-Number (if any)`,
        },
        Child3DateBirth: {
          type: "string",
          title: "Date of Birth",
        },
        Child3CountryBirth: {
          type: "string",
          title: "Country of Birth",
        },
        text41: {
          type: "object",
          title: "",
          description: "Current Address",
        },
        phy3Street: {
          type: "string",
          title: "Street Number and Name ",
        },
        phy3Apt: {
          type: "string",
          title: " Apt.     Ste.    Flr.",
        },
        phy3CityTown: {
          type: "string",
          title: "City or Town",
        },
        phy3County: {
          type: "string",
          title: "County",
        },
        phy3State: {
          type: "string",
          title: "State ",
        },
        phy3Zip: {
          type: "string",
          title: "ZIP Code",
        },
        phy3Province: {
          type: "string",
          title: "Province (foreign address only)",
        },
        phy3Postal: {
          type: "string",
          title: "Postal Code (foreign address only)",
        },
        phy3Country: {
          type: "string",
          title: "Country (foreign address only)",
        },
        phy3Relationship: {
          type: "string",
          title: `What is your child's relationship to you? (for example, biological child, stepchild, legally adopted child)`,
        },
        text42: {
          type: "object",
          title: "",
          description: "A. Child 4  Current Legal Name",
        },
        Child4LastName: {
          type: "string",
          title: "Family Name (Last Name)",
        },
        Child4FirstName: {
          type: "string",
          title: "Given Name (First Name)",
        },
        Child4MidName: {
          type: "string",
          title: "Middle Name (if applicable)",
        },
        child4ANumber: {
          type: "number",
          title: `A-Number (if any)`,
        },
        Child4DateBirth: {
          type: "string",
          title: "Date of Birth",
        },
        Child4CountryBirth: {
          type: "string",
          title: "Country of Birth",
        },
        text43: {
          type: "object",
          title: "",
          description: "Current Address",
        },
        phy4Street: {
          type: "string",
          title: "Street Number and Name ",
        },
        phy4Apt: {
          type: "string",
          title: " Apt.     Ste.    Flr.",
        },
        phy4CityTown: {
          type: "string",
          title: "City or Town",
        },
        phy4County: {
          type: "string",
          title: "County",
        },
        phy4State: {
          type: "string",
          title: "State ",
        },
        phy4Zip: {
          type: "string",
          title: "ZIP Code",
        },
        phy4Province: {
          type: "string",
          title: "Province (foreign address only)",
        },
        phy4Postal: {
          type: "string",
          title: "Postal Code (foreign address only)",
        },
        phy4Country: {
          type: "string",
          title: "Country (foreign address only)",
        },
        phy4Relationship: {
          type: "string",
          title: `What is your child's relationship to you? (for example, biological child, stepchild, legally adopted child)`,
        },
      },
    },
    p12: {
      type: "object",
      title:
        "Part 12.  Additional Information About You (Person Applying for Naturalization)",
      description: "",
      // required: ["petitionFor", "relationship", "siblingQ", "Lawful"],
      properties: {
        text44: {
          type: "object",
          title: "",
          description: `Answer Item Numbers 1. - 21.  If you answer "Yes" to any of these questions, include a typed or printed explanation on additional sheets of paper.`,
        },
        ever1: {
          type: "string",
          title: `1. Have you EVER claimed to be a U.S. citizen (in writing or any other way)?`,
          enum: ["Yes", "No"],
        },
        ever2: {
          type: "string",
          title: `2. Have you EVER registered to vote in any Federal, state, or local election in the United States?`,
          enum: ["Yes", "No"],
        },
        ever3: {
          type: "string",
          title: `3. Have you EVER voted in any Federal, state, or local election in the United States?`,
          enum: ["Yes", "No"],
        },
        ever4a: {
          type: "string",
          title: `A. Do you now have, or did you EVER have, a hereditary title or an order of nobility in any foreign country?`,
          enum: ["Yes", "No"],
        },
        ever4b: {
          type: "string",
          title: `B. If you answered "Yes," are you willing to give up any inherited titles or orders of nobility that you have in a foreign country at your naturalization ceremony?`,
          enum: ["Yes", "No"],
        },
        ever5: {
          type: "string",
          title: `5. Have you EVER been declared legally incompetent or been confined to a mental institution?`,
          enum: ["Yes", "No"],
        },
        ever6: {
          type: "string",
          title: `6. Do you owe any overdue Federal, state, or local taxes?`,
          enum: ["Yes", "No"],
        },
        ever7: {
          type: "string",
          title: `7A. Have you EVER not filed a Federal, state, or local tax return since you became a lawful permanent 
          resident?`,
          enum: ["Yes", "No"],
        },
        ever8: {
          type: "string",
          title: `7B. If you answered "Yes," did you consider yourself to be a "non-U.S. resident"?`,
          enum: ["Yes", "No"],
        },
        ever9: {
          type: "string",
          title: `8. Have you called yourself a "non-U.S. resident" on a Federal, state, or local tax return since you became a lawful permanent resident?`,
          enum: ["Yes", "No"],
        },
        ever10: {
          type: "string",
          title: `9A. Have you EVER been a member of, involved in, or in any way associated with, any organization, association, fund, foundation, party, club, society, or similar group in the United States or in any other location in the world?`,
          enum: ["Yes", "No"],
        },
        text45: {
          type: "object",
          title: "",
          description: `9B. If you answered "Yes," provide the information below.  If you need extra space, attach the names of the other groups on additional sheets of paper and provide any evidence to support your answers.`,
        },
        text46: {
          type: "object",
          title: "",
          description: `10. Have you EVER been a member of, or in any way associated (either directly or indirectly) with:`,
        },
        ever11: {
          type: "string",
          title: `10A. The Communist Party?`,
          enum: ["Yes", "No"],
        },
        ever12: {
          type: "string",
          title: `10B. Any other totalitarian party?`,
          enum: ["Yes", "No"],
        },
        ever13: {
          type: "string",
          title: `10C. A terrorist organization?`,
          enum: ["Yes", "No"],
        },
        ever14: {
          type: "string",
          title: `11. Have you EVER advocated (either directly or indirectly) the overthrow of any government by force or violence?`,
          enum: ["Yes", "No"],
        },
        ever15: {
          type: "string",
          title: `12. Have you EVER persecuted (either directly or indirectly) any person because of race, religion, national origin, membership in a particular social group, or political opinion?`,
          enum: ["Yes", "No"],
        },
        text47: {
          type: "object",
          title: "",
          description: `13. Between March 23, 1933 and May 8, 1945, did you work for or associate in any way (either directly or indirectly) with:`,
        },
        ever16: {
          type: "string",
          title: `13A. The Nazi government of Germany?`,
          enum: ["Yes", "No"],
        },
        ever17: {
          type: "string",
          title: `13B. Any government in any area occupied by, allied with, or established with the help of the Nazi government of Germany?`,
          enum: ["Yes", "No"],
        },
        ever18: {
          type: "string",
          title: `13C. Any German, Nazi, or S.S. military unit, paramilitary unit, self-defense unit, vigilante unit, citizen unit, police unit, government agency or office, extermination camp, concentration camp, prisoner of war camp, prison, labor camp, or transit camp?`,
          enum: ["Yes", "No"],
        },
        text48: {
          type: "object",
          title: "",
          description: `14. Were you EVER involved in any way with any of the following:`,
        },
        ever19: {
          type: "string",
          title: `14A. Genocide? `,
          enum: ["Yes", "No"],
        },
        ever20: {
          type: "string",
          title: `14B. Torture?`,
          enum: ["Yes", "No"],
        },
        ever21: {
          type: "string",
          title: `14C. Killing, or trying to kill, someone?`,
          enum: ["Yes", "No"],
        },
        ever22: {
          type: "string",
          title: `14D. Badly hurting, or trying to hurt, a person on purpose?`,
          enum: ["Yes", "No"],
        },
        ever23: {
          type: "string",
          title: `14E. Forcing, or trying to force, someone to have any kind of sexual contact or relations? `,
          enum: ["Yes", "No"],
        },
        ever24: {
          type: "string",
          title: `14F. Not letting someone practice his or her religion?`,
          enum: ["Yes", "No"],
        },
        text49: {
          type: "object",
          title: "",
          description: `15. Were you EVER a member of, or did you EVER serve in, help, or otherwise participate in, any of the following groups:`,
        },
        ever25: {
          type: "string",
          title: `15A. Military unit?`,
          enum: ["Yes", "No"],
        },
        ever26: {
          type: "string",
          title: `15B. Paramilitary unit (a group of people who act like a military group but are not part of the official military)?`,
          enum: ["Yes", "No"],
        },
        ever27: {
          type: "string",
          title: `15C. Police unit?`,
          enum: ["Yes", "No"],
        },
        ever28: {
          type: "string",
          title: `15D. Self-defense unit?`,
          enum: ["Yes", "No"],
        },
        ever29: {
          type: "string",
          title: `15E. Vigilante unit (a group of people who act like the police, but are not part of the official police)?`,
          enum: ["Yes", "No"],
        },
        ever30: {
          type: "string",
          title: `15F. Rebel group?`,
          enum: ["Yes", "No"],
        },
        ever31: {
          type: "string",
          title: `15G. Guerrilla group (a group of people who use weapons against or otherwise physically attack the military, police, government, or other people)?`,
          enum: ["Yes", "No"],
        },
        ever32: {
          type: "string",
          title: `15H. Militia (an army of people, not part of the official military)?`,
          enum: ["Yes", "No"],
        },
        ever33: {
          type: "string",
          title: `15I. Insurgent organization (a group that uses weapons and fights against a government)?`,
          enum: ["Yes", "No"],
        },
        text50: {
          type: "object",
          title: "",
          description: `16. Were you EVER a worker, volunteer, or soldier, or did you otherwise EVER serve in any of the following:`,
        },
        ever34: {
          type: "string",
          title: `16A. Prison or jail?`,
          enum: ["Yes", "No"],
        },
        ever35: {
          type: "string",
          title: `16B. Prison camp?`,
          enum: ["Yes", "No"],
        },
        ever37: {
          type: "string",
          title: `16C. Detention facility (a place where people are forced to stay)?`,
          enum: ["Yes", "No"],
        },
        ever38: {
          type: "string",
          title: `16D. Labor camp (a place where people are forced to work)?`,
          enum: ["Yes", "No"],
        },
        ever39: {
          type: "string",
          title: `16E. Any other place where people were forced to stay?`,
          enum: ["Yes", "No"],
        },
        ever40: {
          type: "string",
          title: `17. Were you EVER a part of any group, or did you EVER help any group, unit, or organization that used a weapon against any person, or threatened to do so?`,
          enum: ["Yes", "No"],
        },
        ever41: {
          type: "string",
          title: `17A. If you answered "Yes," when you were part of this group, or when you helped this group, did you ever use a weapon against another person? `,
          enum: ["Yes", "No"],
        },
        ever42: {
          type: "string",
          title: `17B. If you answered "Yes," when you were part of this group, or when you helped this group, did you ever tell another person that you would use a weapon against that person?`,
          enum: ["Yes", "No"],
        },
        ever43: {
          type: "string",
          title: `18. Did you EVER sell, give, or provide weapons to any person, or help another person sell, give, or provide weapons to any person?`,
          enum: ["Yes", "No"],
        },
        ever44: {
          type: "string",
          title: `18A. Did you EVER sell, give, or provide weapons to any person, or help another person sell, give, or provide weapons to any person?`,
          enum: ["Yes", "No"],
        },
        ever45: {
          type: "string",
          title: `19. Did you EVER receive any type of military, paramilitary (a group of people who act like a military group but are not part of the official military), or weapons training?`,
          enum: ["Yes", "No"],
        },
        ever46: {
          type: "string",
          title: `20. Did you EVER recruit (ask), enlist (sign up), conscript (require), or use any person under 15 years of age to serve in or help an armed force or group?`,
          enum: ["Yes", "No"],
        },
        ever47: {
          type: "string",
          title: `21. Did you EVER use any person under 15 years of age to do anything that helped or supported people in combat?`,
          enum: ["Yes", "No"],
        },
        text51: {
          type: "object",
          title: "",
          description: `If any of Item Numbers 22. - 28. apply to you, you must answer "Yes" even if your records have been sealed, expunged, or otherwise cleared.  You must disclose this information even if someone, including a judge, law enforcement officer, or attorney, told you that it no longer constitutes a record or told you that you do not have to disclose the information.`,
        },
        ever48: {
          type: "string",
          title: `22. Have you EVER committed, assisted in committing, or attempted to commit, a crime or offense for which you were NOT arrested?`,
          enum: ["Yes", "No"],
        },
        ever49: {
          type: "string",
          title: `23. Have you EVER been arrested, cited, or detained by any law enforcement officer (including any immigration official or any official of the U.S. armed forces) for any reason?`,
          enum: ["Yes", "No"],
        },
        ever50: {
          type: "string",
          title: `24. Have you EVER been charged with committing, attempting to commit, or assisting in committing a crime or offense?`,
          enum: ["Yes", "No"],
        },
        ever51: {
          type: "string",
          title: `25. Have you EVER been convicted of a crime or offense?`,
          enum: ["Yes", "No"],
        },
        ever52: {
          type: "string",
          title: `26. Have you EVER been placed in an alternative sentencing or a rehabilitative program (for example, diversion, deferred prosecution, withheld adjudication, deferred adjudication)?`,
          enum: ["Yes", "No"],
        },
        ever53: {
          type: "string",
          title: `27A. Have you EVER received a suspended sentence, been placed on probation, or been paroled?`,
          enum: ["Yes", "No"],
        },
        ever54: {
          type: "string",
          title: `27B. If you answered "Yes," have you completed the probation or parole?`,
          enum: ["Yes", "No"],
        },
        ever55: {
          type: "string",
          title: `28A. Have you EVER been in jail or prison?`,
          enum: ["Yes", "No"],
        },
        text52: {
          type: "object",
          title: "",
          description: `Answer Item Numbers 30. - 46.  If you answer "Yes" to any of these questions, except Item Numbers 37. and 38., include a typed or printed explanation on additional sheets of paper and provide any evidence to support your answers. `,
        },
        text53: {
          type: "object",
          title: "",
          description: `30. Have you EVER:`,
        },
        ever56: {
          type: "string",
          title: `30A. Been a habitual drunkard?`,
          enum: ["Yes", "No"],
        },
        ever57: {
          type: "string",
          title: `30B. Been a prostitute, or procured anyone for prostitution?`,
          enum: ["Yes", "No"],
        },
        ever58: {
          type: "string",
          title: `30C. Sold or smuggled controlled substances, illegal drugs, or narcotics?`,
          enum: ["Yes", "No"],
        },
        ever59: {
          type: "string",
          title: `30D. Been married to more than one person at the same time?`,
          enum: ["Yes", "No"],
        },
        ever60: {
          type: "string",
          title: `30E. Married someone in order to obtain an immigration benefit?`,
          enum: ["Yes", "No"],
        },
        ever61: {
          type: "string",
          title: `30F. Helped anyone to enter, or try to enter, the United States illegally?`,
          enum: ["Yes", "No"],
        },
        ever62: {
          type: "string",
          title: `30G. Gambled illegally or received income from illegal gambling?`,
          enum: ["Yes", "No"],
        },
        ever63: {
          type: "string",
          title: `30H. Failed to support your dependents or to pay alimony?`,
          enum: ["Yes", "No"],
        },
        ever64: {
          type: "string",
          title: `30I. Made any misrepresentation to obtain any public benefit in the United States?`,
          enum: ["Yes", "No"],
        },
        ever65: {
          type: "string",
          title: `31. Have you EVER given any U.S. Government officials any information or documentation that was false, fraudulent, or misleading?`,
          enum: ["Yes", "No"],
        },
        ever66: {
          type: "string",
          title: `32. Have you EVER lied to any U.S. Government officials to gain entry or admission into the United States or to gain immigration benefits while in the United States?`,
          enum: ["Yes", "No"],
        },
        ever67: {
          type: "string",
          title: `33. Have you EVER been removed, excluded, or deported from the United States?`,
          enum: ["Yes", "No"],
        },
        ever68: {
          type: "string",
          title: `34. Have you EVER been ordered removed, excluded, or deported from the United States? `,
          enum: ["Yes", "No"],
        },
        ever69: {
          type: "string",
          title: `35. Have you EVER been placed in removal, exclusion, rescission, or deportation proceedings?`,
          enum: ["Yes", "No"],
        },
        ever70: {
          type: "string",
          title: `36. Are removal, exclusion, rescission, or deportation proceedings (including administratively closed proceedings) currently pending against you?`,
          enum: ["Yes", "No"],
        },
        ever71: {
          type: "string",
          title: `37. Have you EVER served in the U.S. armed forces?`,
          enum: ["Yes", "No"],
        },
        ever72: {
          type: "string",
          title: `38A. Are you currently a member of the U.S. armed forces? `,
          enum: ["Yes", "No"],
        },
        ever73: {
          type: "string",
          title: `38B. If you answered "Yes," are you scheduled to deploy overseas, including to a vessel, within the next three months?  (Refer to the Address Change section in the Instructions on how to notify USCIS if you learn of your deployment plans after you file your Form N-400.)`,
          enum: ["Yes", "No"],
        },
        ever74: {
          type: "string",
          title: `38C. If you answered "Yes," are you currently stationed overseas? `,
          enum: ["Yes", "No"],
        },
        ever75: {
          type: "string",
          title: `39. Have you EVER been court-martialed, administratively separated, or disciplined, or have you received an other than honorable discharge, while in the U.S. armed forces?`,
          enum: ["Yes", "No"],
        },
        ever76: {
          type: "string",
          title: `40. Have you EVER been discharged from training or service in the U.S. armed forces because you were an alien?`,
          enum: ["Yes", "No"],
        },
        ever77: {
          type: "string",
          title: `41. Have you EVER left the United States to avoid being drafted in the U.S. armed forces?`,
          enum: ["Yes", "No"],
        },
        ever78: {
          type: "string",
          title: `42. Have you EVER applied for any kind of exemption from military service in the U.S. armed forces?`,
          enum: ["Yes", "No"],
        },
        ever79: {
          type: "string",
          title: `43. Have you EVER deserted from the U.S. armed forces?`,
          enum: ["Yes", "No"],
        },
        ever80: {
          type: "string",
          title: `44A. Are you a male who lived in the United States at any time between your 18th and 26th birthdays? (This does not include living in the United States as a lawful nonimmigrant.)`,
          enum: ["Yes", "No"],
        },
        text54: {
          type: "object",
          title: "",
          description: `44B. If you answered "Yes," when did you register for the Selective Service?  Provide the information below.`,
        },
        text54a: {
          type: "object",
          title: "",
          description: `44C. If you answered "Yes," but you did not register with the Selective Service System and you are:`,
        },
        text54b: {
          type: "object",
          title: "",
          description: `1. Still under 26 years of age, you must register before you apply for naturalization, and complete the Selective Service 
          information above; OR`,
        },
        text54c: {
          type: "object",
          title: "",
          description: `Now 26 to 31 years of age (29 years of age if you are filing under INA section 319(a)), but you did not register with the Selective Service, you must attach a statement explaining why you did not register, and provide a status information letter from the Selective Service.
          2.`,
        },
        text55: {
          type: "object",
          title: "",
          description: `Answer Item Numbers 45. - 50.  If you answer ''No'' to any of these questions, include a typed or printed explanation on additional sheets of paper and provide any evidence to support your answers.`,
        },
        ever81: {
          type: "string",
          title: `45. Do you support the Constitution and form of Government of the United States? `,
          enum: ["Yes", "No"],
        },
        ever82: {
          type: "string",
          title: `46. Do you understand the full Oath of Allegiance to the United States? `,
          enum: ["Yes", "No"],
        },
        ever83: {
          type: "string",
          title: `47. Are you willing to take the full Oath of Allegiance to the United States?`,
          enum: ["Yes", "No"],
        },
        ever84: {
          type: "string",
          title: `48. If the law requires it, are you willing to bear arms on behalf of the United States?`,
          enum: ["Yes", "No"],
        },
        ever85: {
          type: "string",
          title: `49. If the law requires it, are you willing to perform noncombatant services in the U.S. armed forces?`,
          enum: ["Yes", "No"],
        },
        ever86: {
          type: "string",
          title: `50. If the law requires it, are you willing to perform work of national importance under civilian direction?`,
          enum: ["Yes", "No"],
        },
      },
    },
    p13: {
      type: "object",
      title: "Part 13.  Applicant's Statement, Certification, and Signature ",
      description:
        "NOTE:  Read the Penalties section of the Form N-400 Instructions before completing this part.",
      required: [],
      properties: {
        texto72: {
          type: "object",
          title: "",
          description: `Petitioner's Statement`,
        },
        texto73: {
          type: "object",
          title: "",
          description: `NOTE:  Select the box for either Item Number 1.a. or 1.b.  If applicable, select the box for Item Number 2.`,
        },
        texto74: {
          type: "object",
          title: "",
          description: `1.a.     I can read and understand English, and I have read and understand every question and instruction on this petition and my answer to every question.`,
        },
        texto75: {
          type: "object",
          title: "",
          description: `1.b.     The interpreter named in Part 7. read to me every question and instruction on this petition and my answer to every question in _______________________  a language in which I am fluent.  I understood all of this information as interpreted.`,
        },
        texto76: {
          type: "object",
          title: "",
          description: `2.       At my request, the preparer named in Part 8.,_____________ prepared this petition for me based only upon information I provided or authorized.  `,
        },
        texto77: {
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
        texto78: {
          type: "object",
          title: "",
          description: `Petitioner's Declaration and Certification`,
        },
        texto79: {
          type: "object",
          title: "",
          description: `Copies of any documents I have submitted are exact photocopies of unaltered, original documents, and I understand that USCIS may require that I submit original documents to USCIS at a later date. Furthermore, I authorize the release of any information from any of my records that USCIS may need to determine my eligibility for the immigration benefit I seek.
          `,
        },
        texto80: {
          type: "object",
          title: "",
          description: `I further authorize release of information contained in this petition, in supporting documents, and in my USCIS records to other entities and persons where necessary for the administration and enforcement of U.S. immigration laws.`,
        },
        texto81: {
          type: "object",
          title: "",
          description: `I understand that USCIS may require me to appear for an appointment to take my biometrics (fingerprints, photograph, and/or signature) and, at that time, if I am required to provide biometrics, I will be required to sign an oath reaffirming that:`,
        },
        texto82: {
          type: "object",
          title: "",
          description: `1) I provided or authorized all of the information contained in, and submitted with, my petition;
          2) I reviewed and understood all of the information in, and submitted with, my petition; and
          3) All of this information was complete, true, and correct at the time of filing.`,
        },
        texto83: {
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
        texto84: {
          type: "object",
          title: "",
          description: `NOTE TO ALL PETITIONERS:  If you do not completely fill out this petition or fail to submit required documents listed in the Instructions, USCIS may deny your petition.`,
        },
      },
    },
    p14: {
      type: "object",
      title:
        "Part 14.  Interpreter's Contact Information, Certification, and Signature",
      description:
        "Provide the following information about the interpreter if you used one.",
      required: [],
      properties: {
        texto86: {
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
        texto87: {
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
        texto77: {
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
        texto88: {
          type: "object",
          title: "",
          description: `Interpreter's Certification`,
        },
        texto89: {
          type: "object",
          title: "",
          description: `I certify, under penalty of perjury,   you  I am fluent in English and ____________________  which is the same language provided in Part 6., Item Number 1.b., and I have read to this petitioner in the identified language every question and instruction on this petition and his or her answer to every question.  The petitioner informed me that he or she understands every instruction, question, and answer on the petition, including the Petitioner's Declaration and Certification, and has verified the accuracy of every answer.`,
        },
        texto90: {
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
    p15: {
      type: "object",
      title:
        "Part 15.  Contact Information, Declaration, and Signature of the Person Preparing This Application, if Other Than the Applicant",
      description: "Provide the following information about the preparer.",
      required: [],
      properties: {
        texto91: {
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
        texto92: {
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
        texto77: {
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
        texto93: {
          type: "object",
          title: "",
          description: `Preparer's Statement`,
        },
        texto94: {
          type: "object",
          title: "",
          description: `7.a.     I am not an attorney or accredited representative but have prepared this petition on behalf of the petitioner  and with the petitioner's consent.
          7.b.     I am an attorney or accredited representative and my representation of the petitioner in this case extends does not extend beyond the preparation of this petition.`,
        },
        texto95: {
          type: "object",
          title: "",
          description: ` NOTE:  If you are an attorney or accredited representative whose representation extends beyond preparation of this petition, you may be obliged to  submit a completed Form G-28, Notice of Entry of Appearance as Attorney or Accredited Representative, with this petition.`,
        },
        texto96: {
          type: "object",
          title: "",
          description: `Preparer's Certification`,
        },
        texto97: {
          type: "object",
          title: "",
          description: `By my signature, I certify, under penalty of perjury, that I prepared this petition at the request of the petitioner.  The petitioner then reviewed this completed petition and informed me that he or she understands all of the information contained in, and submitted with, his or her petition, including the Petitioner's Declaration and Certification, and that all of this information is complete, true, and correct.  I completed this petition based only on information that the petitioner provided to me or authorized me to obtain or use.`,
        },
        texto98: {
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
  },
};

export default formSchema;
