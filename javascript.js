var slideIndex = 0;
showSlides();
function showSlides() 
{
  console.log("hi");
 	var slides = document.getElementsByClassName("myimage");
 	for (var i = 0; i < slides.length; i++)
 	 {
    console.log("hi");
 		 slides[i].style.display = "none";
 	 }
 	slideIndex++;
 	if (slideIndex >= slides.length)
 	 {
 		 slideIndex = 0;
 	 }
 	slides[slideIndex].style.display = "block";
 	setTimeout(showSlides, 4000);
}
