module.exports = {
  // presets : 일일이 따로 명시해야 되는 js 기능을 한번에 지원하는 패키지
  presets: ["@babel/preset-env"],
  // 비동기 처리를 위한 패키지
  plugins: [["@babel/plugin-transform-runtime"]],
};
