import styled from "styled-components";

const Login = () => {
  return (
    <EntireContainer>
      <ButtonContainer>
        <button>로그인</button>
        <button>회원가입</button>
      </ButtonContainer>
      <div>
        <form>
          <h4>닉네임</h4>
          <input />
          <h4>아이디</h4>
          <input />
          <h4>비밀번호</h4>
          <input />
        </form>
      </div>
      <SubmitButton>작성완료</SubmitButton>
    </EntireContainer>
    //   <div>안녕</div>
  );
};
export default Login;

const EntireContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div:nth-of-type(2) {
    width: 33.125rem;
    height: 22em;
    box-shadow: 0em 0em 0.1em 0.1em lightgray;
    background-color: white;
    border-radius: 0em 0em 1em 1em;

    form {
      padding: 2em;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #a07400;

      h4 {
        font-weight: 100;
      }

      input {
        height: 3.8em;
        background: #d1c9b3;
        border-radius: 1em;
        border: none;
        text-align: center;
      }
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
  font-size: 1.1em;

  button {
    font-size: 1em;
    padding: 1em 6em;
    border-radius: 0.8em 0.8em 0 0;
    border: none;
    font-weight: 600;
    background: white;
    box-shadow: 0.1em -0.1em 0.1em lightgray;
    color: #b19471;
    z-index: 1;
  }

  button:first-child {
    box-shadow: -0.14em -0.1em 0.1em lightgray;
    background: #b19471;
    color: white;
  }
`;

const SubmitButton = styled.button`
  padding: 1em;
  border-radius: 6em;
  border: none;
  background: #693d3d;
  color: white;
  padding: 1em 3em;
  font-size: 1em;
  margin-top: 3em;
`;
