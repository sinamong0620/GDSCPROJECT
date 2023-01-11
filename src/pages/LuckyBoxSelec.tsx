import styled from "styled-components";
import Image from "next/image";

const LuckyBoxSelec = () => {
  return (
    <EntireContainer>
      <BeforeButton>◀︎ 이전으로</BeforeButton>
      <LuckyBoxSelection>
        <h2>복주머니 선택창</h2>
        <LuckyBoxs>
          <form>
            <button>
              <Image
                src="/images/red.png"
                alt="luckybox"
                width={80}
                height={80}
              />
            </button>
            <button>
              <Image
                src="/images/green.png"
                alt="luckybox"
                width={80}
                height={80}
              />
            </button>
            <button>
              <Image
                src="/images/blue.png"
                alt="luckybox"
                width={80}
                height={80}
              />
            </button>
          </form>
        </LuckyBoxs>
        <SubmitButton>결정</SubmitButton>
      </LuckyBoxSelection>
    </EntireContainer>
  );
};
export default LuckyBoxSelec;
const EntireContainer = styled.div`
  width: 33.8rem;
  height: 100vh;
  margin: 0 auto;
`;
const LuckyBoxSelection = styled.div`
  display: flex;
  width: 100%;
  height: 60vh;
  border-radius: 2em;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  color: black;
  background: white;
  box-shadow: 0em 0.5em 0.3em lightgray;

  h2 {
    color: #a07400;
    font-weight: 400;
  }
`;
const LuckyBoxs = styled.div`
  width: 100%;
  form {
    display: flex;
    justify-content: space-evenly;
  }
  button {
    border: none;
    background: none;
  }
`;

const BeforeButton = styled.button`
  color: #a07400;
  background: none;
  border: none;
  font-size: 1.2em;
  font-weight: 100;
`;
const SubmitButton = styled.button`
  border: none;
  font-size: 1em;
  padding: 1em 3em;
  border-radius: 3em;
  color: white;
  background: #d46c6c;
  box-shadow: 0em 0.2em 0.3em lightgray;
`;
