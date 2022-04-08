const formSchema = {
  title: "I-130 Peticion de familiar extranjero - Pagina 2",
  description: "Formulario para pedir familiares.",
  type: "object",
  properties: {
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
        benANumber: {
          type: "number",
          title: `1. Alien Registration Number (A-Number) (if any)`,
        },
        benOnLineAccNum: {
          type: "number",
          title: `2. USCIS Online Account Number (if any)`,
        },
        benSocialSecNum: {
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
          description: `The beneficiary is in the United States and will apply for adjustment of status to that of a lawful permanent resident at the U.S. Citizenship and Immigration Services (USCIS) office in:`,
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
  },
};

export default formSchema;
