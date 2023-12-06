import { Divider, Flex, Text, Title, Container, Textarea, Paper, Button } from '@mantine/core';
import formatDate from '../../../utils/formatDate';
import { FaRegHeart, FaRegCommentDots } from 'react-icons/fa6';
import { FaUserCircle } from 'react-icons/fa';
import { useState } from 'react';
import { IoMdUnlock, IoMdLock } from 'react-icons/io';
import { TbEyeFilled } from 'react-icons/tb';
import Comments from './Comments';

const Board = ({ timestamp = 1556406509760 }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex direction={'column'} w={'100%'} gap={10} py={20}>
      <Flex align={'flex-start'} justify={'space-between'} direction={'column'} gap={10}>
        <Text>{'[동행 구해요]'}</Text>
        <Title order={3}>{'블랙핑크 팝업행사 같이 가실 분 구해요.'}</Title>
        <Flex justify={'space-between'} w={'100%'} pr={10}>
          <Flex align={'center'} gap={7}>
            <FaUserCircle size={24} />
            <Text fz={20} mr={5}>
              test
            </Text>
            <Text fz={18} fw={300} c={'dark.2'}>
              {formatDate(timestamp)}
            </Text>
          </Flex>
          <Flex align={'center'} gap={5} c={'dark.2'}>
            <TbEyeFilled />
            <Text>7</Text>
          </Flex>
        </Flex>
      </Flex>
      <Divider mb={10} />
      <Text mih={'300px'} bg={'dark.6'} w={'100%'} my={10} p={20}>{`11월 24일 11시 타임 가실 분, 채팅 주세요.`}</Text>
      <Flex gap={10}>
        <Flex
          align={'center'}
          gap={2}
          style={{ border: '1px solid', cursor: 'pointer' }}
          w={'13%'}
          px={10}
          py={5}
          justify={'space-between'}>
          <FaRegHeart />
          <Text>{'공감해요'}</Text>
          <Text>{'7'}</Text>
        </Flex>
        <Flex
          align={'center'}
          gap={2}
          style={{ border: '1px solid', cursor: 'pointer' }}
          w={'10%'}
          px={10}
          py={5}
          justify={'space-between'}
          onClick={() => setIsOpen(!isOpen)}>
          <FaRegCommentDots />
          <Text>{'댓글'}</Text>
          <Text>{'7'}</Text>
        </Flex>
      </Flex>
      {isOpen && (
        <Container h={'auto'} p={15} w={'100%'}>
          <Comments />
          <Paper p={10} withBorder radius={0}>
            <Flex align={'center'} gap={5} mb={5}>
              <FaUserCircle size={20} />
              <Text>userName</Text>
            </Flex>
            <Textarea placeholder="댓글을 입력하세요." />
            <Flex align={'center'} justify={'flex-end'} m={5} gap={5}>
              <Text>비밀댓글</Text>
              <IoMdUnlock size={20} />
              <Button variant="outline" radius={0}>
                등록
              </Button>
            </Flex>
          </Paper>
        </Container>
      )}
    </Flex>
  );
};

export default Board;
