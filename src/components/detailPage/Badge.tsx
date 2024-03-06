import { Flex } from '@mantine/core';
import { ReactElement } from 'react';

interface BadgeProps {
  icon: ReactElement;
  name: string;
}

const Badge: React.FC<BadgeProps> = ({ icon, name }) => {
  return (
    <Flex direction={'column'} justify={'center'} align={'center'} fz={12} fw={400} m={15}>
      {icon}
      {name}
    </Flex>
  );
};

export default Badge;
