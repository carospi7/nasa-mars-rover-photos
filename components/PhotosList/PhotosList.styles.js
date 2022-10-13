import styled from 'styled-components';

export const MainContainer = styled.div`
  min-height: 400px;
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 40px 20px;
  margin: 0;
  padding: 0;
  @media (max-width: 425px) {
      display: block;
  }
  >li {
    width: 300px;
    @media (max-width: 1078px) {
      width: 100%;
      margin-bottom: 40px;
  }
    >span {
      padding: 5px 0 5px 0;
      display: block;
      font-size: 14px;
      &.tags{
        font-size: 12px;
        padding-top: 0;
      }
    }
  }
`;

export const Text = styled.p`
  margin: 80px 0;
  font-size: 20px;
  @media (max-width: 425px) {
      margin: 10px 0;
    }
`;