import { Container, Divider, Flex, Text, Paper, Button, Group, Pagination, Modal } from '@mantine/core';
import { PiPencilLine } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import useUserProfileQuery from '../../hooks/queries/useUserProfileQuery';

const MyInfo = () => {
  const navigate = useNavigate();
  const [openedDeletePost, { open: openDeletePost, close: closeDeletePost }] = useDisclosure(false);

  const { userProfile } = useUserProfileQuery();

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
      <Container w={'100%'} mb={15}>
        <Flex my={10} align={'center'}>
          <PiPencilLine />
          <Text>내가 작성한 글</Text>
        </Flex>
        <Container w={'100%'} h={'300px'} bg={'dark.6'} pos={'relative'} style={{ borderRadius: '10px' }} p={20}>
          {postList.map(({ postId, title, cateName, createdAt }) => (
            <Paper
              key={postId}
              m="md"
              bg={'transparent'}
              pos={'relative'}
              h={'15%'}
              style={{
                alignItems: 'center',
              }}>
              <Flex>
                <Text variant="h5" mr={5}>
                  {cateName}
                </Text>
                <Text>{title}</Text>
                <Group pos={'absolute'} right={0} gap={5}>
                  <Button size="xs" color="dark.4" onClick={() => navigate('/edit')}>
                    수정
                  </Button>
                  <Button size="xs" onClick={openDeletePost}>
                    삭제
                  </Button>
                </Group>
              </Flex>
              <Divider my={10} color="dark.5" />
            </Paper>
          ))}
          <Pagination
            display={'flex'}
            style={{ justifyContent: 'center' }}
            total={5}
            pos={'absolute'}
            bottom={10}
            w={'100%'}
          />
        </Container>
      </Container>
    </>
  );
};

export default MyInfo;
