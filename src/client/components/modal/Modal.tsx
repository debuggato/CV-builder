import React, { FC, ReactElement, ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { createPortal } from "react-dom";
import { Dispatch } from 'redux';
import {
	modalDisplayedAction,
} from '../../store/actions/Root.action';
import './Modal.css';

const _modalRoot = document.getElementById('modal') as Element;

type Props = {
	children: ReactNode;
	title?: string;
	header?: boolean;
}

const Modal: FC<Props> = ({
	children,
	title,
	header
}: Props): ReactElement => {

	const closeModal = useDispatch<Dispatch>();

	return createPortal(
		<div className="modal__wrapper">
			<div className="modal__card">
				{header &&
					<div className="modal__header">
						{title && <span className="modal__title">{title}</span>}
						<span
							className="modal__close"
							onClick={() => closeModal(modalDisplayedAction(false))}
						>✕</span>
					</div>
				}
				{children}
			</div>
		</div>,
		_modalRoot
	)
}

export default Modal;