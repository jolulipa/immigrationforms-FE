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
        SpoSignature: {
          type: "string",
          title: `6.a. Spouse Beneficiary's Signature (sign in ink) `,
        },
        SpoSignDate: {
          type: "string",
          title: `6.b. Date of Signature`,
        },
        texto27: {
          type: "object",
          title: "",
          description: `NOTE TO ALL SPOUSE BENEFICIARIES: If you do not completely fill out this form or fail to submit required documents listed in the instructions, USCIS may deny the Form I-130 filed on your behalf.`,
        },
      },
    },
    p5: {
      type: "object",
      title:
        "Part 5. Interpreter's Contact Information, Certification, and Signature",
      description: `Provide the following information about the interpreter you used to complete Form I-130A if he or she is different from the interpreter used to complete the Form I-130 filed on your behalf.`,
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
    p8: {
      type: "object",
      title: `Part 6.  Contact Information, Declaration, and 
        Signature of the Person Preparing this Form, if 
        Other Than the Spouse Beneficiary`,
      description: `Provide the following information about the preparer you used to complete Form I-130A if he or she is different from the preparer used to complete the Form I-130 filed on your behalf.`,
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
    p9: {
      type: "object",
      title: "Part 7.  Additional Information",
      description: `If you need extra space to provide any additional information within this form, use the space below.  If you need more space than what is provided, you may make copies of this page to complete and file with this form or attach a separate sheet of paper.  Type or print your name and A-Number (if any) at the 
        top of each sheet; indicate the Page Number, Part Number, and Item Number to which your answer refers; and sign and date each sheet.`,
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
