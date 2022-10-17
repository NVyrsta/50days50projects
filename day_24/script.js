const header = document.querySelector('#header');
const title = document.querySelector('#title');
const excerpt = document.querySelector('#excerpt');
const profile_img = document.querySelector('#profile_img');
const name = document.querySelector('#name');
const date = document.querySelector('#date');
const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');
setTimeout(getData, 2000);
function getData() {
  header.innerHTML = `<img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-VXEoQZwOvjP96IFoTnyumPUv_isZqTxww&usqp=CAU"
          alt="laptop"
        />`;
  title.innerText = `Lorem ipsum dolor sit amet.`;
  excerpt.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, in.`;
  profile_img.innerHTML = `<img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="face"
            />`;
  name.innerText = `John Doe`;
  date.innerText = `Oct 08, 2020`;
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}
