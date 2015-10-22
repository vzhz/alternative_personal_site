//###################
//# from http://permadi.com/tutorial/jsImgSlide/index.html
//###################

<SCRIPT LANGUAGE="JavaScript">

  var dimages=new Array();
  var numImages=3;
  dimages[0]=new Image();
  dimages[0].src="/Users/Admin/Desktop/veronica_website/bike_slideshow/DSCN2846.jpg";
  dimages[1]=new Image();
  dimages[1].src="2015-06-16_11.08.37.jpg";
  dimages[2]=new Image();
  dimages[2].src="DSCN2827.jpg";
  // dimages[3]=new Image();
  // dimages[3].src="DSCN3005.jpg";
  // dimages[4]=new Image();
  // dimages[4].src="2015-06-20_14.40.13.jpg";
  // dimages[5]=new Image();
  // dimages[5].src="DSCN2975.jpg";
  // dimages[6]=new Image();
  // dimages[6].src="DSCN2851";
  // dimages[7]=new Image();
  // dimages[7].src="2015-06-17_15.46.21.jpg";
  // dimages[8]=new Image();
  // dimages[8].src="DCSN2905.jpg";
  // dimages[9]=new Image();
  // dimages[9].src="2015-06-15_11.31.58.jpg";
  // dimages[10]=new Image();
  // dimages[10].src="DSCN3022.jpg";
  var curImage=-1;

<!--
//commented b/c use alternative that allows pictures to have nonsquencal names
// var dimages=new Array();
// var numImages=2;
// for (i=0; i<numImages; i++)
// {
//   dimages[i]=new Image();
//   dimages[i].src="images/image"+(i+1)+".jpg";
// }
// var curImage=-1;
function swapPicture()
{
  if (document.images)
  {
    var nextImage=curImage+1;
    if (nextImage>=numImages)
      nextImage=0;
    if (dimages[nextImage] && dimages[nextImage].complete)
    {
      var target=0;
      if (document.images.myImage)
        target=document.images.myImage;
      if (document.all && document.getElementById("myImage"))
        target=document.getElementById("myImage");
  
      // make sure target is valid.  It might not be valid
      //   if the page has not finished loading
      if (target)
      {
        target.src=dimages[nextImage].src;
        curImage=nextImage;
      }
      setTimeout("swapPicture()", 5000);
    }
    else
    {
      setTimeout("swapPicture()", 500);
    }
  }
}
setTimeout("swapPicture()", 5000);
//-->
</SCRIPT>