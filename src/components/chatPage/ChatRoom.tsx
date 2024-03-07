import { Title, Flex, Container, Textarea } from '@mantine/core';
import MyTalk from './MyTalk';
import YourTalk from './YourTalk';
import { FaUserCircle } from 'react-icons/fa';
import { GoPaperAirplane } from 'react-icons/go';
import { useRef, useState } from 'react';
import { chattingHeight } from '../../constants/heights';

const dataChat = {
  messageId: 1,
  userId1: ' test1',
  userId2: 'test',
  messages: [
    { sender: 'test1', createdAt: 1496849304, message: '안녕하세요, 혹시 블랙핑크 팝업 행사 동행 구하시나요?' },
    { sender: 'test', createdAt: 1496849312, message: '네! 같이 가실래요?' },
    { sender: 'test1', createdAt: 1496849380, message: '좋아요!' },
    { sender: 'test', createdAt: 14968502367, message: '그럼 몇 시에 만나서 갈까요?' },
  ],
};

const ChatRoom = () => {
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState<string>('');
  const userName = 'test';
  const { userId1, userId2, messages } = dataChat;

  const you = userName === userId1 ? userId2 : userId1;

  const handleSubmit = () => {
    console.log(text);
    setText('');
  };

  const handleEnterDown = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    handleSubmit();
  };

  return (
    <>
      <Container
        display={'flex'}
        mt={10}
        w={'100%'}
        style={{ overflow: 'auto', height: chattingHeight, flexDirection: 'column' }}>
        {messages.map(({ sender, createdAt, message }) => {
          if (sender === userName) {
            return <MyTalk time={createdAt} message={message} key={createdAt} />;
          } else {
            return <YourTalk time={createdAt} message={message} key={createdAt} />;
          }
        })}
      </Container>
      <Textarea
        ref={textRef}
        h={'auto'}
        w={'100%'}
        my={15}
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={handleEnterDown}
        placeholder="채팅을 입력하세요."
        styles={{
          input: {
            fontSize: 14,
            height: 100,
            padding: 10,
            paddingRight: '7%',
          },
        }}
        rightSection={
          <GoPaperAirplane
            size={20}
            style={{ alignSelf: 'end', marginBottom: 15, cursor: 'pointer' }}
            onClick={handleSubmit}
          />
        }
        rightSectionWidth={'7%'}
      />
    </>
  );
};

export default ChatRoom;
