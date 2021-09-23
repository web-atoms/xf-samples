import MenuService from "../../service/menu-service/MenuService";
import Expander from "./Expander";

export default function addExpander(ms: MenuService) {

    const group = ms.addGroup("Expander");
    group.addTabLink("Simple", Expander);
}
