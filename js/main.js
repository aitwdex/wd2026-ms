import { codeToText, getSeason } from "./weatherHelper.js";
// ボタンが押されたら天気データ取得
document.getElementById("getBtn").addEventListener("click", () => {
  getWeather();
});

async function getWeather() {
  const url = "https://api.open-meteo.com/v1/forecast?latitude=43.06&longitude=141.35&current_weather=true";
  //エラーへの備え
  try{
  // APIにアクセス→天気データを受け取る
  const response = await fetch(url);
  // 取得したデータ→JSON形式に変換
  const data = await response.json();

  const temp = data.current_weather.temperature;
  const code = data.current_weather.weathercode;

  // 天気コード→日本語に変換
  const weather = codeToText(code);
  // 季節の取得
  const season = getSeason();
  // 取得した季節・天気・気温を表示
  document.getElementById("temp").textContent =
    `${season} / ${weather} / 気温${temp}℃`;
}catch (error) {
    // 通信に失敗したらここに来る
    console.error("取得に失敗しました:", error);
    document.getElementById("temp").textContent = "取得に失敗しました";
  }
}