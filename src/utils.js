export function upLoadMore(dom,callback){
  //给DOM绑定滚动事件
  let timer;
  dom.addEventListener('scroll',function(event){
    //如果以前设置过定时器则取消定时器
    if(timer)clearTimeout(timer);
    timer = setTimeout(function(){
      let height = dom.clientHeight;
      let scrollHeight = dom.scrollHeight;
      let scrollTop = dom.scrollTop;
      //如果本身的高度+向上卷去的高度已经大于等于内容的高度
      if(scrollTop+height+10>=scrollHeight){
        callback();
      }
    },100);
  });
}
//下拉刷新
export function downRefresh(dom,callback){
  let startY;//刚开始的时候的纵坐标的位置
  let distance;//一共拉的距离
  let originTop = dom.offsetTop;//先记录最原始的top// 56px
  dom.addEventListener('touchstart',touchStart);
  function touchStart(event){
    startY = event.touches[0].pageY;//按下那个点的初始值
    if(dom.offsetTop==originTop && dom.scrollTop==0){
      dom.addEventListener('touchmove',touchMove);
      dom.addEventListener('touchend',touchEnd);
    }
    function touchMove(event){//鼠标移动事件
      let pageY = event.touches[0].pageY;
      if(pageY>startY){//如果新的纵坐标大于旧的坐标的话，则为下拉
        distance = pageY - startY;//计算总共移动的距离
        //新的top值等于最原始的top+触摸移动的距离
        dom.style.top = originTop+distance+'px';
      }else{
        dom.removeEventListener('touchmove',touchMove);
        dom.removeEventListener('touchend',touchEnd);
      }
    }
    function touchEnd(){//触摸结束事件
      dom.removeEventListener('touchmove',touchMove);
      dom.removeEventListener('touchend',touchEnd);
      //开始定时器，每隔14毫秒让top值减少1像素,因为有可能不是整数，
       /*let timer = setInterval(function(){
       dom.style.top = dom.offsetTop-1+'px';
       if(dom.offsetTop<=originTop){
       dom.style.top = originTop;
       clearInterval(timer);
       }
       },14);*/
      let timer = setInterval(function(){
        dom.style.top = originTop+(--distance)+'px';
        if(distance<1){
          dom.style.top = originTop+'px';
          clearInterval(timer);
        }
      },14);
      if(distance>50){
        callback();//如果拉的距离大于了50像素，就可以刷新了
      }
    }



  }
}