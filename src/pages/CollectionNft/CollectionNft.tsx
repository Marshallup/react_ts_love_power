import React, { FC } from "react";
import { TabPanel } from "react-tabs";
import DropCard from "../../components/cards/DropCard/DropCard";
import UserSection from "../../components/sections/UserSection/UserSection";
import CollectionTabs from "../../components/tabs/CollectionTags/CollectionTabs";

const CollectionNft: FC = () => {
  return (
    <>
      <UserSection
        imgCover="/images/__content/user/cover.png"
        avatar="/images/__content/user/avatar.jpg"
      />

      <CollectionTabs>
        <TabPanel className="collection__list">
          <div className="container">
            <DropCard imageMain='/images/__content/card__drop/1.jpg' imageInfo="/images/pages/home/hide__seek/1.jpg" />
            <DropCard imageMain='/images/__content/card__drop/2.jpg' imageInfo="/images/pages/home/hide__seek/1.jpg" />
            <DropCard imageMain='/images/__content/card__drop/3.jpg' imageInfo="/images/pages/home/hide__seek/1.jpg" />
            <DropCard imageMain='/images/__content/card__drop/2.jpg' imageInfo="/images/pages/home/hide__seek/1.jpg" />
            <DropCard imageMain='/images/__content/card__drop/1.jpg' imageInfo="/images/pages/home/hide__seek/1.jpg" />
            <DropCard imageMain='/images/__content/card__drop/3.jpg' imageInfo="/images/pages/home/hide__seek/1.jpg" />
          </div>
        </TabPanel>
        <TabPanel className="collection__list">
          <div className="container">
            <DropCard imageMain='/images/__content/card__drop/2.jpg' imageInfo="/images/pages/home/hide__seek/1.jpg" />
            <DropCard imageMain='/images/__content/card__drop/1.jpg' imageInfo="/images/pages/home/hide__seek/1.jpg" />
            <DropCard imageMain='/images/__content/card__drop/3.jpg' imageInfo="/images/pages/home/hide__seek/1.jpg" />
          </div>
        </TabPanel>
      </CollectionTabs>
    </>
  )
}

export default CollectionNft