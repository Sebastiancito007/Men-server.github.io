// Mostrar u ocultar el menú de actividades al hacer clic en el botón correspondiente
document.getElementById('activitiesButton').addEventListener('click', function() {
    var activitiesMenu = document.getElementById('activitiesMenu');
    if (activitiesMenu.style.display === 'none') {
      activitiesMenu.style.display = 'block';
    } else {
      activitiesMenu.style.display = 'none';
    }
  });
  