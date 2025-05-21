document.addEventListener('DOMContentLoaded', function () {
  // Selecciona todos los contenedores con videos de YouTube
  document.querySelectorAll('.youtube-wrapper').forEach(wrapper => {
    wrapper.addEventListener('click', function () {
      const videoId = this.getAttribute('data-video-id');

      // Crea el iframe para el reproductor de YouTube
      const iframe = document.createElement('iframe');
      iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
      iframe.style.width = '100%';
      iframe.style.height = '100%';

      // Limpia el contenedor y agrega el iframe
      this.innerHTML = '';
      this.appendChild(iframe);
    });
  });
});