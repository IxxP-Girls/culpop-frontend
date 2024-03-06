import { Divider, Flex, Title } from '@mantine/core';
import { noCommonHeight } from '../../../constants/heights';
import BoardForm from './BoardForm';

const Edit = () => {
  return (
    <Flex direction={'column'} w={'100%'} style={{ height: noCommonHeight }} pb={10}>
      <Title order={3}>게시글 수정</Title>
      <Divider mb={15} mt={5} />
      <BoardForm
        type={'edit'}
        category={'money'}
        title={'블랙핑크 팝업 표 판매해요.'}
        contents={`11월 24일 표입니다.\n 구매의사 있으시면 채팅주세요.`}
      />
    </Flex>
  );
};

export default Edit;
