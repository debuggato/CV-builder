import React, { FC, ReactElement, ReactNode } from 'react';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import colors from '../../styles/colors';
import IconView from '../../components/Icon.view';

interface Props {
	positive?: boolean;
	children: ReactNode;
	keyLabel: string;
}

const SuccessResponse: FC<Props> = ({ children, keyLabel, positive }: Props): ReactElement => {
	const { t } = useTranslation();

	return (
		<Container>
			<Wrapper>
				<IconView
					icon={positive ? faCheck : faTimes}
					style={{ fontSize: '60px', color: positive ? colors.green : colors.red }}
				/>
				{t(keyLabel)}
			</Wrapper>
			{children}
		</Container>
	);
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 230px;
  height: 200px;
`;

export default SuccessResponse;
