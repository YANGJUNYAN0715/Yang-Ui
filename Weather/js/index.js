// @ts-nocheck
window.onload = function () {
  // @ts-ignore
  axios
    .get(
      "https://devapi.qweather.com/v7/weather/3d?location=101010100&key=4426879dbd924be4a3117d52622ceb41"
    )
    .then(function (data) {
      // console.log(data);
      weather(data);
      document.getElementById("cityname").innerHTML = "北京";
    });
  var btn = document.getElementById("location-button");
  var city = document.getElementById("city");
  btn.onclick = function () {
    if (city.value) {
      axios
        .get(
          `https://devapi.qweather.com/v7/weather/3d?location=${
            getLocationCode[city.value]
          }&key=4426879dbd924be4a3117d52622ceb41`
        )
        .then(function (data) {
          // console.log(data);
          weather(data, city.value);
        });
    } else {
      alert("请输入城市名称：");
    }
  };
};
function weather(data, cityName) {
  var cityname = document.getElementById("cityname");
  var location = document.getElementById("location");
  var dateDay = document.getElementById("date-day");
  var weatherTemp = document.getElementById("weather-temp");
  var weatherDesc = document.getElementById("weather-desc");
  var icon1 = document.getElementById("icon1");
  cityname.innerHTML = cityName;
  location.innerHTML = "日出时间:" + data.data.daily[0].sunrise;
  dateDay.innerHTML = data.data.updateTime.slice(0, 10);
  weatherTemp.innerHTML =
    (parseInt(data.data.daily[0].tempMax) +
      parseInt(data.data.daily[0].tempMin)) /
      2 +
    "°C";
  weatherDesc.innerHTML = data.data.daily[0].textDay;
  icon1.classList.remove(icon1.classList.item(0));
  icon1.classList.add(`qi-${data.data.daily[0].iconDay}`);

  var humidity = document.getElementById("humidity");
  var wind = document.getElementById("wind");
  var moonPhase = document.getElementById("moon-phase");

  humidity.innerHTML = data.data.daily[0].humidity + "%";
  wind.innerHTML = data.data.daily[0].windSpeedDay + "m/s";
  moonPhase.innerHTML = data.data.daily[0].moonPhase;

  var day1 = document.getElementById("day1");
  var span1 = day1.getElementsByTagName("span");
  var icon2 = document.getElementById("icon2");

  var day2 = document.getElementById("day2");
  var span2 = day2.getElementsByTagName("span");
  var icon3 = document.getElementById("icon3");

  icon2.classList.remove(icon2.classList.item(0));
  icon2.classList.add(`qi-${data.data.daily[1].iconDay}`);
  icon3.classList.remove(icon3.classList.item(0));
  icon3.classList.add(`qi-${data.data.daily[2].iconDay}`);

  span1[0].innerHTML =
    "平均" +
    (parseInt(data.data.daily[1].tempMax) +
      parseInt(data.data.daily[1].tempMin)) /
      2 +
    "°C";

  span2[0].innerHTML =
    "平均" +
    (parseInt(data.data.daily[2].tempMax) +
      parseInt(data.data.daily[2].tempMin)) /
      2 +
    "°C";
}
var getLocationCode = {
  北京: "101010100",
  杭州: "101210101",
  上海: "101020100",
  天津: "101030600",
  武汉: "101200101",
  广州: "101280101",
  香港: "101320101",
  嘉兴: "101210301",
  宁波: "101210401",
  西安: "101050311",
  呼和浩特: "101080101",
  海淀: "101010200",
  成都: "101270101",
  石家庄: "101090101",
  南京: "101190101",
  苏州: "101190402",
};
