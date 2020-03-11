class calcController {

  constructor(){

    this.initialize();
    this.getButton();
    this.display = document.getElementById("display");
    this._operation = [];
    
  }

  initialize(){
    this.display;

  }

  isOperator(value){
    return (["+","-","x","%","÷","√","x²","¹/x","±"].indexOf(value)> -1);
  }

  getLastOperation(){
    return this._operation[this._operation.length-1];
  }

  setLastOperation(value){
    this._operation[this._operation.length-1] = value;
  }

  popValue(value){
    this._operation.pop(value);
  }
  pushValue(value){
    this._operation.push(value);

    // if(this._operation.length >3){}
  }
  execBtn(value){
    // let display = document.getElementById("display");

     switch(value){
      case 'CE':
        this._operation = [];
        console.clear();
        console.log(this._operation);
        display.innerHTML= 0;
        break;

      case 'C':
        display.innerHTML= this._operation;
        break;

      case '←':
        this.addOperation(value);
        display.innerHTML= this._operation;
        break;

      case '÷':
        this.addOperation(value);
        display.innerHTML= this._operation;
        break;

      case '%':
        this.addOperation(value);
        display.innerHTML= this._operation;
        break;

      case '√':
        this.addOperation(value);
        display.innerHTML= this._operation;
        break;

      case 'x²':
        this.addOperation(value);
        display.innerHTML= this._operation;
        break;

      case '¹/x':
        this.addOperation(value);
        display.innerHTML= this._operation;
        break;

      case 'x':
        this.addOperation(value);
        display.innerHTML= this._operation;
        break;

      case '-':
        this.addOperation(value);
        display.innerHTML= this._operation;
        break;

      case '+':
        this.addOperation(value);
        display.innerHTML= this._operation;
        break;

      case '=':
        this.addOperation(value);
        display.innerHTML= this._operation;
        break;

      case ',':
        this.addOperation(value);
        display.innerHTML= this._operation;
        break;

      case '±':
        this.addOperation(value);
        display.innerHTML= this._operation;
        break;

      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        this.addOperation(value);
        display.innerHTML= this._operation;
        break;
      }
  }

  addEventListenerAll(element, events, fn){

    events.split(" ").forEach(event => {
        element.addEventListener(event, fn, false);
    });
  }

  addOperation(value){
    this.pushValue(value);
    console.log(this._operation);

    if (isNaN(this.getLastOperation())){
      
      if(this.isOperator(value)){
      this.setLastOperation(value);
      } else {
      this.pushValue(value);
      }

    } else {

      if (this.isOperator(value)) {
        this.popValue(value);
      } else {
        let newValue = this.getLastOperation().toString() + value.toString();
        this.setLastOperation(newValue);
      }
      console.log(this._operation)
    }

  }  

  getButton(){

    let buttons = document.querySelectorAll("div > button");
    // console.log(buttons);
    buttons.forEach((btn, index) => {
      
      this.addEventListenerAll(btn, "click drag", e=>{
        let textBtn = btn.innerHTML;
        // console.log(textBtn);
        this.execBtn(textBtn);

        });
    });
  }
}