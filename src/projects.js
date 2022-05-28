let projects = [
    {
        id: "personal-web",
        title: "Personal Web",
        subtitle: " Made with HTML and CSS",
        image: "/pikachu.png",
        period: "2021",
        introduction: "Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis, lacinia nascetur velit ultrices nec diam tempus consequat magnis, lectus etiam dictumst vestibulum torquent hac lobortis. Suspendisse lobortis dictumst nisi tincidunt inceptos, turpis tellus blandit interdum sollicitudin, pellentesque ut himenaeos natoque. Conubia velit porttitor diam vitae interdum facilisi, quam ut habitant at cum turpis, hac sem facilisis nibh rhoncus.",
        analysis: "Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis",
        finalresult: "Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis"
    },

    {
        id: "saetabis-summer-school",
        title: "Saetabis Summer School",
        subtitle: "Full developed, focusing on UX/UI",
        period: "2022",
        image: "/moon.jpg",
        introduction: "Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis, lacinia nascetur velit ultrices nec diam tempus consequat magnis, lectus etiam dictumst vestibulum torquent hac lobortis. Suspendisse lobortis dictumst nisi tincidunt inceptos, turpis tellus blandit interdum sollicitudin, pellentesque ut himenaeos natoque. Conubia velit porttitor diam vitae interdum facilisi, quam ut habitant at cum turpis, hac sem facilisis nibh rhoncus.",
        analysis: "Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis",
        finalresult: "Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis"
    },

    {
        id: "wod-maker",
        title: "Wod Maker",
        subtitle: "Full developed, focusing on Front End.",
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