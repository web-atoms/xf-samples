import MenuService from "../../service/menu-service/MenuService";
import WebView from "./WebView";

export default function addWebViewSample(ms: MenuService) {
    const wv = ms.addGroup("Web View");
    wv.addTabLink("Web View Sample", WebView);
}
