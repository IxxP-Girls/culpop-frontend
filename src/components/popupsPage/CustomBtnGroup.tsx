import CustomButton from '../common/CustomButton';
import { CustomBtnProps } from '../../types/types';

interface CustomBtnGroupProps extends Omit<CustomBtnProps, 'data'> {
  data: string[];
}

const CustomBtnGroup: React.FC<CustomBtnGroupProps> = ({ data, clicked, setClicked }) => (
  <>
    {data.map(item => (
      <CustomButton key={item} data={item} clicked={clicked} setClicked={setClicked} />
    ))}
  </>
);

export default CustomBtnGroup;
