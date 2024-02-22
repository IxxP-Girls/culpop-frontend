import { Grid, Text } from '@mantine/core';
import formatDate from '../../../utils/formatDate';
import { useNavigate } from 'react-router-dom';

const BoardItem = ({ category, title, counts, writer, timestamp }) => {
  const navigate = useNavigate();

  return (
    <Grid
      py={9}
      styles={{
        col: {
          display: 'flex',
          justifyContent: 'center',
        },
      }}
      onClick={() => navigate('/post')}
      h={70}
      pos={'relative'}
      display={'flex'}
      align="center">
      <Grid.Col span={2}>
        <Text>{category}</Text>
      </Grid.Col>
      <Grid.Col span={5}>
        <Text>{title}</Text>
      </Grid.Col>
      <Grid.Col span={1}>
        <Text>{counts}</Text>
      </Grid.Col>
      <Grid.Col span={2}>
        <Text>{writer}</Text>
      </Grid.Col>
      <Grid.Col span={2}>
        <Text>{formatDate(timestamp)}</Text>
      </Grid.Col>
    </Grid>
  );
};

export default BoardItem;
