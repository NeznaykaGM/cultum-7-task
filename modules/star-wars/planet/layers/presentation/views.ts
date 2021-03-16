import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;

  padding: 50px 0;
`;

export const ContentWrapper = styled.div`
  max-width: ${({ theme }) => theme.dimensions.pageMaxWidth}px;
  margin: 0 auto;
`;

export const PlanetImgContainer = styled.div`
  flex: 2;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const PlanetDetailsContainer = styled.div`
  flex: 1;
  padding-left: 75px;
`;

export const PlanetName = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const PlanetInfoContainer = styled.div``;
