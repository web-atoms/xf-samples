import MenuService from "../../service/menu-service/MenuService";
import ChoiceViewSample from "./ChoiceViewSample";

export default function addChoiceSamples(ms: MenuService) {
    const choices = ms.addGroup("Choice View");
    choices.addTabLink("Select", ChoiceViewSample);
}
