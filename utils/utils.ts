/**
 * 글자 자르고 뒤에 ... 붙여서 내용이 더 있다는 것을 표시해주는 함수
 * @param text - 텍스트 내용
 * @param length - 최대로 표시할 텍스트의 길이
 * @returns string with '...'
 */
export function sliceTextWithPeriods(text: string, length: number) {
  return `${text.slice(0, length)}...`;
}
