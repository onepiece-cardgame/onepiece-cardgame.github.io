import zhAttribute from "@/public/zh/attribute.json";
import zhCards from "@/public/zh/cards.json";
import zhColor from "@/public/zh/color.json";
import zhEffect from "@/public/zh/effect.json";
import zhFeature from "@/public/zh/feature.json";
import zhRarity from "@/public/zh/rarity.json";
import zhSeries from "@/public/zh/series.json";
import zhType from "@/public/zh/type.json";

import jaAttribute from "@/public/ja/attribute.json";
import jaCards from "@/public/ja/cards.json";
import jaColor from "@/public/ja/color.json";
import jaEffect from "@/public/ja/effect.json";
import jaFeature from "@/public/ja/feature.json";
import jaRarity from "@/public/ja/rarity.json";
import jaSeries from "@/public/ja/series.json";
import jaType from "@/public/ja/type.json";

import enAttribute from "@/public/en/attribute.json";
import enCards from "@/public/en/cards.json";
import enColor from "@/public/en/color.json";
import enEffect from "@/public/en/effect.json";
import enFeature from "@/public/en/feature.json";
import enRarity from "@/public/en/rarity.json";
import enSeries from "@/public/en/series.json";
import enType from "@/public/en/type.json";

const data = {
  zh: {
    attribute: zhAttribute,
    cards: zhCards,
    color: zhColor,
    effect: zhEffect,
    feature: zhFeature,
    rarity: zhRarity,
    series: zhSeries,
    type: zhType,
  },
  ja: {
    attribute: jaAttribute,
    cards: jaCards,
    color: jaColor,
    effect: jaEffect,
    feature: jaFeature,
    rarity: jaRarity,
    series: jaSeries,
    type: jaType,
  },
  en: {
    attribute: enAttribute,
    cards: enCards,
    color: enColor,
    effect: enEffect,
    feature: enFeature,
    rarity: enRarity,
    series: enSeries,
    type: enType,
  },
};

export default data;
