import type { Schema, Struct } from '@strapi/strapi';

export interface PageCardsection extends Struct.ComponentSchema {
  collectionName: 'components_page_cardsections';
  info: {
    displayName: 'Cardsection';
  };
  attributes: {
    items: Schema.Attribute.Component<'shared.carditem', true>;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface PageHerosection extends Struct.ComponentSchema {
  collectionName: 'components_page_herosections';
  info: {
    displayName: 'Herosection';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedCarditem extends Struct.ComponentSchema {
  collectionName: 'components_shared_carditems';
  info: {
    displayName: 'Carditem';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'page.cardsection': PageCardsection;
      'page.herosection': PageHerosection;
      'shared.carditem': SharedCarditem;
    }
  }
}
