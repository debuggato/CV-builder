import React, { FC, ReactElement } from 'react';
import styled, { CSSProperties } from 'styled-components';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import IconView from '@components/Icon.view';

interface OwnProps {
  value: string;
  label?: string;
  icon?: IconDefinition;
}

interface StyleProps {
  bold?: boolean;
}

type Props = OwnProps & StyleProps;

const Label = styled.span<StyleProps>`
  ${({ bold }) => (bold ? 'font-weight: bold' : '')};
  font-size: 12px;
`;

const iconStyle: CSSProperties = {
  marginLeft: '5px',
  fontSize: '12px'
}

const ContactType: FC<Props> = ({ value, icon, label, bold }: Props): ReactElement => {
  const { t } = useTranslation();

  return (
    <div>
      {label && t(label)}
      {value && <Label bold={bold}>{value}</Label>}
      {value && icon && <IconView icon={icon} style={iconStyle} />}
    </div>
  );
}

export default ContactType;
