import MenuService from "../../service/menu-service/MenuService";
import TabbedPageView from "./TabbedPageVIew";

export default function addTabbedPage(ms: MenuService) {
    const tp = ms.addGroup("Tabbed Page");
    tp.addTabLink("Tabbed Page Sample", TabbedPageView);
}
