/*CMD
  command: /setup
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

return // remove this for setup

var panel = {
  // Panel title
  title: "Admin Information",
  description: "Please fill here your admin id",
  // order index
  index: 0,
  icon: "key",
  // save button title - default "SAVE"
  button_title: "SAVE",
  // command called on saving
  // not necessary
  /* on_saving:{
     command: "/on-saving",
     // if you need user
     user_id: user_id // Get it via Bot.sendMessage(user.id)
  },
  */
  
  // Fields for this Panel
  // here 1 field only
  fields: [
    {
      name: "ADMIN_ID",
      title: "Rohit",
      description: "you can get your admin_id with BJS Bot.sendMessage(user.id)",
      type: "string",
      placeholder: "982993410",
      // value: 100
    }
    // another fields here
    // if needed
    // ...
  ]
}

AdminPanel.setPanel({
  panel_name: "AdminInfo",
  data: panel
  // force: true // default false - save fields values
});



var panel = {
  title: "Options",
  description: "Options for bot",
  index: 1,
  icon: "hammer",
  fields: [
    {
      name: "InfoChannel",
      title: "Info chanell",
      description: "All transfers will be published in this chanell",
      type: "string",
      placeholder: "@hshshzhjs",
      icon: "notifications"
    }
  ]
}

AdminPanel.setPanel({
  panel_name: "Options",
  data: panel
  // force: true // default false - save fields values
});



var panel = {
  title: "Angry Points",
  description: "Setup for the master Removeable Points",
  index: 2,
  icon: "settings",
  on_saving: {
    command: "/setAngryPoints"
  },
  fields: [
    {
      name: "masterId",
      title: "982993410",
      description:
        "you can get your Master id with BJS Bot.sendMessage(user.telegramid)",
      type: "string",
      placeholder: "982993410"
    },
    {
      name: "maxLimit",
      title: " Angry Points Limit",
      description: "Enter the limit for removing Point for single request",
      type: "integer",
      placeholder: "1"
    },
    {
      name: "hourlyGrowth",
      title: "Angry Points Hourly Growth",
      description: "Amount for Angry Points Growth per hours",
      type: "integer",
      placeholder: "2"
    },
    {
      name: "maxGrowthLimit",
      title: " Angry Points Max Limit",
      description: "Enter the Max limit of angry point each master can have",
      type: "integer",
      placeholder: "50"
    }
  ]
}

AdminPanel.setPanel({
  panel_name: "AngryPoints",
  data: panel
})


Bot.sendMessage("Admin Panels setupped." + 
  "\n\nYour admin id is: ```" + user.id + "```" +
  "\n\nCur chat id is: ```" + chat.id + "```"
)

