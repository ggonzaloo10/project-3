import Cover from "./Cover";
import Intro from "./Intro";
import Content from "./Content";
import FinalResult from "./FinalResult";

export function ProjectDetails() {
    return (
        <div style={{ width: '100%' }}>
            <Cover />
            <Intro />
            <Content />
            <FinalResult/>
        </div>
    )
}