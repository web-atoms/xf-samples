export interface IAny {
    [key: string]: string | number | null | undefined;
}

type IStyleDeclaration = IAny | {
    subclasses?: {
        [key: string]: IStyleDeclaration;
    }
};

export default IStyleDeclaration;
