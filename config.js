const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaZypgoIyPtaodVKp61o";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaZypgoIyPtaodVKp61o" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Sir Dickson modes" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "263780597802";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263780597802";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_29_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk0LFxuICAgICAgICAwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3LFxuICAgICAgICA0OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1LFxuICAgICAgICA1MSxcbiAgICAgICAgODEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDY4LFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAzNSxcbiAgICAgICAgNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDMzLFxuICAgICAgICAxODEsXG4gICAgICAgIDMxLFxuICAgICAgICA4NixcbiAgICAgICAgMjE0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNCxcbiAgICAgICAgODIsXG4gICAgICAgIDY3LFxuICAgICAgICA2NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDQ3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDMxLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAzNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAzNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMixcbiAgICAgICAgNDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExLFxuICAgICAgICA1NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDU2LFxuICAgICAgICA5NixcbiAgICAgICAgNDgsXG4gICAgICAgIDM3LFxuICAgICAgICAyOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTYwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDAsXG4gICAgICAgIDczLFxuICAgICAgICAyNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE4LFxuICAgICAgICA0NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTEyLFxuICAgICAgICA4MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDQ3LFxuICAgICAgICAzMixcbiAgICAgICAgMjA4LFxuICAgICAgICA4MixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDU4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDUwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2UTBhN1pIRFh4dGhxSXdtckw0bDZyd1djYmFWV0c2a3VvUVlueW1uYjNzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2MzcxNDI5NjU1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTY3N0UxQkREODEzQzNBMzlFRDYwMDg4OUQwODVENDlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNTExNzM4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzE0Mjk2NTUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyNzgzNzk3REI0MDZBREFCQ0IwMzIzQjdGMEI3N0RGRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI1MTE3NDBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMnA4amc5S1pTLU9kUEQzaFJReE5xd1wiLFxuICBcInBob25lSWRcIjogXCJkOGRhZmJhZC0wYTQzLTRkYTUtODhiMS01YWRkNzk4MzM2OTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNyxcbiAgICAgIDQ4LFxuICAgICAgMjUxLFxuICAgICAgODEsXG4gICAgICAyMDMsXG4gICAgICA0NyxcbiAgICAgIDgzLFxuICAgICAgMjI3LFxuICAgICAgMTkxLFxuICAgICAgMTY2LFxuICAgICAgMzYsXG4gICAgICA2MyxcbiAgICAgIDE2MyxcbiAgICAgIDI1LFxuICAgICAgNDksXG4gICAgICAzLFxuICAgICAgOCxcbiAgICAgIDEyOCxcbiAgICAgIDE0OCxcbiAgICAgIDEwOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTEsXG4gICAgICAxMTksXG4gICAgICAwLFxuICAgICAgMTg1LFxuICAgICAgMTY0LFxuICAgICAgMTEsXG4gICAgICA5MixcbiAgICAgIDI0MixcbiAgICAgIDE3MyxcbiAgICAgIDU5LFxuICAgICAgMTAyLFxuICAgICAgMTMzLFxuICAgICAgMjA5LFxuICAgICAgNzgsXG4gICAgICAxNjcsXG4gICAgICAxNjcsXG4gICAgICAxNjksXG4gICAgICAxODMsXG4gICAgICAxMixcbiAgICAgIDE1NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5TkExWFY5UVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE0Mjk2NTUwOjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDk5NTE1MzE4OTI3OTQ6MTNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiU2FnZSBEaWNrc29uIE1EXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSU9GcU5RSEVQUGlyYlVHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJFMk8ybHU0R0xiY1RMTHRDVXMyMHVoRklaSk5tenUrQitqSnFkUk8xeHhvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImtqWUFma3lFQ1dKQkRsbTJDbWZKZy9UYVZsc3pGbWN6bXorMVhwOHd5RzEzYlViYlFMYlVaQnIzYitPZzJoQWdmL3BDV29WTFBxVS8rWlBHZVB6TkF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInhBcHlZd0pLamJDQndYa0FXNGlKaU80dGZaQkdYclVYbGxiZ2ErV0NEeWpmM2RnVXVEY2N3SnpUc2U0UlE2TXRXNW92a2p4Z3B4K0ZhaVRoT2ErRmhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxNDI5NjU1MDoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI1MTE3MzQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKNVdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUo1Vy5qc29uIjogIntcImtleURhdGFcIjpcIjltbFFRSXZYYXdIL29ZVWVlYWhTUlVEZ1VYNFBYd01NUEc3TEY4c0MxMGc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA1NTg2NDk2MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE2NzYwNzY4NTAzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "Mr me" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : prprprocenv.PACK_Name ||"by Digital Dynamo Lab",
  botname : process.env.BOT_NAME  || "Munchkin",
  ownername:process.env.OWNER_NAME|| "Sage Dickson",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
