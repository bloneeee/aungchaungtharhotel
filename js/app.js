// Start jQuery Area 

$(document).ready(function(){
    // Start Room Section

    $(".roompopup").magnificPopup({
        type: 'image'
        // other options
    });

    // End Room Section
});

// End jQuery Area

// Start JS Area

// Start Header

// start nav bar

function dropbtn(e){
    // document.getElementById('mydropdown').classList.toggle('show');

    // undefined
    // console.log(this.nextElementSibling);

    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.nextElementSibling);

    e.target.nextElementSibling.classList.toggle("show");
}

function dropfilter(){
    var getsearch, filter, getdropdiv, getlinks, linkvalue;
    getsearch = document.getElementById("search");
    filter = getsearch.value.toUpperCase();
    // getdropdiv = document.getElementById("mydropdown");
    // getlinks = getdropdiv.getElementsByTagName("a");
    getlinks = document.querySelectorAll(".mydropdowns a");
    // console.log(getlinks);

    for(var x = 0; x < getlinks.length; x++){
        // linkvalue = getlinks[x].textContent;
        linkvalue = getlinks[x].textContent || getlinks[x].innerText;
        // console.log(linkvalue);

        // console.log(getlinks[x].textContent);
        // console.log(getlinks[x].innerText)

        if(linkvalue.toUpperCase().indexOf(filter) > -1){
            getlinks[x].style.display = "block";
        }else{
            getlinks[x].style.display = "none";
        }
    }
}

// end nav bar

// start auto background

function* genfun(){
    var index = 8;

    while(true){
        yield index++;

        if(index > 13){
            index = 8;
        }
    }
}

var getgen = genfun();
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);

// var idx = getgen.next().value;
// console.log(idx)
// console.log(idx)
// console.log(idx)

var getheader = document.querySelector("header");
getheader.style.backgroundImage = `url("./assets/img/banner/banner${getgen.next().value}.jpg")`;

function autoload(){
    // console.log(getgen.next().value);
    getheader.style.backgroundImage = `url("./assets/img/banner/banner${getgen.next().value}.jpg")`;
}

setInterval(autoload,2500);

// end auto background

// End Header

// Start Testimonials Section

const getcompanyname = document.querySelector(".companyname");
const getrole = document.querySelector(".role");
const gettestimonial = document.querySelector(".testimonial");

const testimonialdatas  = [
    {
        name: "Rich Start Resturant",
        position: "Our Outlet",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },

    {
        name: "48 Sky Bar Cafe",
        position: "Partner",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },

    {
        name: "Cool Land Swimming Pool",
        position: "Our Client",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },

    {
        name: "52 Beach Hotel",
        position: "Our Branch",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },

    {
        name: "Chaung Thar SPA",
        position: "Our Business",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
]

let idx = 0;
function updatetestimonial(){
    // getcompanyname.textContent = testimonialdatas[idx].name;
    // getrole.textContent = testimonialdatas[idx].position;
    // gettestimonial.textContent = testimonialdatas[idx].text;

    const {name,position,text} = testimonialdatas[idx];

    getcompanyname.textContent = name;
    getrole.textContent = position;
    gettestimonial.textContent = text;

    idx++;

    if(idx > testimonialdatas.length - 1){
        idx = 0;
    }
}

updatetestimonial();
setInterval(updatetestimonial,10000);

// End Testimonials Section

// Start Property Section 

filterby("all");
function filterby(keyword){
    // console.log(keyword);

    var getpropertylists = document.querySelectorAll(".propertylists");
    getpropertylists.forEach(getpropertylist => {
        getpropertylist.classList.remove("activeitems");
        if(getpropertylist.innerText.split(" /")[0].toLowerCase() === keyword.toLowerCase()){
            getpropertylist.classList.add("activeitems");
        }
    });

    var getfilters = document.getElementsByClassName('filters');
    // console.log(getfilters);

    // if(keyword === "all"){
        
    // }
    // for(var x = 0; x < getfilters.length; x++){
    //     // console.log(getfilters[x]);
    //     // console.log(getfilters[x].className.indexOf(keyword) > -1);

    //     removeshowclass(getfilters[x], 'show');
    //     if(getfilters[x].className.indexOf(keyword) > -1){
    //         addshowclass(getfilters[x], 'show');
    //     }
    // }
    
    for(var x = 0; x < getfilters.length; x++){
        // console.log(getfilters[x]);
        // console.log(getfilters[x].className.indexOf(keyword) > -1);

        if(keyword === "all"){
            addshowclass(getfilters[x], 'show');
        }else{
            removeshowclass(getfilters[x], 'show');
            if(getfilters[x].className.indexOf(keyword) > -1){
                addshowclass(getfilters[x], 'show');
            }
        }
    }
}

function addshowclass(ele,opt){
    // console.log(ele);
    var getfilters = ele.className.split(" ");
    // console.log(getfilters);

    var getopt = opt.split(" ");
    // console.log(getopt);
    // console.log(getopt.length);
    // console.log(opt.length);

    for(var y = 0; y < getopt.length; y++){
        // console.log(getopt[y]);
        // console.log(getfilters.indexOf(getopt[y]) === -1);

        if(getfilters.indexOf(getopt[y]) === -1){
            // ele.classList.add(getopt[y]);
            ele.className += " " + getopt[y];
        }
    }
}

function removeshowclass(ele, opt){
    // console.log(ele);
    
    var getfilters = ele.className.split(" ");
    // console.log(getfilters);

    var getopt = opt.split(" ");
    // console.log(getopt);

    for(var z = 0; z < getopt.length; z++){
        if(!(getfilters.indexOf(getopt[z]) === -1)){
            ele.className = ele.className.replace(" " + getopt[z], "");
        }
    }
}

// End Property Section

// End JS Area