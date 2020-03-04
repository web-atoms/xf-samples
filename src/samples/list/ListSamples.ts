import MenuService from "../../service/menu-service/MenuService";
import List from "./list-view/List";
import ListWithTemplates from "./template-selector/ListWithTemplates";

export default function addListSamples(ms: MenuService) {

    const list = ms.addGroup("List");
    list.addTabLink("List View", List );

    list.addTabLink("List View  with Template Selector", ListWithTemplates );

}
