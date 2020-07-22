import { rest } from 'msw';

const mockData = [
  {
    id: 10,
    name: 'Close Rick-counters of the Rick Kind',
    air_date: 'April 7, 2014',
    episode: 'S01E10',
    characters: [
      'https://rickandmortyapi.com/api/character/1',
      'https://rickandmortyapi.com/api/character/2',
      // ...
    ],
    url: 'https://rickandmortyapi.com/api/episode/10',
    created: '2017-11-10T12:56:34.747Z',
  },
  {
    id: 28,
    name: 'The Ricklantis Mixup',
    air_date: 'September 10, 2017',
    episode: 'S03E07',
    characters: [
      'https://rickandmortyapi.com/api/character/1',
      'https://rickandmortyapi.com/api/character/2',
      // ...
    ],
    url: 'https://rickandmortyapi.com/api/episode/28',
    created: '2017-11-10T12:56:36.618Z',
  },
];

export const handlers = [
  rest.get('https://dev.app/api/episode/', (req, res, ctx) => {
    const hasToken = req.headers.map?.token;

    if (!hasToken) {
      // If no token, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        })
      );
    }

    return res(
      ctx.json({
        results: mockData,
      })
    );
  }),
];
