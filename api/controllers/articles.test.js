import { articlesRouter } from './articles';
import axios from 'axios';
import { expect } from '@jest/globals';

jest.mock('axios');

describe('articles', () => {
  it('fetches successfully data from an API', async () => {
    const data = {
        data: {
          articles: [
          ],
        },
      };
   
      axios.get.mockImplementationOnce(() => Promise.resolve(data));

      expect(articlesRouter.get())
  });
 
  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';
 
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );
  });
});