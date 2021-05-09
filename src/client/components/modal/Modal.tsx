import React, { FC, ReactElement, ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import {
	modalDisplayedAction,
} from '../../store/actions/Root.action';
import './Modal.css';

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

	return (
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
		</div>
	)
}

export default Modal;