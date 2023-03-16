export type Phone = {
    id: number,
    brand: string,
    model: string,
    price: number,
    screenSize: number,
    camera: string,
    storage: number,
    battery: number,
    ram: number,
}

export enum DisplayType {
    Table,
    List
}