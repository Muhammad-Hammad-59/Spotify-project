// let search=document.getElementById("search1");
// let searchbar=document.getElementsByClassName("searchhide");

// let check=1;
// function dis(){
   
//         searchbar.classList.add("searchhide");
    

// }

// search.addEventListener('click', dis());



// let search = document.querySelectorAll("#search1");
//         let searchbar = document.querySelector(".searchBar");
       

//         function toggleSearch() {
           
//                 searchbar.classList.remove("searchHide");
                
           
//         }

//         search.addEventListener('click', toggleSearch);


let search = document.querySelector("#search1");
let searchbar = document.querySelector(".searchBar");
let home=document.querySelector(".home");

function toggleSearch() {
    searchbar.classList.remove("searchhide");
}
function homehide(){
    searchbar.classList.add("searchhide");
}
home.addEventListener("click",homehide);

search.addEventListener('click', toggleSearch);

// let fabackword=document.getElementById(fabackward);
// document.addEventListener('DOMContentLoaded', function () {

    let covertime=document.getElementById('covertime');
    let totaltime=document.getElementById('totaltime');
    let progress=document.getElementById('progress');
    let song=document.getElementById('song');

    let fabackword=document.getElementById('fabackward');
    let faforword=document.getElementById('faforward');
    let playbutton=document.getElementById('playbutt');
    let volume1=document.getElementById("volume");
    let speaker=document.getElementById("speaker");

    song.onloadedmetadata=function(){
        progress.max=song.duration;
         
        progress.value=song.currentTime;
        
        
    }
  
    song.volume=volume1.value/100;
    volume1.addEventListener('input', function () {
        song.volume = volume1.value / 100;
    });
   
    function controlsound(){
        if(song.volume===0){
            song.volume=50;
            volume1.value=50;

        }
        else{
            song.volume=0;
            volume1.value=0;
        }
    }
    speaker.addEventListener("click" ,controlsound);
 

  
    function playPause(){
        
        if(playbutton.classList.contains('fa-pause')){
            song.pause();
            playbutton.classList.remove("fa-pause");
            playbutton.classList.add("fa-play");
        }else{
            song.play();
            playbutton.classList.add("fa-pause");
            playbutton.classList.remove("fa-play");
        }
    }
  
    

     let currtime;
     
    if(song.play()){
        setInterval(() => {
            progress.value=song.currentTime;
            currtime=song.currentTime;
            const minutes = Math.floor(currtime / 60);
            const seconds = Math.floor(currtime % 60);
            covertime.innerText=`${minutes}:${seconds}`;
             
        let dur=song.duration;
        console.log(dur);
        const minutess = Math.floor(dur / 60);
        const secondss = Math.floor(dur % 60);
        totaltime.innerText=`${minutess}:${secondss}`;
        
            

        }, 500);
        
    }

    progress.onchange=function(){
        song.play();
        song.currentTime=progress.value;
        playbutton.classList.add('fa-pause');
        playbutton.classList.remove('fa-play');
    }

    
    // function playPause(){
    //     if(playbutton.classList.contains("fa-pause")){
    //         song.pause();
    //         playbutton.classList.remove("fa-pause");
    //         playbutton.classList.add("fa-play");
    
    //     }
    //     else{
    //         song.play();
    //         playbutton.classList.add("fa-pause");
    //         playbutton.classList.remove("fa-play");   
    //     }
    // }
    playbutton.addEventListener("click",playPause);
    
    

   
    // code for the portion of the songs folder and its content  display 

    let parentbox=document.querySelector(".displaySong");
    

    // most listen songs 
    

    // let topsongbox=document.createElement('div');
    // let topboxTitle=document.createElement('div');
    // let textboxtop=document.createElement('div');
    // let showalltop=document.createElement('div');

    // let titlehead=document.createElement('h2');
    // let showalltext=document.createElement('p');
    // topboxTitle.className='topboxtitle';
    // textboxtop.className='textboxtop';
    // showalltop.className='showall';
     
    // topsongbox.className='mostlistenSongs';
   
    // titlehead.id='headtitle';
    // showalltext.id='showallid';
    // titlehead.textContent="Top most listen songs in this month";
    // showalltext.textContent='Show all';


    // textboxtop.appendChild(titlehead);
    // showalltop.appendChild(showalltext);

    // topboxTitle.appendChild(textboxtop);
    // topboxTitle.appendChild(showalltop);
    // topsongbox.appendChild(topboxTitle);
    // parentbox.appendChild(topsongbox);

    // end most listen songs

    
    // songs folder card display
    let songsPlaylist=[
        {
            'images':'music.jpg',
            'foldername':'Bollywood',
            'addinfo':'indian'

        },
        {
            'images':'music2.jpg',
            'foldername':'Hollywood',
            'addinfo':'Pakistanii'
        },
        {
            'images':'music3.jpg',
            'foldername':'Lollywood',
            'addinfo':'American'
        },
        {
            'images':'music4.jpg',
            'foldername':'South Indeian',
            'addinfo':'South Africa'
        },
        {
            'images':'music5.jpg',
            'foldername':'Bollywood',
            'addinfo':'Bangladish'
        },
        {
            'images':'music6.jpg',
            'foldername':'Hollywood',
            'addinfo':'Uinited Kingdom'
        },
        {
            'images':'music7.jpg',
            'foldername':'Hollywood',
            'addinfo':'UAE'
        }
    ]

    let songsPlaylist2=[
        {
            'images':'trip1.jpg',
            'foldername':'Bollywood',
            'addinfo':'indian'

        },
        {
            'images':'trip2.jpg',
            'foldername':'Hollywood',
            'addinfo':'Pakistanii'
        },
        {
            'images':'trip3.jpg',
            'foldername':'Lollywood',
            'addinfo':'American'
        },
        {
            'images':'trip4.jpg',
            'foldername':'South Indeian',
            'addinfo':'South Africa'
        } 
    ]

    // for(let i=0;i<3;i++){

    // let songsfolder=document.createElement('div');
    // songsfolder.className='songsfolders';
    // parentbox.appendChild(songsfolder);

    // let songsfoldertitle=document.createElement('div');
    // songsfoldertitle.className='topboxtitle';
    // songsfolder.appendChild(songsfoldertitle);

    
    // let foldertextbox=document.createElement('div');
    // foldertextbox.className='textboxtop';
    // songsfoldertitle.appendChild(foldertextbox);

    // let foldertitlehead=document.createElement('h2');
    // foldertitlehead.className='foldertitlehead';
    // foldertextbox.appendChild(foldertitlehead);
    // foldertitlehead.innerText="This"

    // let foldershowall=document.createElement('div');
    // foldershowall.className='showall';
    // songsfoldertitle.appendChild(foldershowall);

    // let foldershowalltext=document.createElement('p');
    // foldershowalltext.className='foldershowalltext';
    // foldershowall.appendChild(foldershowalltext);
    // foldershowalltext.textContent='Show all';
    
    
//     let songsfoldercards=document.createElement('div');
//     songsfoldercards.className='cardsbox';
//     songsfolder.appendChild(songsfoldercards);
    
 
    

//     //for(let i=0;i<length.songsPlaylist;i++)
    

    
//     for (let i of songsPlaylist) {
     
//         // outer main box
     
//     let cardmainbox=document.createElement('div');
//     cardmainbox.className='cardmainbox hovereffct';
//     songsfoldercards.appendChild(cardmainbox);

//     // inner box of card 

//     let cardinnerbox=document.createElement('div');
//     cardinnerbox.className='cardinnerbox hovereffct';
//     cardmainbox.appendChild(cardinnerbox);

//     // imeage box in card 

//     let cardimgbox=document.createElement('div')
//     let imgbox=document.createElement('img');
//     imgbox.setAttribute('src' ,i.images)
//     cardimgbox.className='cardimgbox hovereffct';
//     imgbox.className='imgbox';
//     cardimgbox.appendChild(imgbox);
//     cardinnerbox.appendChild(cardimgbox);

//     // card bottom text box portion 

//     let cardtextbox=document.createElement('div');
//     cardtextbox.className='cardtextbox hovereffct';
//     cardinnerbox.appendChild(cardtextbox);
//                 // card text title or heading 
//     let cardtitlebox=document.createElement('div');
//     cardtitlebox.className='cardtitlebox hovereffct';
//     cardtextbox.appendChild(cardtitlebox);
//     let cardtitle=document.createElement('h4');
//     cardtitle.className='cardtitle';
//     cardtitle.id='cardtitleid';
//     cardtitlebox.appendChild(cardtitle);

//     cardtitle.innerText=i.foldername;

//                 // card text explaination 
//     let cardinfobox=document.createElement('div');
//     cardinfobox.className='cardinfobox hovereffct';
//     cardtextbox.appendChild(cardinfobox);

//     let cardinfotext=document.createElement('p');
//     cardinfotext.className='cardinfotext';
//     cardinfobox.appendChild(cardinfotext);
//     cardinfotext.innerText=i.addinfo;

// }
 
    
 


// }


// function titleBar(){
    
// }

    
function mostlistensongs(){

    
    let listensongs=document.createElement('div');
    listensongs.className='mostlistenSongs'







    parentbox.appendChild(listensongs);
}



function playlistsongs(){

    let playlistdisplaybox=document.createElement('div');
    playlistdisplaybox.className='songsfolders';


    parentbox.appendChild(playlistdisplaybox);
    // headtitle();
}
function headtitle(){

    let playlisttitle=document.createElement('div');
    playlisttitle.className='topboxtitle';

    let textbox=document.createElement('div');
    textbox.className='textboxtop';
    playlisttitle.appendChild(textbox);

    let title=document.createElement('h3');
    title.innerText='this is playlist'
    textbox.appendChild(title);



    let showallbox=document.createElement('div');
    showallbox.className='showall';
    playlisttitle.appendChild(showallbox);

    // showall button 
    let showallbutt=document.createElement('button');
    showallbutt.className='showallbutton';
    showallbutt.innerText='Show all';

    showallbox.appendChild(showallbutt);
    


    let box=document.querySelector('.songsfolders');
    box.appendChild(playlisttitle);
}

function cardouterbox(songsPlaylist){

    headtitle();

    let cardmainbox=document.createElement('div');
    cardmainbox.className='cardsbox';
    let box=document.querySelector('.songsfolders');
    box.appendChild(cardmainbox);
    for(let i of songsPlaylist){

        let cardouterlayer=document.createElement('div');
        cardouterlayer.className='cardmainbox hovereffct';
        cardmainbox.appendChild(cardouterlayer);


        // image box 

        let cardimgbox=document.createElement('div')
        let imgbox=document.createElement('img');
        imgbox.setAttribute('src' ,i.images)
        cardimgbox.className='cardimgbox hovereffct';
        imgbox.className='imgbox';
        cardimgbox.appendChild(imgbox);
        cardouterlayer.appendChild(cardimgbox);

        // text box 

    let cardtextbox=document.createElement('div');
    cardtextbox.className='cardtextbox hovereffct';
    cardouterlayer.appendChild(cardtextbox);
                // card text title or heading 
    let cardtitlebox=document.createElement('div');
    cardtitlebox.className='cardtitlebox hovereffct';
    cardtextbox.appendChild(cardtitlebox);
    let cardtitle=document.createElement('h4');
    cardtitle.className='cardtitle';
    cardtitle.id='cardtitleid';
    cardtitlebox.appendChild(cardtitle);

    cardtitle.innerText=i.foldername;

                // card text explaination 
    let cardinfobox=document.createElement('div');
    cardinfobox.className='cardinfobox hovereffct';
    cardtextbox.appendChild(cardinfobox);

    let cardinfotext=document.createElement('p');
    cardinfotext.className='cardinfotext';
    cardinfobox.appendChild(cardinfotext);
    cardinfotext.innerText=i.addinfo;

    }


}

mostlistensongs();
playlistsongs();
cardouterbox(songsPlaylist);
// cardouterbox(songsPlaylist2);
 