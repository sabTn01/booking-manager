import styled, { css } from "styled-components";

const sizes = {
  small: css`
    width: 1.2rem;
    height: 1.2rem;
  `,
  medium: css`
    width: 2.2rem;
    height: 2.2rem;
  `,
  large: css`
    width: 3.2rem;
    height: 3.2rem;
  `,
  xlarge: css`
    width: 4.2rem;
    height: 4.2rem;
  `,
};

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    ${(props) => sizes[props.size]}
    color: var(--color-brand-600);
  }
`;

ButtonIcon.defaultProps = {
  size: "medium",
};

export default ButtonIcon;
