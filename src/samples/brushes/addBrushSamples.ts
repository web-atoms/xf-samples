import MenuService from "../../service/menu-service/MenuService";
import LinearGradient from "./gradient/linear/LinearGradient";
import RadialGradient from "./gradient/radial/RadialGradient";
import SolidBrush from "./solid/SolidBrush";

export default function addBrushSamples(ms: MenuService) {

    const group = ms.addGroup("Brushes");
    group.addTabLink("Solid", SolidBrush);
    group.addTabLink("Linear Gradient", LinearGradient);
    group.addTabLink("Radial Gradient", RadialGradient);
}
