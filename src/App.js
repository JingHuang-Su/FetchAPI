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
import useGetData from './hooks/useGetData';
import useFormInput from './hooks/useFormInput';
import './App.css';

function App() {
  const initUrl = 'https://dev.app/api/episode/';

  const searchInput = useFormInput({
    name: 'searchInput',
    placeholder: 'type something...',
  });

  const [{ isLoading, isError, data }, setUrl] = useGetData(initUrl);

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

  const handleOnSubmit = () => {
    searchInput &&
      setUrl(`https://rickandmortyapi.com/api/episode/${searchInput.value}`);
  };

  return (
    <Wrapper>
      <Container>
        <header className="App-header">
          <p>Rick And Morty</p>
        </header>

        <SearchBar
          onSubmit={e => {
            handleOnSubmit();
            e.preventDefault();
          }}
        >
          <InputComponent {...searchInput} />
          <SearchIcon type="submit">🔍</SearchIcon>
        </SearchBar>
        <CardWrapper>
          {isLoading && (
            <BasicCard data-testid="loading">
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

BasicCard.displayName = 'BasicCard';

export default App;
