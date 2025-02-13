// Función para cambiar las imágenes del carrusel automáticamente
function iniciarCarrusel(seccionId) {
    const carrusel = document.querySelector(`#${seccionId} .carrusel`);
    const fotos = carrusel.querySelectorAll("img");
    let indice = 0;
  
    setInterval(() => {
      fotos[indice].classList.remove("foto-activa");
      indice = (indice + 1) % fotos.length;
      fotos[indice].classList.add("foto-activa");
    }, 3000); // Cambia la imagen cada 3 segundos
  }
  
  // Iniciar carruseles en cada sección
  document.addEventListener("DOMContentLoaded", () => {
    iniciarCarrusel("inicio");
    iniciarCarrusel("Bachillerato");
    iniciarCarrusel("proyectos");
    iniciarCarrusel("contacto");
  });

  // Navegación del carrusel CURSOS.HTML
function moveCarousel(direction) {
    const carousel = document.querySelector('.cursos-carousel');
    const scrollAmount = 320; // Ancho del curso + gap
    carousel.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }
  
  // Selección de curso
  function selectCourse(element) {
    // Quitar selección anterior
    document.querySelectorAll('.curso').forEach(c => c.classList.remove('selected'));
    // Agregar selección nueva
    element.classList.add('selected');
    
    // Centrar curso seleccionado
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }
  
  // Inicialización
  document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar primer curso por defecto
    document.querySelector('.curso').classList.add('selected');
    
    // Manejar desplazamiento con teclado
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') moveCarousel(-1);
      if (e.key === 'ArrowRight') moveCarousel(1);
    });
  });