export const CONFIG = {
  title: "Company Name",
  icon: "FaBars",
  records: [
    {
      title: "Home",
      icon: "FaHome",
      record_type : "title" ,
      visibility: "enable",
      action: [
        {
          type: "hover",
          cb: function () {
            console.log("Clicked on Home");
          },
        },
      ],
    },
    {
      title: "Contact us",
      icon: "BiSupport",
      record_type : "title" ,
      visibility: "enable",
      action: [
        {
          type: "hover",
          cb: function () {
            console.log("Clicked on Home");
          },
        },
      ],
    },
    {
      record_type :  "separator " ,
      visibility: "disable",
    },
    {
      record_type :  "heading " ,
      header : "Auth",
      visibility: "enable",
    },
    

    {
      title: "Logout",
      icon: "FaSignOutAlt",
      record_type : "title",
      visibility: "disable",
      action: [
        {
          type: "click",
          cb: function () {
            console.log("Clicked on Home");
          },
        },
      ],
    },
    
   
  ],
  type: "left",  
};
