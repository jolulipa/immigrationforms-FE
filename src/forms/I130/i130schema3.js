const formSchema = {
  title: "I-130 Peticion de familiar extranjero - Pagina 3",
  description:
    "Utilice este servicio si usted es ciudadano estadounidense o residente permanente legal (LPR) y necesita establecer su relación con un familiar elegible que desea venir o permanecer en los Estados Unidos permanentemente y obtener una tarjeta de residente permanente (también llamada Green Card).",
  type: "object",
  properties: {
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
  },
};

export default formSchema;
