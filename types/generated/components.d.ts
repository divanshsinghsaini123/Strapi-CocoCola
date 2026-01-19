import type { Schema, Struct } from '@strapi/strapi';

export interface DefaultSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_default_social_links';
  info: {
    displayName: 'Social Link';
  };
  attributes: {
    Facebook: Schema.Attribute.Component<'shared.footer-link', false>;
    Instagram: Schema.Attribute.Component<'shared.footer-link', false>;
    X: Schema.Attribute.Component<'shared.footer-link', false>;
    Youtube: Schema.Attribute.Component<'shared.footer-link', false>;
  };
}

export interface PageCardsection extends Struct.ComponentSchema {
  collectionName: 'components_page_cardsections';
  info: {
    displayName: 'Cardsection';
  };
  attributes: {
    items: Schema.Attribute.Component<'shared.carditem', true>;
    sectionTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageFooterLink extends Struct.ComponentSchema {
  collectionName: 'components_page_footer_links';
  info: {
    displayName: 'Footer Link';
  };
  attributes: {
    Help: Schema.Attribute.Component<'shared.footer-section', false>;
    Legal: Schema.Attribute.Component<'shared.footer-section', false>;
    ShopAndVisit: Schema.Attribute.Component<'shared.footer-section', false>;
  };
}

export interface PageHerosection extends Struct.ComponentSchema {
  collectionName: 'components_page_herosections';
  info: {
    displayName: 'Herosection';
  };
  attributes: {
    ButtonText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 10;
      }> &
      Schema.Attribute.DefaultTo<'Enter Now'>;
    ButttonLink: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    ShowButton: Schema.Attribute.Boolean & Schema.Attribute.Required;
  };
}

export interface SharedCarditem extends Struct.ComponentSchema {
  collectionName: 'components_shared_carditems';
  info: {
    displayName: 'Carditem';
  };
  attributes: {
    buttonLink: Schema.Attribute.String & Schema.Attribute.Required;
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFooterLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_links';
  info: {
    displayName: 'Footer Link';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFooterSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_sections';
  info: {
    displayName: 'Footer Section';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.footer-link', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 10;
          min: 2;
        },
        number
      >;
    LinkSectionName: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'default.social-link': DefaultSocialLink;
      'page.cardsection': PageCardsection;
      'page.footer-link': PageFooterLink;
      'page.herosection': PageHerosection;
      'shared.carditem': SharedCarditem;
      'shared.footer-link': SharedFooterLink;
      'shared.footer-section': SharedFooterSection;
    }
  }
}
