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
  Stack,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [visible, { toggle }] = useDisclosure(false);
  const navigate = useNavigate();
  const icon = <MdOutlineAlternateEmail style={{ width: rem(16), height: rem(16) }} />;

  return (
    <Flex w={'100%'} direction={'column'}>
      <Title order={2} w={'100%'} style={{ borderBottom: '1px solid' }} py={20}>
        회원가입
      </Title>
      <Container w={500} p={40}>
        <Flex align={'center'}>
          <Title order={5} w={120}>
            이메일
          </Title>
          <TextInput w={300} my="md" rightSectionPointerEvents="none" rightSection={icon} placeholder="Your email" />
        </Flex>
        <Stack gap={0}>
          <Flex align={'center'}>
            <Title order={5} w={120}>
              비밀번호
            </Title>
            <PasswordInput
              w={300}
              my="md"
              defaultValue="secret"
              placeholder="Your password"
              visible={visible}
              onVisibilityChange={toggle}
            />
          </Flex>
          <Flex align={'center'}>
            <Title order={5} w={120}>
              비밀번호 확인
            </Title>
            <PasswordInput w={300} my={'md'} defaultValue="secret" visible={visible} onVisibilityChange={toggle} />
          </Flex>
        </Stack>
        <Button w={'100%'} size="md" my={20}>
          회원가입
        </Button>
      </Container>
      <Grid w={'100%'}>
        <Grid.Col span={4}>
          <Divider mt={12} />
        </Grid.Col>
        <Grid.Col span={4} display={'flex'} style={{ alignItems: 'center', justifyContent: 'center' }}>
          SNS 회원가입
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
    </Flex>
  );
};

export default SignUp;
