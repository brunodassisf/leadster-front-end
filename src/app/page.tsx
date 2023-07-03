import WrapperPage from "@/src/components/WrapperPage";
import Banner from "@/src/components/Banner";

import Leadarea from "@/src/module/Leadarea";
import Demonstration from "../components/Demonstration";

export default function HomeScreen() {
    return (
        <WrapperPage>
            <Banner />
            <Leadarea />
            <Demonstration />
        </WrapperPage>
    );
}
