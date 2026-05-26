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

export interface DefaultFooterSection extends Struct.ComponentSchema {
  collectionName: 'components_default_footer_sections';
  info: {
    displayName: 'FooterSection';
  };
  attributes: {
    Footer_Points: Schema.Attribute.Component<'shared.bullet-points', true>;
    FooterSection: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Become an Authorized cloud9 Energy Distributor!'>;
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

export interface PageFollowUsOn extends Struct.ComponentSchema {
  collectionName: 'components_page_follow_us_ons';
  info: {
    displayName: 'FollowUsOn';
  };
  attributes: {
    Facebook: Schema.Attribute.String & Schema.Attribute.Required;
    Instagram: Schema.Attribute.String & Schema.Attribute.Required;
    Printest: Schema.Attribute.String & Schema.Attribute.Required;
    Twitter: Schema.Attribute.String & Schema.Attribute.Required;
    Youtube: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageFooterLink extends Struct.ComponentSchema {
  collectionName: 'components_page_footer_links';
  info: {
    displayName: 'Footer Link';
  };
  attributes: {
    FooterHexColorCode: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#000000'>;
    FooterImage: Schema.Attribute.Media<'files' | 'images'> &
      Schema.Attribute.Required;
    LinkHaxColor: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#000000'>;
    LinkSectionNameHaxColor: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#000000'>;
    NavbarFontColorHaxCode: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#000000'>;
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
    imageDesktop: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    imageMobile: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
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

export interface SharedBulletPoints extends Struct.ComponentSchema {
  collectionName: 'components_shared_bullet_points';
  info: {
    displayName: 'Bullet_Points';
  };
  attributes: {
    Points: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Age: Applicant must be of 18 years minimum.'>;
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
    Media: Schema.Attribute.Component<'shared.event-image', true> &
      Schema.Attribute.Required;
  };
}

export interface SharedEventImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_event_images';
  info: {
    displayName: 'EventImage';
  };
  attributes: {
    AltText: Schema.Attribute.String & Schema.Attribute.Required;
    Picture_video: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
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

export interface SharedHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_sections';
  info: {
    displayName: 'HeroSection';
  };
  attributes: {
    Description: Schema.Attribute.String & Schema.Attribute.Required;
    Heading: Schema.Attribute.String & Schema.Attribute.Required;
    Logo: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface SharedHero2 extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero2s';
  info: {
    displayName: 'Hero2';
  };
  attributes: {
    HappyClients: Schema.Attribute.String & Schema.Attribute.Required;
    Hero2Description: Schema.Attribute.Text & Schema.Attribute.Required;
    LeftExpendableSection: Schema.Attribute.Component<
      'shared.left-expendable',
      true
    >;
    Service: Schema.Attribute.Component<'shared.our-services', true>;
    SucessfulProjects: Schema.Attribute.String & Schema.Attribute.Required;
    YearsInBusiness: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLeftExpendable extends Struct.ComponentSchema {
  collectionName: 'components_shared_left_expendables';
  info: {
    displayName: 'LeftExpendable';
  };
  attributes: {
    Description: Schema.Attribute.Text & Schema.Attribute.Required;
    Heading: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface SharedOurServices extends Struct.ComponentSchema {
  collectionName: 'components_shared_our_services';
  info: {
    displayName: 'Our_services';
  };
  attributes: {
    BulletPoint: Schema.Attribute.Component<'shared.bullet-points', true>;
    Heading: Schema.Attribute.String & Schema.Attribute.Required;
    SubHeading: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface SharedPageButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_page_buttons';
  info: {
    displayName: 'PageButton';
  };
  attributes: {
    BackgroundHexColor: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#000000'>;
    FontHexColor: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#FFFFFF'>;
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

export interface SharedStore extends Struct.ComponentSchema {
  collectionName: 'components_shared_stores';
  info: {
    displayName: 'Store';
  };
  attributes: {
    address: Schema.Attribute.String & Schema.Attribute.Required;
    email: Schema.Attribute.Email & Schema.Attribute.Required;
    latitude: Schema.Attribute.String & Schema.Attribute.Required;
    longitude: Schema.Attribute.String & Schema.Attribute.Required;
    mobileNumber: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    pincode: Schema.Attribute.String & Schema.Attribute.Required;
    state: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'default.faq': DefaultFaq;
      'default.footer-section': DefaultFooterSection;
      'default.hero-section-aboutus': DefaultHeroSectionAboutus;
      'default.q-and-a': DefaultQAndA;
      'default.social-link': DefaultSocialLink;
      'page.cardsection': PageCardsection;
      'page.follow-us-on': PageFollowUsOn;
      'page.footer-link': PageFooterLink;
      'page.herosection': PageHerosection;
      'page.manufacturing-component': PageManufacturingComponent;
      'shared.bullet-points': SharedBulletPoints;
      'shared.carditem': SharedCarditem;
      'shared.event-component': SharedEventComponent;
      'shared.event-image': SharedEventImage;
      'shared.extension-row': SharedExtensionRow;
      'shared.footer-link': SharedFooterLink;
      'shared.footer-section': SharedFooterSection;
      'shared.hero-section': SharedHeroSection;
      'shared.hero2': SharedHero2;
      'shared.left-expendable': SharedLeftExpendable;
      'shared.manufacturer-s-details': SharedManufacturerSDetails;
      'shared.our-services': SharedOurServices;
      'shared.packaging-cards': SharedPackagingCards;
      'shared.page-button': SharedPageButton;
      'shared.seo': SharedSeo;
      'shared.store': SharedStore;
    }
  }
}
