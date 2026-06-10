// 天気コードを受け取って、日本語の天気名を返す
export function codeToText(code) {
  if (code === 0) return "快晴 ☀️";
  if (code <= 3) return "晴れ〜曇り ⛅";
  if (code <= 48) return "霧 🌫️";
  if (code <= 67) return "雨 🌧️";
  if (code <= 77) return "雪 ❄️";
  if (code <= 82) return "にわか雨 🌦️";
  return "雷雨 ⛈️";
}

// 季節を判定
export function getSeason() {
  const month = new Date().getMonth() + 1;

  if (month >= 3 && month <= 5) {
    return "春の札幌 🌸";
  }
  if (month >= 6 && month <= 8) {
    return "夏の札幌 ☀️";
  }
  if (month >= 9 && month <= 11) {
    return "秋の札幌 🍁";
  }
  return "冬の札幌 ❄️";
}