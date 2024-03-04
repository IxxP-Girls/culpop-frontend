import { Container } from '@mantine/core';
import BaseCarousel from '../common/BaseCarousel';
import Dates from './Dates';
import useMainCarouselQuery from '../../hooks/queries/useMainCarouselQuery';

const Root = () => {
  const { main } = useMainCarouselQuery();

  return (
    <Container p={0}>
      <BaseCarousel data={main} />
      <Dates />
    </Container>
  );
};

export default Root;
