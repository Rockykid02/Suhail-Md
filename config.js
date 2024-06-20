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
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "263780597802";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263780597802";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "By DIGITAL DYNAMO LAB" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_38_06_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODMsXG4gICAgICAgIDg2LFxuICAgICAgICA4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgODksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODYsXG4gICAgICAgIDMsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDY2LFxuICAgICAgICAxNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTIsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyLFxuICAgICAgICAxODcsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjUyLFxuICAgICAgICA2OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTIxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDM5LFxuICAgICAgICA2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzUsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDMxLFxuICAgICAgICA1NSxcbiAgICAgICAgODAsXG4gICAgICAgIDM1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDcwLFxuICAgICAgICA5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIzLFxuICAgICAgICAzMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAzMixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDUxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE2LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDQ0LFxuICAgICAgICA4MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI3LFxuICAgICAgICA5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDcwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDgyLFxuICAgICAgICAzOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDU0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDU5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYyLFxuICAgICAgICA4OCxcbiAgICAgICAgNixcbiAgICAgICAgMjUyLFxuICAgICAgICA5LFxuICAgICAgICA5LFxuICAgICAgICAzMCxcbiAgICAgICAgMixcbiAgICAgICAgNDAsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTkzLFxuICAgICAgICA2OSxcbiAgICAgICAgMixcbiAgICAgICAgMTcxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTI2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ5LFxuICAgICAgICA1MSxcbiAgICAgICAgNDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTYzLFxuICAgICAgICA3MCxcbiAgICAgICAgNixcbiAgICAgICAgODksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmWDY5UUNycGNZdFNIMCt1bDBjZkxoTFpVZU9Sc3FxekU2Q3lSOHgxRmdvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2MzcxNDI5NjU1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTNCODY5MERDMzI5MDhBNTY0OUMxNEZEMTM3NUY2MjRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4ODg3MDk2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzE0Mjk2NTUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwRkM1OUY5MDcyOTlCMTgzNUYwMEY2NzE1N0M4M0FFOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg4ODcwOTZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidDVXdUo3VjNUU2U0QUZUQjhYWHI4UVwiLFxuICBcInBob25lSWRcIjogXCI2YTIzY2FjMi0zYTk1LTRiZTktYTdhZC0xMDE4ZmY2MDhmMTRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkwLFxuICAgICAgNzksXG4gICAgICAyMzIsXG4gICAgICAyMjEsXG4gICAgICAyMCxcbiAgICAgIDIxOSxcbiAgICAgIDQ1LFxuICAgICAgOTIsXG4gICAgICAxNTcsXG4gICAgICAxMTAsXG4gICAgICAxNzEsXG4gICAgICAzNCxcbiAgICAgIDIyOCxcbiAgICAgIDE3OSxcbiAgICAgIDE3NyxcbiAgICAgIDMsXG4gICAgICAxMTIsXG4gICAgICAxNDMsXG4gICAgICA4MSxcbiAgICAgIDE4NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNixcbiAgICAgIDIwMSxcbiAgICAgIDE3NixcbiAgICAgIDE1NCxcbiAgICAgIDQ0LFxuICAgICAgMTIxLFxuICAgICAgMTUsXG4gICAgICAxOTIsXG4gICAgICA4MSxcbiAgICAgIDExNyxcbiAgICAgIDkxLFxuICAgICAgMTM5LFxuICAgICAgMTU4LFxuICAgICAgOTUsXG4gICAgICAyMjEsXG4gICAgICA4NixcbiAgICAgIDE3OCxcbiAgICAgIDIzOCxcbiAgICAgIDI0MCxcbiAgICAgIDIyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSRFpYUVpTNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE0Mjk2NTUwOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDk5NTE1MzE4OTI3OTQ6MTBAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTVIgVGVjaFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lPRnFOUUhFSy9GMExNR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRTJPMmx1NEdMYmNUTEx0Q1VzMjB1aEZJWkpObXp1K0IrakpxZFJPMXh4bz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI3UXlzYm84aVdwTzFVYVJFc1U5cGRXTHhrejVGQ3UvNG5NdkU0UHFWd0lFQ1RWd2w4MHNsNW5vbm50UWNGUE9Ud05NdUpXUnJYbWUrSVhYcFRmV0VBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJtVEtKeW16LzNhUzRaT0FTYnVhM3ZCZmo3YTF0NGQwSTBrV3kwdDlBMGNOK3lBeDhDV0c3TWNaM1h5ZVRhNWNXQWhPak9vWDEyNTM4SzVOd25Qb1ZnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTQyOTY1NTA6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4ODg3MDkxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSjVXXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKNVcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI5bWxRUUl2WGF3SC9vWVVlZWFoU1JVRGdVWDRQWHdNTVBHN0xGOHNDMTBnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNTU4NjQ5NjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjc2MDc2ODUwM1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "Mr Dickson official " , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "DIGITAL DYNAMO LAB",
  packname: process.env.PACK_NAME || "By DIGITAL DYNAMO LAB",
  botname : process.env.BOT_NAME  || "SAGE DICKSON",
  ownername:process.env.OWNER_NAME|| "Mr Dickson",


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
