import { ReactNode } from 'react';

export type ModalType = {
  visible: boolean;
  onHide: () => void;
  children: ReactNode;
};
