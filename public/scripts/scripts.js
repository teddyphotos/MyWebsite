activeTheme = 0; // 0 means light/ 1 means dark

function activateDarkMode(){
  if(activeTheme==0){
    //Light theme is active, switches to dark
    activeTheme = 1;
  
    // Changes to Background
      document.getElementById("body-main").style.background = "#212121";
      document.getElementById("navbar-main").style.background = "#333333";
      document.getElementById("navbar-main").style.boxShadow = "0px 0px 10px #000000";
      document.getElementById("featured_tile_1").style.background = "#333333";
      document.getElementById("featured_tile_1").style.boxShadow = "";
      // document.getElementById("featured_tile_2").style.background = "#333333";
      // document.getElementById("featured_tile_2").style.boxShadow = "";
      document.getElementById("featured_tile_3").style.background = "#333333";
      document.getElementById("featured_tile_3").style.boxShadow = "";
      document.getElementById("skill_tile_1").style.background = "#333333";
      document.getElementById("skill_tile_1").style.boxShadow = "";
      document.getElementById("skill_tile_2").style.background = "#333333";
      document.getElementById("skill_tile_2").style.boxShadow = "";
      document.getElementById("skill_tile_3").style.background = "#333333";
      document.getElementById("skill_tile_3").style.boxShadow = "";
      document.getElementById("skill_tile_4").style.background = "#333333";
      document.getElementById("skill_tile_4").style.boxShadow = "";
      document.getElementById("skill_tile_5").style.background = "#333333";
      document.getElementById("skill_tile_5").style.boxShadow = "";
      document.getElementById("skill_tile_6").style.background = "#333333";
      document.getElementById("skill_tile_6").style.boxShadow = "";
      document.getElementById("skill_tile_7").style.background = "#333333";
      document.getElementById("skill_tile_7").style.boxShadow = "";
      document.getElementById("skill_tile_8").style.background = "#333333";
      document.getElementById("skill_tile_8").style.boxShadow = "";
      document.getElementById("skill_tile_9").style.background = "#333333";
      document.getElementById("skill_tile_9").style.boxShadow = "";
      document.getElementById("skill_tile_10").style.background = "#333333";
      document.getElementById("skill_tile_10").style.boxShadow = "";
      document.getElementById("skill_tile_11").style.background = "#333333";
      document.getElementById("skill_tile_11").style.boxShadow = "";
      document.getElementById("skill_tile_12").style.background = "#333333";
      document.getElementById("skill_tile_12").style.boxShadow = "";
      document.getElementById("skill_tile_13").style.background = "#333333";
      document.getElementById("skill_tile_13").style.boxShadow = "";
      document.getElementById("skill_tile_14").style.background = "#333333";
      document.getElementById("skill_tile_14").style.boxShadow = "";
      document.getElementById("skill_tile_15").style.background = "#333333";
      document.getElementById("skill_tile_15").style.boxShadow = "";
      document.getElementById("skill_tile_16").style.background = "#333333";
      document.getElementById("skill_tile_16").style.boxShadow = "";
      document.getElementById("skill_tile_17").style.background = "#333333";
      document.getElementById("skill_tile_17").style.boxShadow = "";
      document.getElementById("skill_tile_18").style.background = "#333333";
      document.getElementById("skill_tile_18").style.boxShadow = "";
      document.getElementById("skill_tile_19").style.background = "#333333";
      document.getElementById("skill_tile_19").style.boxShadow = "";
      document.getElementById("skill_tile_20").style.background = "#333333";
      document.getElementById("skill_tile_20").style.boxShadow = "";
      
      
    // Changes to Shadows

    // Changes to Icons
    document.getElementById("theme-icon").src = "./images/light_icon.png";
    document.getElementById("git-icon").src = "./images/git_light.png";
    document.getElementById("linkedin-icon").src = "./images/linkedin_light.png";
    document.getElementById("twitter-icon").src = "./images/twitter_light.png";
    document.getElementById("kashish-feature-image").src = "./images/kashishgoelblackwhitepng.png";

    // Changes to text
    document.getElementById("my-name").style.color = "#ffffff";
    // document.getElementById("tech_title").style.color = "#bdbdbd";
    document.getElementById("ive_worked_title").style.color = "#ffffff";
    document.getElementById("recent_proj_title").style.color = "#ffffff";
    // document.getElementById("sec_tech_title").style.color = "#ffffff";
    document.getElementById("im_learning_title").style.color = "#ffffff";
    document.getElementById("skill_tile_1").style.color = "#ffffff";
    document.getElementById("skill_tile_2").style.color = "#ffffff";
    document.getElementById("skill_tile_3").style.color = "#ffffff";
    document.getElementById("skill_tile_4").style.color = "#ffffff";
    document.getElementById("skill_tile_5").style.color = "#ffffff";
    document.getElementById("skill_tile_6").style.color = "#ffffff";
    document.getElementById("skill_tile_7").style.color = "#ffffff";
    document.getElementById("skill_tile_8").style.color = "#ffffff";
    document.getElementById("skill_tile_9").style.color = "#ffffff";
    document.getElementById("skill_tile_10").style.color = "#ffffff";
    document.getElementById("skill_tile_11").style.color = "#ffffff";
    document.getElementById("skill_tile_12").style.color = "#ffffff";
    document.getElementById("skill_tile_13").style.color = "#ffffff";
    document.getElementById("skill_tile_14").style.color = "#ffffff";
    document.getElementById("skill_tile_15").style.color = "#ffffff";
    document.getElementById("skill_tile_16").style.color = "#ffffff";
    document.getElementById("skill_tile_17").style.color = "#ffffff";
    document.getElementById("skill_tile_18").style.color = "#ffffff";
    document.getElementById("skill_tile_19").style.color = "#ffffff";
    document.getElementById("skill_tile_20").style.color = "#ffffff";
    document.getElementById("think-different").style.color = "#ffffff";
    document.getElementById("think-different-2").style.color = "#bdbdbd";
    

    

    

  }else{
    // Dark theme is active, switches to light
    activeTheme = 0;

    // Changes to Background
    document.getElementById("body-main").style.background = "#ffffff";
    document.getElementById("navbar-main").style.background = "#ffffff";
    document.getElementById("navbar-main").style.boxShadow = "0px 0px 20px #eeeeee";
    document.getElementById("featured_tile_1").style.background = "#ffffff";
    document.getElementById("featured_tile_1").style.boxShadow = "0px 0px 10px #eeeeee";
    // document.getElementById("featured_tile_2").style.background = "#ffffff";
    // document.getElementById("featured_tile_2").style.boxShadow = "0px 0px 10px #eeeeee";
    document.getElementById("featured_tile_3").style.background = "#fff8e1";
    // document.getElementById("featured_tile_3").style.boxShadow = "0px 0px 10px #eeeeee";
    document.getElementById("skill_tile_1").style.background = "#ffffff";
    document.getElementById("skill_tile_1").style.boxShadow = "0px 0px 5px #e0e0e0";
    document.getElementById("skill_tile_2").style.background = "#ffffff";
    document.getElementById("skill_tile_2").style.boxShadow = "0px 0px 5px #e0e0e0";
    document.getElementById("skill_tile_3").style.background = "#ffffff";
    document.getElementById("skill_tile_3").style.boxShadow = "0px 0px 5px #e0e0e0";
    document.getElementById("skill_tile_4").style.background = "#ffffff";
    document.getElementById("skill_tile_4").style.boxShadow = "0px 0px 5px #e0e0e0";
    document.getElementById("skill_tile_5").style.background = "#ffffff";
    document.getElementById("skill_tile_5").style.boxShadow = "0px 0px 5px #e0e0e0";
    document.getElementById("skill_tile_6").style.background = "#ffffff";
    document.getElementById("skill_tile_6").style.boxShadow = "0px 0px 5px #e0e0e0";
    document.getElementById("skill_tile_7").style.background = "#ffffff";
    document.getElementById("skill_tile_7").style.boxShadow = "0px 0px 5px #e0e0e0";
    document.getElementById("skill_tile_8").style.background = "#ffffff";
    document.getElementById("skill_tile_8").style.boxShadow = "0px 0px 5px #e0e0e0";
    document.getElementById("skill_tile_9").style.background = "#ffffff";
    document.getElementById("skill_tile_9").style.boxShadow = "0px 0px 5px #e0e0e0";
    document.getElementById("skill_tile_10").style.background = "#ffffff";
    document.getElementById("skill_tile_10").style.boxShadow = "0px 0px 5px #e0e0e0";
    document.getElementById("skill_tile_11").style.background = "#ffffff";
    document.getElementById("skill_tile_11").style.boxShadow = "0px 0px 5px #e0e0e0";
    document.getElementById("skill_tile_12").style.background = "#ffffff";
    document.getElementById("skill_tile_12").style.boxShadow = "0px 0px 5px #e0e0e0";
    document.getElementById("skill_tile_13").style.background = "#ffffff";
    document.getElementById("skill_tile_13").style.boxShadow = "0px 0px 5px #e0e0e0";
    document.getElementById("skill_tile_14").style.background = "#ffffff";
    document.getElementById("skill_tile_14").style.boxShadow = "0px 0px 5px #e0e0e0";
    document.getElementById("skill_tile_15").style.background = "#ffffff";
    document.getElementById("skill_tile_15").style.boxShadow = "0px 0px 5px #e0e0e0";
    document.getElementById("skill_tile_16").style.background = "#ffffff";
    document.getElementById("skill_tile_16").style.boxShadow = "0px 0px 5px #e0e0e0";
    document.getElementById("skill_tile_17").style.background = "#ffffff";
    document.getElementById("skill_tile_17").style.boxShadow = "0px 0px 5px #e0e0e0";
    document.getElementById("skill_tile_18").style.background = "#ffffff";
    document.getElementById("skill_tile_18").style.boxShadow = "0px 0px 5px #e0e0e0";
    document.getElementById("skill_tile_19").style.background = "#ffffff";
    document.getElementById("skill_tile_19").style.boxShadow = "0px 0px 5px #e0e0e0";
    document.getElementById("skill_tile_20").style.background = "#ffffff";
    document.getElementById("skill_tile_20").style.boxShadow = "0px 0px 5px #e0e0e0";
    // Changes to Shadows

    // Changes to Icon
    document.getElementById("theme-icon").src = "./images/dark_icon.png";
    document.getElementById("git-icon").src = "./images/git.png";
    document.getElementById("linkedin-icon").src = "./images/linkedin.png";
    document.getElementById("twitter-icon").src = "./images/twitter.png";
    document.getElementById("kashish-feature-image").src = "./images/kashishblackpng.png";

    // Changes to text
    document.getElementById("my-name").style.color = "#212121";
    // document.getElementById("tech_title").style.color = "#212121";
    document.getElementById("ive_worked_title").style.color = "#212121";
    document.getElementById("recent_proj_title").style.color = "#212121";
    // document.getElementById("sec_tech_title").style.color = "#212121";
    document.getElementById("im_learning_title").style.color = "#212121";
    document.getElementById("skill_tile_1").style.color = "#212121";
    document.getElementById("skill_tile_2").style.color = "#212121";
    document.getElementById("skill_tile_3").style.color = "#212121";
    document.getElementById("skill_tile_4").style.color = "#212121";
    document.getElementById("skill_tile_5").style.color = "#212121";
    document.getElementById("skill_tile_6").style.color = "#212121";
    document.getElementById("skill_tile_7").style.color = "#212121";
    document.getElementById("skill_tile_8").style.color = "#212121";
    document.getElementById("skill_tile_9").style.color = "#212121";
    document.getElementById("skill_tile_10").style.color = "#212121";
    document.getElementById("skill_tile_11").style.color = "#212121";
    document.getElementById("skill_tile_12").style.color = "#212121";
    document.getElementById("skill_tile_13").style.color = "#212121";
    document.getElementById("skill_tile_14").style.color = "#212121";
    document.getElementById("skill_tile_15").style.color = "#212121";
    document.getElementById("skill_tile_16").style.color = "#212121";
    document.getElementById("skill_tile_17").style.color = "#212121";
    document.getElementById("skill_tile_18").style.color = "#212121";
    document.getElementById("skill_tile_19").style.color = "#212121";
    document.getElementById("skill_tile_20").style.color = "#212121";
    document.getElementById("think-different").style.color = "#000000";
    document.getElementById("think-different-2").style.color = "#606060";
    

    



  }
}