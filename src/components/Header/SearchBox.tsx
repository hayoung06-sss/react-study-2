import styled from "styled-components";

const S_Cnt = styled.div`
  background-color: rgb(42, 50, 54);
  border-radius: 999px;
  height: 40px;
  width: 558px;
  margin-left: 150px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  position: relative;
  cursor: default;
  &:hover {
    background-color: rgb(51, 61, 66);
  }
`;

const S_Placeholder = styled.span`
  position: absolute;
  left: 50%;
  height: 50%;
  translate: -50%;
`
const S_Input = styled.input.attrs({ type: "text" })`
  background: none;
  border: 0;
  margin-left: 8px;
  width: 80px;
`;

export function SearchBox() {
  return (
    <S_Cnt>
      <img src="/reddit.png" style={{ height: "24px" }} />
      <S_Placeholder>Reddit 검색</S_Placeholder>
      <S_Input type="text" />
    </S_Cnt>
  );
}
