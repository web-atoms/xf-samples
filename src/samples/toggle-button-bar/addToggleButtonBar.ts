import MenuService from "../../service/menu-service/MenuService";
import CustomToggleButtonBar from "./custom/CustomToggleButtonBar";
import ToggleButtonBar from "./simple/ToggleButtonBar";

export default function addToggleButtonBar(ms: MenuService) {

    const g = ms.addGroup("Toggle Button Bar");
    g.addLink("Simple", ToggleButtonBar);
    g.addLink("Custom Template", CustomToggleButtonBar);

}
