import { Tabs, rem, Grid, Text, Button, TextInput, Flex, Pagination, Divider } from '@mantine/core';
import { FaBars, FaUsers, FaEllipsisH, FaStar, FaRegMoneyBillAlt } from 'react-icons/fa';
import { IoSearchSharp } from 'react-icons/io5';
import BoardItem from './BoardItem';
import { useNavigate } from 'react-router-dom';

const posts = [
  { category: '후기', title: '블랙핑크 콘서트 후기', counts: '8', writer: 'test', timestamp: 1698852838700 },
  {
    category: '동행 구해요',
    title: '도라에몽 팝업 같이 가실 분',
    counts: '9',
    writer: 'test2',
    timestamp: 1698852899900,
  },
  {
    category: '자유롭게 소통해요',
    title: '다들 요즘 뭐 하시고 사나요?',
    counts: '11',
    writer: 'test3',
    timestamp: 1698862838701,
  },
  {
    category: '동행 구해요',
    title: '다들 요즘 뭐 하시고 사나요?',
    counts: '11',
    writer: 'test3',
    timestamp: 1698862838702,
  },
  {
    category: '자유롭게 소통해요',
    title: '요즘 볼만한 팝업 뭐가 있을까요?',
    counts: '11',
    writer: 'test2',
    timestamp: 1698862838703,
  },
  {
    category: '후기',
    title: '도라에몽 팝업 후기',
    counts: '25',
    writer: 'test2',
    timestamp: 1698862838704,
  },
  {
    category: '자유소통',
    title: '다들 요즘 뭐 하시고 사나요?',
    counts: '11',
    writer: 'test',
    timestamp: 1698862838705,
  },
  {
    category: '거래해요',
    title: '도라에몽 팝업 표 양도합니다.',
    counts: '11',
    writer: 'test2',
    timestamp: 1698862838760,
  },
  {
    category: '거래해요',
    title: '촉촉한 초코칩 팝업 25일 티켓 양도합니다',
    counts: '11',
    writer: 'test2',
    timestamp: 1698862838770,
  },
  {
    category: '자유소통',
    title: '다들 요즘 뭐 하시고 사나요?',
    counts: '11',
    writer: 'test',
    timestamp: 1698862838788,
  },
];

const BoardList = () => {
  const iconStyle = { width: rem(12), height: rem(12) };
  const navigate = useNavigate();

  return (
    <Flex direction={'column'} w={'100%'}>
      <Flex justify={'space-between'} my={20}>
        <TextInput placeholder="검색어를 입력하시오" w={'40%'} leftSection={<IoSearchSharp />} />
        <Button bg={'dark.3'} onClick={() => navigate('/post')}>
          작성하기
        </Button>
      </Flex>
      <Tabs defaultValue="all" w={'100%'} pos={'relative'} variant="pills">
        <Tabs.List grow justify="space-between" my={10}>
          <Tabs.Tab value="all" leftSection={<FaBars style={iconStyle} />}>
            전체
          </Tabs.Tab>
          <Tabs.Tab value="together" leftSection={<FaUsers style={iconStyle} />}>
            동행 구해요
          </Tabs.Tab>
          <Tabs.Tab value="reviews" leftSection={<FaStar style={iconStyle} />}>
            후기
          </Tabs.Tab>
          <Tabs.Tab value="money" leftSection={<FaRegMoneyBillAlt style={iconStyle} />}>
            거래해요
          </Tabs.Tab>
          <Tabs.Tab value="etc" leftSection={<FaEllipsisH style={iconStyle} />}>
            자유롭게 소통해요
          </Tabs.Tab>
        </Tabs.List>
        <Grid
          c={'dark.2'}
          py={10}
          styles={{
            col: {
              display: 'flex',
              justifyContent: 'center',
            },
          }}>
          <Grid.Col span={2}>
            <Text>카테고리</Text>
          </Grid.Col>
          <Grid.Col span={5}>
            <Text>글 제목</Text>
          </Grid.Col>
          <Grid.Col span={1}>
            <Text>조회수</Text>
          </Grid.Col>
          <Grid.Col span={2}>
            <Text>작성자</Text>
          </Grid.Col>{' '}
          <Grid.Col span={2}>
            <Text>작성일</Text>
          </Grid.Col>
        </Grid>
        <Divider />
        <Tabs.Panel value="all">
          {posts.map(({ category, title, counts, writer, timestamp }, idx) => (
            <BoardItem
              category={category}
              title={title}
              counts={counts}
              writer={writer}
              timestamp={timestamp}
              key={timestamp}
            />
          ))}
        </Tabs.Panel>
        <Tabs.Panel value="messages"></Tabs.Panel>
        <Tabs.Panel value="reviews"></Tabs.Panel>
        <Tabs.Panel value="etc"></Tabs.Panel>
        <Pagination
          py={15}
          total={posts.length / 10}
          boundaries={1}
          defaultValue={1}
          display={'flex'}
          style={{ justifyContent: 'center' }}
        />
      </Tabs>
    </Flex>
  );
};

export default BoardList;
