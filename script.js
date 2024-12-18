document.querySelector('.btn-imagen').addEventListener('click', function() {
    const nuevaImagen = this.getAttribute('data-imagen');
    this.querySelector('img').src = nuevaImagen;
  });
  