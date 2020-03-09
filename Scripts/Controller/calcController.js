class calcController {

  constructor(){

    this.initialize();
  }

  initialize(){
    this.getButton();

  }

  execBtn(){
    // switch()
  }

  getButton(){

    // let buttons = document.querySelectorAll("div > #buttons");
    let buttons = document.getElementById("buttons");
    console.log(buttons);

    // buttons.forEach(btn => {
    //   document.addEventListener("click", e=>{
    //     console.log(e);
    //   });
    // });

    buttons.forEach((btn, index) => {
      
      document.addEventListener("click", e=>{
        let textBtn = btn.innerHTML;
        console.log(e);
        this.execBtn(textBtn);
        });
    });
  }
}