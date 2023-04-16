import { ReactNode } from 'react';

export type ContainerBoxProps = {
  children: ReactNode;
};

export type onDelete = (id: number) => void;
