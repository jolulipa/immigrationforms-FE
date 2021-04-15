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
      required: ["email", "aNumber", "relationship", "siblingQ", "Lawful"],
      properties: {
        Email: {
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
          description: `Information About your  BENEFICIARY (YOUR RELATIVE/INTENDING IMMIGRANT):`,
        },
        text18: {
          type: "object",
          title: "",
          description: `Full Name of BENEFICIARY`,
        },
        par1LastName: {
          type: "string",
          title: "a. Family Name (Last Name)",
        },
        par1FirstName: {
          type: "string",
          title: "b. Given Name (First Name)",
        },
        par1MidName: {
          type: "string",
          title: "c. Middle Name",
        },
        par1BirthDate: {
          type: "string",
          title: `Date of Birth`,
        },
        par1Sex: {
          type: "string",
          title: "Sex",
          enum: ["male", "female"],
        },
        par1CityBirth: {
          type: "string",
          title: `City/Town/Village of Birth`,
        },
        par1CountryBirth: {
          type: "string",
          title: `Country of Birth`,
        },
        par1City: {
          type: "string",
          title: `City/Town/Village of Residence`,
        },
        par1CountryResidence: {
          type: "string",
          title: `Country of Residence`,
        },
      },
    },
    p2: {
      type: "object",
      title: "Part 2. Information About Your Employment",
      description: `Provide your employment history for the last five years, whether inside or outside the United States. Provide your current employment first. If you are currently unemployed, type or print "Unemployed" in Item Number 1. below. If you need extra space to complete this section, use the space provided in Part 7. Additional Information.`,
      required: [
        "aNumber",
        "petFullName",
        "petLastName",
        "petFirstName",
        "mailStreet",
        "cityTown",
        "mailCountry",
        "dateOfBirth",
        "curMaritalStatus",
        "iAmStatus",
        "typeOfAdmission",
        "employerName",
      ],
      properties: {
        text19: {
          type: "object",
          title: "",
          description: `Employment History:`,
        },
        text20: {
          type: "object",
          title: "",
          description: `Employer 1`,
        },
        employerName: {
          type: "string",
          title: `1.  Name of Employer/Company`,
        },
        employerStreet: {
          type: "string",
          title: "2.a.Street Number and Name ",
        },
        employerApt: {
          type: "string",
          title: "2.b.  Apt.     Ste.    Flr.",
        },
        employerCityTown: {
          type: "string",
          title: "2.c. City or Town",
        },
        employerState: {
          type: "string",
          title: "2.d. State ",
        },
        employerZip: {
          type: "string",
          title: "2.e. ZIP Code",
        },
        employerProvince: {
          type: "string",
          title: "2.f.Province",
        },
        employerPostal: {
          type: "string",
          title: "2.g. Postal Code ",
        },
        employerCountry: {
          type: "string",
          title: "2.h. Country",
        },
        yourOccupation1: {
          type: "string",
          title: "3.  Your Occupation",
        },
        emplmntDateFrom: {
          type: "string",
          title: `4.a. Date from`,
        },
        emplmntDateTo: {
          type: "string",
          title: `4.b. Date to`,
        },
        text29: {
          type: "object",
          title: "",
          description: `Employer 2:`,
        },
        employer2Name: {
          type: "string",
          title: `5.  Name of Employer/Company`,
        },
        employer2Street: {
          type: "string",
          title: "6.a.Street Number and Name ",
        },
        employer2Apt: {
          type: "string",
          title: "6.b.  Apt.     Ste.    Flr.",
        },
        employer2CityTown: {
          type: "string",
          title: "6.c. City or Town",
        },
        employer2State: {
          type: "string",
          title: "6.d. State ",
        },
        employer2Zip: {
          type: "string",
          title: "6.e. ZIP Code",
        },
        employer2Province: {
          type: "string",
          title: "6.f. Province",
        },
        employer2Postal: {
          type: "string",
          title: "6.g. Postal Code ",
        },
        employer2Country: {
          type: "string",
          title: "6.h. Country",
        },
        yourOccupation2: {
          type: "string",
          title: "7.  Your Occupation",
        },
        emplmnt2DateFrom: {
          type: "string",
          title: `8.a. Date from`,
        },
        emplmnt2DateTo: {
          type: "string",
          title: `8.b. Date to`,
        },
      },
    },
  },
};

export default formSchema;
