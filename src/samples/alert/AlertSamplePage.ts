import MenuService from "../../service/menu-service/MenuService";
import AlertSample from "./AlertSample";
import CustomPopupSample from "./custom-popup/CustomPopupSample";

export default function addAlertSample(ms: MenuService) {
    const alert = ms.addGroup("Alert");
    alert.addLink("Alert", AlertSample);
    alert.addLink("Custom popup", CustomPopupSample);
}
