/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Developer Pritam - Portfolio",
  description:
    "App Developer, Kodular.io Expert | Learning Flutter | A boy who loves to try every technology.",
  og: {
    title: "Developer Pritam",
    type: "website",
    url: "https://developerpritam.in/",
  },
};

//Home Page
const greeting = {
  title: "Pritam Kumar",
  logo_name: "Developer Pritam",
  nickname: "Developer Pritam",
  subTitle:
    "App Developer, Kodular.io Expert | Learning Flutter | A boy who loves to try every technology.",
  resumeLink:
    "https://github.com/developer-pritam/developer-pritam/Resume.pdf",
  portfolio_repository: "https://github.com/developer-pritam/developer-pritam.github.io",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/developer-pritam",
  // linkedin: "https://www.linkedin.com/in/developerpritam/",
  // gmail: "developerpritam@gmail.com",
  // gitlab: "https://gitlab.com/developerpritam",
  // facebook: "https://www.facebook.com/developerpritam",
  // instagram: "https://www.instagram.com/developerpritam/"
  // Playstore : https://play.google.com/store/apps/dev?id=5601863351707722850

  {
    name: "Github",
    link: "https://github.com/developer-pritam",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/developerpritam/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Playstore",
    link: "https://play.google.com/store/apps/dev?id=5601863351707722850",
    fontAwesomeIcon: "fa-google-play", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#414141", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UC5RkiUA0bhxGx4Mf_HpQLIA",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },

  {
    name: "Twitter",
    link: "https://twitter.com/developerpritam",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/developerpritam/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "App Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Have a 3 year plus of expirence in App Developement in App Inventer Platforms like Kodular.io, Thunkable etc.",
        "⚡ My Apps have over 10K+ installs in Google Play Store.",
        "⚡ Created multiple Apps for clients with highly scalable production ready",
        "⚡ Currently learning Flutter to create Cross-Platform apps.",
      ],
      softwareSkills: [
        {
          skillName: "Kodular",
          fontAwesomeClassname: "fa-brands:kickstarter",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Thunkable",
          fontAwesomeClassname: "vs-t-square",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Niotron",
          fontAwesomeClassname: "noto-letter-n",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "logos-flutter",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Created multiple Websites using Wordpress and Blogger.",
        "⚡ Have a full knowledge of Elementor and Woocommerce.",
        "⚡ Have a decent knowledge of HTML, CSS, PHP.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "logos-php",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "cib-mysql",
         
        },
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "logos-wordpress-icon",
          style: {
          
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Elementor",
          fontAwesomeClassname: "fa-brands:elementor",
          style: {
           
          },
        },
        {
          skillName: "Woocomerce",
          fontAwesomeClassname: "logos-woocommerce",
          style: {
           
            color: "#F7DF1E",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experienced of working on multiple cloud platforms.",
        "⚡ Experience of hosting and maintaining websites on virtual machine instances along with integration of databases.",
        "⚡ Used Firebase Realtime Database and Authentication in Apps as Backend.",
        "⚡ Used Multiple Cloud Platform to create RDP and use locally.",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
      ],
    },
    {
      title: "Digital Marketing and SEO",
      fileName: "DesignImg",
      skills: [
        "⚡ I have a full knowledge of Paid Search, Display Ads, ASO and Social Marketing.",
        "⚡ Grown my Youtube Channel to 16K+ subscriber without any paid promotions.",
        "⚡ Have a good knowledge of Content Research (and Optimization), Keyword Research and Social Media Management.",
      
      ],
      softwareSkills: [
        {
          skillName: "Google Ads",
          fontAwesomeClassname: "logos-google-adsense",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "SEO",
          fontAwesomeClassname: "whh-seo",
          style: {
           
          },
        },
        {
          skillName: "Facebook Ads",
          fontAwesomeClassname: "logos-facebook",
          style: {
            color: "#FF7C00",
          },
        },
    
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/developerpritam",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/impritam45",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/developerpritam",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "DPG Institute of Technology and Management",
      subtitle: "B.Tech. in Computer Science Engineering",
      logo_path: "DPGITM.png",
      alt_name: "DPGITM",
      duration: "2020 - Present",
      descriptions: [
        "⚡ I am a 2nd year student of Computer Science. Taken Addmission in lateral entry.",
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, etc.",
        
      
      ],
      website_link: "http://dpgitm.org",
    },
    {
      title: "Pusa Institute of Technology",
      subtitle: "Diploma in Civil Engineering",
      logo_path: "pitpusa.png",
      alt_name: "PIT Pusa",
      duration: "2017 - 2020",
      descriptions: [
        "⚡ I am completed this 3 year Diploma course in Civil Enginnering.",
        "⚡ I am also completed 2 months of summer Internship in PWD in second year",
        
      ],
      website_link: "http://pitpusa.delhi.gov.in",
    },
    {
      title: "Class 10th from CBSE",
      subtitle: "",
      logo_path: "cbse.png",
      alt_name: "CBSE",
      duration: "2015 - 2017",
      descriptions: [
        "⚡ I got 8.0 CGPA and able to secure 3rd position in my class.",
      ],
      website_link: "http://cbse.gov.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Google Cloud Community Days 2021 Participant",
      subtitle: "- Google Developers",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.linkedin.com/redir/redirect?url=https%3A%2F%2Fdrive%2Egoogle%2Ecom%2Ffile%2Fd%2F1KuOK4c3IYgiIGsp3knp_UnAUsPU9Mgg1%2Fview%3Fusp%3Ddrivesdk&urlhash=T7DP&trk=public_profile_see-credential",
        alt_name: "Pritam: Google Cloud",
        color_code: "#FFFFFF",
    },
    {
      title: "The Fundamentals of Digital Marketing",
      subtitle: "- Google Digital Garage",
      logo_path: "google_logo.png",
      certificate_link:
      "https://www.linkedin.com/redir/redirect?url=https%3A%2F%2Fdrive%2Egoogle%2Ecom%2Ffile%2Fd%2F1Ha5tUG0zoRqShdh4U5RfMxJ3WyaQny-x%2Fview%3Fusp%3Ddrivesdk&urlhash=wSY5&trk=public_profile_see-credential",
      alt_name: "Pritam: Digital Marketing",
      color_code: "#00000099",
    },
    {
      title: "C++ Basics",
      subtitle: "- Programming Hub",
      logo_path: "ph.png",
      certificate_link:
        "https://www.linkedin.com/redir/redirect?url=https%3A%2F%2Fdrive%2Egoogle%2Ecom%2Ffile%2Fd%2F1Gvtfu_W2nOrve5_6eRn3-HjuShVd94gO%2Fview%3Fusp%3Ddrivesdk&urlhash=jjkE&trk=public_profile_see-credential",
      alt_name: "Pritam: C++",
      color_code: "#0C9D5899",
    },
    {
      title: "Basics of CSS",
      subtitle: "- Programming Hub",
      logo_path: "ph.png",
      certificate_link:
        "https://www.linkedin.com/redir/redirect?url=https%3A%2F%2Fdrive%2Egoogle%2Ecom%2Ffile%2Fd%2F1H0I4XaT0ZwMYVlNyn_5oTzO7okA0p1iz%2Fview%3Fusp%3Ddrivesdk&urlhash=UwYe&trk=public_profile_see-credential",
      alt_name: "Pritam: CSS",
      color_code: "#1F70C199",
    },
    {
      title: "HTML",
      subtitle: "- Programming Hub",
      logo_path: "ph.png",
      certificate_link:
        "https://www.linkedin.com/redir/redirect?url=https%3A%2F%2Fdrive%2Egoogle%2Ecom%2Ffile%2Fd%2F1H6vPbkd_kY2mZv2rg05GhHYv9zQhj20r%2Fview%3Fusp%3Ddrivesdk&urlhash=rIhz&trk=public_profile_see-credential",
      alt_name: "Pritam: HTML",
      color_code: "#D83B0199",
    },
    {
      title: "Introduction to Ethical Hacking",
      subtitle: "- Programming Hub",
      logo_path: "ph.png",
      certificate_link:
        "https://www.linkedin.com/redir/redirect?url=https%3A%2F%2Fdrive%2Egoogle%2Ecom%2Ffile%2Fd%2F1H1Y62it8F4VWK5c2jsQhlqlsUyeydY_B%2Fview%3Fusp%3Ddrivesdk&urlhash=BgtB&trk=public_profile_see-credential",
      alt_name: "Pritam: Intro to Ethical Hacking",
      color_code: "#1F70C199",
    },
    {
      title: "PHP Basics",
      subtitle: "- Programming Hub",
      logo_path: "ph.png",
      certificate_link:
        "https://www.linkedin.com/redir/redirect?url=https%3A%2F%2Fdrive%2Egoogle%2Ecom%2Ffile%2Fd%2F1H4c8guh9qaXZlv8WLCr911bBZxzskJhP%2Fview%3Fusp%3Ddrivesdk&urlhash=neU9&trk=public_profile_see-credential",
      alt_name: "Pritam: PHP",
      color_code: "#0C9D5899",
    },
    {
      title: "YouTube SEO Course",
      subtitle: "- Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.linkedin.com/redir/redirect?url=https%3A%2F%2Fwww%2Eudemy%2Ecom%2Fcertificate%2FUC-3e97e9b4-ea84-462b-95ec-21cf3474db90%2F&urlhash=RfWW&trk=public_profile_see-credential",
      alt_name: "Pritam: Youtube SEO",
      color_code: "#1F70C199",
    },
    {
      title: "Web Development Course",
      subtitle: "- MIMO",
      logo_path: "mimo.png",
      certificate_link:
        "https://www.linkedin.com/redir/redirect?url=https%3A%2F%2Fdrive%2Egoogle%2Ecom%2Ffile%2Fd%2F1H-JOKrwq3aIUUdZ1gItfBLxpLkhOGvnh%2Fview%3Fusp%3Ddrivesdk&urlhash=wF0A&trk=public_profile_see-credential",
      alt_name: "Pritam: Web Development",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with startups as well as well stabilished Bussiness in full time or internships and also volunteership some events.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Kodular App Developer",
          company: "Kodular.io",
          company_url: "https://kodular.io/",
          logo_path: "kodular.png",
          duration: "Nov 2017 - PRESENT",
          
          description:
            "Created multiple apps on kodular.io and some other similar App Inventer sites like Thunkable and AppyBuilder (Currently merged in Kodular). Some of thr app is published in Play Store and also has 10K+ installs.",
          color: "#0879bf",
        },
        {
          title: "Computer Operator",
          company: "New Venture Consultants",
          company_url: "http://newventureindia.com/",
          logo_path: "nvc.png",
          duration: "Oct 2020 - Nov 2020",
          location: "Kapashera, New Delhi",
          description:
            "Handle their website and updated their client list and current opening in their website. Also searched new client from internet and find relevant candidates according to the requirements on Naukri.com and some other job portals.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Industrial Training",
          company: "Public Works Department",
          company_url: "https://www.pwddelhi.gov.in",
          logo_path: "pwd.png",
          duration: "July 2019 - July 2019",
          location: "Tilak Nagar, New Delhi",
          description:
            "Completed 1 months of Summer Internship in PWD in a school expansion project.In that project there were additional Class rooms, Libraries, Toilets & Labs were building. I learned about cantiliver beams, cloumn filling etc.",
          color: "#ee3c26",
        },
       
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        
        {
          title: "Internshala Student Partner",
          company: "Internshala",
          company_url: "https://www.internshala.com/",
          logo_path: "isp.png",
          duration: "Jan 2021 - April 2021",
         
          description:
            "Internshala Student Partner is a program for university students to lead the awareness about Internshala and its courses. Under this program, I have organised hands on workshops and seminars to tell Cloud Computing concepts and Internshala courses to students.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I love to create projects that can help people by solving some problem or they can learn something from them. I have created multiple projects here are some of them.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "pritam.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with App Development, Blogging and Social Media Marketing.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://developerpritam.in/blogs",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "742, Near Fun N Food Village, Kapashera, New Delhi - 110037",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/C3K9MVpZpVHbAib56",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 7531813068",
  },
   emailSection: {
    title: "Email",
    subtitle: "developerpritam@gmail.com",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
