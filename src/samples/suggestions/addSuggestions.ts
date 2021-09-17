import MenuService from "../../service/menu-service/MenuService";
import Suggestions from "./Suggestions";

export default function addSuggestions(ms: MenuService) {
    const popup = ms.addGroup("Suggestions");
    popup.addTabLink("Simple", Suggestions);
}
