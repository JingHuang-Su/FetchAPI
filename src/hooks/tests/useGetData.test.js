import { renderHook } from '@testing-library/react-hooks';
import useGetData from '../useGetData';

const initUrl = 'https://rickandmortyapi.com/api/episode/';

test('useGetData when its successfully response data', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useGetData(initUrl));
  expect(result.current[0].isLoading).toBeTruthy();
  expect(result.current[0].isError).toBeFalsy();
  expect(result.current[0].data).toBe(undefined);

  await waitForNextUpdate();

  expect(result.current[0].isLoading).toBeFalsy();
  expect(result.current[0].isError).toBeFalsy();
  expect(result.current[0].data).toEqual(mockData);
});
