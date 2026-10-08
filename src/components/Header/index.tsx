import { styled } from "styled-components";
import { RedditIconSVG } from "../icons/RedditIconSVG";
import { LabeledBox } from "../LabeledBox";
import { CreateIconSVG } from "../icons/CreateIconSVG";
import { AdIconSVG } from "../icons/AdIconSVG";
import { ChatIconSVG } from "../icons/ChatIconSVG";
import { NotificationIconSVG } from "../icons/NotificationIconSVG";
import pfpDefault from "../../assets/images/pfp-default.png";
import { SearchBox } from "./SearchBox";

const S_Cnt = styled.div`
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #dbe4e9;
  padding-left: 17px;
  padding-right: 1px;
  flex-shrink: 0;
  position: fixed;
  width: 100%;
  border: 1px solid var(--border);
`;
const S_Box = styled.div`
  display: flex;
  align-items: center;
`;

const S_PfpWrap = styled.div`
  border-radius: 9999px;
  overflow: hidden;
  height: 32px;
  width: 32px;
  & > img {
    height: 100%;
  }
`;

export function Header() {
  return (
    <S_Cnt>
      <S_Box>
        <RedditIconSVG style={{ height: 22 }} />
      </S_Box>
      <S_Box>
        <SearchBox />
      </S_Box>
      <S_Box>
        <LabeledBox style={{ width: 40 }}>
          <AdIconSVG style={{ height: 20, color: "#DBE4E9" }} />
        </LabeledBox>
        <LabeledBox style={{ width: 40 }}>
          <ChatIconSVG style={{ height: 20, color: "#DBE4E9" }} />
        </LabeledBox>
        <LabeledBox>
          <CreateIconSVG style={{ height: 20, color: "#DBE4E9" }} />
          <span>만들기</span>
        </LabeledBox>
        <LabeledBox style={{ width: 40 }}>
          <NotificationIconSVG style={{ height: 20, color: "#DBE4E9" }} />
        </LabeledBox>
        <LabeledBox>
          <S_PfpWrap>
            <img
              src={pfpDefault}
              alt="Pfp"
              style={{ transform: "scaleX(-1)" }}
            />
          </S_PfpWrap>
        </LabeledBox>
      </S_Box>
    </S_Cnt>
  );
}
