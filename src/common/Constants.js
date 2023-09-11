export const CONFIG = {
  title: "Company Name",
  icon: "FaBars",
  records: [
    {
      title: "Home",
      icon: "FaHome",
      record_type : "type1" ,
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
      title: "Logout",
      icon: "FaSignOutAlt",
      record_type : "heading",
      visibility: "enable",
      action: [
        {
          type: "click",
          cb: function () {
            console.log("Clicked on Home");
          },
        },
      ],
    },
    
    {
      title: "Logout",
      icon: "FaSignOutAlt",
      record_type : "heading",
      visibility: "enable",
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
  type: "top",  
};
