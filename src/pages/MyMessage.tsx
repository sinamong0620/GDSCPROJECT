import styled from "styled-components";
const MyMessage = () => {
  return (
    <div>
      <EntireContainer>
        <BeforeButton>◀︎ 이전으로</BeforeButton>
        <LuckyBoxSelection>
          <h2>내가 쓴 메시지 작성</h2>
          <FormContainer>
            <form>
              <textarea></textarea>
            </form>
          </FormContainer>
          <SubmitButton>
            <button>수정</button>
            <button>삭제</button>
          </SubmitButton>
        </LuckyBoxSelection>
      </EntireContainer>
    </div>
  );
};
export default MyMessage;

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
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  color: black;
  background: white;
  box-shadow: 0em 0.5em 0.3em lightgray;

  h2 {
    color: #a07400;
    font-weight: 600;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  form {
    width: 100%;
    height: 35vh;
    display: flex;
    justify-content: space-evenly;

    textarea {
      width: 90%;
      text-align: center;
      resize: none;
      border: 0.2em dashed #a07400;
      border-radius: 2em;
    }
  }
`;

const BeforeButton = styled.button`
  color: #a07400;
  background: none;
  border: none;
  font-size: 1.2em;
  font-weight: 100;
`;

const SubmitButton = styled.div`
  width: 65%;
  display: flex;
  justify-content: space-around;

  button {
    padding: 1em 4em;
    border: none;
    border-radius: 5em;
    color: white;
    background: #693d3d;
    box-shadow: 0em 0.3em 0.3em lightgrey;
  }
`;
