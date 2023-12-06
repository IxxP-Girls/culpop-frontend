import { Grid, Title, Flex } from '@mantine/core';
import { noCommonHeight } from '../../constants/heights';
import ChatList from './ChatList';
import ChatRoom from './ChatRoom';

const ChatHub = () => {
  return (
    <Flex w={'100%'} direction={'column'} h={noCommonHeight} pos={'relative'}>
      <Title w={'100%'} order={4} style={{ borderBottom: '1px solid' }} p={10}>
        OO 님과의 대화 (채팅 목록)
      </Title>
      <Grid w={'100%'}>
        <Grid.Col span={4} style={{ borderRight: '1px solid' }}>
          <ChatList />
        </Grid.Col>
        <Grid.Col span={8} pb={0}>
          <ChatRoom />
        </Grid.Col>
      </Grid>
    </Flex>
  );
};

export default ChatHub;
