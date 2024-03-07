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
      this.load.image("rule1","src/assets/rule1.png");
      this.load.image("rule2","src/assets/rule2.png");
      this.load.image("rule3","src/assets/rule3.png");
      this.load.image("rule4","src/assets/rule4.png");

      this.load.image("imageBoutonOk","src/assets/oki.png");
      this.load.image("suivant","src/assets/suivant.png");
      this.load.image("suivant2","src/assets/suivant.png");
      this.load.image("suivant3","src/assets/suivant.png");
      this.load.image("suivant4","src/assets/suivant.png");
      
    }
  
    create() {
     // on place les éléments de fond
     this.add
     .image(0, 0, "rule1")
     .setOrigin(0)
     .setDepth(0);
      var suivant = this.add.image(700, 550, "suivant").setDepth(1);
      click = this.sound.add('click');
      //=========================================================
      //on rend le bouton interratif
      
    
   suivant.setInteractive();
  
  //Cas ou la souris passe sur le bouton play
  suivant.on("pointerover", () => {
    
  });
  
  //Cas ou la souris ne passe plus sur le bouton play
  suivant.on("pointerout", () => {
  
  });


  //Cas ou la sourris clique sur le bouton play :
  // on lance le niveau 1
  suivant.on("pointerup", () => {
   suivant.setVisible(false);

    this.add
    .image(0, 0, "rule2")
    .setOrigin(0)
    .setDepth(0);
     var suivant2 = this.add.image(700, 550, "suivant2").setDepth(1);
     click = this.sound.add('click');
     //=========================================================
     //on rend le bouton interratif
     
   
  suivant2.setInteractive();
 
 //Cas ou la souris passe sur le bouton play
 suivant2.on("pointerover", () => {
   
 });
 
 //Cas ou la souris ne passe plus sur le bouton play


 suivant2.on("pointerup", () => {
     suivant2.setVisible(false);
     this.add.image(0, 0, "rule3").setOrigin(0).setDepth(0);
     var suivant3 = this.add.image(700, 550, "suivant3").setDepth(1);
     click = this.sound.add('click');
     suivant3.setInteractive();
     suivant3.on("pointerover", () => {});
     suivant3.on("pointerup", () => {
      suivant3.setVisible(false);
         this.add.image(0, 0, "rule4").setOrigin(0).setDepth(0);
         var suivant4 = this.add.image(700, 550, "suivant4").setDepth(1);
         click = this.sound.add('click');
         suivant4.setInteractive();
         suivant4.on("pointerover", () => {});
         suivant4.on("pointerup", () => {
          this.scene.start("menu"); 
         });
     });
 });
    
  });

}
} 