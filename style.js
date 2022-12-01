let btn = document.querySelectorAll('.mySlides');
let section1 = document.getElementById('sect1');
let section2 = document.getElementById('sect2');
let section3 = document.getElementById('sect3');
let section4 = document.getElementById('sect4');
let section5 = document.getElementById('sect5');
let section6 = document.getElementById('sect6');
let section7 = document.getElementById('sect7');
btn.forEach(function(each) {
    each.onclick = function(list) {
        mine = list.currentTarget.classList;
        if (mine.contains('magic1')) {
           section1.style.display = 'flex';
           section2.style.display = 'none';
           section3.style.display = 'none';
           section4.style.display = 'none';
           section5.style.display = 'none';
           section6.style.display = 'none';
           section7.style.display = 'none';
        } else if (mine.contains('magic2')) {
            section1.style.display = 'none';
            section2.style.display = 'flex';
            section3.style.display = 'none';
            section4.style.display = 'none';
            section5.style.display = 'none';
            section6.style.display = 'none';
            section7.style.display = 'none'; 
        } else if (mine.contains('magic3')) {
            section1.style.display = 'none';
            section2.style.display = 'none';
            section3.style.display = 'flex';
            section4.style.display = 'none';
            section5.style.display = 'none';
            section6.style.display = 'none';
            section7.style.display = 'none'; 
        } else if (mine.contains('magic4')) {
            section1.style.display = 'none';
            section2.style.display = 'none';
            section3.style.display = 'none';
            section4.style.display = 'flex';
            section5.style.display = 'none';
            section6.style.display = 'none';
            section7.style.display = 'none'; 
        } else if (mine.contains('magic5')) {
            section1.style.display = 'none';
            section2.style.display = 'none';
            section3.style.display = 'none';
            section4.style.display = 'none';
            section5.style.display = 'flex';
            section6.style.display = 'none';
            section7.style.display = 'none';
        } else  {
            section1.style.display = 'none';
            section2.style.display = 'none';
            section3.style.display = 'none';
            section4.style.display = 'none';
            section5.style.display = 'none';
            section6.style.display = 'flex';
            section7.style.display = 'none'; 
        } 
     }  
    
});

let btnn = document.querySelectorAll('.bigcontainer');
btnn.forEach(function(each) {
    each.onclick = function() {
            section1.style.display = 'none';
            section2.style.display = 'none';
            section3.style.display = 'none';
            section4.style.display = 'none';
            section5.style.display = 'none';
            section6.style.display = 'none';
            section7.style.display = 'block'; 
    }
})
