import MenuService from "../../service/menu-service/MenuService";
import Essentials from "./Essentials";

export default function addEssentials(ms: MenuService) {

    const group = ms.addGroup("Essentials");
    group.addTabLink("Open File", Essentials);

}
