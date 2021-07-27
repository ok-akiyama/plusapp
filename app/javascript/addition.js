window.addEventListener('load', function(){
  if ( document.getElementById('calculate')){
  const Button = document.getElementById("calculate")


  Button.addEventListener('click', function() {
    let li = document.createElement('li');
  let number1 = parseFloat(document.getElementById('number1').value);
  let number2 = parseFloat(document.getElementById('number2').value);

  let result = document.getElementById('calculate').textContent = number1 + number2;
  let number = document.createTextNode(result);

  li.appendChild(number);

  let lists = document.getElementById('lists');
  lists.appendChild(li);
  
  console.log("click OK")
  })
  }
  
})
