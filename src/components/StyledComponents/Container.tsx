/** @format */

import styled from "styled-components";
// Styled container component for consistent layout across the app
export const Container = styled.div`
  width: 100%;
  max-width: 2500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 0rem 1rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 0rem 1.25rem;
  }
`;
