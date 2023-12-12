import { Carousel } from '@mantine/carousel';
import { Paper } from '@mantine/core';
import { GrNext, GrPrevious } from 'react-icons/gr';

const ImgCarousel = ({ data }) => {
  const slides = data.map((item, key) => (
    <Carousel.Slide key={key}>
      <Paper
        p="xl"
        h={480}
        w={480}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          backgroundImage: `url(${item})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 0,
        }}
      />
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

export default ImgCarousel;
