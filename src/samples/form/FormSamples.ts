import MenuService from "../../service/menu-service/MenuService";
import SimpleForm from "./simple/SimpleForm";

export default function addFormSamples(ms: MenuService) {
    ms.addLink("Simple Form", SimpleForm);
}
