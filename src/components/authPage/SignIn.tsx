import { Container, Flex, Text, Title, Button, Grid, Divider, Image, ActionIcon } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import SignInOnlyCulPop from './SignInOnlyCulPop';

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <Flex w={'100%'} direction={'column'}>
      <Title order={2} w={'100%'} style={{ borderBottom: '1px solid' }} py={20}>
        로그인
      </Title>
      <SignInOnlyCulPop />
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
