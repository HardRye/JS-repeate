// lazy load - ленивая загрузка изображений
// что бы не подгружалиь картинки не во viewport
// реализуется через Intersection Observer

const lazyLoad = (target) => {
  const options = {
    rootMargin: "50px 0px",
    threshold: 0, //A number of pixels representing the outer distance off the scrolling area from which to start loading the elements.
  };

  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      // console.log(entry);
      // console.log(entry.target);
      if (entry.isIntersecting) {
        const img = entry.target;
        const imageUrl = img.dataset.lazy;

        img.setAttribute("src", imageUrl);
        img.classList.add("fade-in");

        observer.disconnect();
      }
    });
  }, options);

  io.observe(target);
};

const images = document.querySelectorAll(".section img");
// console.log(images);

images.forEach((image) => {
  lazyLoad(image);
});
