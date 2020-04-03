import MenuService from "../../../service/menu-service/MenuService";
import CarouselView from "./CarouselView";

export default function addCarousel(ms: MenuService) {
    const c = ms.addGroup("Carousel");
    c.addTabLink("Carousel", CarouselView);
}
