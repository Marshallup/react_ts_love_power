import React from "react";
import { TabPanel } from 'react-tabs';
import TrendingBlocks from "../../components/blocks/TrendingBlocks";
import TrendingCard from "../../components/cards/TrendingCard";
import TrendingTabs from "../../components/tabs/TrendingTabs";

const TrendingPage = () => {
  return (
    <>
      <div className="container">
        <h1 className="main__title">Trending collections</h1>
      </div>

      <TrendingTabs>
        <div className="trending__section">
          <div className="container">
            <TabPanel>
              <TrendingBlocks>
                <TrendingCard />
                <TrendingCard img="/images/__content/card__drop/2.jpg" />
                <TrendingCard img="/images/__content/card__drop/3.jpg" />
              </TrendingBlocks>
              <TrendingBlocks>
                <TrendingCard />
                <TrendingCard img="/images/__content/card__drop/2.jpg" />
                <TrendingCard img="/images/__content/card__drop/3.jpg" />
              </TrendingBlocks>
              <TrendingBlocks>
                <TrendingCard />
                <TrendingCard img="/images/__content/card__drop/2.jpg" />
                <TrendingCard img="/images/__content/card__drop/3.jpg" />
              </TrendingBlocks>
            </TabPanel>
            <TabPanel>
              <TrendingBlocks>
                <TrendingCard />
                <TrendingCard img="/images/__content/card__drop/2.jpg" />
                <TrendingCard img="/images/__content/card__drop/3.jpg" />
              </TrendingBlocks>
            </TabPanel>
            <TabPanel>
              <TrendingBlocks>
                <TrendingCard />
                <TrendingCard img="/images/__content/card__drop/2.jpg" />
                <TrendingCard img="/images/__content/card__drop/3.jpg" />
              </TrendingBlocks>
            </TabPanel>
            <TabPanel>
              <TrendingBlocks>
                <TrendingCard />
                <TrendingCard img="/images/__content/card__drop/2.jpg" />
                <TrendingCard img="/images/__content/card__drop/3.jpg" />
              </TrendingBlocks>
            </TabPanel>
          </div>
        </div>
      </TrendingTabs>
    </>
  )
}

export default TrendingPage