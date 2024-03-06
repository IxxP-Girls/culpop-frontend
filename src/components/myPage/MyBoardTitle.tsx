import { Title } from '@mantine/core';

interface MyBoardTitleProps {
  percentage: number;
  name: string;
}

const MyBoardTitle: React.FC<MyBoardTitleProps> = ({ percentage, name }) => {
  return (
    <Title order={5} w={`${percentage}%`} display={'flex'} style={{ justifyContent: 'center' }}>
      {name}
    </Title>
  );
};

export default MyBoardTitle;
