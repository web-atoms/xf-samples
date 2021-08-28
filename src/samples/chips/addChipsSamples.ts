import MenuService from "../../service/menu-service/MenuService";
import ChipsSample from "./ChipsSample";

export default function addChipsSamples(ms: MenuService)  {

    const group = ms.addGroup("Chips");
    group.addTabLink("Chips", ChipsSample);

}
