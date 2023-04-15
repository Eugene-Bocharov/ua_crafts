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
