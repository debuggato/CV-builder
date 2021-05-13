import React, { FC, ReactElement } from 'react';

type Props = {
	children: string;
}

const SectionTitle: FC<Props> = ({
	children
}: Props): ReactElement => (
	<h4 className="pb-2 mb-5 border-b">{children}</h4>
)

export default SectionTitle;
