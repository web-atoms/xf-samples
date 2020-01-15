import MenuService from "../../service/menu-service/MenuService";
import List from "./list-view/List";
import ListWithTemplates from "./template-selector/ListWithTemplates";

export default function addListSamples(ms: MenuService) {

    ms.addLink("List View", List );

    ms.addLink("List View  with Template Selector", ListWithTemplates );

}
