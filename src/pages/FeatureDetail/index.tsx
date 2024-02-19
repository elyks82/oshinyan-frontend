import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/basic/Container";
import PageBar from "../../components/common/PageBar";
import { Pagination } from "@mui/material";
import CatCard from "../../components/basic/blog/CatCard";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";
import Title from "../../components/common/Typography/Title";
import { useEffect, useState } from "react";
import axios from "axios";
import { CatObjectType } from "../../constant/type";

const FeatureDetail = () => {
  const [catData, setCatData] = useState<CatObjectType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("api/randomcat");
        setCatData(data);
      } catch (error) {}
    };
    fetchData();
  }, []);
  return (
    <MainLayout>
      <SocialLinkGroup />
      <Container>
        <PageBar page="特集を見るニャ！（各特集）" />
        <Title title="特集（仮）一覧" />
        <div className="mt-[24px] text-[20px] leading-[27px]">
          東京には看板猫が出勤している素敵なカフェがたくさんあるニャン！
          <br />
          東京には看板猫が出勤している素敵なカフェがたくさんあるニャン！
        </div>
        <div className="mt-[32px] mb-[56px] flex justify-between flex-wrap gap-3">
          {catData.length !== 0 ? (
            catData.map((e, i) => (
              <CatCard
                key={i}
                id={e.id}
                cat_name={e.cat_name}
                shop={e.shop}
                images={e.images}
                admin_images={e.admin_images}
                character={e.character}
                favorite_things={e.favorite_things}
                attendance={e.attendance}
                description={e.description}
                recommend={e.recommend}
                created_date={e.created_date}
              />
            ))
          ) : (
            <p className="py-10 block w-full text-center text-xl">
              お探しの看板猫はありません
            </p>
          )}
        </div>
        <div className="flex justify-center mt-[32px] mb-[68px]">
          <Pagination
            count={5}
            defaultPage={1}
            boundaryCount={1}
            color="secondary"
            variant="outlined"
            shape="rounded"
          />
        </div>
      </Container>
    </MainLayout>
  );
};

export default FeatureDetail;
