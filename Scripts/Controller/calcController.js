class calcController {

  constructor(){

    this.initialize();
  }

  initialize(){
    this.getButton();

  }

  execBtn(value){
     switch(value){
      
     }
  }

  addEventListenerAll(element, events, fn){

    events.split(" ").forEach(event => {
        element.addEventListener(event, fn, false);
    });
}

  getButton(){

    let buttons = document.querySelectorAll("div > button");

    buttons.forEach((btn, index) => {
      
      this.addEventListenerAll(btn, "click drag", e=>{
        let textBtn = btn.innerHTML;
        console.log(textBtn);
        this.execBtn(textBtn);

        });
    });
  }
}