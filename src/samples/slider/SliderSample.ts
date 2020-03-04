import MenuService from "../../service/menu-service/MenuService";
import SliderView from "./SliderView";

export default function addSlider(ms: MenuService) {
    const s = ms.addGroup("Slider");
    s.addTabLink("Slider", SliderView);
}
