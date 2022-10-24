import React from 'react';
import CollectionSection from '../../components/sections/CollectionSection/CollectionSection';
import DropsSection from '../../components/sections/DropsSection/DropsSection';
import HideSeekSection from '../../components/sections/HideSeekSection/HideSeekSection';
import NewsSection from '../../components/sections/NewsSection/NewsSection';
import PromoSection from '../../components/sections/PromoSection/PromoSection';
import SellingSection from '../../components/sections/SellingSection/SellingSection';
import SubscribeSections from '../../components/sections/SubscribeSection/SubscribeSections';

export default function IndexPage() {

  return (
    <>
      <PromoSection />

      <HideSeekSection />

      <DropsSection />

      <SubscribeSections />

      <CollectionSection />

      <SellingSection />

      <NewsSection />
    </>
  )
}