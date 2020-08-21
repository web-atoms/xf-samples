import MenuService from "../../service/menu-service/MenuService";
import TabbedPageView from "./TabbedPageView";

export default function addTabbedPage(ms: MenuService) {
    const tp = ms.addGroup("Tabbed Page");
    tp.addTabLink("Tabbed Page Sample", TabbedPageView);
}
