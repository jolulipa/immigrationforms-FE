const formSchema = {
  title: "I-130A Peticion de cónyuge extranjero",
  description:
    "El propósito de este formulario es recopilar información adicional para un cónyuge beneficiario del Formulario I-130, Petición para Pariente Extranjero. Si su cónyuge es ciudadano estadounidense, residente permanente legal o ciudadano no ciudadano que está presentando el Formulario I-130 en su nombre, debe completar y firmar el Formulario I-130A, Información Suplementaria para El Beneficiario del Cónyuge, y presentarla al Formulario I-130 presentado por su cónyuge. Si reside en el extranjero, todavía debe completar el Formulario I-130A, pero no necesita firmar el formulario.",
  type: "object",
  properties: {
    p1: {
      type: "object",
      title: "Part 1. Relationship",
      description: "(You are the petitioner. Your relative is the Beneficiary)",
      required: ["petitionFor", "relationship", "siblingQ", "Lawful"],
      properties: {
        petitionFor: {
          type: "string",
          title: "1. I am filing this petition for my...",
          enum: ["Spouse", "Parent", "Brother/Sister", "Child"],
        },
      },
    },
  },
};
