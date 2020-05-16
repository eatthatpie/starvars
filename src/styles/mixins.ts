export const noSelect = () => `
  -webkit-touch-callout: none;
  user-select: none;
`;

export const positionCover = (d?: string) => () => {
  d = d || '0';

  return `
    position: absolute;
    top: ${d};
    bottom: ${d};
    left: ${d};
    right: ${d};
  `;
};

export const wrapper = () => `
  width: 1200px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  box-sizing: border-box;
`;
