import { Title } from '@mantine/core';

const MyBoardTitle = ({ percentage, name }) => {
  return (
    <Title order={5} w={`${percentage}%`} display={'flex'} style={{ justifyContent: 'center' }}>
      {name}
    </Title>
  );
};

export default MyBoardTitle;
