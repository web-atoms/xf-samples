import MenuService from "../../service/menu-service/MenuService";
import TimePickerSample from "./TImePickerSample";

export default function addTimePicker(ms: MenuService) {
    const time = ms.addGroup("Selector");
    time.addLink("Time Picker", TimePickerSample);
}