import React, { FC, ReactElement } from 'react';

interface Props {
  children: string;
}

const SubtitleView: FC<Props> = ({ children }: Props): ReactElement => {
  return <p>{children}</p>;
};

export default SubtitleView;
