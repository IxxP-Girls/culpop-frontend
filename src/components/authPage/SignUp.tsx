import { Container, Flex, Title, Grid, Divider, Image, ActionIcon } from '@mantine/core';
import SignUpOnlyCulPop from './SignUpOnlyCulPop';

const SignUp = () => {
  return (
    <Flex w={'100%'} direction={'column'}>
      <Title order={2} w={'100%'} style={{ borderBottom: '1px solid' }} py={20}>
        회원가입
      </Title>
      <SignUpOnlyCulPop />
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
