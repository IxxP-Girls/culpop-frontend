import { Divider, Flex, Title } from '@mantine/core';
import { noCommonHeight } from '../../../constants/heights';
import BoardForm from './BoardForm';

const Post = () => {
  return (
    <Flex direction={'column'} w={'100%'} style={{ height: noCommonHeight }} pb={10}>
      <Title order={3}>게시글 등록</Title>
      <Divider mb={15} mt={5} />
      <BoardForm type={'post'} />
    </Flex>
  );
};

export default Post;
