export const smoothScroll = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 64, 
        behavior: 'smooth'
      });
    }
  };