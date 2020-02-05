import MenuService from "../../service/menu-service/MenuService";
import DatePickerView from "./DatePickerView";

export default function addDatePicker(ms: MenuService) {
    const date = ms.addGroup("Date Picker");
    date.addLink("Date Picker", DatePickerView);
}
