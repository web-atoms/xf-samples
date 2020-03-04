import MenuService from "../../service/menu-service/MenuService";
import RefreshView from "./RefreshView";

export default function addRefreshSample(ms: MenuService) {
    const rs = ms.addGroup("Refresh-View");
    rs.addTabLink("Refresh View", RefreshView);
}