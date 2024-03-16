import type { Schema, Attribute } from '@strapi/strapi';

export interface SeoInfoSeo extends Schema.Component {
  collectionName: 'components_seo_info_seos';
  info: {
    displayName: 'Seo';
  };
  attributes: {
    SeoTitle: Attribute.String;
    SeoDescription: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'seo-info.seo': SeoInfoSeo;
    }
  }
}
