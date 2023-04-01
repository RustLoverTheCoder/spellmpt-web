import HomeLayout from "../layout/HomeLayout";
import { SearchSection } from "../SearchSection";

const page = () => {
  return (
    <HomeLayout>
      <main>
        <SearchSection type="Stable Diffusion" />
      </main>
    </HomeLayout>
  );
};

export default page;
