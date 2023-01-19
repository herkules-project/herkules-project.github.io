const overline = document.getElementsByClassName('OverLine');
const StartImage = document.getElementsByClassName('Start-Img');
const height =  document.documentElement.clientHeight;
const StartImageRect = StartImage[0].getBoundingClientRect();
const root = document.querySelector(':root');
const FirstImage = document.getElementsByClassName("ImageFirst");
const SecondImage = document.getElementsByClassName("ImageSecond");

function Sledz(){   
if(StartImageRect.bottom >= 0)
{
root.style.setProperty('--Value',`${window.scrollY/(3/2)}px`);
}
Object.values(overline).forEach((line) =>{
var lineRect = line.getBoundingClientRect();
if(lineRect.bottom >= 0 && lineRect.top - height < 0)
{
line.classList.add('DisplayOverLine');
}
else
{
line.classList.remove('DisplayOverLine');
}
})     
}	
function Picture()
{
FirstImage[0].classList.add('hidden');
SecondImage[0].classList.remove('hidden');
}
function PictureOut()
{
FirstImage[0].classList.remove('hidden');
SecondImage[0].classList.add('hidden');
}
function Picture2()
{
FirstImage[1].classList.add('hidden');
SecondImage[1].classList.remove('hidden');
}
function PictureOut2()
{
FirstImage[1].classList.remove('hidden');
SecondImage[1].classList.add('hidden');
}