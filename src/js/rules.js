import * as fct from "/src/js/fonctions.js";
var click;
export default class rules extends Phaser.Scene {
    constructor() {
      super({ key: "rules" });
    }
    
    //on charge les images
    preload() {
      this.load.audio('click', 'src/assets/click.mp3');    
      this.load.image("rules_fond","src/assets/rule.jpg");
      this.load.image("imageBoutonOk","src/assets/ok.jpg");
      
    }
  
    create() {
     // on place les éléments de fond
      this.add
        .image(0, 0, "rules_fond")
        .setOrigin(0)
        .setDepth(0);
  
      //on ajoute un bouton de clic, nommé bouton_play
      var bouton_ok = this.add.image(400, 400, "imageBoutonOk").setDepth(1);
     
      click = this.sound.add('click');
      //=========================================================
      //on rend le bouton interratif
      bouton_ok.setInteractive();
  
      //Cas ou la souris passe sur le bouton play
      bouton_ok.on("pointerover", () => {
        
      });
      
      //Cas ou la souris ne passe plus sur le bouton play
      bouton_ok.on("pointerout", () => {
      
      });
  
  
      //Cas ou la sourris clique sur le bouton play :
      // on lance le niveau 1
      bouton_ok.on("pointerup", () => {
        click.play();
        this.scene.start("menu");
      });
    }
  } 