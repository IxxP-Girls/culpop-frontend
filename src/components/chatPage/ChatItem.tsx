import { Grid, Flex, Text } from '@mantine/core';
import { FaUserCircle } from 'react-icons/fa';

interface ChatItem {
  name: string;
  time: string;
  lastChat: string;
}

const ChatItem: React.FC<ChatItem> = ({ name, time, lastChat }) => {
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
