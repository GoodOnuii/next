import { clone } from '@/utils/structuredClone';

describe('structuredClone util', () => {
  test('', async () => {
    const object = { 'test': null };

    const newObject = clone(object);

    expect(newObject).toStrictEqual(object);
  });
});
