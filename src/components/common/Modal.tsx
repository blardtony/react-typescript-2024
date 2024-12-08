import { type FC, useEffect, useRef } from 'react';
import type { ModalType } from '../../types/modal.type.ts';

const Modal: FC<ModalType> = ({ visible, onClose, children }) => {
	const modalRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (visible) {
			modalRef.current?.showModal();
		} else {
			modalRef.current?.close();
		}
	}, [visible]);

	useEffect(() => {
		const modal = modalRef.current;
		if (!modal) return;
		modal.addEventListener('close', onClose);
		return () => {
			modal.removeEventListener('close', onClose);
		};
	}, [onClose]);

	useEffect(() => {
		const modal = modalRef.current;
		setTimeout(() => {
			if (!modal) return;
			const focus: HTMLElement | null = modal.querySelector(
				'[data-autoFocus=true]',
			);
			if (focus) {
				focus.focus();
			}
		});
	}, []);

	return (
		<dialog ref={modalRef} className="modal">
			<div className="modal-box">
				<form method="dialog">
					<button
						type="submit"
						className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
					>
						✕
					</button>
				</form>
				{children}
			</div>
			<form method="dialog" className="modal-backdrop">
				<button type="submit">close</button>
			</form>
		</dialog>
	);
};

export default Modal;
