import styled from "styled-components";

const S_Cnt = styled.div`
  font-size: 14px;
`;
const S_ContentCnt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
  height: 40px;
  padding: 0 11px;
  border-radius: 999px;
  font-weight: 600;
  &:hover {
    background-color: rgb(51, 61, 66);
  }
`;
const S_LabelCnt = styled.div`
  cursor: default;
`;

export function LabeledBox({
  children,
  label,
  className,
  style,
}: {
  children?: React.ReactNode;
  label?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <S_Cnt>
      <S_ContentCnt className={className} style={style}>
        {children}
      </S_ContentCnt>
      <S_LabelCnt>{label}</S_LabelCnt>
    </S_Cnt>
  );
}
