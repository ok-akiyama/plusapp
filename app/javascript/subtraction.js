window.addEventListener('load', function(){
  if ( document.getElementById('calculate2')){
  const Button = document.getElementById("calculate2")


  Button.addEventListener('click', function() {
    let li = document.createElement('li');
  let number3 = parseFloat(document.getElementById('number3').value);
  let number4 = parseFloat(document.getElementById('number4').value);

  let result = document.getElementById('calculate2').textContent = number3 - number4;
  let number = document.createTextNode(result);

  li.appendChild(number);

  let lists = document.getElementById('lists');
  lists.appendChild(li);
  
  console.log("click OK")
  })
  }
  
})
