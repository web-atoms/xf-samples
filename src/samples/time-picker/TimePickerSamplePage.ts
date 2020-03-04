import MenuService from "../../service/menu-service/MenuService";
import TimePickerSample from "./TimePickerSample";

export default function addTimePicker(ms: MenuService) {
    const time = ms.addGroup("Selector");
    time.addTabLink("Time Picker", TimePickerSample);
}
