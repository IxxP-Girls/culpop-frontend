import { Container } from '@mantine/core';
import MainCarousel from './MainCarousel';
import Dates from './Dates';

const Root = () => {
  return (
    <Container p={0}>
      <MainCarousel />
      <Dates />
    </Container>
  );
};

export default Root;
