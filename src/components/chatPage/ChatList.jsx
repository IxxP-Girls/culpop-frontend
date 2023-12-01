import { Container } from '@mantine/core';
import ChatItem from './ChatItem';

const data = [
  { messageId: 1, name: 'test1', time: '3분전', lastChat: '안녕하세요? 혹시 동행 구하시나요' },
  { messageId: 2, name: 'test2', time: '5분전', lastChat: '안녕' },
];

const ChatList = () => {
  return (
    <Container mt={10}>
      {data.map(({ messageId, name, time, lastChat }) => (
        <ChatItem key={messageId} name={name} time={time} lastChat={lastChat} />
      ))}
    </Container>
  );
};

export default ChatList;
