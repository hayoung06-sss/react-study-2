import { BrowserRouter, Route, Routes } from "react-router";
import { styled } from "styled-components";
import { Header } from "./components/Header";
import NotFoundPage from "./pages/NotFound";

const S_Cnt = styled.div`
  display: flex;
  flex-direction: column;

  height: 100dvh;

  overflow-y: scroll;

  &::-webkit-scrollbar-track {
    background-color: #2c2c2c;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #9f9f9f;
  }
`;
const S_ContentWrap = styled.div`
  flex-grow: 1;
  overflow: hidden;
`;
const S_Content = styled.div`
  min-height: 100%;
  color: white;
`;

function App() {
  return (
    <BrowserRouter>
      <S_Cnt>
        <Header />
        <S_ContentWrap>
          <S_Content>
            <Routes>
              <Route index />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            ag
            <br />
            <br />
            <br />
            ds
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />s
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </S_Content>
        </S_ContentWrap>
      </S_Cnt>
    </BrowserRouter>
  );
}

export default App;
