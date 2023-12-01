import { Container, Divider, Flex, Text, Paper, Button, Group, Pagination } from '@mantine/core';
import { PiPencilLine } from 'react-icons/pi';
import MyBoardTitle from './MyBoardTitle';

const posts = [
  { id: 1, category: '[동행]', title: '블랙핑크 콘서트 같이 가실 분' },
  { id: 2, category: '[후기]', title: '시눈 팝업 추천 후기' },
  { id: 3, category: '[후기]', title: '스폰지밥 팝업 후기' },
  {},
  {},
];

const MyInfo = () => {
  return (
    <>
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
          <Text mb={5}>윤 슬</Text>
          <Divider />
        </Container>
        <Container w={'100%'} py={10} h={72}>
          <Text fz={12} style={{ lineHeight: 2 }}>
            계정 정보
          </Text>
          <Text mb={5}>test@test.com</Text>
          <Divider />
        </Container>
      </Flex>
      <Container w={'100%'}>
        <Flex my={20} align={'center'}>
          <PiPencilLine />
          <Text>내가 작성한 글</Text>
        </Flex>
        <Container w={'100%'} h={'400px'} bg={'dark.6'} pos={'relative'} style={{ borderRadius: '10px' }} p={20}>
          <Paper m="md" pos={'relative'} h={40} bg={'dark.5'} py={10}>
            <Flex>
              <MyBoardTitle percentage={5} name={'번호'} />
              <MyBoardTitle percentage={80} name={'제목'} />
              <MyBoardTitle percentage={15} name={'편집'} />
            </Flex>
          </Paper>
          {posts.map((post, idx) => (
            <Paper
              key={idx}
              m="md"
              bg={'transparent'}
              pos={'relative'}
              h={'10%'}
              style={{
                alignItems: 'center',
              }}>
              <Flex>
                <Text w={'5%'} display={'flex'} style={{ justifyContent: 'center' }}>
                  {idx + 1}
                </Text>
                <Text variant="h5" mr={5}>
                  {post.category}
                </Text>
                <Text>{post.title}</Text>
                <Group pos={'absolute'} right={0} gap={5}>
                  <Button size="xs" color="dark.4">
                    수정
                  </Button>
                  <Button size="xs">삭제</Button>
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
