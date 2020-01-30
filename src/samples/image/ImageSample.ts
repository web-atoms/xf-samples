import MenuService from "../../service/menu-service/MenuService";
import ImageView from "./ImageView";

export default function addImage(ms: MenuService) {
    const image = ms.addGroup("Image");
    image.addLink("Image", ImageView);
}
