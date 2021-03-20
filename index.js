// ==UserScript==
// @name         挂灯笼
// @namespace    none
// @version      0.1.1
// @description  给所有网站增加灯笼效果
// @grant        none
// @author       songsz
// @include      *://*
// ==/UserScript==

(function(){
  if(window.top !== window) return; // 在iframe中不渲染灯笼
  const style = document.createElement('style');
  // 原版颜色备份
  // const colors_backup = {
  //   suiLight: '#dc8f03',
  //   suiDark: '#ffa500',
  //   deng_box_shadow: 'rgba(250, 108, 0, 1)',
  //   r1: 'rgba(216, 0, 15, 0.8)',
  //   r2: 'rgba(216, 0, 15, 0.1)',
  // }
  const word = '清明'
  // 喜迎清明，黑白配色
  const colors = {
    suiLight: '#ffffff',
    suiDark: '#9b9b9a',
    deng_box_shadow: 'rgb(74,74,74)',
    r1: 'rgba(16, 16, 16, 80%)',
    r2: 'rgba(16, 16, 16, 10%)',
  }
  style.innerHTML = `
.ssz_deng-box {
position: fixed;
top: -20px;
right: -20px;
z-index: 99999;
}
.ssz_deng-box1 {
 position: fixed;
 top: -10px;
 left: 10px;
 z-index: 99999;
}

.ssz_deng-box1 .ssz_deng {
 position: relative;
 width: 120px;
 height: 90px;
 margin: 50px;
 background: ${colors.r1};
 border-radius: 50% 50%;
 -webkit-transform-origin: 50% -100px;
 -webkit-animation: swing 5s infinite ease-in-out;
 box-shadow: -5px 5px 30px 4px ${colors.deng_box_shadow};
}
.ssz_deng {
 position: relative;
 width: 120px;
 height: 90px;
 margin: 50px;
 background: ${colors.r1};
 border-radius: 50% 50%;
 -webkit-transform-origin: 50% -100px;
 -webkit-animation: swing 3s infinite ease-in-out;
 box-shadow: -5px 5px 50px 4px ${colors.deng_box_shadow};
}

.ssz_deng-a {
 width: 100px;
 height: 90px;
 background: ${colors.r2};
 margin: 12px 8px 8px 8px;
 border-radius: 50% 50%;
 border: 2px solid ${colors.suiLight};
}
.ssz_deng-b {
 width: 45px;
 height: 90px;
 background: ${colors.r2};
 margin: -4px 8px 8px 26px;
 border-radius: 50% 50%;
 border: 2px solid ${colors.suiLight};
}

.ssz_xian {
 position: absolute;
 top: -40px;
 left: 60px;
 width: 2px;
 height: 40px;
 background: ${colors.suiLight};
}

.ssz_shui-a {
 position: relative;
 width: 5px;
 height: 20px;
 margin: -5px 0 0 59px;
 -webkit-animation: swing 4s infinite ease-in-out;
 -webkit-transform-origin: 50% -45px;
 background: ${colors.suiDark};
 border-radius: 0 0 5px 5px;
}

.ssz_shui-b {
 position: absolute;
 top: 14px;
 left: -2px;
 width: 10px;
 height: 10px;
 background: ${colors.suiLight};
 border-radius: 50%;
}

.ssz_shui-c {
 position: absolute;
 top: 18px;
 left: -2px;
 width: 10px;
 height: 35px;
 background: ${colors.suiDark};
 border-radius: 0 0 0 5px;
}

.ssz_deng:before {
 position: absolute;
 top: -7px;
 left: 29px;
 height: 12px;
 width: 60px;
 content: " ";
 display: block;
 z-index: 999;
 border-radius: 5px 5px 0 0;
 border: solid 1px ${colors.suiLight};
 background: ${colors.suiDark};
 background: linear-gradient(to right, ${colors.suiLight}, ${colors.suiDark}, ${colors.suiLight}, ${colors.suiDark}, ${colors.suiLight});
}

.ssz_deng:after {
 position: absolute;
 bottom: -7px;
 left: 10px;
 height: 12px;
 width: 60px;
 content: " ";
 display: block;
 margin-left: 20px;
 border-radius: 0 0 5px 5px;
 border: solid 1px ${colors.suiLight};
 background: ${colors.suiDark};
 background: linear-gradient(to right, ${colors.suiLight}, ${colors.suiDark}, ${colors.suiLight}, ${colors.suiDark}, ${colors.suiLight});
}

.ssz_deng-t {
 font-family: 华文行楷,华文楷体,Arial,Lucida Grande,Tahoma,sans-serif;
 font-size: 53px !important;
 color: ${colors.suiLight};
 font-weight: bold;
 line-height: 85px;
 text-align: center;
 user-select:none;
}

.night .ssz_deng-t,
.night .ssz_deng-box,
.night .ssz_deng-box1 {
 background: transparent !important;
}

@-moz-keyframes swing {
 0% {
  -moz-transform: rotate(-10deg)
 }

 50% {
  -moz-transform: rotate(10deg)
 }
 100% {
  -moz-transform: rotate(-10deg)
 }
}

@-webkit-keyframes swing {
 0% {
  -webkit-transform: rotate(-10deg)
 }

 50% {
  -webkit-transform: rotate(10deg)
 }

 100% {
  -webkit-transform: rotate(-10deg)
 }
}
`;
  ;(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(style);

  const div1 = document.createElement('div')
  div1.innerHTML = `
<div class="ssz_deng-box1" id="ssz_box1">
 <div class="ssz_deng">
  <div class="ssz_xian"></div>
  <div class="ssz_deng-a">
   <div class="ssz_deng-b"><div class="ssz_deng-t" id="ssz_chun">${word.split('')[0]}</div></div>
  </div>
  <div class="ssz_shui ssz_shui-a"><div class="ssz_shui-c"></div><div class="ssz_shui-b"></div></div>
 </div>
</div>
`
  ;(document.getElementsByTagName('body')[0] || document.getElementsByTagName('div')[0]).appendChild(div1);

  const div2 = document.createElement('div')
  div2.innerHTML = `
<div class="ssz_deng-box" id="ssz_box">
 <div class="ssz_deng">
  <div class="ssz_xian"></div>
  <div class="ssz_deng-a">
   <div class="ssz_deng-b"><div class="ssz_deng-t" id="ssz_jie">${word.split('')[1]}</div></div>
  </div>
  <div class="ssz_shui ssz_shui-a"><div class="ssz_shui-c"></div><div class="ssz_shui-b"></div></div>
 </div>
</div>
`
  ;(document.getElementsByTagName('body')[0] || document.getElementsByTagName('div')[0]).appendChild(div2);

  document.addEventListener ('mousemove', _sszShowMousePosition, false);
  let _sszLightUpFlag = false
  function _sszShowMousePosition (e){
    const isDown = e.clientY > 220
    const isUp = e.clientY < 225
    if ((isDown && !_sszLightUpFlag) || (isUp && _sszLightUpFlag)) return
    _sszLightUpFlag = !_sszLightUpFlag
    const box1 = document.getElementById('ssz_box1')
    const box = document.getElementById('ssz_box')
    if (isDown) {
      _sszLightUpFlag = false
      box.style.display = 'block'
      box1.style.display = 'block'
    }
    if (isUp) {
      _sszLightUpFlag = true
      box.style.display = 'none'
      box1.style.display = 'none'
    }
  }

})()
