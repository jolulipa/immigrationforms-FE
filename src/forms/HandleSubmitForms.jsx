import { useHistory } from "react-router-dom";
import { createUpdateForm } from "../api/formsAccess";
import { AUTH_TOKEN, CLIENT_DATA } from "../constants/storageKeys";
import { useAppContext } from "../context/Provider";
import { readAllFormsAdm } from "../api/formsAccess";

function HandleSubmitForms(
  formType,
  isEditMode,
  formData,
  role,
  userId,
  email
) {
  console.log("HandleSubmit data:", formType, isEditMode, formData);
  const { state, updateForms } = useAppContext();
  const history = useHistory();
  const token = localStorage.getItem(AUTH_TOKEN) || "";

  const navigateToUser = async (id, email, role, feName) => {
    const forms = await readAllFormsAdm(id, token);
    await updateForms(forms);
    history.push({
      pathname: "/screens/UsersPage",
      state: {
        id,
        feName,
        email,
        role,
      },
    });
  };

  const extractData = ({ cleanData }) => {
    let i, p, pname, tname;
    for (p = 1; p < 11; p++) {
      pname = `p${p}`;
      for (i = 1; i < 100; i++) {
        tname = `text${i}`;
        if (
          (cleanData[pname] &&
            typeof cleanData[pname][tname] !== "undefined") ||
          typeof cleanData[pname] !== "undefined"
        ) {
          console.log(pname, tname, cleanData[pname][tname]);
          delete cleanData[`p${p}`][`text${i}`];
        }
      }
      if (
        cleanData[pname] &&
        Object.keys(cleanData[pname]).length === 0 &&
        Object.getPrototypeOf(cleanData[pname]) === Object.prototype
      ) {
        delete cleanData[pname];
      }
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

    alert(
      "Debe PAGAR por el servicio antes de someter los datos, de lo contrario, los datos entrados se perderían."
    );

    await createUpdateForm(obj);
    alert("Se ha creado o modificado un formulario");
    navigateToUser(
      state.intake.userId,
      state.intake.email,
      state.intake.role,
      state.intake.fullName
    );
  };

  (async () => {
    let cleanData = { ...formData };
    extractData({ cleanData });
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
