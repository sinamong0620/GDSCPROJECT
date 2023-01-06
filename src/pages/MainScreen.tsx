import styled from "styled-components";
import Image from "next/image";
import Section from "../pages/Section";
// import tree from "/images/tree.png"; //아니 왜 이미지 태그 안먹음

const mainScreen = () => {
  return (
    <>
      <GradationDiv></GradationDiv>
      <GradationDiv2></GradationDiv2>
      <TreeImage>
        <Image src="/images/tree.png" alt="tree" width={300} height={300} />
      </TreeImage>
      <CloudImage>
        <Image src="/images/pngegg.png" alt="tree" width={150} height={150} />
      </CloudImage>
      <TreeImage2>
        <Image src="/images/tree1.png" alt="tree" width={300} height={300} />
      </TreeImage2>
      <CloudImage2>
        <Image src="/images/pngegg.png" alt="tree" width={120} height={120} />
      </CloudImage2>
      <HeaderCss>
        <span>내 메시지 | </span>
        <span> 로그아웃</span>
        <div>복주머니 주면</div>
        <div>안잡아먹지</div>
        <div>복주머니를 주고받아 마음을 전달하세요</div>
      </HeaderCss>
      <Section />
    </>
  );
};
export default mainScreen;

const GradationDiv = styled.div`
  background: radial-gradient(#fff8c8, #fff8c8, transparent, transparent);
  width: 40em;
  height: 40em;
  position: absolute;
  top: -15em;
  left: -15em;
  z-index: -1;
`;

const GradationDiv2 = styled.div`
  background: radial-gradient(#fff3d8, #fff3d8, transparent, transparent);
  width: 40em;
  height: 40em;
  position: absolute;
  bottom: -14em;
  right: -12em;
  z-index: -1;
`;

const TreeImage = styled.div`
  position: absolute;
  top: -2em;
  left: -1em;
  z-index: 1;
`;
const TreeImage2 = styled.div`
  position: absolute;
  bottom: 1em;
  right: -3em;
  z-index: 1;
`;
const CloudImage = styled.div`
  position: absolute;
  top: 9em;
  left: 6em;
`;
const CloudImage2 = styled.div`
  position: absolute;
  bottom: 2em;
  right: 8em;
`;

const HeaderCss = styled.header`
  text-align: right;
  padding-right: 0.4em;
  color: #d79b00;

  span {
    font-size: 0.8em;
  }
  div {
    text-align: center;
    color: #a07400;
  }

  div:nth-child(3) {
    font-size: 2.4em;
    font-family: "ChosunCentennial";
    color: #d79b00;
  }
  div:nth-child(4) {
    font-size: 3em;
    font-family: "ChosunCentennial";
  }
  div:nth-child(5) {
    font-size: 0.8em;
    font-family: "ChosunCentennial";
  }
`;
