import { onAmount, onDelete } from '../types/ComponentsProps';

export interface productCardProps {
  img: string;
  label: string;
  price: string;
  discount?: string;
}

export interface ContactProps {
  name: string;
  contact: string;
}

export interface HeaderProps {
  loggedIn?: boolean;
}

export interface InputProps {
  name: string;
  value?: string;
  type?: string;
  small?: boolean;
}

export interface BasketItemProps {
  name: string;
  amount: number;
  price: number;
  nameStyle: string;
  amountStyle: string;
  sumStyle: string;
  deleteStyle: string;
  id: number;
  onDelete: onDelete;
  onAmount: onAmount;
}

export interface basketState {
  name: string;
  amount: number;
  price: number;
}
