import { Tabs, rem } from '@mantine/core';
import { FaList, FaSpinner, FaRegCalendarAlt } from 'react-icons/fa';
import Cards from '../common/Cards';

const MyInterests = () => {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Tabs color="green" defaultValue="all" variant="pills">
      <Tabs.List>
        <Tabs.Tab value="all" leftSection={<FaList style={iconStyle} />}>
          전체
        </Tabs.Tab>
        <Tabs.Tab value="open" leftSection={<FaSpinner style={iconStyle} />}>
          진행 중
        </Tabs.Tab>
        <Tabs.Tab value="soon" leftSection={<FaRegCalendarAlt style={iconStyle} />}>
          오픈 예정
        </Tabs.Tab>
      </Tabs.List>
      <Cards />
    </Tabs>
  );
};

export default MyInterests;
