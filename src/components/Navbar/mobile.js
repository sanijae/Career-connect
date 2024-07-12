
  // Function to handle the display of the sidebar based on screen width
  function handleSidebarDisplay() {
    var nav_bar = document.querySelector('.navbar')
    if (window.innerWidth > 700) {
        nav_bar.style.display = "flex";
    } 
    else {
        nav_bar.style.display = "none";
    }
}

// Event listener for window resize
window.addEventListener("resize", handleSidebarDisplay);


export const OpenMenu =()=>{
    var nav_bar = document.querySelector('.navbar')
    if(window.innerWidth <= 700){
     if(nav_bar.style.display === 'none'){
       nav_bar.style.display = 'flex'
      }else{
       nav_bar.style.display = 'none'
      }
    }
   }
  export  const CloseMenu =()=>{
     var nav_bar = document.querySelector('.navbar')
     if(window.innerWidth <= 700){
       if(nav_bar.style.display === 'flex'){
         nav_bar.style.display = 'none'
        }
     }
    }