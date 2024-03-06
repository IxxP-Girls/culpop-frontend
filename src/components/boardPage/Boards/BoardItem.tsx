import { Grid, Text } from '@mantine/core';
import formatDate from '../../../utils/formatDate';
import { useNavigate } from 'react-router-dom';

interface BoardItemProps {
  category: string;
  title: string;
  viewCount: number;
  username: string;
  createdAt: number;
}

const BoardItem: React.FC<BoardItemProps> = ({ category, title, viewCount, username, createdAt }) => {
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
        <Text>{viewCount}</Text>
      </Grid.Col>
      <Grid.Col span={2}>
        <Text>{username}</Text>
      </Grid.Col>
      <Grid.Col span={2}>
        <Text>{formatDate(createdAt)}</Text>
      </Grid.Col>
    </Grid>
  );
};

export default BoardItem;
