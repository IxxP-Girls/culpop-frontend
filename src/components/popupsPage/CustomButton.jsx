import { Button } from '@mantine/core';

const CustomButton = ({ data, clicked, setClicked }) => {
  return (
    <Button
      w={'auto'}
      onClick={() => setClicked(data)}
      h={34}
      py={8}
      px={20}
      radius={20}
      fz={14}
      fw={400}
      mr={10}
      color={clicked === data ? '' : 'dark.0'}
      variant={clicked === data ? 'filled' : 'outline'}>
      {data}
    </Button>
  );
};

export default CustomButton;
