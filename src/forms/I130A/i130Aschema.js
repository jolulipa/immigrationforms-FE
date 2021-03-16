const formSchema = {
  title: "I-130A Peticion de cónyuge extranjero",
  description:
    "El propósito de este formulario es recopilar información adicional para un cónyuge beneficiario del Formulario I-130, Petición para Pariente Extranjero. Si su cónyuge es ciudadano estadounidense, residente permanente legal o ciudadano no ciudadano que está presentando el Formulario I-130 en su nombre, debe completar y firmar el Formulario I-130A, Información Suplementaria para El Beneficiario del Cónyuge, y presentarla al Formulario I-130 presentado por su cónyuge. Si reside en el extranjero, todavía debe completar el Formulario I-130A, pero no necesita firmar el formulario.",
  type: "object",
  properties: {
    p1: {
      type: "object",
      title: "Part 1. Information About You",
      description: "(Spouse Beneficiary)",
      required: ["petitionFor", "relationship", "siblingQ", "Lawful"],
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
        texto1: {
          type: "object",
          title: "",
          description: `Address History`,
        },
        texto2: {
          type: "object",
          title: "",
          description: `Provide your physical addresses for the last five years, whether inside or outside the United States. Provide your current address first. If you need extra space to complete this section, use the space provided in Part 7. Additional Information.`,
        },
        texto8: {
          type: "object",
          title: "",
          description: "Physical Address 1:",
        },
        phy1Street: {
          type: "string",
          title: "4.a. Street Number and Name ",
        },
        phy1Apt: {
          type: "string",
          title: "4.b.   Apt.     Ste.    Flr.",
        },
        phy1CityTown: {
          type: "string",
          title: "4.c. City or Town",
        },
        phy1State: {
          type: "string",
          title: "4.d. State ",
        },
        phy1Zip: {
          type: "string",
          title: "4.e. ZIP Code",
        },
        phy1Province: {
          type: "string",
          title: "4.f. Province",
        },
        phy1Postal: {
          type: "string",
          title: "4.g. Postal Code ",
        },
        phy1Country: {
          type: "string",
          title: "4.h. Country",
        },
        phy1DateF: {
          type: "string",
          title: `5.a. Date From `,
        },
        phy1DateT: {
          type: "string",
          title: `5.b. Date To - PRESENT`,
        },
        texto9: {
          type: "object",
          title: "",
          description: "Physical Address 2:",
        },
        phy2Street: {
          type: "string",
          title: "6.a. Street Number and Name ",
        },
        phy2Apt: {
          type: "string",
          title: "6.b.   Apt.     Ste.    Flr.",
        },
        phy2CityTown: {
          type: "string",
          title: "6.c. City or Town",
        },
        phy2State: {
          type: "string",
          title: "6.d. State ",
        },
        phy2Zip: {
          type: "string",
          title: "6.e. ZIP Code",
        },
        phy2Province: {
          type: "string",
          title: "6.f. Province",
        },
        phy2Postal: {
          type: "string",
          title: "6.g. Postal Code ",
        },
        phy2Country: {
          type: "string",
          title: "6.h. Country",
        },
        phy2DateF: {
          type: "string",
          title: `7.a. Date From`,
        },
        phy2DateT: {
          type: "string",
          title: `7.b. Date To - PRESENT`,
        },
        texto6: {
          type: "object",
          title: "",
          description: "Last Physical Address Outside the United States",
        },
        texto7: {
          type: "object",
          title: "",
          description:
            "Provide your last address outside the United States of more than one year (even if listed above).",
        },
        employerStreet: {
          type: "string",
          title: "8.a.Street Number and Name ",
        },
        employerApt: {
          type: "string",
          title: "8.b.  Apt.     Ste.    Flr.",
        },
        employerCityTown: {
          type: "string",
          title: "8.c. City or Town",
        },
        employerProvince: {
          type: "string",
          title: "8.d.Province",
        },
        employerPostal: {
          type: "string",
          title: "8.e. Postal Code ",
        },
        employerCountry: {
          type: "string",
          title: "8.f. Country",
        },
        emplmntDateFrom: {
          type: "string",
          title: `9.a. Date from`,
        },
        emplmntDateTo: {
          type: "string",
          title: `9.b. Date to`,
        },
        texto17: {
          type: "object",
          title: "",
          description: `Information About Parent 1:`,
        },
        texto18: {
          type: "object",
          title: "",
          description: `Full Name of Parent 1`,
        },
        par1LastName: {
          type: "string",
          title: "10.a. Family Name (Last Name)",
        },
        par1FirstName: {
          type: "string",
          title: "10.b. Given Name (First Name)",
        },
        par1MidName: {
          type: "string",
          title: "10.c. Middle Name",
        },
        par1BirthDate: {
          type: "string",
          title: `11.  Date of Birth`,
        },
        par1Sex: {
          type: "string",
          title: "12.  Sex",
          enum: ["male", "female"],
        },
        par1CityBirth: {
          type: "string",
          title: `13.	City/Town/Village of Birth`,
        },
        par1CountryBirth: {
          type: "string",
          title: `14.	Country of Birth`,
        },
        par1City: {
          type: "string",
          title: `15.  City/Town/Village of Residence`,
        },
        par1CountryResidence: {
          type: "string",
          title: `16.  Country of Residence`,
        },
        texto19: {
          type: "object",
          title: "",
          description: `Information About Parent 2:`,
        },
        texto20: {
          type: "object",
          title: "",
          description: `Full Name of Parent 2`,
        },
        par2LastName: {
          type: "string",
          title: "17.a. Family Name (Last Name)",
        },
        par2FirstName: {
          type: "string",
          title: "17.b. Given Name (First Name)",
        },
        par2MidName: {
          type: "string",
          title: "17.c. Middle Name",
        },
        par2BirthDate: {
          type: "string",
          title: `18.  Date of Birth`,
        },
        par2Sex: {
          type: "string",
          title: "19.  Sex",
          enum: ["male", "female"],
        },
        par2CityBirth: {
          type: "string",
          title: `20.	City/Town/Village of Birth`,
        },
        par2CountryBirth: {
          type: "string",
          title: `21.  Country of Birth`,
        },
        par2City: {
          type: "string",
          title: `22.  City/Town/Village of Residence`,
        },
        par2CountryResidence: {
          type: "string",
          title: `23.  Country of Residence`,
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
        texto19: {
          type: "object",
          title: "",
          description: `Employment History:`,
        },
        texto20: {
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
        texto29: {
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
    p3: {
      type: "object",
      title:
        "Part 3. Information About Your Employment Outside the United States",
      description: `Provide your last occupation outside the United States if not shown above. If you never worked outside the United States, provide this information in the space provided in Part 7. `,
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
        texto19: {
          type: "object",
          title: "",
          description: `Additional Information.:`,
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
      },
    },
    p4: {
      type: "object",
      title:
        "Part 4. Spouse Beneficiary's Statement, Contact	Information, Certification, and Signature",
      description: `NOTE: Read the Penalties section of the Form I-130 and Form I-130A Instructions before completing this part.`,
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
        texto19: {
          type: "object",
          title: "",
          description: `Spouse Beneficiary's Statement:`,
        },
        texto20: {
          type: "object",
          title: "",
          description: `NOTE: Select the box for either Item Number 1.a. or 1.b. If applicable, select the box for Item Number 2.`,
        },
        canUndEng: {
          type: "boolean",
          title: `1.a.	I can read and understand English, and I have read and understand every question and instruction on this form and my answer to every question.`,
        },
        intCanUndEng: {
          type: "boolean",
          title: `1.b.	The interpreter named in Part 5. read to me every question and instruction on this form and my answer to every question in _______________ a language in which I am fluent, and I understood everything.`,
        },
        resUndEng: {
          type: "boolean",
          title: `2.	At my request, the preparer name in Part 6., _____________________ prepared this form for me based only upon information I provided or authorized.`,
        },
        texto21: {
          type: "object",
          title: "",
          description: `Spouse Beneficiary's Contact Information:`,
        },
        SpoContactInfo: {
          type: "string",
          title: `3.	Spouse Beneficiary's Daytime Telephone Number`,
        },
        SpoMobile: {
          type: "string",
          title: `4.	Spouse Beneficiary's Mobile Telephone Number (if any)`,
        },
        SpoEmail: {
          type: "string",
          title: `5.	Spouse Beneficiary's Email Address (if any)`,
        },
        texto22: {
          type: "object",
          title: "",
          description: `Spouse Beneficiary's Certification:`,
        },
        texto23: {
          type: "object",
          title: "",
          description: `Copies of any documents I have submitted are exact photocopies of unaltered, original documents, and I understand that USCIS may require that I submit original documents to USCIS at a later date. Furthermore, I authorize the release of any information from any of my records that USCIS may need to determine my eligibility for the immigration benefit I seek.`,
        },
        texto24: {
          type: "object",
          title: "",
          description: `I further authorize release of information contained in this form, in supporting documents, and in my USCIS records to other entities and persons where necessary for the administration and enforcement of U.S. immigration laws.`,
        },
        texto25: {
          type: "object",
          title: "",
          description: `I certify, under penalty of perjury, that I provided or authorized all of the information in this form, I understand all of the information contained in, and submitted with, my form, and that all of this information is complete, true, and correct.`,
        },
        texto26: {
          type: "object",
          title: "",
          description: `Spouse Beneficiary's Signature:`,
        },
      },
    },
  },
};

export default formSchema;
