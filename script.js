let menuList = document.getElementById("navItems");
menuList.style.maxHeight = "0px";

function toggleMenu(){
  if(menuList.style.maxHeight == "0px")
  {
    menuList.style.maxHeight = "300px";
  }else{
    menuList.style.maxHeight = "0px";
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const joinUsBtn = document.getElementById('joinbtn');
  const modal = document.getElementById('modal');
  const closeBtn = document.querySelector('.close-btn');
  
  joinUsBtn.addEventListener('click', function(event) {
      event.preventDefault();
      modal.style.display = 'flex';
  });
  
  closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
  });
  
  window.addEventListener('click', function(event) {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  });
  });