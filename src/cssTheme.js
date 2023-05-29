function getWeekOfMonth(date) {
  let adjustedDate = date.getDate();
  console.log(adjustedDate);
  let prefixes = ["0", "1", "2", "3", "4"];
  return prefixes[Math.floor(adjustedDate / 7)];
}

const cssTheme = () => {

  // const list = ["#c70039", "#105297", "#a80e4c", "#123456", "#543456"];
  //   var date = new Date();
  //   // console.log(date);
  // let weekno = getWeekOfMonth(date);
  //   // console.log(weekno);
  // const themeMain = list[2];
  // const themeMain = "#696969";
  const themeMain = "#0c2340";

  // const themeMain = "#e99f4c";
  // const themeMain = "#f58f7c";


  return themeMain;
};



export default cssTheme;
