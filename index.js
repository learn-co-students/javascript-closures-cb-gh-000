const app = "I don't do much."

function raspyDoorGuy(){
  const pw = "123";

  function gimme(input){
    if (input === pw) {
      console.log('enter');
    } else {
      console.log('go away');
    }
  }

  function break(money){
    return money >= 50;
  }

  function bribe(money){
    if (break(money)){
      return pw;
    } else {
      console.log('gimme more huh');
    }

    return {
      gimme,
      bribe
    };
  }

}
