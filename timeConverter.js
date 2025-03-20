/**
 * 초를 시:분:초 형식으로 변환하는 함수
 * @param {number} seconds - 변환할 초
 * @returns {string} HH:MM:SS 형식의 시간
 */
function secondsToTime(seconds) {
  // 음수 처리
  if (seconds < 0) {
    return "00:00:00";
  }

  // 시, 분, 초 계산
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  // 2자리 숫자로 포맷팅
  const formatNumber = (num) => num.toString().padStart(2, "0");

  // 결과 반환
  return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(
    remainingSeconds,
  )}`;
}

// 사용 예시
console.log(secondsToTime(3661)); // "01:01:01"
console.log(secondsToTime(7384)); // "02:03:04"
console.log(secondsToTime(0)); // "00:00:00"
console.log(secondsToTime(-1)); // "00:00:00"
