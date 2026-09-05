import styled from "styled-components";

const ImageSnipet = styled.img`
  background: transparent;
  width: 100%;
  max-width: 500px;
`;

const ImageSnipetCenter = styled.img`
  background: transparent;
  width: 100%;
  max-width: 500px;
  margin-bottom: 12px;
`;

const LayoutSnipet = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  padding-left: 56px;
  z-index: 5;
  justify-content: space-between;
`;

export const HomeSnipets = () => {
  return (
    <LayoutSnipet>
      <ImageSnipet
        src="/code-snippet0.png"
        alt="React component code snippet"
      />
      <ImageSnipetCenter
        src="/code-snippet1.png"
        alt="Next.js data fetching code snippet"
      />
      <ImageSnipetCenter
        src="/code-snippet2.png"
        alt="TypeScript types code snippet"
      />
      <ImageSnipetCenter
        src="/code-snippet3.png"
        alt="React hooks code snippet"
      />
      <ImageSnipet
        src="/code-snippet4.png"
        alt="CSS-in-JS styling code snippet"
      />
    </LayoutSnipet>
  );
};

export default HomeSnipets;
