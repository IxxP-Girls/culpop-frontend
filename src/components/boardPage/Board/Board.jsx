import { Divider, Flex, Text, Title } from '@mantine/core';
import formatDate from '../../../utils/formatDate';
import { noCommonHeight } from '../../../constants/heights';
import { FaRegHeart } from 'react-icons/fa6';

const Board = ({ timestamp = 1556406509760 }) => {
  return (
    <Flex direction={'column'} w={'100%'} gap={10} h={noCommonHeight} py={20}>
      <Flex align={'center'} justify={'space-between'}>
        <Text fz={20}>{'[동행 구해요] 블랙핑크 팝업행사 같이 가실 분 구해요.'}</Text>
        <Flex align={'center'} gap={5}>
          <FaRegHeart size={25} />
          <Text fz={20}>{'7'}</Text>
        </Flex>
      </Flex>
      <Divider mb={10} />
      <Flex align={'center'}>
        <Title order={4} w={'20%'}>
          작성자
        </Title>
        <Text>test</Text>
      </Flex>
      <Flex align={'center'}>
        <Title order={4} w={'20%'}>
          작성일
        </Title>
        <Text>{formatDate(timestamp)}</Text>
      </Flex>
      <Text h={'50%'} bg={'dark.3'} w={'100%'} my={10} p={20}>{`11월 24일 11시 타임 가실 분, 채팅 주세요.`}</Text>
      <Text bg={'dark.5'} style={{ flexGrow: 1 }}>
        댓글창
      </Text>
    </Flex>
  );
};

export default Board;
