import styled from "styled-components";
import LuckyBox from "./LuckyBox";
import Image from "next/image";

const LuckyBoxSection = () => {
  const messageCount = 1;
  return (
    <EntireContainer>
      <div>
        <button>
          <Image src="/images/left.png" alt="left" width={80} height={80} />
        </button>

        <LuckyBox />
        <button>
          <Image src="/images/right.png" alt="right" width={65} height={65} />
        </button>
      </div>
      <div>총 메시지 개수 : {messageCount}개</div>
      <button>덕담 하기</button>
    </EntireContainer>
  );
};
export default LuckyBoxSection;

const EntireContainer = styled.section`
  button:first-of-type {
    //nth-child와 nth-of-type은 다르다. nth-of-type은 해당 요소만을 모아서 순서를 센다.
    color: #f7f2e2;
    background: #d46c6c;
  }
  div button:first-of-type {
    //nth-child와 nth-of-type은 다르다. nth-of-type은 해당 요소만을 모아서 순서를 센다.
    color: none;
    background: none;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    border: none;
    font-size: 1em;
    padding: 1em 3em;
    border-radius: 3em;
    background: transparent;
  }
  button:hover {
    cursor: pointer;
  }
  div {
    color: #d79b00;
  }
  div:nth-child(1) {
    display: flex;
    align-items: center;
  }
`;
