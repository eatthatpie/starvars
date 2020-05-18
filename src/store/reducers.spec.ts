import { settings } from './reducers';

describe(`reducers`, function() {
  describe(`settings reducer`, function() {
    test(`theme change`, function() {
      const result = settings(
        { theme: 'test' },
        { type: 'set_theme', theme: 'dark' }
      );

      expect(result).toMatchObject({
        theme: 'dark'
      });
    });
  });
});
