import _try from '../lib/_try';

test('_try', async () => {
  const apiRequestResult = await _try(async () => await fetch('https://jsonplaceholder.typicode.com/todos/1'));
  const json = await _try(async () => await apiRequestResult.result.json());

  expect(json.ok).toBe(true);
});
