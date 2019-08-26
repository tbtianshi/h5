function initRem() {
  var clientWidth = Math.min(
    window.innerWidth || document.body.clientWidth,
    600
  );
  if (clientWidth === 0) {
    setTimeout(() => {
      initRem();
    }, 300);
    return;
  }

  if (navigator.userAgent.includes("SM-G9650")) {
    clientWidth = 374;
  }
  document.getElementsByTagName("html")[0].style.fontSize =
    clientWidth / 7.5 + "px";
}
$(initRem);
