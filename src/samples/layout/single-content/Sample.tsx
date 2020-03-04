import MenuService from "../../../service/menu-service/MenuService";
import MainPage from "./content-view/MainPage";
import FrameSample from "./frame/FrameSample";
import ScrollViewSample from "./scroll-view/ScrollViewSample";

export default function addSingleContentSample(ms: MenuService) {
    const sv = ms.addGroup("Single Content View");
    sv.addTabLink("Scroll View", ScrollViewSample);
    sv.addTabLink("Frame Alert", FrameSample);
    sv.addTabLink("Content View", MainPage);
}
