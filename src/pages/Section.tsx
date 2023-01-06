import styled from "styled-components";
import Image from "next/image";

const Section = () => {
  return (
    <SectionContainer>
      <Image
        src="/images/pyojipan1.png"
        alt="pyojipan1"
        width={650}
        height={450}
      />
      <FooterBar>
        <button>덕담 하기</button>
      </FooterBar>
    </SectionContainer>
  );
};
export default Section;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5em 0;
`;
const FooterBar = styled.div`
  text-align: center;
  padding: 2em 0;
  div {
    font-size: 0.1em;
  }

  button {
    border: none;
    font-size: 1em;
    padding: 1em 3em;
    border-radius: 3em;
    color: #e2dbc1;
    background: #693d3d;
  }
`;
