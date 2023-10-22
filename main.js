import './style.css'
import 'bootstrap/dist/css/bootstrap-grid.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

const url=document.getElementById('url');
const szovegmeret= document.getElementById('szovegmeret');
const sorkoz=document.getElementById('sorkozmeret');
const betuszin=document.getElementById('betuszin');
const csere=document.getElementById('csere');
url.addEventListener('keyup',urlmod);
szovegmeret.addEventListener('change',szovegmeretvalt);
sorkoz.addEventListener('change',sorkozmeret);
betuszin.addEventListener('change',szinvaltozas);
csere.addEventListener('click',helcsere);

function helcsere(){

    if ( document.getElementById("img").classList.contains('kep') ){
        document.getElementById('img').classList.remove('kep');
        document.getElementById('img').classList.add('kepjobb');
    }
    else{
        document.getElementById('img').classList.remove('kepjobb');
        document.getElementById('img').classList.add('kep'); 
    }

}

function szinvaltozas(){
    let szin=document.getElementById('betuszin').value;
    const text=document.getElementById('szoveg');
    text.style.color=szin;
}

function sorkozmeret(){
    let sorkozz=document.getElementById('sorkozmeret').value;
    sorkozz=parseFloat(sorkozz);
    const text=document.getElementById('szoveg');
    text.style.lineHeight=sorkozz+"em";
}

function urlmod()
{
  let url=document.getElementById("url").value
  document.getElementById("img").src=url

}

function szovegmeretvalt(){
    var meret=document.getElementById('szovegmeret').value;
    meret=parseFloat(meret);
    const text=document.getElementById('szoveg');
    text.style.fontSize=meret+"pt";
}