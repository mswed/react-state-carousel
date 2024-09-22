import { render, fireEvent } from '@testing-library/react';
import Card from './Card';
import TEST_IMAGES from './_testCommon';

it('renders', async () => {
  render(
    <Card
      caption={TEST_IMAGES[0].caption}
      src={TEST_IMAGES[1].src}
      currNum={1}
      totalNum={1}
    />
  );
});

it('matches snapshot', async () => {
  const { asFragment } = render(
    <Card
      caption={TEST_IMAGES[0].caption}
      src={TEST_IMAGES[1].src}
      currNum={1}
      totalNum={1}
    />
  );

  expect(asFragment()).toMatchSnapshot();
});
