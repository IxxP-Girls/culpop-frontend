import Root from '../components/rootPage/Root';
import AppLayout from '../components/common/AppLayout';
import ArrowUpBtn from '../components/common/ArrowUpBtn';

const RootPage = () => {
  return (
    <>
      <AppLayout>
        <Root />
      </AppLayout>
      <ArrowUpBtn />
    </>
  );
};

export default RootPage;
