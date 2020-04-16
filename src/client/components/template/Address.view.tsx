import React, { FC, ReactElement } from 'react';
import trans from '@client/i18n';

interface Props {
  address: string;
  postalCode: string;
  city: string;
  country: string;
}

const Address: FC<Props> = ({ address, postalCode, city, country }: Props): ReactElement => {
  return (
    <>
      {
        address &&
        <p>
          {trans.t('address')}: <strong>`${address} - ${postalCode} ${city}, ${country}`</strong>}
        </p>
      }
    </>
  );
};

export default Address;
