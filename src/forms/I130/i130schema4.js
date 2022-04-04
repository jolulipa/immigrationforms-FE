const formSchema = {
  title: "I-130 Peticion de familiar extranjero - Pagina 4",
  description:
    "Utilice este servicio si usted es ciudadano estadounidense o residente permanente legal (LPR) y necesita establecer su relación con un familiar elegible que desea venir o permanecer en los Estados Unidos permanentemente y obtener una tarjeta de residente permanente (también llamada Green Card).",
  type: "object",
  properties: {
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
