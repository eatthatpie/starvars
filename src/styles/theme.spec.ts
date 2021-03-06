import theme from './theme';

describe(`themes`, function() {
  const desiredProperties = [
    'bg',
    'bgIntense',
    'bgVariant',
    'default',
    'muted',
    'primary',
    'iconFilter'
  ];

  test(`each theme should have desired properties`, function() {
    Object.values(theme).forEach(t => {
      const props = Object.keys(t);

      const missingProperties = desiredProperties.filter(
        property => !props.includes(property)
      );

      expect(missingProperties).toHaveLength(0);
    });
  });

  test(`each theme should not have aditional properties`, function() {
    Object.values(theme).forEach(t => {
      const props = Object.keys(t);

      const additionalProperties = props.filter(
        property => !desiredProperties.includes(property)
      );

      expect(additionalProperties).toHaveLength(0);
    });
  });
});
