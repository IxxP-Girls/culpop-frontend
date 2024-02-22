import { Text, Paper, Flex } from '@mantine/core';
import formatDate from '../../utils/formatDate';

const MyTalk = ({ time, message }) => {
  return (
    <Flex align={'end'} gap={5} display={'inline-flex'} style={{ alignSelf: 'flex-end', alignItems: 'center' }} my={10}>
      <Text fz={12} w={50}>
        {formatDate(time)}
      </Text>
      <Paper shadow="sm" radius="lg" p="md" bg={'green'} py={10}>
        <Text>{message}</Text>
      </Paper>
    </Flex>
  );
};

export default MyTalk;
