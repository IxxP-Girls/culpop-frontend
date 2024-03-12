import { Divider, Flex, Title } from '@mantine/core';
import { noCommonHeight } from '../../../constants/heights';
import BoardForm from './BoardForm';
import { useParams } from 'react-router-dom';
import usePostQuery from '../../../hooks/queries/usePostQuery';

const Edit = () => {
  const { id } = useParams();
  const { postInfo } = usePostQuery(Number(id));

  return (
    <Flex direction={'column'} w={'100%'} style={{ height: noCommonHeight }} pb={10}>
      <Title order={3}>게시글 수정</Title>
      <Divider mb={15} mt={5} />
      <BoardForm type={'edit'} boardInfo={postInfo} />
    </Flex>
  );
};

export default Edit;
