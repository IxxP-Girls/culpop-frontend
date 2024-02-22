import { Grid, Flex, Container, Text } from '@mantine/core';
import { Avatar } from '@mantine/core';
import { FaUserCircle } from 'react-icons/fa';

const dataTalk = [
  {
    senderId: 'test1',
    time: Date.now(),
    message: '안녕하세요? 혹시 동행 구하시나요',
  },
];

const ChatItem = ({ name, time, lastChat }) => {
  return (
    <Grid py={15} style={{ cursor: 'pointer' }}>
      <Grid.Col span={2} display={'flex'} style={{ justifyContent: 'center', alignItems: 'center' }} c={'dark.1'}>
        <FaUserCircle radius={'xl'} size={40} />
      </Grid.Col>
      <Grid.Col span={10}>
        <Flex gap={15} align={'end'}>
          <Text fz={18} fw={600}>
            {name}
          </Text>
          <Text fz={12}>{time}</Text>
        </Flex>
        <Text lineClamp={1}>{lastChat}</Text>
      </Grid.Col>
    </Grid>
  );
};

export default ChatItem;
