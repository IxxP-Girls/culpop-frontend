import Card from './Card';
import { Grid } from '@mantine/core';

const cards = [
  {
    title: '티퍼런스 팝업스토어 <잠시, 멈춤 5분>',
    location: '서울특별시 종로구',
    dates: '23.12.03 - 23.12.14',
    imgUrl:
      'https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
  },
  {
    title: '티퍼런스 팝업스토어 <잠시, 멈춤 5분>',
    location: '서울특별시 종로구',
    dates: '23.12.03 - 23.12.14',
    imgUrl:
      'https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
  },
  {
    title: '티퍼런스 팝업스토어 <잠시, 멈춤 5분>',
    location: '서울특별시 종로구',
    dates: '23.12.03 - 23.12.14',
    imgUrl:
      'https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
  },
  {
    title: '티퍼런스 팝업스토어 <잠시, 멈춤 5분>',
    location: '서울특별시 종로구',
    dates: '23.12.03 - 23.12.14',
    imgUrl:
      'https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
  },
  {
    title: '티퍼런스 팝업스토어 <잠시, 멈춤 5분>',
    location: '서울특별시 종로구',
    dates: '23.12.03 - 23.12.14',
    imgUrl:
      'https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
  },
  {
    title: '티퍼런스 팝업스토어 <잠시, 멈춤 5분>',
    location: '서울특별시 종로구',
    dates: '23.12.03 - 23.12.14',
    imgUrl:
      'https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
  },
  {
    title: '티퍼런스 팝업스토어 <잠시, 멈춤 5분>',
    location: '서울특별시 종로구',
    dates: '23.12.03 - 23.12.14',
    imgUrl:
      'https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
  },
  {
    title: '티퍼런스 팝업스토어 <잠시, 멈춤 5분>',
    location: '서울특별시 종로구',
    dates: '23.12.03 - 23.12.14',
    imgUrl:
      'https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
  },
];

const Cards = () => {
  return (
    <Grid>
      {cards.map(({ title, location, dates, imgUrl }, idx) => (
        <Grid.Col span={6} key={idx}>
          <Card title={title} location={location} dates={dates} imgUrl={imgUrl} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default Cards;
