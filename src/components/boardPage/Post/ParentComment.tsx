import { Button, Flex, Text, Divider } from '@mantine/core';
import { FaUserCircle, FaRegHeart, FaHeart } from 'react-icons/fa';
import formatDetailDate from '../../../utils/formatDetailDate';

const ParentComment = ({ commentId, username, content, createdAt, likeCount, likeCheck, handleClick }) => {
  const handleSubClick = () => {
    handleClick;
    setIsOpen(!isOpen);
  };

  return (
    <Flex direction={'column'} pt={10}>
      <Flex align={'center'} py={5} gap={5}>
        <FaUserCircle size={25} />
        <Text fz={18} fw={600}>
          {username}
        </Text>
      </Flex>
      <Text>{content}</Text>
      <Text fz={16} fw={600} c={'dark.2'}>
        {formatDetailDate(createdAt)}
      </Text>
      <Flex justify={'space-between'} my={10}>
        <Button color={'dark.2'} c={'dark.0'} variant="outline" px={10} radius={0} onClick={handleClick}>
          답글
        </Button>
        <Button color={'dark.2'} c={'dark.0'} variant="outline" px={10} radius={0}>
          {likeCheck ? <FaHeart /> : <FaRegHeart />}
          <Text ml={5}>{likeCount}</Text>
        </Button>
      </Flex>
      <Divider mt={10} />
    </Flex>
  );
};

export default ParentComment;
