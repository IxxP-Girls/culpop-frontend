import { useNavigate } from 'react-router-dom';
import { Container, Divider, Flex, Text, Paper, Button, Group, Pagination, Grid } from '@mantine/core';
import { PiPencilLine } from 'react-icons/pi';
import { PostType } from '../../types/types';
import { Dispatch, SetStateAction } from 'react';

interface BoardListProps {
  postList: PostType;
  openDeletePost: () => void;
  setPagenum: Dispatch<SetStateAction<number>>;
}

const BoardList: React.FC<BoardListProps> = ({ postList, openDeletePost, setPagenum }) => {
  const navigate = useNavigate();

  const { data, total } = postList;

  return (
    <Container w={'100%'} mb={15} h={'auto'}>
      <Flex my={10} align={'center'}>
        <PiPencilLine />
        <Text>내가 작성한 글</Text>
      </Flex>
      <Container w={'100%'} h={'auto'} py={15} bg={'dark.6'} pos={'relative'} style={{ borderRadius: '10px' }} p={20}>
        <Paper
          m="md"
          bg={'transparent'}
          pos={'relative'}
          h={'15%'}
          style={{
            alignItems: 'center',
          }}>
          <Grid c={'dark.2'}>
            <Grid.Col span={6}>글 제목</Grid.Col>
            <Grid.Col span={2}>조회수</Grid.Col>
            <Grid.Col span={2}>작성일</Grid.Col>
          </Grid>
          <Divider my={10} color="dark.4" size={'sm'} />
        </Paper>
        {data.map(({ postId, title, viewCount, createdAt }) => (
          <Paper
            key={postId}
            m="md"
            bg={'transparent'}
            pos={'relative'}
            h={'15%'}
            style={{
              alignItems: 'center',
            }}>
            <Grid>
              <Grid.Col span={6}> {title} </Grid.Col>
              <Grid.Col span={2}> {viewCount} </Grid.Col>
              <Grid.Col span={2}> {createdAt} </Grid.Col>
              <Grid.Col span={2}>
                <Group gap={5}>
                  <Button size="compact-sm" color="dark.4" onClick={() => navigate(`/edit/${postId}`)}>
                    수정
                  </Button>
                  <Button size="compact-sm" onClick={openDeletePost}>
                    삭제
                  </Button>
                </Group>
              </Grid.Col>
            </Grid>
            <Divider my={10} color="dark.5" />
          </Paper>
        ))}
        <Pagination
          display={'flex'}
          style={{ justifyContent: 'center' }}
          total={Math.ceil(total / 5)}
          w={'100%'}
          onChange={setPagenum}
        />
      </Container>
    </Container>
  );
};

export default BoardList;
