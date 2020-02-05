import MenuService from "../../service/menu-service/MenuService";
import DatePickerView from "../date-picker/DatePickerView";
import EditorView from "../editor/EditorView";
import EntryView from "../entry/EntryView";
import LabelView from "../label/LabelView";
import SliderView from "../slider/SliderView";
import StepperView from "../stepper/StepperView";
import SimpleForm from "./simple/SimpleForm";

export default function addFormSamples(ms: MenuService) {
    const form = ms.addGroup("Form");
    form.addLink("Simple Form", SimpleForm);
    form.addLink("Label", LabelView);
    form.addLink("Entry", EntryView);
    form.addLink("Editor", EditorView);
    form.addLink("Date Picker", DatePickerView);
    form.addLink("Slider", SliderView);
    form.addLink("Stepper", StepperView);
}
