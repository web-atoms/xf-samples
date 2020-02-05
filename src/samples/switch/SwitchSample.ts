import MenuService from "../../service/menu-service/MenuService";
import SwitchSample from "./SwitchSample";

export default function addSwitchSample(ms: MenuService) {
    const s = ms.addGroup("Switch");
    s.addLink("Switch", SwitchSample);
}
