<script>
    
 function toggle()
{
    var i;
    var xul=document.querySelector('.xul');
    var xli=document.querySelector('nav ul li');
    var xa=document.querySelector('nav ul li a');
    

    
      xul.classList.toggle("xul");
      xa.classList.toggle("xa");  

    for(i=0;i<5;i++)
    {
      xul.children[i].classList.toggle("xli");

    }
 
}
    </script>