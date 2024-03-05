import { Container, Flex, Title, TextInput, rem, PasswordInput, Button, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useForm, isEmail, hasLength, matchesField } from '@mantine/form';
import showNotification from '../../utils/showNotification';
import { signUp } from '../../api/user';

const SignUpOnlyCulPop = () => {
  const [visible, { toggle }] = useDisclosure(false);
  const navigate = useNavigate();
  const icon = <MdOutlineAlternateEmail style={{ width: rem(16), height: rem(16) }} />;

  const form = useForm({
    validateInputOnChange: true,
    initialValues: { email: '', pwd: '', confirmPwd: '' },
    validate: {
      email: isEmail('이메일 형식이 유효하지 않습니다'),
      pwd: hasLength({ min: 6, max: 12 }, '6자 이상, 12자 이하로 입력해주세요'),
      confirmPwd: matchesField('pwd', '입력하신 비밀번호가 일치하지 않습니다'),
    },
  });

  const handleSubmit = async data => {
    try {
      const { email, pwd } = data;

      signUp({ email: email, pwd: pwd });
      navigate('/signin');
    } catch (error) {
      const message = error.response && error.response.statusCode === 401 ? error.response.statusMessage : undefined;
      showNotification(false, '회원가입', message);
    }
  };

  return (
    <Container w={500} p={40}>
      <form onSubmit={form.onSubmit(values => handleSubmit(values))}>
        <Flex align={'center'}>
          <Title order={5} w={120}>
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
        <Stack gap={0}>
          <Flex align={'center'}>
            <Title order={5} w={120}>
              비밀번호
            </Title>
            <PasswordInput
              w={300}
              my="md"
              placeholder="Your password"
              visible={visible}
              onVisibilityChange={toggle}
              {...form.getInputProps('pwd')}
            />
          </Flex>
          <Flex align={'center'}>
            <Title order={5} w={120}>
              비밀번호 확인
            </Title>
            <PasswordInput
              w={300}
              my={'md'}
              visible={visible}
              placeholder="Confirm password"
              onVisibilityChange={toggle}
              {...form.getInputProps('confirmPwd')}
            />
          </Flex>
        </Stack>
        <Button type="submit" w={'100%'} size="md" my={20}>
          회원가입
        </Button>
      </form>
    </Container>
  );
};

export default SignUpOnlyCulPop;
