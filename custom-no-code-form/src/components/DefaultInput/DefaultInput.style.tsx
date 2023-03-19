import styled from 'styled-components';

const StyledDefaultInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  > input, textarea {
    padding: 10px 15px;
    width: 100%;
    font-family: "Calibri Light", serif;
    font-size: 16px;
    color: black;
    border-radius: 7.5px;
    border: 1px solid black;
    
    &:focus {
      outline: none;
      border: 1px solid #10A5F5;
    }
    
    ::placeholder {
      color: gray;
    }
  }
  
  > span {
    font-family: "Calibri Light", serif;
    font-size: 16px;
    margin-left: 5px;
    color: red;
  }
`;

export default StyledDefaultInput;
