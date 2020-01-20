import MenuService from "../../service/menu-service/MenuService";
import SimpleForm from "./simple/SimpleForm";

export default function addFormSamples(ms: MenuService) {
    const form = ms.addGroup("Form");
    form.addLink("Simple Form", SimpleForm);
}
