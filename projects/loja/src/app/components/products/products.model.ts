export interface ProductsModel {
    id: number,
    name: string,
    price: number,
    description: string,
    originalStorage: number
    quantity?: number,
    showDiscount?: boolean
}