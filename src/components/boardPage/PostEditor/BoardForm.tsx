import { Flex, Title, TextInput, Textarea, Button, SegmentedControl, Box, rem, Center } from '@mantine/core';
import { useForm } from '@mantine/form';
import { FaUsers, FaEllipsisH, FaStar, FaRegMoneyBillAlt } from 'react-icons/fa';
import { notifications } from '@mantine/notifications';
import { useNavigate } from 'react-router-dom';

interface BoardFormProps {
  type: string;
  category?: string;
  title?: string;
  contents?: string;
}

const BoardForm: React.FC<BoardFormProps> = ({ type, category, title, contents }) => {
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      category: category || '',
      title: title || '',
      contents: contents || '',
    },
  });

  const handleSubmit = () => {
    if (form.values.category !== '' && form.values.title !== '' && form.values.contents !== '') {
      console.log(form.values);
    } else {
      notifications.show({ message: '모든 항목을 입력해주세요.', color: 'red', autoClose: 1500 });
    }
  };

  return (
    <form style={{ height: '100%' }} onSubmit={form.onSubmit(handleSubmit)}>
      <Flex direction={'column'} h={'100%'} gap={15}>
        <Flex gap={20} align={'center'}>
          <Title order={3}>카테고리</Title>
          <SegmentedControl
            color="green"
            data={[
              {
                value: 'together',
                label: (
                  <Center>
                    <FaUsers style={{ width: rem(16), height: rem(16) }} />
                    <Box ml={10}>동행구해요</Box>
                  </Center>
                ),
              },
              {
                value: 'review',
                label: (
                  <Center>
                    <FaStar style={{ width: rem(16), height: rem(16) }} />
                    <Box ml={10}>후기</Box>
                  </Center>
                ),
              },
              {
                value: 'money',
                label: (
                  <Center>
                    <FaRegMoneyBillAlt style={{ width: rem(16), height: rem(16) }} />
                    <Box ml={10}>거래해요</Box>
                  </Center>
                ),
              },
              {
                value: 'etc',
                label: (
                  <Center>
                    <FaEllipsisH style={{ width: rem(16), height: rem(16) }} />
                    <Box ml={10}>자유게시판</Box>
                  </Center>
                ),
              },
            ]}
            {...form.getInputProps('category')}
          />
        </Flex>
        <Title order={3}>제목</Title>
        <TextInput {...form.getInputProps('title')} size="md" />
        <Title order={3}>내용</Title>
        <Textarea
          size="md"
          style={{
            flexGrow: 1,
            overflow: 'auto',
          }}
          styles={{
            wrapper: {
              height: '100%',
            },
            input: {
              height: '100%',
            },
          }}
          {...form.getInputProps('contents')}
        />
        <Flex gap={10} justify={'flex-end'} my={10}>
          <Button bg={'dark.2'} size="md" onClick={() => navigate('/boards')}>
            취소하기
          </Button>
          <Button type="submit" size="md">
            {type === 'post' ? '제출하기' : '수정하기'}
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};

export default BoardForm;
