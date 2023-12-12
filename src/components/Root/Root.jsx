import { Container } from '@mantine/core';
import BaseCarousel from '../common/BaseCarousel';
import Dates from './Dates';
// import useMainCarouselQuery from '../../hooks/queries/useMainCarouselQuery';
import { mainCarousel } from '../../constants/mockData';

const Root = () => {
  // const { mainCarousel } = useMainCarouselQuery();

  return (
    <Container p={0}>
      <BaseCarousel data={mainCarousel} />
      <Dates />
    </Container>
  );
};

export default Root;
