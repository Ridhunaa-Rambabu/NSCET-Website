function menu_func() {
  var exit = document.getElementById("exit-cls");
  var menu = document.getElementById("menu-cls");

  if (exit.style.display=='none'){
    document.getElementById("exit-cls").style.display = 'block';
    document.getElementById("menu-cls").style.display = 'none';
  }
  else{
    document.getElementById("exit-cls").style.display = 'none';
    document.getElementById("menu-cls").style.display = 'block';
  }


}