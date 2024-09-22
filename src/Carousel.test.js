import { render, fireEvent } from '@testing-library/react';
import Carousel from './Carousel';
import TEST_IMAGES from './_testCommon.js';

it('renders', async () => {
  render(<Carousel photos={TEST_IMAGES} />);
});

it('matches snapshot', async () => {
  const { asFragment } = render(<Carousel photos={TEST_IMAGES} />);
  expect(asFragment()).toMatchSnapshot();
});

it('works when you click on the right arrow', function () {
  const { container } = render(
    <Carousel photos={TEST_IMAGES} title="images for testing" />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector('.bi-arrow-right-circle');
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

it('works when you click on the left arrow', function () {
  const { container, debug } = render(
    <Carousel photos={TEST_IMAGES} title="images for testing" />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector('.bi-arrow-right-circle');
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
  //
  // move backward in the carousel
  const leftArrow = container.querySelector('.bi-arrow-left-circle');
  fireEvent.click(leftArrow);

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
});

it('hides left arrow when at start of array', async () => {
  const { container, debug } = render(
    <Carousel photos={TEST_IMAGES} title="images for testing" />
  );

  const leftArrow = container.querySelector('.bi-arrow-left-circle');
  const rightArrow = container.querySelector('.bi-arrow-right-circle');
  expect(leftArrow).not.toBeInTheDocument();
  expect(rightArrow).toBeInTheDocument();
});

it('hides right arrow when at end of array', async () => {
  const { container, debug } = render(
    <Carousel photos={TEST_IMAGES} title="images for testing" />
  );

  const rightArrow = container.querySelector('.bi-arrow-right-circle');
  fireEvent.click(rightArrow);
  const leftArrow = container.querySelector('.bi-arrow-left-circle');
  fireEvent.click(rightArrow);
  expect(leftArrow).toBeInTheDocument();
  expect(rightArrow).not.toBeInTheDocument();
});
