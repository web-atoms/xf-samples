import MenuService from "../../service/menu-service/MenuService";
import FrameSample from "./FrameSample";

export default function addFrameSample(ms: MenuService) {
    const frame = ms.addGroup("Frame");
    frame.addLink("Frame Alert", FrameSample);
}
