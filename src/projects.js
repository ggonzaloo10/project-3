let projects = [
    {
        id: "personal-web",
        theme: 'dark',
        buttontheme: 'button_dark',
        title: "Personal Web",
        subtitle: " Made with html, css and Sass.",
        imagecover: "/coverpersonalweb.png",
        period: "2021",
        url: "https://frontend.esatid3-2021.com/gonzalo/about%20me%20gonzalo/index.html",
        introduction: "Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis, lacinia nascetur velit ultrices nec diam tempus consequat magnis, lectus etiam dictumst vestibulum torquent hac lobortis. Suspendisse lobortis dictumst nisi tincidunt inceptos, turpis tellus blandit interdum sollicitudin, pellentesque ut himenaeos natoque. Conubia velit porttitor diam vitae interdum facilisi, quam ut habitant at cum turpis, hac sem facilisis nibh rhoncus.",
        analysis: "Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis",
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
        introduction: "Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis, lacinia nascetur velit ultrices nec diam tempus consequat magnis, lectus etiam dictumst vestibulum torquent hac lobortis. Suspendisse lobortis dictumst nisi tincidunt inceptos, turpis tellus blandit interdum sollicitudin, pellentesque ut himenaeos natoque. Conubia velit porttitor diam vitae interdum facilisi, quam ut habitant at cum turpis, hac sem facilisis nibh rhoncus.",
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
        introduction: "Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis, lacinia nascetur velit ultrices nec diam tempus consequat magnis, lectus etiam dictumst vestibulum torquent hac lobortis. Suspendisse lobortis dictumst nisi tincidunt inceptos, turpis tellus blandit interdum sollicitudin, pellentesque ut himenaeos natoque. Conubia velit porttitor diam vitae interdum facilisi, quam ut habitant at cum turpis, hac sem facilisis nibh rhoncus.",
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
        introduction: "Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis, lacinia nascetur velit ultrices nec diam tempus consequat magnis, lectus etiam dictumst vestibulum torquent hac lobortis. Suspendisse lobortis dictumst nisi tincidunt inceptos, turpis tellus blandit interdum sollicitudin, pellentesque ut himenaeos natoque. Conubia velit porttitor diam vitae interdum facilisi, quam ut habitant at cum turpis, hac sem facilisis nibh rhoncus.",
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