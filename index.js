const app = "I don't do much."


function Greetings(greetingWord){
  function helloWorld(){
    if(greetingWord === 'hello world'){
      console.log('NO! you\'re not allowed to greet the world');
    } else {
      console.log("Okay XD");
    }
  }

  function mMounir(){
    return 'Mohammed Mounir';
  }

  return {
    helloWorld,
    mMounir
  }
  
}