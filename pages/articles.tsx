import Layout from "../components/Layout/Layout";
import Card from "../components/common/Card";
import { useStateMachine } from "little-state-machine";
import updateStore from "../utils/updateStore";
import { useRouter } from "next/router";

const Articles = () => {
  // const { state, action } = useStateMachine(updateStore);
  // const router = useRouter;

  // const onClickAction = ({ data }: any) => {
  // 	action({ data });
  // 	router.push("more-articles");
  // };

  return (
    <>
      <Layout>
        <div className="flex items-center justify-around mt-20">
          <div
          // onClick={() => onClickAction}
          >
            <Card />
          </div>
          <Card />
          <Card />
        </div>
      </Layout>
    </>
  );
};

export default Articles;
