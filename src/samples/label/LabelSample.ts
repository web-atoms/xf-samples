import MenuService from "../../service/menu-service/MenuService";
import LabelView from "./LabelView";

export default function addLabelSample(ms: MenuService) {
    const label = ms.addGroup("Label");
    label.addTabLink("Label", LabelView);
}
