import { Button } from '@mantine/core';

const CustomButton = ({ data, clicked, setClicked }) => {
  return (
    <Button
      w={'auto'}
      onClick={setClicked ? () => setClicked(data) : undefined}
      h={34}
      py={8}
      px={15}
      radius={20}
      fz={14}
      fw={400}
      mr={7}
      my={5}
      color={clicked === data ? '' : 'dark.0'}
      variant={clicked === data ? 'filled' : 'outline'}>
      {data}
    </Button>
  );
};

export default CustomButton;
