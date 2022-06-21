import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 15px;
  border: 1px solid #555;
  padding: 10px;
  margin: 20px 0;

  display: flex;
  align-items: center;

  .image {
    margin-right: 5px;
  }

  input {
    border: 0;
    background: transparent;
    outline: 0;
    color: #fff;
    font-size: 1.15rem;
    flex: 1;
  }
`;