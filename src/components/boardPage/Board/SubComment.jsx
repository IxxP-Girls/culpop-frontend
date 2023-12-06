import { Button, Divider, Flex, Container, Text } from '@mantine/core';
import { FaUserCircle, FaRegHeart, FaHeart } from 'react-icons/fa';
import { TbRadiusBottomLeft } from 'react-icons/tb';
import formatDetailDate from '../../../utils/formatDetailDate';

const SubComment = ({ commentId, username, content, createdAt, likeCount, likeCheck, parentId }) => {
  return (
    <Flex direction={'column'} py={15}>
      <Flex px={30}>
        <TbRadiusBottomLeft size={25} />
        <Container m={0} p={0} w={'100%'}>
          <Flex justify={'space-between'}>
            <Flex align={'center'} pl={20} py={5} gap={5}>
              <FaUserCircle size={25} />
              <Text fz={18} fw={600}>
                {username}
              </Text>
            </Flex>
            <Button color={'dark.2'} c={'dark.0'} variant="outline" px={10} radius={0}>
              {likeCheck ? <FaHeart /> : <FaRegHeart />}
              <Text ml={5}>{likeCount}</Text>
            </Button>
          </Flex>
          <Text pl={20}>{content}</Text>
          <Text pl={20} fz={16} fw={600} c={'dark.2'}>
            {formatDetailDate(createdAt)}
          </Text>
        </Container>
      </Flex>
      <Divider mt={10} />
    </Flex>
  );
};

export default SubComment;
