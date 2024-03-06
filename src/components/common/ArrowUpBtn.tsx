import { Button } from '@mantine/core';
import { RiArrowUpSLine } from 'react-icons/ri';
import useScrollY from '../../hooks/useScollY';

const ArrowUpBtn = ({ boundary = 300 }) => {
  const yPos = useScrollY();

  const handleArrowUpClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    yPos >= boundary && (
      <Button onClick={handleArrowUpClick} radius={50} p={0} w={40} h={40} pos={'fixed'} bottom={80} right={'10%'}>
        <RiArrowUpSLine size={25} />
      </Button>
    )
  );
};

export default ArrowUpBtn;
