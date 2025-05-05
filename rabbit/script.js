function answerLove(isYes) {
    const msgBox = document.getElementById('loveResponse');
    msgBox.classList.remove('d-none');
    msgBox.classList.add('animate__animated', 'animate__heartBeat');
  
    if (isYes) {
      msgBox.innerHTML = "Hì hì :3 💘💘💘";
      msgBox.classList.remove('text-danger');
      msgBox.classList.add('text-success');
    } else {
      msgBox.innerHTML = "Hê hê iu gheeee💘💘";
      msgBox.classList.remove('text-success');
      msgBox.classList.add('text-danger');
    }
  }
  