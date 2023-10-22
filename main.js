import './style.css'
import 'bootstrap/dist/css/bootstrap-grid.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

const url=document.getElementById('url');
const szovegmeret= document.getElementById('szovegmeret');
url.addEventListener('keyup',urlmod);
szovegmeret.addEventListener('change',szovegmeretvalt);

function urlmod()
{
  let url=document.getElementById("url").value
  document.getElementById("img").src=url

}

function szovegmeretvalt(){
    var meret=document.getElementById('szovegmeret').value;
    meret=parseFloat(meret);
    const text=document.getElementById('szoveg');
    text.style.fontSize=meret+"px";
}