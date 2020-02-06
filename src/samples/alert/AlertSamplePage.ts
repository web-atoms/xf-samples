import MenuService from "../../service/menu-service/MenuService";
import AlertSample from "./AlertSample";

export default function addAlertSample(ms: MenuService) {
    const alert = ms.addGroup("Alert");
    alert.addLink("Alert", AlertSample);
}