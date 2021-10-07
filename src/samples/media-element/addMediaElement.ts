import MenuService from "../../service/menu-service/MenuService";
import MediaElementSample from "./MediaElementSample";

export default function addMediaElement(ms: MenuService) {
    const group = ms.addGroup("Media Element Sample");
    group.addTabLink("Media Element", MediaElementSample);
}
