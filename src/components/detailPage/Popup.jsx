import { Container, Flex, Text, ActionIcon, Divider, Anchor } from '@mantine/core';
import { carouselData, tags } from '../../constants/carouselData';
import BaseCarousel from '../common/BaseCarousel';
import {
  TbHeart,
  TbHeartFilled,
  TbChevronRight,
  TbMapPin,
  TbWifi,
  TbWifiOff,
  TbPaw,
  TbCupOff,
  TbCurrencyDollar,
  TbParkingOff,
  TbParking,
  TbCurrencyDollarOff,
  TbMoodKid,
  TbMoodOff,
} from 'react-icons/tb';

import CustomButton from '../common/CustomButton';

const Popup = () => {
  return (
    <Container m={0} pb={30}>
      <BaseCarousel data={carouselData} />
      <Flex align={'center'} justify={'space-between'} my={20}>
        <Text fz={20}>정보</Text>
        <Flex w={'auto'} display={'flex'} align={'center'} mx={10} gap={5}>
          <Text fz={20}>0</Text>
          <ActionIcon variant="transparent">
            <TbHeart size={40} />
          </ActionIcon>
        </Flex>
      </Flex>
      <Flex align={'center'} c={'dark.2'}>
        <Text fz={14} style={{ cursor: 'pointer' }}>
          가치공간
        </Text>
        <TbChevronRight />
      </Flex>
      <Flex direction={'column'}>
        <Text fz={24} fw={700}>
          가치공간 디자이너 브랜드 팝업: THE POP-UP EPISODE
        </Text>
        <Text fs={14} fw={700} mb={8}>
          23.11.15 - 23.12.15
        </Text>
        <Flex align={'center'}>
          <TbMapPin />
          <Text size="md" fz={14}>
            서울특별시 성동구 서울숲4길 28-3
          </Text>
        </Flex>
        <Container py={10} p={0}>
          {tags.map(tag => (
            <CustomButton data={tag} key={tag} />
          ))}
        </Container>
        <Divider />
        <Flex py={20}>
          <Flex direction={'column'} justify={'center'} align={'center'} fz={12} fw={400} m={15}>
            <TbCurrencyDollar size={32} />
            입장료 유료
          </Flex>
          <Flex direction={'column'} justify={'center'} align={'center'} fz={12} fw={400} m={15}>
            <TbCurrencyDollarOff size={36} />
            입장료 무료
          </Flex>
          <Flex direction={'column'} justify={'center'} align={'center'} fz={12} fw={400} m={15}>
            <TbWifi size={36} />
            와이파이 가능
          </Flex>
          <Flex direction={'column'} justify={'center'} align={'center'} fz={12} fw={400} m={15}>
            <TbWifiOff size={36} />
            와이파이 불가
          </Flex>
          <Flex direction={'column'} justify={'center'} align={'center'} fz={12} fw={400} m={15}>
            <TbPaw size={36} />
            반려동물
          </Flex>
          <Flex direction={'column'} justify={'center'} align={'center'} fz={12} fw={400} m={15}>
            <TbParking size={36} />
            주차가능
          </Flex>
          <Flex direction={'column'} justify={'center'} align={'center'} fz={12} fw={400} m={15}>
            <TbParkingOff size={36} />
            주차불가
          </Flex>
          <Flex direction={'column'} justify={'center'} align={'center'} fz={12} fw={400} m={15}>
            <TbMoodKid size={36} />
            웰컴 키즈존
          </Flex>
          <Flex direction={'column'} justify={'center'} align={'center'} fz={12} fw={400} m={15}>
            <TbMoodOff size={36} />노 키즈존
          </Flex>
          <Flex direction={'column'} justify={'center'} align={'center'} fz={12} fw={400} m={15}>
            <TbCupOff size={36} />
            음료 반입 불가
          </Flex>
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
          <Text fz={14} py={30} px={15} bg={'dark.6'} style={{ whiteSpace: 'pre-line' }}>
            {` 제이닷의 첫 번째 크리스마스 팝업, 페어리 힐이 오늘부터 오픈합니다!👏 \n드넓은 언덕에 트리의 요정들이 꾸며둔 숲 속을 마음껏 구경해주세요💚🎁 \n 방문 시 미션지를 드립니다. \n미션을 모두 수행하시면 특별한 선물을 드리니 팝업을 즐기시면서 미션도 완수해보세요!\n● YES! KIDSZONE👶아이 동반 가능 (단, 언덕길과 돌뿌리 등은 유의해주세요.)`}
          </Text>
        </Flex>
        <Flex py={20} direction={'column'}>
          <Text fz={16} fw={700} mb={15}>
            안내 및 주의사항
          </Text>
          <Text fz={14} style={{ whiteSpace: 'pre-line' }}>
            {` * 우천시 미운영 됩니다.\n * 주차 공간이 없습니다. 가급적 대중교통을 이용해주세요.\n* 월요일은 휴무입니다.`}
          </Text>
        </Flex>
        <Anchor
          href={'https://blossom2305.tistory.com/'}
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
          href={'https://blossom2305.tistory.com/'}
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
