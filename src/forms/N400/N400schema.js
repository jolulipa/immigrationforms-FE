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
      required: ["petitionFor", "relationship", "siblingQ", "Lawful"],
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
          title: "1. You are at least 18 years of age and:",
          enum: [
            "A. Have been a lawful permanent resident of the United States for at least 5 years.",
            "B. Have been a lawful permanent resident of the United States for at least 3 years.  In addition, you have been married to and living with the same U.S. citizen spouse for the last 3 years, and your spouse has been a U.S. citizen for the last 3 years at the time you filed your Form N-400.",
            "C. Are a lawful permanent resident of the United States and you are the spouse of a U.S. citizen and your U.S. citizen spouse is regularly engaged in specified employment abroad.  (See the Immigration and Nationality Act (INA) section 319(b).)  If your residential address is outside the United States and you are filing under Section 319(b), select the USCIS Field Office from the list below where you would like to have your naturalization interview:",
            "D. Are applying on the basis of qualifying military service.",
            "E. Other (explain):",
          ],
        },
      },
    },
    p2: {
      type: "object",
      title:
        "Part 2.  Information About You (Person applying for naturalization)",
      description: "1. Your Current Legal Name (do not provide a nickname)",
      required: ["petitionFor", "relationship", "siblingQ", "Lawful"],
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
      required: ["petitionFor", "relationship", "siblingQ", "Lawful"],
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
      required: ["petitionFor", "relationship", "siblingQ", "Lawful"],
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
      required: ["petitionFor", "relationship", "siblingQ", "Lawful"],
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
      required: ["petitionFor", "relationship", "siblingQ", "Lawful"],
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
        text14: {
          type: "object",
          title: "",
          description: "Information About Your Father",
        },
      },
    },
  },
};

export default formSchema;
