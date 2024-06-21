import dayjs, { Dayjs } from "dayjs";

/**
 * 글자 자르고 뒤에 ... 붙여서 내용이 더 있다는 것을 표시해주는 함수
 * @param text - 텍스트 내용
 * @param length - 최대로 표시할 텍스트의 길이
 * @returns string with '...'
 */
export function sliceTextWithPeriods(text: string, length: number) {
  const sliced = text.slice(0, length);

  return text.length > 120 ? `${sliced}...` : sliced;
}

export function getStartTimeOfToday() {
  return dayjs().startOf("date");
}

export function getEndTimeOfToday() {
  return dayjs().endOf("date");
}

export function formatDate(date: string) {
  return dayjs(date).format("YY.M.D hh:mm:ss");
}

export function getPreviousDay(date: Dayjs) {
  return date.subtract(1, "day");
}

export function getNextDay(date: Dayjs) {
  return date.add(1, "day");
}

export function isToday(date: Date | Dayjs) {
  return dayjs().isSame(date, "date");
}

export function isAfterToday(date: Date | Dayjs) {
  return dayjs().isBefore(date, "date");
}
