"use strict";
const monitor = {
  size: {
    hight: {
      value: 20,
      scale: "cm",
    },
    wigth: {
      value: 50,
      scale: "cm",
    },
  },
  model: "Samsung",
  brightness: 200,
  contrast: 100,
  color: "black",
  dpi: 240,
  resolution: "4k",
};

// const {
//   size: {
//     hight: { scale: hightScale },
//     wigth: { scale: widhtScale },
//   },
//   brightness: monitorBrightness,
//   dpi: monitorDpi,
//   color: monitorColor,
// } = monitor;

// console.log(monitorColor);

const myArr = [10, 20, 30, 40, 50];
const [firstArr, secondArr, ...other] = myArr;
console.log(firstArr, secondArr, other);

function getObject({
  size: {
    wigth: { value: widthValue, scale: widthScale },
    hight: { value: hightValue, scale: hightScale },
  },
  dpi,
  color,
}) {
  return `Color:${color}\nDPI:${dpi}\nWidth:${widthScale} ${widthValue}\nHight:${hightValue} ${hightScale}`;
}
console.log(getObject(monitor));

function numberSearch(start = 0,end = 100){
  let middle = Math.round((start+end)/2);
  while(true){
    const youNumber = confirm(`Ваша число ${middle}`);
    if(youNumber) return middle;
    const notNumber = confirm(`Ваша больше ${middle}`);
    if(notNumber > start){
      start  = middle;
      middle = Math.round((start+end)/2);
    }

}
}