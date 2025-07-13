//Home_Login_Contact-us
let home = document.getElementById("Home");
home.onclick=function(){
    window.location.href='index.html';
}
let login = document.getElementById("Login");
login.onclick=function(){
    window.location.href='../login_registration_contactus/login.html';
}
let contact_us = document.getElementById("Contact-Us");
contact_us.onclick=function(){
    window.open('../login_registration_contactus/contactus.html');
}
//Movie---------------------------------------------------------------------------------------
let django_unchained = document.getElementById("django_unchained");
django_unchained.onclick=function(){
    window.location.href='../Movies_Page/django unchained/django_unchained.html';
}
let El_Nazer = document.getElementById("El_Nazer");
El_Nazer.onclick=function(){
    window.location.href='../Movies_Page/El_Nazer/El_Nazer.html';
}
let fight_club = document.getElementById("fight_club");
fight_club.onclick=function(){
    window.location.href='../Movies_Page/fight_club/fight_club.html';
}
let goodfellas = document.getElementById("goodfellas");
goodfellas.onclick=function(){
    window.location.href='../Movies_Page/goodfellas/Good_Fellas.html';
}
let Home_Alone = document.getElementById("Home_Alone");
Home_Alone.onclick=function(){
    window.location.href='../Movies_Page/Home_Alone/Home_Alone.html';
}
let la_la_land = document.getElementById("la_la_land");
la_la_land.onclick=function(){
    window.location.href='../Movies_Page/la_la_land/la_la_land.html';
}
let Mulholland_drive = document.getElementById("Mulholland_drive");
Mulholland_drive.onclick=function(){
    window.location.href='../Movies_Page/Mulholland_drive/Mulholland_drive.html';
}
let Once_upon_a_time_in_hollywood = document.getElementById("Once_upon_a_time_in_hollywood");
Once_upon_a_time_in_hollywood.onclick=function(){
    window.location.href='../Movies_Page/Once_upon_a_time_in_hollywood/Once_upon_a_time_in_hollywood.html';
}
let spider_man_across_the_spider_verse = document.getElementById("spider_man_across_the_spider_verse");
spider_man_across_the_spider_verse.onclick=function(){
    window.location.href='../Movies_Page/spider_man_across_the_spider_verse/spider_man_across_the_spider_verse.html';
}
//TV---------------------------------------------------------------------------------------
let From = document.getElementById("from");
From.onclick=function(){
    window.location.href='../Tv_pages/From design/from.html';
}
let Wednesday = document.getElementById("Wednesday");
Wednesday.onclick=function(){
    window.location.href='../Tv_pages/Wednesday design/wednesday.html';
}
let Silo = document.getElementById("Silo");
Silo.onclick=function(){
    window.location.href='../Tv_pages/Silo design/silo.html';
}
//Transfer-Watch Button---------------------------------------------------------------------------------------------

let small_pic=document.getElementById("Small_pic");
let big_pic=document.getElementById("Big_pic");

let transfer = document.getElementById("transfer");
let paragraph=document.getElementById("Paragraph");
let Watch = document.getElementById("Watch");

let big_picArray =['img/background/back1.jpg','img/background/back3.jpg','img/background/back2.jpg','img/background/back4.jpg'];
let small_picArray=['img/typography/tybatnam.png','img/typography/tyinception.png','img/typography/The-matrix-logo.svg.png','img/typography/Harry_Potter_i_Kamień_Filozoficzny_–_logo_filmu1.jpg'];

let paragraphArray =["When a sadistic serial killer begins murdering key political figures in Gotham,\nthe Batman is forced to investigate the city's hidden corruption and question his family's involvement",
"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting \nan idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
"When a beautiful stranger leads computer hacker Neo to a forbidding underworld,\n he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
"An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself,\n his family and the terrible evil that haunts the magical world."];
let i = 1;
let s = 1;

transfer.onclick = function(){
    big_pic.src=big_picArray[i];
    small_pic.src=small_picArray[i];
    paragraph.innerText=paragraphArray[i];
    i++;
    s=i;

    if (i >= small_picArray.length) {
        i = 0;

    }
}
Watch.onclick = function () {
    if (s == 1) {
        window.location.href = '../Movies_Page/The_Batman/The_Batman.html';
    } else if (s == 2) {
        window.location.href = '../Movies_Page/inception/inception.html';
    } else if (s == 3) {
        window.location.href = '../Movies_Page/The_matrix/The_matrix.html';
    } else if (s == 4) {
        window.location.href = '../Movies_Page/Harry-Potter/Harry_Potter.html';
    }
};

//scrol--------------------
let scroll=document.getElementById('scroll');
    
let right = document.getElementById('right');

right.onclick = function(){
    scroll.scrollBy(200,0);
};
let left = document.getElementById('left');

left.onclick = function(){
    scroll.scrollBy(-200,0);
};
//------------------------
let scroll1=document.getElementById('scroll1');
    
let right1 = document.getElementById('right1');

right1.onclick = function(){
    scroll1.scrollBy(200,0);
};
let left1 = document.getElementById('left1');

left1.onclick = function(){
    scroll1.scrollBy(-200,0);
};
//----------------------------
let scroll2=document.getElementById('scroll2');
    
let right2 = document.getElementById('right2');

right2.onclick = function(){
    scroll2.scrollBy(200,0);
};
let left2 = document.getElementById('left2');

left2.onclick = function(){
    scroll2.scrollBy(-200,0);
};
//------------------------------
let scroll3=document.getElementById('scroll3');
    
let right3 = document.getElementById('right3');

right3.onclick = function(){
    scroll3.scrollBy(200,0);
};
let left3 = document.getElementById('left3');

left3.onclick = function(){
    scroll3.scrollBy(-200,0);
};
// let scroll1=document.getElementById('scroll1');
// let right1 =document.getElementById('right1');
// let left1 = document.getElementById('left1');

// right1.onclick = function(){
//     scroll1.scrollBy(200,0)
// }

// left1.onclick = function(){
//     scroll1.scrollBy(-200,o);
// };


// let scroll2=document.getElementById('scroll2')
// let right2 =document.getElementById('right2')

// right2.onclick = function(){
//     scroll2.scrollBy(200,0)
// }
// let left2 = document.getElementById('left2')
// left2.onclick = function(){
//     scroll2.scrollBy(-200,o)
// }


// let scroll3=document.getElementById('scroll3')
// let right3 =document.getElementById('right3')

// right3.onclick = function(){
//     scroll3.scrollBy(200,0)
// }
// let left3 = document.getElementById('left3')
// left3.onclick = function(){
//     scroll3.scrollBy(-200,o)
// }



// let scroll4=document.getElementById('scroll4')
// let right4 =document.getElementById('right4')

// right4.onclick = function(){
//     scroll4.scrollBy(200,0)
// }
// let left4 = document.getElementById('left4')
// left4.onclick = function(){
//     scroll4.scrollBy(-200,o)
// }
