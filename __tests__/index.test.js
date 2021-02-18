import { test, expect, beforeAll } from '@jest/globals';
import makeRouter from '../src/index.js';

let router;

beforeAll(() => {
  const routes = [
    {
      // Роутеры используется как часть на конкретном сайте, поэтому роутеру нужно знать лишь про сами маршруты на сайте
      // не учитываем протокол, хост и т. д.
      path: '/courses', // маршрут
      handler: () => 'courses!', // обработчик
    },
    {
      path: '/courses/basics',
      handler: () => 'basics',
    },
  ];
  
  router = makeRouter(routes);
})

test('error', () => {
  function routerError() {
    router.serve('/no_such_way')
  }
  expect(routerError).toThrowError('Error');
})

test('to be "courses!"', () => {
  const handler = router.serve('/courses');
  expect(handler()).toEqual('courses!')
})