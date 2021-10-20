let count = 1;
let URL;
let thumbnailsElement;
function left(){
  count = count - 1;
  thumbnailsElement = document.querySelector("div.thumbnails");
  thumbnailsElement.children[count].classList.remove('selected');
  if(count==0){
    count = 19;
  }
let mainElement = document.querySelector("div.main>img");
if(count<10){
   URL = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_0" + count + ".jpg";
} else{
  URL = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_" + count + ".jpg";
}
  mainElement.setAttribute('src', URL);
  thumbnailsElement.children[count-1].classList.add('selected');
}
function right(){
  thumbnailsElement = document.querySelector("div.thumbnails");
  thumbnailsElement.children[count-1].classList.remove('selected');
  count = count + 1;
  if(count == 20){
    count = 1 ;
  }
  let mainElement = document.querySelector("div.main>img");
  if(count<10){
     URL = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_0" + count + ".jpg";
  } else{
    URL = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_" + count + ".jpg";
  }
    mainElement.setAttribute('src', URL);
    thumbnailsElement.children[count-1].classList.add('selected');
  }
