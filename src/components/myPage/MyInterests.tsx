import { Tabs, rem } from '@mantine/core';
import { FaList, FaSpinner, FaRegCalendarAlt } from 'react-icons/fa';
import Cards from './Cardst';
import { useState } from 'react';

const MyInterests = () => {
  const iconStyle = { width: rem(12), height: rem(12) };
  const [sortOption, setSortOption] = useState('all');

  const tabClick = (value: string) => setSortOption(value);

  return (
    <Tabs color="green" defaultValue="all" variant="pills">
      <Tabs.List>
        <Tabs.Tab value="all" leftSection={<FaList style={iconStyle} />} onClick={() => tabClick('all')}>
          전체
        </Tabs.Tab>
        <Tabs.Tab value="open" leftSection={<FaSpinner style={iconStyle} />} onClick={() => tabClick('open')}>
          진행 중
        </Tabs.Tab>
        <Tabs.Tab value="soon" leftSection={<FaRegCalendarAlt style={iconStyle} />} onClick={() => tabClick('soon')}>
          오픈 예정
        </Tabs.Tab>
      </Tabs.List>
      <Cards sortOption={sortOption} />
    </Tabs>
  );
};

export default MyInterests;
