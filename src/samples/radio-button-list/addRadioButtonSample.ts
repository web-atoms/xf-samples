import MenuService from "../../service/menu-service/MenuService";
import RadioButtonSample from "./RadioButtonSample";

export default function addRadioButtonSample(ms: MenuService) {
    const group = ms.addGroup("Radio Button Sample");
    group.addTabLink("Radio Button List", RadioButtonSample);
}
