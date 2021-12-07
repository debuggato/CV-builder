import React, { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Content } from './Loader.style';

type Props = {
	keyLabel?: string;
}

const Loader: FC<Props> = ({
	keyLabel
}: Props): ReactElement => {
	const { t } = useTranslation();

	return (
		<Content>
			{keyLabel && <p>{t(keyLabel)}</p>}
			<div className="loader-fb-style"><div></div><div></div><div></div></div>
		</Content>
	);
}

export default Loader;
