import HomeLayout from "../layout/HomeLayout";
import { SearchSection } from "../SearchSection";

const page = () => {
  return (
    <HomeLayout>
      <main>
        <SearchSection type="DALL-E" />
      </main>
    </HomeLayout>
  );
};

export default page;
