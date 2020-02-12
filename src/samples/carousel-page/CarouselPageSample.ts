import MenuService from "../../service/menu-service/MenuService";
import CarouselPageView from "./CarouselPageView";

export default function addCarouselPage(ms: MenuService) {
    const cp = ms.addGroup("Carousel Page");
    cp.addLink("Carousel Page", CarouselPageView);
}
