import MenuService from "../../service/menu-service/MenuService";
import AlertSample from "./AlertSample";
import CustomPopupSample from "./custom-popup/CustomPopupSample";

export default function addAlertSample(ms: MenuService) {
    const alert = ms.addGroup("Alert");
    alert.addTabLink("Alert", AlertSample);
    alert.addTabLink("Custom popup", CustomPopupSample);
}
