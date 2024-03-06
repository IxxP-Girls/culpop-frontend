export const DATE_OPTIONS = {
  TODAY: '오늘',
  SEVEN_DAYS: '+7일',
  TWO_WEEKS: '+2주',
  CUSTOM: '직접선택',
} as const; // const assertion을 활용

// '오늘' | '+7일' | '+2주' | '직접선택' 타입을 생성
export type DateOptions = (typeof DATE_OPTIONS)[keyof typeof DATE_OPTIONS];
