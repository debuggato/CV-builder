import React, { FC, ReactElement, useState } from 'react';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import config from '../../../config';
import {
	modalDisplayedAction,
} from '../../store/actions/Root.action';
import Button from '../../components/button';
import Icon from '../../components/Icon';
import Loader from '../../components/loader/Loader.view';
import useDataFromState from '../../utils/useDataFromState';

type Props = {
	templateSelected: string;
}

const ResumeActions: FC<Props> = ({
	templateSelected
}: Props): ReactElement => {
	const { t } = useTranslation();
	const showTemplateGallery = useDispatch<Dispatch>();
	const [pdf, setPdf] = useState<string>('');
	const [loader, setLoader] = useState<boolean>(false);
	const details = useDataFromState('details');
	const summary = useDataFromState('summary');
	const employments = useDataFromState('employment');
	const education = useDataFromState('education');

	const renderPdf = async () => {
		setLoader(true);

		await axios.post(config.render_url, {
			details,
			summary,
			education,
			employments,
			templateSelected
		}).then((result: any) => {
			setPdf(result.data.pdf);
		}).finally(() => {
			setLoader(false);
		});
	}

	return (
		<div className="flex justify-around w-full my-4">
			<Button onClick={() => showTemplateGallery(modalDisplayedAction(true))}>
				<Icon icon={faThLarge} /> {t('choose.template')}
			</Button>

			{!loader && pdf === '' &&
				<Button style={Button.PRIMARY} onClick={renderPdf}>
					{t('generate.pdf')}
				</Button>
			}

			{
				loader && <Loader />
			}

			{
				Boolean(pdf) &&
				<a
					type="button"
					href={`data:application/pdf;base64,${pdf}`}
					download={`${details.firstName}_${details.lastName}_cv_${Date.now()}`}
				>
					{t("download.pdf")}
				</a>
			}
		</div>
	);
}

export default ResumeActions;
