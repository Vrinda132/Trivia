class Question {
    constructor(question, answer, levelState) {
       this.input = createInput("");
       this.checkButton = createButton("CHECK");

       this.question = question;
       this.answer = ans;
       this.levelState = levelState;
    }
     setElements() {
         this.input.position(width/2-80, height/2);
         this.input.class("customInput");
         this.checkButton.position(width/2-60, height/2+80);
         this.checkButton.class("customButton");
     }

     display() {
        textSize(35);
        fill("white");
        text(this.question, width/3-100, height/2-50);
        this.setElements();
        this.handleMousePressed();
    }

    handleMousePressed(){
        this.checkButton.mousePressed(()=>{
            ans=this.input.value();
            var a = ans.toLowerCase().trim();
            if(a == this.answer) {
                textSize(35);
                fill("white");
                planetState=this.levelState;
                console.log(this.levelState);
            }
        }
        )
    }
}