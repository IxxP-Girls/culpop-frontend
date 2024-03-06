import { Tabs, rem, Grid, Text, Button, TextInput, Flex, Pagination, Divider } from '@mantine/core';
import { FaBars, FaUsers, FaEllipsisH, FaStar, FaRegMoneyBillAlt } from 'react-icons/fa';
import { IoSearchSharp } from 'react-icons/io5';
import BoardItem from './BoardItem';
import { useNavigate } from 'react-router-dom';
import { postData } from '../../../constants/mockData';

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
      <Tabs
        defaultValue="all"
        w={'100%'}
        pos={'relative'}
        variant="pills"
        styles={{
          tab: {
            fontSize: 16,
          },
        }}>
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
            <Text fz={14}>카테고리</Text>
          </Grid.Col>
          <Grid.Col span={5}>
            <Text fz={14}>글 제목</Text>
          </Grid.Col>
          <Grid.Col span={1}>
            <Text fz={14}>조회수</Text>
          </Grid.Col>
          <Grid.Col span={2}>
            <Text fz={14}>작성자</Text>
          </Grid.Col>
          <Grid.Col span={2}>
            <Text fz={14}>작성일</Text>
          </Grid.Col>
        </Grid>
        <Divider />
        <Tabs.Panel value="all">
          {postData.map(({ category, title, viewCount, username, createdAt }) => (
            <BoardItem
              category={category}
              title={title}
              viewCount={viewCount}
              username={username}
              createdAt={createdAt}
              key={createdAt}
            />
          ))}
        </Tabs.Panel>
        <Tabs.Panel value="messages">
          {' '}
          {postData.map(({ category, title, viewCount, username, createdAt }) => (
            <BoardItem
              category={category}
              title={title}
              viewCount={viewCount}
              username={username}
              createdAt={createdAt}
              key={createdAt}
            />
          ))}
        </Tabs.Panel>
        <Tabs.Panel value="reviews">
          {' '}
          {postData.map(({ category, title, viewCount, username, createdAt }) => (
            <BoardItem
              category={category}
              title={title}
              viewCount={viewCount}
              username={username}
              createdAt={createdAt}
              key={createdAt}
            />
          ))}
        </Tabs.Panel>
        <Tabs.Panel value="etc">
          {postData.map(({ category, title, viewCount, username, createdAt }) => (
            <BoardItem
              category={category}
              title={title}
              viewCount={viewCount}
              username={username}
              createdAt={createdAt}
              key={createdAt}
            />
          ))}
        </Tabs.Panel>
        <Pagination
          py={15}
          total={postData.length / 10}
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
