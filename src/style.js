import styled from 'styled-components';

const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
  background-color: #fff;
`;

const Container = styled.div`
  min-height: 100vh;
  max-width: 400px;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const CardWrapper = styled.div`
  padding: 15px;

  > div {
    :not(:first-child) {
      margin-top: 10px;
    }
  }
`;
const BasicCard = styled.div`
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid #ededf4;

  min-height: 67px;

  display: flex;
  align-items: center;
  padding: 0 10px;
`;
const Card = styled(BasicCard)`
  :hover {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25), 0 2px 4px rgba(0, 0, 0, 0.22);
  }
`;

const ErrorCard = styled(BasicCard)`
  backdrop-filter: blur(2px);
  opacity: 0.5;
  font-size: 14px;
`;

const RandomAvatar = styled.div`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  border: 1px solid rgba(0, 0, 0, 0.2);

  img {
    border-radius: 50%;
    height: 100%;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

const Episode = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
`;

const EpisodeName = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.85);
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 15px;
`;

const AirReleased = styled.div`
  font-size: 12px;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.85);
`;

const SearchBar = styled('div')`
  margin: 0 auto;
  position: relative;
`;

const InputComponent = styled.input`
  border-radius: 6rem;
  border: 1px solid rgb(160, 160, 160);
  padding: 4px 8px;
  width: 8rem;
  font-family: 'roboto';
  transition: 0.5s;
  :focus {
    outline: none;
    border-color: #212121;
    transition: 0.5s;
  }
`;
const SearchIcon = styled.span`
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  height: 16px;
  width: 16px;
  font-size: 12px;
  position: absolute;
  font-family: 'fontawesome';
  top: 50%;
  right: 4px;
  transform: translate(-50%, -50%);

  :active {
    transform: translate(-50%, -50%) scale(1.1);
    transition: transform 0.35s ease;
  }
`;
export {
  Wrapper,
  Container,
  Card,
  CardWrapper,
  RandomAvatar,
  Episode,
  EpisodeName,
  TextWrapper,
  AirReleased,
  SearchBar,
  SearchIcon,
  InputComponent,
  BasicCard,
  ErrorCard,
};
