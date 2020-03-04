import MenuService from "../../service/menu-service/MenuService";
import PopupCallingPage from "./PopupCallingPage";

export default function addPopupSample(ms: MenuService) {
    const popup = ms.addGroup("Popup Sample");
    popup.addTabLink("Popup", PopupCallingPage);
}
