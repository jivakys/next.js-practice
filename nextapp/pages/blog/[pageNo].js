import { useRouter } from "next/router";

const pageNo = () => {
  const router = useRouter();
  const pageNumber = router.query.pageNo;
  return (
    <>
      <h1>This is {pageNumber} page u clicked</h1>
    </>
  );
};

export default pageNo;
