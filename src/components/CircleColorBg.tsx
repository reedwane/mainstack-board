import styled from "styled-components";

interface ColorBgProps {
  colorBg: string;
}

export const ColorBg = styled.span<ColorBgProps>`
  background-color: ${(props) => props.colorBg};
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
`;
