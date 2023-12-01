import { Tabs } from '@mantine/core';
import MyInfo from './MyInfo';
import MyInterests from './MyInterests';

const UserInfo = () => {
  return (
    <Tabs color="green" defaultValue={'info'} w={'100%'}>
      <Tabs.List mb={30}>
        <Tabs.Tab value="info" w={'50%'}>
          내 정보
        </Tabs.Tab>
        <Tabs.Tab value="interests" w={'50%'}>
          관심 팝업
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="info">
        <MyInfo />
      </Tabs.Panel>
      <Tabs.Panel value="interests">
        <MyInterests />
      </Tabs.Panel>
    </Tabs>
  );
};

export default UserInfo;
