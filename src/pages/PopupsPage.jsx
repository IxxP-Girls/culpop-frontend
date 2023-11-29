import AppLayout from '../components/common/AppLayout';
import Popups from '../components/popupsPage/Popups';
import ArrowUpBtn from '../components/common/ArrowUpBtn';

const PopupsPage = () => {
  return (
    <>
      <AppLayout>
        <Popups />
      </AppLayout>
      <ArrowUpBtn />
    </>
  );
};

export default PopupsPage;
