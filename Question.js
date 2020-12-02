class Question {
    constructor(que) {
        this.que = que;
        this.op1 = createSprite(20, height - 50, width/2 - 10, 150);
        this.op2 = createSprite(20, 170 + 75, width/2 - 10, 150);
        this.op3 = createSprite(width/2 + 10, height - 50, width/2 - 10, 150);
        this.op4 = createSprite(width/2 + 10, 170 + 75, width/2 - 10, 150);
    }

    display(que, right) {
        //display the question
        textSize(30);
        fill("white");
        text("" + this.que, 20, 150);
        console.log(right);

        if(mousePressedOver(right)) {
            score = score + 1;
            ques = ques + 1
            right.tint = "green";
        } else {
            ques = ques + 1;
            right.tint = "green";
        }
        //add image to the options
        this.op1.addImage(que[0]);
        this.op2.addImage(que[1]);
        this.op3.addImage(que[2]);
        this.op4.addImage(que[3]);
    }
}