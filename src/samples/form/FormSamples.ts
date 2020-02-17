import MenuService from "../../service/menu-service/MenuService";
import ButtonView from "../button/ButtonView";
import ImageButtonView from "../button/image-button/ImageButtonView";
import CheckBoxView from "../check-box/CheckBoxView";
import DatePickerView from "../date-picker/DatePickerView";
import EditorView from "../editor/EditorView";
import EntryView from "../entry/EntryView";
import LabelView from "../label/LabelView";
import SearchBarView from "../search-bar/SearchBarView";
import SliderView from "../slider/SliderView";
import StepperView from "../stepper/StepperView";
import SimpleForm from "./simple/SimpleForm";

export default function addFormSamples(ms: MenuService) {
    const form = ms.addGroup("Form");
    form.addLink("Simple Form", SimpleForm);
    form.addLink("Label", LabelView);
    form.addLink("CheckBox", CheckBoxView);
    form.addLink("Entry", EntryView);
    form.addLink("Editor", EditorView);
    form.addLink("Button", ButtonView);
    form.addLink("Image Button", ImageButtonView);
    form.addLink("Search Bar", SearchBarView);
    form.addLink("Date Picker", DatePickerView);
    form.addLink("Slider", SliderView);
    form.addLink("Stepper", StepperView);
}
