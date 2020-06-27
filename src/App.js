import React from 'react';
import {
  Wrapper,
  Container,
  CardWrapper,
  Card,
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
} from './style';
import MyLoader from './Loader';
import './App.css';

function App() {
  const [data, setData] = React.useState();
  const [text, setText] = React.useState('');
  const [url, setUrl] = React.useState(
    'https://rickandmortyapi.com/api/episode/'
  );
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    const fetchAPI = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await window.fetch(url);
        const resData = await response.json();

        if (response.status >= 400) {
          throw new Error();
          return;
        }

        setData(resData.results || [resData]);
      } catch (err) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchAPI();
  }, [url]);

  const renderCard = items =>
    items.map(({ id = '', name = '', air_date = '', episode = '' }) => (
      <Card key={id}>
        <RandomAvatar>
          <img
            src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`}
            alt="avatar"
          />
        </RandomAvatar>
        <TextWrapper>
          <Episode>{episode}</Episode>
          <EpisodeName>{name}</EpisodeName>
          <AirReleased>{air_date}</AirReleased>
        </TextWrapper>
      </Card>
    ));

  const handleInputChange = e => {
    const { value } = e.target;
    const isInvalid = /[^0-9]/.test(value);
    const isInvalidRange = num =>
      num.length > 0 && (Number(num) > 36 || Number(num) === 0);
    if (isInvalid || isInvalidRange(value)) {
      e.preventDefault();
      return;
    }
    setText(value);
  };

  const handleOnClick = () => {
    setUrl(`https://rickandmortyapi.com/api/episode/${text}`);
  };

  return (
    <Wrapper>
      <Container>
        <header className="App-header">
          <p>Rick And Morty</p>
        </header>

        <SearchBar>
          <InputComponent
            type="text"
            placeholder="type number ..."
            value={text}
            onChange={handleInputChange}
          />
          <SearchIcon onClick={handleOnClick}>🔍</SearchIcon>
        </SearchBar>
        <CardWrapper>
          {isLoading && (
            <BasicCard>
              <MyLoader />
            </BasicCard>
          )}
          {isError && (
            <ErrorCard>something went wrong, try it later...</ErrorCard>
          )}
          {data && !isLoading && !isError && renderCard(data)}
        </CardWrapper>
      </Container>
    </Wrapper>
  );
}

export default App;
