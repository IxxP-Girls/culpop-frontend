import { Flex } from '@mantine/core';

const Badge = ({ icon, name }) => {
  return (
    <Flex direction={'column'} justify={'center'} align={'center'} fz={12} fw={400} m={15}>
      {icon}
      {name}
    </Flex>
  );
};

export default Badge;
