import React, { ReactElement, FC, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { useTranslation } from 'react-i18next';
import { changeLangAction, updateDocumentTitleAction } from '../../store/actions/Root.action';
import { InputTitle } from './Header.style';
import Select from '../../components/select';

const langs = [
	{ 'en': 'English' },
	{ 'it': 'Italian' },
	{ 'es': 'Spanish' },
	{ 'fr': 'French' },
	{ 'de': 'German' }
]

const Header: FC = (): ReactElement => {
	const changeLang = useDispatch<Dispatch>();
	const setDocumentTitle = useDispatch<Dispatch>()
	const { i18n } = useTranslation();

	const onSwitchLang = (e: any) => {
		changeLang(changeLangAction(e.target.value))

		i18n.changeLanguage();
	}

	return (
		<div className="flex items-center flex-col mb-5">
			<InputTitle
				type="text"
				onChange={(e: ChangeEvent<HTMLInputElement>) => {
					setDocumentTitle(updateDocumentTitleAction(e.target.value))
				}}
			/>
			<Select
				customClass="mt-4"
				list={langs}
				onChange={e => onSwitchLang(e)}
			/>
		</div>
	);
}

export default Header;
