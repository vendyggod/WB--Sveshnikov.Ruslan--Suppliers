export interface ISupply {
  id: number;
  date: string;
  quantity: number;
  address: string;
  type: string;
  status: string;
  city: string;
  warehouse: string;
}

export interface IForm {
  onCloseModal: () => void;
}
