const playerSize = 3
let startingPosX = 0
let startingPosY = 0

window.addEventListener('load', () => {                         // als pagina geladen is
    console.log(`De pagina is geladen!`);     
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    context.clearRect(0, 0, canvas.width, canvas.height);

    player.update(frameTime, context);
    player.draw(context);

    window.addEventListener('keydown', (event) => {               // als er een toets is ingedrukt     
      console.log(`Er werd een toets ingedrukt! ${event.code}`);  // laat code van toets zien
    //   if (event.code === 'KeyS'){
    //     console.log("The S key was pressed");
    //   };
    });
  
    window.addEventListener('keyup', (event) => {                 // als er een toets is losgelaten
      console.log(`Er werd een toets losgelaten! ${event.code}`); // laat code van toets zien
    });
  });