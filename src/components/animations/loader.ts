import anime from 'animejs';

const animate = (onComplete: { (): void }): void => {
  const loader = anime.timeline({
    complete: onComplete,
  });

  loader
    .add({
      targets: '#logo path',
      delay: 500,
      duration: 2000,
      easing: 'easeInOutQuart',
      strokeDashoffset: [anime.setDashoffset, 0],
    })
    .add({
      targets: 'svg #K',
      duration: 800,
      easing: 'easeInOutQuart',
      opacity: 1,
    })
    .add({
      targets: '#logo',
      delay: 700,
      duration: 300,
      easing: 'easeInOutQuart',
      opacity: 0,
      scale: 0.1,
    })
    .add({
      targets: '.loader',
      duration: 200,
      easing: 'easeInOutQuart',
      opacity: 0,
      zIndex: -1,
    });
};

export default animate;
