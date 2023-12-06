import { Container } from '@mantine/core';
import BaseCarousel from '../common/BaseCarousel';
import Dates from './Dates';
import { carouselData } from '../../constants/mockData';

const Root = () => {
  return (
    <Container p={0}>
      <BaseCarousel data={carouselData} />
      <Dates />
    </Container>
  );
};

export default Root;
