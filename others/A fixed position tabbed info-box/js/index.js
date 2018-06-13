/*//get all li
var aLi = document.querySelectorAll('.info-box li a');
//get all article
var aPanel = document.querySelectorAll('.info-box article');

for(i = 0; i < aLi.length; i++) {
  var tab = aLi[i];
  setTabHandler(tab, i);
}
//编写函数
function setTabHandler(tab, tabPos) {
  //对应li点击事件
  tab.onclick = function() {
    //移除所有的li的classname；
    for(i = 0; i < aLi.length; i++) {
      if(aLi[i].getAttribute('class')) {
        aLi[i].removeAttribute('class');
      }
    }
    //为当前的点击对象加上classname
    tab.setAttribute('class', 'active');
    //清除所有article的classname
    
    for(i = 0; i < aPanel.length; i++) {
      if(aPanel[i].getAttribute('class')) {
        aPanel[i].removeAttribute('class');
      }
    }
    //为当前的article添加classname
     aPanel[tabPos].setAttribute('class', 'active-panel');
  }
}*/

//get li&&article
//
let aLi = document.querySelectorAll('.info-box li');

let aPanel = document.querySelectorAll('.info-box article');


for(let i=0;i<aLi.length;i++){
  var tab = aLi[i];
  tab.onclick = function(){
    for(j=0;j<aLi.length;j++){
      if(aLi[j].getAttribute('class')){
        aLi[j].removeAttribute('class');
      }
    }
    tab.setAttribute('class','active');

    for(j=0;j<aPanel.length;j++){
      if(aPanel[j].getAttribute('class')){
        aPanel[j].removeAttribute('class');
      }
    }
    aPanel[i].setAttribute('class','active-panel');
  }
}