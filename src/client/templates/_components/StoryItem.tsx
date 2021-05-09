import React, { FC, ReactElement } from 'react';
import { getFormattedDateWithoutDays } from '../../utils/DateUtil';

type Props = {
	title: string;
	entity: string;
	dateFrom: string;
	dateTo: string;
	description: string;
	city: string;
}

const StoryItem: FC<Props> = (props: Props): ReactElement => {
	const { title, entity, dateFrom, dateTo, description, city } = props;
	const start = dateFrom && getFormattedDateWithoutDays(dateFrom);
	const end = dateTo && getFormattedDateWithoutDays(dateTo);

	return (
		<div>
			<h5 className="my-5">{title} {entity ? `@ ${entity}` : ''}</h5>
			<p>{city ? `${city} ${start} / ${end}` : ''}</p>
			<p dangerouslySetInnerHTML={{ __html: description }} ></p>
		</div>
	);
}

export default StoryItem;
