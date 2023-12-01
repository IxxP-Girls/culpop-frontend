import { Text, Paper, Flex } from '@mantine/core';
import formatDate from '../../utils/formatDate';

const YourTalk = ({ time, message }) => {
  return (
    <Flex
      align={'end'}
      gap={5}
      display={'inline-flex'}
      style={{ alignSelf: 'flex-start', alignItems: 'center' }}
      my={10}>
      <Paper shadow="sm" radius="lg" p="md" bg={'green.2'} c={'dark.9'} display={'inline-flex'} py={12}>
        <Text>{message}</Text>
      </Paper>
      <Text fz={12} w={50}>
        {formatDate(time)}
      </Text>
    </Flex>
  );
};

export default YourTalk;
