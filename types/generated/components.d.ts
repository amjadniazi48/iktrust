import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedReport extends Schema.Component {
  collectionName: 'components_shared_reports';
  info: {
    displayName: 'Report';
    icon: 'file';
    description: '';
  };
  attributes: {
    file: Attribute.Media<'files'> & Attribute.Required;
    cover: Attribute.Media<'images'>;
  };
}

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
      'shared.report': SharedReport;
      'seo-info.seo': SeoInfoSeo;
    }
  }
}
