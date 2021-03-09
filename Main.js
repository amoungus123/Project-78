var images = [
    "https://www.how-to-draw-funny-cartoons.com/image-files/cartoon-dad-006.jpg",
    "https://www.how-to-draw-funny-cartoons.com/image-files/cartoon-mom-005.jpg",
    "https://www.drawingnow.com/file/videos/image/how-to-draw-a-kawaii-girl-1.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT3_J8tTk3jmYJLs7yVBcYxzDcowj8WSCMlA&usqp=CAU", 
    "https://image.shutterstock.com/image-vector/love-my-family-260nw-448420321.jpg",
]

var names = [
    "Vinay Goutham Pullela",
    "Sushma Pidikiti",
    "Vaishnavi Pullela",
    "Naitik Pullela",
]

var i=0;
var n=0;

function change() {
    if (i==4)
    {
        i=0;
    }
    document.getElementById(fam).src=images[i];
    i++;
}



function change() {
    if (n==4)
    {
        n=0;
    }
    document.getElementById(fam).src=names[n];
    n++;
}