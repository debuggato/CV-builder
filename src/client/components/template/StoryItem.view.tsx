import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';
import sizes from '@styles/sizes';
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

`;

const Title = styled.h5`
  margin: 10px 0 0 0;
`;

const Description = styled.p`
  font-size: ${sizes.paragraph};
  line-height: ${sizes.lineHeight};
  margin: 5px 0;
`;

const Details = styled.p`
  font-size: ${sizes.paragraph};
  margin: 0;
`;

const StoryItem: FC<Props> = (props: Props): ReactElement => {
  const { title, entity, dateFrom, dateTo, description, city } = props;
  const start = dateFrom && getFormattedDateWithoutDays(dateFrom);
  const end = dateTo && getFormattedDateWithoutDays(dateTo);

  return (
    <Wrapper>
      <Title>{title} {entity ? `@ ${entity}` : ''}</Title>
      <Details>{city ? `${city} ${start} / ${end}` : ''}</Details>
      <Description dangerouslySetInnerHTML={{ __html: description }} ></Description>
    </Wrapper>
  );
}

export default StoryItem;
