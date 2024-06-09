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

export interface SharedReport extends Schema.Component {
  collectionName: 'components_shared_reports';
  info: {
    displayName: 'Report';
    icon: 'file';
  };
  attributes: {
    file: Attribute.Media<'files'> & Attribute.Required;
    cover: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'seo-info.seo': SeoInfoSeo;
      'shared.report': SharedReport;
    }
  }
}
