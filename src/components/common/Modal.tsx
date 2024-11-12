import { FC, useEffect, useRef } from 'react';
import { ModalType } from '../../types/modal.type.ts';

const Modal: FC<ModalType> = ({ visible, onHide, children }) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    console.log(visible);
    if (visible) {
      console.log(modalRef.current);
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [visible]);

  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;
    modal.addEventListener('close', onHide);
    return () => {
      modal.removeEventListener('close', onHide);
    };
  }, [modalRef, onHide]);

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
  }, [visible]);

  return (
    <dialog ref={modalRef} className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
            ✕
          </button>
        </form>
        {children}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Modal;
