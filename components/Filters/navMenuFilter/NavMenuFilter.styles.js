import styled from 'styled-components';

export const PrimaryNav = styled.li`
    margin: 0;
    display: inline-block;
    margin-right: 40px;
    @media (max-width: 425px) {
      margin-right: 10px;
    }
    &.active {
        >button{
            background: yellow;
            color: black;
            border: none;
            &:hover {
                color: black;
            }
        }
        }
    >button {
        background: none;
        color: ${({ theme }) => theme.color};
        text-transform: uppercase;
        font-size: 16px;
        border: 1px solid ${({ theme }) => theme.color};
        border-radius: 4px;
        padding: 8px 10px;
        font-family: 'Inter', sans-serif;
        font-weight: 300;
        cursor: pointer;
        @media (max-width: 425px) {
            font-size: 14px;
    }
        &:hover {
            color: yellow
        }
    }
`;

export const SecondaryNav = styled.ul`
    position: absolute;
    display: flex;
    padding: 0;
    gap: 20px;
    margin: 15px 0;
    left: 0;
    @media (max-width: 425px) {
      flex-wrap: wrap;
      gap: 10px 20px;
    }
    > li {
        display: flex;
        > button {
            background: none;
            color: ${({ theme }) => theme.color};
            border: none;
            cursor: pointer;
            &:hover {
                background: yellow;
                color: black;
            }
            &.active {
                background: yellow;
                color: black
            }
        }
        &::before {
            content: '/';
            display: block;
        }
    }
`;