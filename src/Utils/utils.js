import account from '../Assets/account_circle.svg';
import dashboard from '../Assets/equalizer.svg'
import flag from '../Assets/flag.svg'
import clip from '../Assets/clipboard-text.svg'
import jobs from '../Assets/paperplane.svg'
import folder from '../Assets/folder.svg';


export const navList = [
    {
        link: "/",
        type: "dashboard",
        text: "Dashboard",
        icon: clip
      },
      {
        link: "/jobs",
        type: "jobs",
        text: "Jobs",
        icon: jobs
      },
      {
        link: "/reports",
        type: "reports",
        text: "Reports",
        icon: folder
      },
      {
        link: "/account",
        type: "account",
        text: "Account",
        icon: account
      },

]