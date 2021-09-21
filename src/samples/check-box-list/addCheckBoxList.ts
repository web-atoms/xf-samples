import MenuService from "../../service/menu-service/MenuService";
import CheckBoxListSample from "./CheckBoxListSample";

export default function addCheckBoxList(ms: MenuService) {

    const group = ms.addGroup("Check Box List");
    group.addTabLink("Simple", CheckBoxListSample);
}
