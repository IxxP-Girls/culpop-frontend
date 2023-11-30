import {
  Container,
  Flex,
  Text,
  Title,
  TextInput,
  rem,
  PasswordInput,
  Button,
  Grid,
  Divider,
  Image,
  ActionIcon,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const icon = <MdOutlineAlternateEmail style={{ width: rem(16), height: rem(16) }} />;
  const [visible, { toggle }] = useDisclosure(false);

  return (
    <Flex w={'100%'} direction={'column'}>
      <Title order={2} w={'100%'} style={{ borderBottom: '1px solid' }} py={20}>
        로그인
      </Title>
      <Container w={500} p={50}>
        <Flex align={'center'}>
          <Title order={5} w={100}>
            이메일
          </Title>
          <TextInput w={300} my="md" rightSectionPointerEvents="none" rightSection={icon} placeholder="Your email" />
        </Flex>
        <Flex align={'center'}>
          <Title order={5} w={100}>
            비밀번호
          </Title>
          <PasswordInput w={300} my={'md'} defaultValue="secret" visible={visible} onVisibilityChange={toggle} />
        </Flex>
        <Button w={'100%'} size="md" my={20}>
          로그인
        </Button>
      </Container>
      <Grid w={'100%'}>
        <Grid.Col span={4}>
          <Divider mt={12} />
        </Grid.Col>
        <Grid.Col span={4} display={'flex'} style={{ alignItems: 'center', justifyContent: 'center' }}>
          SNS로 로그인
        </Grid.Col>
        <Grid.Col span={4}>
          <Divider mt={12} />
        </Grid.Col>
      </Grid>
      <Container my={40}>
        <ActionIcon w={'100%'} variant="transparent">
          <Image src={'/assets/kakao.png'} />
        </ActionIcon>
      </Container>
      <Divider />
      <Container my={40}>
        <Text display={'flex'} style={{ justifyContent: 'center' }}>
          회원가입 후 CulPop 서비스를 이용해보세요!
        </Text>
        <Button w={400} size="md" my={20} color="dark.5" onClick={() => navigate('/signup')}>
          회원가입 하기
        </Button>
      </Container>
    </Flex>
  );
};

export default SignIn;
