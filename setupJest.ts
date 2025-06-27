import { setupServer } from 'msw/node';

import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://api.api-ninjas.com/v1/animals', req => {
    const query = req.request.url.split('=').pop();
    if (!!query && query === 'pickle') {
      return HttpResponse.json(null);
    } else if (!!query && query === 'monkey') {
      return HttpResponse.json([{}]);
    } else {
      return HttpResponse.json([{ name: query?.toUpperCase() }]);
    }
  }),
  http.get('https://unsplash-image-search-api.p.rapidapi.com/search', req => {
    const query = new URL(req.request.url).searchParams.get('query');
    if (!!query && query === 'Spider') {
      return HttpResponse.json(null);
    } else {
      return HttpResponse.json({
        data: {
          results: [
            { urls: { regular: 'test' } }
          ]
        }
      });
    }
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close()); 