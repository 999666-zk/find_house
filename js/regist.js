window.onload = function () {
  var send_yan = document.getElementsByClassName("send_yan")[0];
  var timer_yan = null;
  var flag = true;
  var num = 60;
  send_yan.addEventListener("touchstart", function () {
    if (flag) {
      timer_yan = setInterval(function () {
        flag = false;
        num--;
        send_yan.innerHTML = num;
        if (num <= 0) {
          clearInterval(timer_yan);
          flag = true;
          num = 60;
          send_yan.innerHTML = "重新发送";
        }
      }, 1000);
    }
  });
};
