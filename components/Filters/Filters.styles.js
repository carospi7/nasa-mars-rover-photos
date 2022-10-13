import styled from 'styled-components';

export const FiltersContainer = styled.div`
   display: flex;
   width:100%;
   padding: 40px 0 60px 0;
   @media (max-width: 1078px) {
      display: block;
      padding: 40px 0 30px 0
    }
`;

export const NavigationMenu = styled.nav`
    flex: 0 1 50%;
    align-self: self-end;
    @media (max-width: 425px) {
      padding: 0 0 100px 0;
    }
   >ul {
    margin: 0;
    padding: 0;
    position: relative;
   }
`;

export const DateFilters = styled.div`
   flex: 0 1 50%;
   text-align: left;
   display: flex;
   @media  (min-width: 425px) and (max-width: 1078px) {
      margin-top: 70px
    }
`;

export const Switcher = styled.div`
    >ul{
        margin: 0; 
        padding: 0;
        background: white;
        color: black;
        width: fit-content;
        padding: 4px;
        display: flex;
        gap: 10px;
        border-radius: 4px;
        >li {
            cursor: pointer;
            padding: 2px;
            &.active {
                background: yellow
            }
        }
    }
`;

export const InputContainer = styled.div`
    align-self: self-end;
    >input {
        margin-left: 10px;
        font-size: 16px;
        border-radius: 4px;
        border: none;
        padding: 6px;
        width: 135px;
    }
    >button {
        font-family: 'Inter',sans-serif;
        font-weight: 300;
        font-size: 14px;
        background: none;
        border: none;
        padding: 8px;
        margin-left: 5px;
        color: ${({ theme }) => theme.color};
        cursor: pointer;
    }
`;

