import styled from 'styled-components';

export const FooterContainer = styled.footer`
    padding: 100px 0 20px 0;
    font-size: 14px;
    text-align: right;
    >a {
      color: yellow;
    }
    @media (max-width: 425px) {
      font-size: 13px;
      text-align: left;
    }
`;