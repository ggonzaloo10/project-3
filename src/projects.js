let projects = [
    {
        id: "personal-web",
        theme: 'dark',
        buttontheme: 'button_dark',
        title: "Personal Web",
        subtitle: " Made with html, css and Sass.",
        imagecover: "/coverpersonalweb.png",
        wireframespic: "/wireframes-personalweb.png",
        period: "2021",
        url: "https://frontend.esatid3-2021.com/gonzalo/about%20me%20gonzalo/index.html",
        introduction: "This About Me web is the first website I’ve ever made using the most common languages for website development: HTML5 and CSS3. With this project, I tried to show who is Gonzalo both, professionally and personally, talking a bit about myself, my hobbies, my skills and some of my previous studies. ",
        analysis: "For this project, I wanted to created something simple and functional, like a one page website. I used a palette with a range of blues, in order to convey freedom, loyalty, harmony, fidelity and truth; qualities I think a profesional profile should convey. Including some yellow creates contrast in case I wanted to highlight an important point. The main idea was to create 4 differents cards (information about myself, skills, tools and contact) represented by 4 icons. This cards would appear as you click on them.",
        titletext1: "Components",
        img1text1: "/colors-personal-web.png",
        img2text1: "/icons-personal-web.png",
        titletext2: "Fonts: Montserrat & Outfit",
        img1text2: "/fonts-personal-web.png",
        titletext3: "SVGs illustrations",
        img1text3: "/crossfit-hobby-personal-web.png",
        img2text3: "/astronomy-hobby-personal-web.png",
        finalresult: "Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis",
        
    },

    {
        id: "saetabis-summer-school",
        theme: "light",
        buttontheme: 'button',
        title: "Saetabis Summer School",
        subtitle: "Full developed, focusing on UX/UI.",
        imagecover: "/cover-saetabis-summer-school.png",
        period: "2022",
        image: "/moon.jpg",
        introduction: "Saetabis Summer School is an organization which helps teenagers and young adults to learn and improve their English abroad. In order to do it, students spend a part of the summer in Ireland, taking English classes, living with an Irish family and enjoying different activities with other students. This is a real product/service website project which I tried my best working on it due to it was a family business, (it is run by my aunt in fact).",
        analysis: "Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis",
        finalresult: "Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis"
    },

    {
        id: "wod-maker",
        theme: 'light',
        buttontheme: 'button',
        title: "Wod Maker",
        subtitle: "Full developed, focusing on Front End.",
        imagecover: "/cover-wod-maker.png",
        period: "2022",
        introduction: "Wod Maker is a fast WOD (Workout Of the Day) generator app for people that want to practice Crosstraining wherever they want with material or not. They just have to choose the material they have and click on the Generate Wod button. The Wod will appear inmediatly below!",
        analysis: "Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis",
        finalresult: "Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis"
    },

    {
        id: "emoji-book",
        theme: 'dark',
        buttontheme: 'button_dark',
        title: "Emoji Book",
        subtitle: "Developed with php and Wordpress.",
        imagecover: "/cover-emoji-book.png",
        period: "2022",
        introduction: "The main task on the Emoji Book project was to turn a static web created with html and css into a flexible and dinamic website hosted on Wordpress. The different files have been structured with PHP.",
        analysis: "Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis",
        finalresult: "Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis"
    }
    
]

export function getAllProjects(){
    return projects;
}

export   function getProject(id){
    return projects.find((project) => project.id === id);
}

export   function deleteProject(id){
    projects = projects.filter((project) => project.id !== id);
}