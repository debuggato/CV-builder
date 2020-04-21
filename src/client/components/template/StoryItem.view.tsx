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

const Wrapper = styled.div`
  h5 {
    margin-bottom: 8px;
  }

  p {
    font-size: 13px;
    margin: 5px 0;
  }
`;

const StoryItem: FC<Props> = ({ title, entity, dateFrom, dateTo, description, city }: Props): ReactElement => {
  const start = dateFrom && getFormattedDateWithoutDays(dateFrom);
  const end = dateTo && getFormattedDateWithoutDays(dateTo);
  return (
    <Wrapper>
      <h5>{title}</h5>
      <p>{`${entity} - ${city} - ${start}/${end}`}</p>
      <p>{description}</p>
    </Wrapper>
  );
}

export default StoryItem;
