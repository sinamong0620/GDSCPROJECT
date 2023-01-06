import Image from "next/image";
import styled from "styled-components";

const LuckyBox = () => {
  return (
    <LuckyBoxsContainer>
      <Image src="/images/red.png" alt="luckybox" width={125} height={125} />
      <Image src="/images/red.png" alt="luckybox" width={125} height={125} />
      <Image src="/images/red.png" alt="luckybox" width={125} height={125} />
      <Image src="/images/red.png" alt="luckybox" width={125} height={125} />
      <Image src="/images/red.png" alt="luckybox" width={125} height={125} />
      <Image src="/images/red.png" alt="luckybox" width={125} height={125} />
    </LuckyBoxsContainer>
  );
};
export default LuckyBox;

const LuckyBoxsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0 4em;
  height: 60vh;
  justify-items: center;
  align-items: center;
`;
