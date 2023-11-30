import { Container, Flex, Title, TextInput, rem, PasswordInput, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useForm, isEmail, hasLength } from '@mantine/form';

const SignInOnlyCulPop = () => {
  const navigate = useNavigate();
  const icon = <MdOutlineAlternateEmail style={{ width: rem(16), height: rem(16) }} />;
  const [visible, { toggle }] = useDisclosure(false);

  const form = useForm({
    validateInputOnChange: true,
    initialValues: { email: '', password: '' },
    validate: {
      email: isEmail('이메일 형식이 유효하지 않습니다'),
      password: hasLength({ min: 6, max: 12 }, '6자 이상, 12자 이하로 입력해주세요'),
    },
  });

  const handleSubmit = data => {
    console.log(data);
    navigate('/');
  };

  return (
    <Container w={500} p={50}>
      <form onSubmit={form.onSubmit(values => handleSubmit(values))}>
        <Flex align={'center'}>
          <Title order={5} w={100}>
            이메일
          </Title>
          <TextInput
            w={300}
            my="md"
            rightSectionPointerEvents="none"
            rightSection={icon}
            placeholder="Your email"
            {...form.getInputProps('email')}
          />
        </Flex>
        <Flex align={'center'}>
          <Title order={5} w={100}>
            비밀번호
          </Title>
          <PasswordInput
            type="password"
            w={300}
            my={'md'}
            placeholder="Your password"
            visible={visible}
            onVisibilityChange={toggle}
            {...form.getInputProps('password')}
          />
        </Flex>
        <Button type="submit" w={'100%'} size="md" my={20}>
          로그인
        </Button>
      </form>
    </Container>
  );
};

export default SignInOnlyCulPop;
