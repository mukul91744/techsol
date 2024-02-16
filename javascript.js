const outsideClick = (e) => {
    let container = document.querySelector('.customDrp');
    if (!container.is(e.target) && container.has(e.target).length === 0 && container.is(':visible')) {
        container.removeClass("active");
        $(document).unbind("click", outsideClick);
     }
};

const custmonDropDwon = document.querySelector('.custmonDropDwon');
custmonDropDwon.addEventListener('click',()=> {
    if ($(e.target).hasClass("crossString") || $(e.target).hasClass("bowiro")) {
        return false;
     };
     if ($(e.target).is("a")) {
        return true;
     }

     e.preventDefault();

     console.log(e.target);

     if ($(e.target).hasClass("language") || $(e.target).parent().hasClass("language")) {
        languageFunc();

     }

     if (window.matchMedia('(max-width: 1170px)').matches) {
        document.body.style.overflow = 'hidden';
     }

     if ($(e.target).hasClass("searchCoinDrp")) {
        document.getElementById('tokensearch1').focus();
     }

     if ($(this).next(".customDrp").length) {
        $(this).next(".customDrp").addClass("active");
     } else {
        $(this).children(".customDrp").addClass("active");
     }

     e.stopPropagation();
     $(document).bind("click", outsideClick);
});
let basic_banner_read_btn = false;
const basic_btn = document.querySelector('.custmonDropDwon');
basic_btn.addEventListener('click',function(){
    if (basic_banner_read_btn == false) {
        $(this).text("Read Less");
        $(".basic_banner_text").slideToggle(500);
        basic_banner_read_btn = true;
     } else {
        $(".basic_banner_text").slideToggle(500);
        $(this).text("Read More");
        basic_banner_read_btn = false;
     }
}) ;
const filterToggelBtn = document.querySelectorAll('.filterToggelBtn');
filterToggelBtn.addEventListener('click',()=> {
   const filterToggel = document.getElementsByClassName('filterToggel');
   filterToggel.slideToggle('active');
});
let hideCustomDrp = document.getElementsByClassName('.hideCustomDrp');
hideCustomDrp.addEventListener('click',()=> {
   let customdrp = document.getElementsByClassName('customDrp');
   customdrp.removeClass('active')
});
let closeIcon = document.getElementsByClassName('.closeIcon');
hideCustomDrp.addEventListener('click',()=> {
   let customPopup = document.getElementsByClassName('customPopup');
   customPopup.removeClass('active');
   let commonPopup = document.getElementsByClassName('commonPopup');
   commonPopup.removeClass('active');
   if (!document.querySelector(".headerMain").classList.contains("active")) {
      document.body.style.overflow = 'auto';
   };
});

const mainTable = document.querySelector('.mainTable');
mainTable.addEventListener('scroll',(e)=> {
   let isScroll = e.currentTarget.scrollLeft;
   if (isScroll) {
      $(".ListingTable th:nth-child(3), td:nth-child(3)").addClass("before");
   } else {
      $(".ListingTable th:nth-child(3), td:nth-child(3)").removeClass("before");
   };
});
