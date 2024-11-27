import type { ReactNode } from 'react';

export type ModalType = {
	visible: boolean;
	onClose: () => void;
	children: ReactNode;
};
