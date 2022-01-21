import { createUpdateForm } from "../api/formsAccess";
import { CLIENT_DATA } from "../constants/storageKeys";

function HandleSubmitForms(
  formType,
  isEditMode,
  formData,
  role,
  userId,
  email
) {
  console.log("HandleSubmit data:", formType, isEditMode, formData);

  const extractData = async ({ cleanData }) => {
    let i;
    for (i = 1; i < 100; i++) {
      delete cleanData?.p1[`text${i}`];
      delete cleanData?.p2[`text${i}`];
      delete cleanData?.p3[`text${i}`];
      delete cleanData?.p4[`text${i}`];
      delete cleanData?.p5[`text${i}`];
      delete cleanData?.p6[`text${i}`];
      delete cleanData?.p7[`text${i}`];
      delete cleanData?.p8[`text${i}`];
      delete cleanData?.p9[`text${i}`];
      delete cleanData?.p10[`text${i}`];
    }
  };

  const go = async (cleanData, cliUser, cliEmail, formStatus, edit) => {
    if (edit) {
      formStatus = cleanData.formStatus;
    } else {
      formStatus = "unpaid";
    }
    const obj = {
      data: JSON.stringify(cleanData),
      formId: formType,
      formStatus: formStatus,
      userId: cliUser,
    };
    console.log("DATOS a modificar:", obj);
    await createUpdateForm(obj);
    alert("Se ha creado o modificado un registro N400");
    window.location = "/screens/UsersPage";
  };

  (async () => {
    console.log("Data:", formData);
    let cleanData = { ...formData };
    await extractData({ cleanData });
    if (isEditMode) {
      const { cliUser, cliEmail } = JSON.parse(
        localStorage.getItem(CLIENT_DATA)
      );
      go(cleanData, cliUser, cliEmail, formData.formStatus, isEditMode);
    } else {
      const cliUser = userId;
      const cliEmail = email;
      go(cleanData, cliUser, cliEmail, formData.formStatus, isEditMode);
    }
  })();
}

export default HandleSubmitForms;
