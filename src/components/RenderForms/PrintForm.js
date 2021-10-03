import { print } from "../../api/formsAccess";
import { baseUrl } from "../../api/configuration";

const PrintForm = async (id) => {
  const response = await print(id);
  const { downloadKey } = await response?.json();
  const url = `${baseUrl}/documents/${id}.pdf?downloadKey=${downloadKey}`;
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.setAttribute("download", `${id}.pdf`);
  document.body.appendChild(link);
  link.click();
  link.remove();
};

export default PrintForm;
