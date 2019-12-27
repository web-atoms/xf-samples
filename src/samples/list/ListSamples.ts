import MenuService from "../../service/menu-service/MenuService";
import List from "./list-view/List";

export default function addListSamples(ms: MenuService) {

    ms.addLink("List View", List );

}
