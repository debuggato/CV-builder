import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';

import { getFormattedDateWithoutDays } from '@utils/helpers';

interface Props {
  title: string;
  entity: string;
  dateFrom: string;
  dateTo: string;
  description: string;
  city: string;
}

const Wrapper = styled.div``;

const StoryItem: FC<Props> = ({ title, entity, dateFrom, dateTo, description, city }: Props): ReactElement => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <p>{entity}</p>
      <p>{dateFrom && getFormattedDateWithoutDays(dateFrom)}</p>
      <p>{dateTo && getFormattedDateWithoutDays(dateTo)}</p>
      <p>{city}</p>
      <p>{description}</p>
    </Wrapper>
  );
}

export default StoryItem;
