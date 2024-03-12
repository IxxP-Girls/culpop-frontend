import { Container, Divider, Flex, Text, Button, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import useUserProfileQuery from '../../hooks/queries/useUserProfileQuery';
import BoardList from './BoardList';
import { useState, useEffect } from 'react';

const MyInfo = () => {
  const [openedDeletePost, { open: openDeletePost, close: closeDeletePost }] = useDisclosure(false);
  const [pagenum, setPagenum] = useState<number>(1);
  const { userProfile, refetch } = useUserProfileQuery(pagenum);

  useEffect(() => {
    refetch();
  }, [pagenum]);

  const { username, email, postList } = userProfile;

  return (
    <>
      <Modal
        styles={{
          content: {
            backgroundColor: 'dark.0',
          },
        }}
        opened={openedDeletePost}
        onClose={closeDeletePost}
        title="게시글 삭제"
        centered>
        <Text my={25}>해당 게시글을 정말 삭제하시겠습니까?</Text>
        <Flex justify={'flex-end'} gap={5}>
          <Button>예</Button>
          <Button onClick={closeDeletePost} color={'dark.2'}>
            아니오
          </Button>
        </Flex>
      </Modal>
      <Container
        w={55}
        h={55}
        fw={900}
        fz={44}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 0 2px  #fff',
          borderRadius: 50,
          color: 'green',
        }}>
        C
      </Container>
      <Flex direction={'column'} mb={10}>
        <Container w={'100%'} py={10} h={72}>
          <Text fz={12} style={{ lineHeight: 2 }}>
            이름
          </Text>
          <Text mb={5}>{username}</Text>
          <Divider />
        </Container>
        <Container w={'100%'} py={10} h={72}>
          <Text fz={12} style={{ lineHeight: 2 }}>
            계정 정보
          </Text>
          <Text mb={5}>{email}</Text>
          <Divider />
        </Container>
      </Flex>
      <BoardList postList={postList} openDeletePost={openDeletePost} setPagenum={setPagenum} />
    </>
  );
};

export default MyInfo;
