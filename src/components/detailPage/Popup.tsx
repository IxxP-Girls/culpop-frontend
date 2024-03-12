import { Container, Flex, Text, ActionIcon, Divider, Anchor } from '@mantine/core';
import {
  TbHeart,
  TbHeartFilled,
  TbChevronRight,
  TbMapPin,
  TbWifi,
  TbWifiOff,
  TbPaw,
  TbCurrencyDollar,
  TbParkingOff,
  TbParking,
  TbCurrencyDollarOff,
  TbMoodKid,
  TbMoodOff,
  TbEyeFilled,
} from 'react-icons/tb';
import CustomButton from '../common/CustomButton';
import { useParams } from 'react-router-dom';
import usePopupQuery from '../../hooks/queries/usePopupQuery';
import Badge from './Badge';
import ImgCarousel from './ImgCarousel';
import useAddLikePopupMutation from '../../hooks/mutations/useAddLikePopupMutation';
import useDeleteLikePopupMutation from '../../hooks/mutations/useDeleteLikePopupMutation';

const Popup = () => {
  const { id } = useParams();
  const { popupInfo } = usePopupQuery(Number(id));

  const {
    popupId,
    store,
    imageList,
    title,
    content,
    tagList,
    address,
    startDate,
    endDate,
    notice,
    storeUrl,
    snsUrl,
    parking,
    fee,
    nokids,
    pet,
    wifi,
    likeCount,
    viewCount,
    likeCheck,
  } = popupInfo;

  const { mutate: addHeart } = useAddLikePopupMutation(popupId);
  const { mutate: deleteHeart } = useDeleteLikePopupMutation(popupId);

  const handleClick = () => {
    if (!likeCheck) addHeart(popupId);
    else deleteHeart(popupId);
  };

  return (
    <Container m={0} pb={30} px={0}>
      <ImgCarousel data={imageList} />
      <Flex align={'center'} justify={'space-between'} my={20}>
        <Text fz={20}>정보</Text>
        <Flex w={'auto'} display={'flex'} align={'center'} mx={10} gap={5}>
          <Text fz={20}>{likeCount}</Text>
          <ActionIcon variant="transparent" color="dark.0" onClick={handleClick}>
            {likeCheck ? <TbHeartFilled size={40} /> : <TbHeart size={40} />}
          </ActionIcon>
        </Flex>
      </Flex>
      <Flex justify={'space-between'} align={'center'} c={'dark.2'}>
        <Text fz={14} style={{ cursor: 'pointer', alignItems: 'center' }} display={'flex'}>
          {store}
          <TbChevronRight />
        </Text>
        <Text fz={14} style={{ alignItems: 'center' }} display={'flex'}>
          {viewCount} <TbEyeFilled style={{ marginLeft: 5 }} />
        </Text>
      </Flex>
      <Flex direction={'column'}>
        <Text fz={24} fw={700}>
          {title}
        </Text>
        <Text fz={14} fw={700} mb={8}>
          {startDate} - {endDate}
        </Text>
        <Flex align={'center'}>
          <TbMapPin />
          <Text size="md" fz={14}>
            {address}
          </Text>
        </Flex>
        <Container py={10} mx={0} my={15}>
          {tagList.map((tag: string) => (
            <CustomButton data={tag} key={tag} />
          ))}
        </Container>
        <Divider />
        <Flex py={20}>
          <Badge
            icon={parking ? <TbParking size={36} /> : <TbParkingOff size={36} />}
            name={parking ? '주차가능' : '주차불가'}
          />
          <Badge
            icon={fee ? <TbCurrencyDollar size={32} /> : <TbCurrencyDollarOff size={36} />}
            name={fee ? '입장료 유료' : '입장료 무료'}
          />
          <Badge
            icon={wifi ? <TbWifi size={36} /> : <TbWifiOff size={32} />}
            name={wifi ? '와이파이 가능' : '와이파이 불가'}
          />
          {pet && <Badge icon={<TbPaw size={36} />} name={'반려동물'} />}
          <Badge
            icon={nokids ? <TbMoodOff size={36} /> : <TbMoodKid size={36} />}
            name={nokids ? '노 키즈존' : '웰컴 키즈존'}
          />
        </Flex>
        <Divider />
        <Flex py={20} direction={'column'}>
          <Text fz={16} fw={700}>
            운영 시간
          </Text>
          <Flex direction={'column'} p={20}>
            <Text>월: {'휴무'}</Text>
            <Text>화: {'11:00 ~ 20:00'}</Text>
            <Text>수: {'11:00 ~ 20:00'}</Text>
            <Text>목: {'11:00 ~ 20:00'}</Text>
            <Text>금: {'11:00 ~ 20:00'}</Text>
            <Text>토: {'11:00 ~ 20:00'}</Text>
            <Text>일: {'11:00 ~ 20:00'}</Text>
          </Flex>
        </Flex>
        <Flex py={20} direction={'column'}>
          <Text fz={16} fw={700} mb={15}>
            팝업스토어 소개
          </Text>
          <Text
            fz={14}
            py={30}
            px={15}
            bg={'dark.6'}
            style={{ whiteSpace: 'pre-line' }}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </Flex>
        <Flex py={20} direction={'column'}>
          <Text fz={16} fw={700} mb={15}>
            안내 및 주의사항
          </Text>
          <Text fz={14} style={{ whiteSpace: 'pre-line' }} dangerouslySetInnerHTML={{ __html: notice }} />
        </Flex>
        <Anchor
          href={storeUrl}
          underline="never"
          target="_blank"
          display={'flex'}
          style={{ justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid' }}
          c={'dark.2'}
          h={50}
          px={5}>
          <Text fz={16}>브랜드 홈페이지 바로가기</Text>
          <TbChevronRight />
        </Anchor>
        <Anchor
          href={snsUrl}
          underline="never"
          target="_blank"
          display={'flex'}
          style={{ justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid' }}
          c={'dark.2'}
          h={50}
          px={5}>
          <Text fz={16}>SNS 바로가기</Text>
          <TbChevronRight />
        </Anchor>
      </Flex>
    </Container>
  );
};

export default Popup;
