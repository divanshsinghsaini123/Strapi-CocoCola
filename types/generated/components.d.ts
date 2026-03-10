import type { Schema, Struct } from '@strapi/strapi';

export interface DefaultFaq extends Struct.ComponentSchema {
  collectionName: 'components_default_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'bulletList';
  };
  attributes: {
    question_answer: Schema.Attribute.Component<'default.q-and-a', true> &
      Schema.Attribute.Required;
  };
}

export interface DefaultHeroSectionAboutus extends Struct.ComponentSchema {
  collectionName: 'components_default_hero_section_aboutuses';
  info: {
    displayName: 'HeroSectionAboutus';
  };
  attributes: {
    HeroBanner: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    paragraph1: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 350;
        minLength: 50;
      }>;
    paragraph2: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 350;
        minLength: 60;
      }>;
    paragraph3: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 360;
        minLength: 60;
      }>;
  };
}

export interface DefaultQAndA extends Struct.ComponentSchema {
  collectionName: 'components_default_q_and_as';
  info: {
    displayName: 'Q&A';
  };
  attributes: {
    Answer: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 8;
      }>;
    Question: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 5;
      }>;
  };
}

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
    FooterImage: Schema.Attribute.Media<'files' | 'images'> &
      Schema.Attribute.Required;
    Section1: Schema.Attribute.Component<'shared.footer-section', false>;
    Section2: Schema.Attribute.Component<'shared.footer-section', false>;
    Section3: Schema.Attribute.Component<'shared.footer-section', false>;
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

export interface PageManufacturingComponent extends Struct.ComponentSchema {
  collectionName: 'components_page_manufacturing_components';
  info: {
    displayName: 'Manufacturing Component';
  };
  attributes: {
    Section_Table_Row: Schema.Attribute.Component<
      'shared.manufacturer-s-details',
      true
    >;
    Table_ComponentName: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface SharedEventComponent extends Struct.ComponentSchema {
  collectionName: 'components_shared_event_components';
  info: {
    displayName: 'Event_component';
  };
  attributes: {
    EventAddress: Schema.Attribute.String;
    EventDescription: Schema.Attribute.Text;
    EventName: Schema.Attribute.String;
    hasAddress: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    Media: Schema.Attribute.Component<'shared.event-image', true>;
  };
}

export interface SharedEventImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_event_images';
  info: {
    displayName: 'EventImage';
  };
  attributes: {
    AltText: Schema.Attribute.String;
    Picture_video: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedExtensionRow extends Struct.ComponentSchema {
  collectionName: 'components_shared_extension_rows';
  info: {
    displayName: 'Extension_row';
  };
  attributes: {
    Department: Schema.Attribute.String;
    ExtensionNumber: Schema.Attribute.Integer;
    Name: Schema.Attribute.String;
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

export interface SharedManufacturerSDetails extends Struct.ComponentSchema {
  collectionName: 'components_shared_manufacturer_s_details';
  info: {
    displayName: "Manufacturer's_details";
    icon: 'bulletList';
  };
  attributes: {
    FssaiNo: Schema.Attribute.String & Schema.Attribute.Required;
    ManufacturerAddress: Schema.Attribute.Text & Schema.Attribute.Required;
    PlantCode: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedPackagingCards extends Struct.ComponentSchema {
  collectionName: 'components_shared_packaging_cards';
  info: {
    displayName: 'Packaging Cards';
  };
  attributes: {
    ButtonName: Schema.Attribute.String & Schema.Attribute.Required;
    CardImage: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    CardName: Schema.Attribute.String;
    SubName: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'SEO';
    icon: 'globe';
  };
  attributes: {
    keywords: Schema.Attribute.String & Schema.Attribute.Required;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'default.faq': DefaultFaq;
      'default.hero-section-aboutus': DefaultHeroSectionAboutus;
      'default.q-and-a': DefaultQAndA;
      'default.social-link': DefaultSocialLink;
      'page.cardsection': PageCardsection;
      'page.footer-link': PageFooterLink;
      'page.herosection': PageHerosection;
      'page.manufacturing-component': PageManufacturingComponent;
      'shared.carditem': SharedCarditem;
      'shared.event-component': SharedEventComponent;
      'shared.event-image': SharedEventImage;
      'shared.extension-row': SharedExtensionRow;
      'shared.footer-link': SharedFooterLink;
      'shared.footer-section': SharedFooterSection;
      'shared.manufacturer-s-details': SharedManufacturerSDetails;
      'shared.packaging-cards': SharedPackagingCards;
      'shared.seo': SharedSeo;
    }
  }
}
