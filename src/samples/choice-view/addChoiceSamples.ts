import MenuService from "../../service/menu-service/MenuService";
import Gender from "./Gender";

export default function addChoiceSamples(ms: MenuService) {
    const choices = ms.addGroup("Choice View");
    choices.addTabLink("Select", Gender);
}
