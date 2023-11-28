import { Divider, Flex, Grid, GridCol } from '@mantine/core';
import MyInfo from './MyInfo';
import MyInterests from './MyInterests';
import { useRecoilState } from 'recoil';
import tabState from '../../recoil/atom/tabState';

const UserInfo = () => {
  const [selectTab, setSelectTab] = useRecoilState(tabState);

  return (
    <Flex direction={'column'} w={'100%'}>
      <Grid w={'100%'} fz={16} fw={600} mt={15} mb={20} pb={10} py={0}>
        <GridCol span={6} px={0}>
          <Flex
            h={20}
            my={10}
            justify={'center'}
            style={{ color: `${selectTab === 'info' ? 'lime' : ''}` }}
            onClick={() => setSelectTab('info')}>
            내 정보
          </Flex>
          <Divider size={selectTab === 'info' ? 2 : undefined} color={selectTab === 'info' ? 'lime' : undefined} />
        </GridCol>
        <GridCol span={6} px={0}>
          <Flex
            h={20}
            my={10}
            justify={'center'}
            onClick={() => setSelectTab('interests')}
            style={{ color: `${selectTab === 'interests' ? 'lime' : ''}` }}>
            관심팝업
          </Flex>
          <Divider
            size={selectTab === 'interests' ? 2 : undefined}
            color={selectTab === 'interests' ? 'lime' : undefined}
          />
        </GridCol>
      </Grid>
      {selectTab === 'info' ? <MyInfo /> : <MyInterests />}
    </Flex>
  );
};

export default UserInfo;
