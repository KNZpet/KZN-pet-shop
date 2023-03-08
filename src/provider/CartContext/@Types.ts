export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IProduct {
  name: string;
  category: "Brinquedo" | "Coleiras" | "Produtos para Pet";
  description: string;
  price: number;
  img: string;
  id: number;
}
export interface ICartContext {
  loading: boolean;
  handleModal(): void;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setProductsListCart: React.Dispatch<React.SetStateAction<IProduct[]>>;
  productsListCart: IProduct[];
  productList: IProduct[];
  setProductList: React.Dispatch<React.SetStateAction<IProduct[]>>;
  loadProductList(): Promise<void>;
}
