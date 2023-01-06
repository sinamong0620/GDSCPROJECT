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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button:nth-child(3) {
    border: none;
    font-size: 1em;
    padding: 1em 3em;
    border-radius: 3em;
    color: #f7f2e2;
    background: #d46c6c;
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
