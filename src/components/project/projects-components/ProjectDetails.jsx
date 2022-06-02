import Cover from "./Cover";
import Intro from "./Intro";
import Content from "./Content";

export function ProjectDetails() {
    return (
        <div style={{ width: '100%' }}>
            <Cover />
            <Intro />
            <Content />
        </div>
    )
}