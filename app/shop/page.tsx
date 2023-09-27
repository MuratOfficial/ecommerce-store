import Stores from "@/components/stores";
import getCategories from "@/services/get-categories";

const ShopPage = async () => {
  const categories = await getCategories();
  return (
    <>
      <Stores data={categories} />
    </>
  );
};

export default ShopPage;
