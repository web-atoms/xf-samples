import MenuService from "../../service/menu-service/MenuService";
import EditorView from "./EditorView";

export default function addEditor(ms: MenuService) {
    const editor = ms.addGroup("Editor");
    editor.addTabLink("Editor", EditorView);
}
