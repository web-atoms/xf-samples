//tslint:disable
declare var bridge: any;
const assemblyName = `Xamarin.Essentials`;
let ns = `Xamarin.Essentials`;
function create(name: string) {
    return {
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass(`${ns}.${name}, ${assemblyName}`); 
            Object.defineProperty(this, name, {
                configurable: true,
                enumerable: true,
                writable: true,
                value: t
            });
            return t;
        }
    };
}

namespace XFEssentials {

    export declare class Launcher {
        public static openAsync(request: OpenFileRequest): Promise<void>;
    }

    export declare class OpenFileRequest {
        constructor(title: string, file: ReadOnlyFile);
    }

    export declare class ReadOnlyFile {

        constructor(name: string);
        constructor(name: string, contentType: string);
    }

    export declare class FilePicker {
        public static pickAsync(options?: PickOptions): Promise<FileResult>;
    }

    export declare class FileResult {
        public fileName: string;
        public fullPath: string;
        public contentType: string;
        
    }

    export declare class PickOptions {

        public static images: PickOptions;

        public static default: PickOptions;

        public pickerTitle: string;

        public fileTypes: FilePickerFileType;
    }

    export declare class FilePickerFileType {

        public static images: FilePickerFileType;

        public static jpg: FilePickerFileType;

        public static pdf: FilePickerFileType;

        public static png: FilePickerFileType;

        public static videos: FilePickerFileType;

    }
}

Object.defineProperties(XFEssentials as any, {
    FilePicker: create("FilePicker"),
    FileResult: create("FileResult"),
    PickOptions: create("PickOptions"),
    Launcher: create("Launcher"),
    ReadOnlyFile: create("ReadOnlyFile"),
    OpenFileRequest: create("OpenFileRequest"),
    FilePickerFileType: create("FilePickerFileType")
});

export default XFEssentials;