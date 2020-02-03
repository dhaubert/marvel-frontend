import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const CharacterBox = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #555;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }

  a {
    color: #ed1d24;
    font-size: 16px;
    text-decoration: none;
  }
`;

export const ComicList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  li {
    list-style: none;
    margin-top: 30px;
  }

  img {
    width: 80px;
    border-radius: 5px;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #555;
    line-height: 1.4;
    text-align: center;
    max-width: 700px;

    strong {
      font-weight: 600;
    }
  }
`;
