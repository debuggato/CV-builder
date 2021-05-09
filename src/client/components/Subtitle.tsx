import React, { FC, ReactElement } from 'react';

type Props = {
	children: string;
}

const Subtitle: FC<Props> = ({
	children
}: Props): ReactElement => (
	<p>{children}</p>
)

export default Subtitle;
