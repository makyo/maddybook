let scrollThrottled = false;
window.addEventListener("scroll", ev => {
  if (scrollThrottled)
    return;

  setTimeout(() => { scrollThrottled = false }, 50)
  scrollThrottled = true;

  const activePosition = window.scrollY + window.screen.height / 5

  document.querySelectorAll(".nav-highlight").forEach(el => {
    el.classList.remove("active");
    
    const ref = document.getElementById(el.dataset.collection);
    if (ref === null)
      return;
  
    if (activePosition > ref.offsetTop && activePosition < (ref.offsetTop + ref.offsetHeight))
      el.classList.add("active")
  });
});
