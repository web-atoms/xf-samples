import MenuService from "../../service/menu-service/MenuService";
import List from "./list-view/List";
import ListWithTemplates from "./template-selector/ListWithTemplates";

export default function addListSamples(ms: MenuService) {

    const list = ms.addGroup("List");
    list.addLink("List View", List );

    list.addLink("List View  with Template Selector", ListWithTemplates );

}
