import React, { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
	address: string;
	postalCode: string;
	city: string;
	country: string;
}

const Address: FC<Props> = ({
	address,
	postalCode,
	city,
	country
}: Props): ReactElement => {
	const { t } = useTranslation();

	return (
		<>
			{
				address &&
				<p>
					{t('address')}: {<strong>`${address} - ${postalCode} ${city}, ${country}`</strong>}
				</p>
			}
		</>
	);
};

export default Address;
