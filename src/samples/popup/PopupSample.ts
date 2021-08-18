import MenuService from "../../service/menu-service/MenuService";
import AttachedPopup from "./attached/AttachedPopup";
import PopupCallingPage from "./simple/PopupCallingPage";

export default function addPopupSample(ms: MenuService) {
    const popup = ms.addGroup("Popup Sample");
    popup.addTabLink("Simple", PopupCallingPage);
    popup.addTabLink("Attached", AttachedPopup);
}
