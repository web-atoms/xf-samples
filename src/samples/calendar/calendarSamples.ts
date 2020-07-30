import MenuService from "../../service/menu-service/MenuService";
import Calendar from "./Calendar";

export default function addCalendarSamples(ms: MenuService) {
    const group = ms.addGroup("Calendar");
    group.addTabLink("Calendar", Calendar);
}
