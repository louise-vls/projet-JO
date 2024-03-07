var click;


export default class gameover extends Phaser.Scene {
    constructor() {
      super({ key: "gameover" });
    }
    //on charge les images
    preload() {
      this.load.audio('click', 'src/assets/click.mp3'); 
      this.load.image("perdu_fond","src/assets/perdu.png");
      this.load.image("imageBoutonOki","src/assets/oki.png");
    }
  
    create() {
     // on place les éléments de fond
      this.add
        .image(0, 0, "perdu_fond")
        .setOrigin(0)
        .setDepth(0);
        click = this.sound.add('click');
      //on ajoute un bouton de clic, nommé bouton_play
      var bouton_play = this.add.image(400, 500, "imageBoutonOki").setDepth(1);
      
     
      //=========================================================
      //on rend le bouton interratif
      bouton_play.setInteractive();
  
      //Cas ou la souris passe sur le bouton play
      bouton_play.on("pointerover", () => {
        
      });
      
      //Cas ou la souris ne passe plus sur le bouton play
      bouton_play.on("pointerout", () => {
      
      });
  
  
      //Cas ou la sourris clique sur le bouton play :
      // on lance le niveau 1
      bouton_play.on("pointerup", () => {
        this.game.config.score=0;
        this.scene.start("menu");
      });

    }
}