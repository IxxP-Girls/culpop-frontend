import Slide from './Slide';
import { Carousel } from '@mantine/carousel';
import { GrNext, GrPrevious } from 'react-icons/gr';

interface CarouselProps {
  popupId: number;
  image: string;
  title: string;
  address: string;
  startDate: string;
  endDate: string;
}

interface BaseCarouselProps {
  data: CarouselProps[];
}

const BaseCarousel: React.FC<BaseCarouselProps> = ({ data }) => {
  const slides = data.map(item => (
    <Carousel.Slide key={item.title}>
      <Slide {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={'50%'}
      loop
      align={'start'}
      withIndicators
      controlSize={40}
      nextControlIcon={<GrNext size={25} />}
      previousControlIcon={<GrPrevious size={25} />}>
      {slides}
    </Carousel>
  );
};

export default BaseCarousel;
