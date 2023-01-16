import styled from 'styled-components';

export const Wrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`
export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const TestButton = styled.div`
    padding: 4px 8px 4px 8px;
    position: relative;
    color: white;
    border-radius: 9px;
    background: #4E4597;
    user-select: none;
    cursor: pointer;
    transition: all 0.15s;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2);
    opacity: 1;
    :hover {
        transition: all 0.25s;
        opacity: 0.6;
        box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.3);
    }
    :active {
        transition: all 0.08s;
        opacity: 0.8;
        box-shadow: 0.5px 0.5px 4px 0.5px rgba(0, 0, 0, 0.2);
    }
`