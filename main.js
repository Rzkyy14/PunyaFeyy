
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = (' Ecaa...for the first time i know you, i dont expact i have this feeling for you. along with time i feel comfortable  when i talking you, when you start to talked randomly about your daily life, i hope this relation keep moree going:3...soo do you want be my princess ecaa? ').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 50); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};