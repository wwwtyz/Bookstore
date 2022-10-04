import styled from '@emotion/styled';

export const PageContainer = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const AppContainerBox = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1120px;

  margin: 0 auto;
`;

export const ContentContainer = styled.div`
  padding: var(--bs-spacing-6) var(--bs-spacing-4);
  max-width: 1120px;
  margin: 0 auto;
  min-height: 100%;
  width: 100%;
`;
