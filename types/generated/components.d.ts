import type { Schema, Struct } from '@strapi/strapi';

export interface DefaultAbooutus extends Struct.ComponentSchema {
  collectionName: 'components_default_abooutuses';
  info: {
    displayName: 'abooutus';
  };
  attributes: {
    backgroundimage: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    button: Schema.Attribute.Component<'shared.button', false>;
    carouselItems: Schema.Attribute.Component<'shared.carousel-items', true>;
    logo: Schema.Attribute.Media<'files' | 'images'> &
      Schema.Attribute.Required;
    sectionheading: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'ABOUT US'>;
  };
}

export interface DefaultFactoryhighlights extends Struct.ComponentSchema {
  collectionName: 'components_default_factoryhighlights';
  info: {
    displayName: 'factoryhighlights';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    mainheading: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'HELL FACTORY HIGHLIGHTS'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'WATCH OUR INTRO VIDEO'>;
    youtubeURL1: Schema.Attribute.Text & Schema.Attribute.Required;
    youtubeURL2: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

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

export interface DefaultHero2 extends Struct.ComponentSchema {
  collectionName: 'components_default_hero2s';
  info: {
    displayName: 'hero2';
  };
  attributes: {
    backgroundimage: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'The The Cloud9 Beverages Company manufacturing complex is one of the region\u2019s most advanced integrated beverage production facilities. The plant operates on 8 high-speed filling lines with a total annual capacity exceeding 6 billion units. Every product passes through more than 100 automated inspection and quality control checkpoints during production. As active beverage brand owners with established products in the market, The Cloud9 Beverages Company operates on infrastructure proven by real commercial demand.'>;
    leftbutton: Schema.Attribute.Component<'shared.button', false>;
    media: Schema.Attribute.Component<'shared.media', true>;
    rightbutton: Schema.Attribute.Component<'shared.button', false>;
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

export interface DefaultWhatwedo extends Struct.ComponentSchema {
  collectionName: 'components_default_whatwedos';
  info: {
    displayName: 'whatwedo';
  };
  attributes: {
    heading: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'WHAT WE DO '>;
    logicstics: Schema.Attribute.Component<'shared.logistics', false>;
    packaging: Schema.Attribute.Component<'shared.packaging', false>;
    product: Schema.Attribute.Component<'shared.products', false>;
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
    LinkHexColor: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#000000'>;
    LinkSectionNameHexColor: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#000000'>;
    Section1: Schema.Attribute.Component<'shared.footer-section', false>;
    Section2: Schema.Attribute.Component<'shared.footer-section', false>;
    Section3: Schema.Attribute.Component<'shared.footer-section', false>;
  };
}

export interface PageHero extends Struct.ComponentSchema {
  collectionName: 'components_page_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    backgroundvideo: Schema.Attribute.Media<'files' | 'videos'>;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    leftbutton: Schema.Attribute.Component<'shared.button', false> &
      Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    rightbutton: Schema.Attribute.Component<'shared.button', false> &
      Schema.Attribute.Required;
    stats: Schema.Attribute.Component<'shared.stats', false>;
    subheading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageHerosection extends Struct.ComponentSchema {
  collectionName: 'components_page_herosections';
  info: {
    displayName: 'Herosection';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    imageDesktop: Schema.Attribute.Media<'images', true> &
      Schema.Attribute.Required;
    imageMobile: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
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

export interface PageProductFooter extends Struct.ComponentSchema {
  collectionName: 'components_page_product_footers';
  info: {
    displayName: 'productFooter';
  };
  attributes: {
    backgroundimage: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    heading: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'TAKE ONE OF THESE!'>;
    item: Schema.Attribute.Component<'shared.address-lines', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<"YOU DON'T HAVE A BRAND?">;
  };
}

export interface SharedAddressLines extends Struct.ComponentSchema {
  collectionName: 'components_shared_address_lines';
  info: {
    displayName: 'addressLines';
  };
  attributes: {
    line: Schema.Attribute.String & Schema.Attribute.Required;
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
    redirectlink: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/'>;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'button';
    icon: 'cursor';
  };
  attributes: {
    buttonLink: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/'>;
    buttonText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'GET IN TOUCH'>;
    disablebutton: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface SharedCarditem extends Struct.ComponentSchema {
  collectionName: 'components_shared_carditems';
  info: {
    displayName: 'Carditem';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCarouselItems extends Struct.ComponentSchema {
  collectionName: 'components_shared_carousel_items';
  info: {
    displayName: 'carouselItems';
  };
  attributes: {
    subtitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'real-time inventory'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'AUTOMATED WAREHOUSE'>;
  };
}

export interface SharedComtactus extends Struct.ComponentSchema {
  collectionName: 'components_shared_comtactuses';
  info: {
    displayName: 'comtactus';
  };
  attributes: {
    enquirySubtitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Minimum order quantity:\\n270 000cans/design/flavour'>;
    location: Schema.Attribute.Component<'shared.location', false>;
    privacyPolicy: Schema.Attribute.Component<'shared.privacy-policy', false>;
  };
}

export interface SharedEventComponent extends Struct.ComponentSchema {
  collectionName: 'components_shared_event_components';
  info: {
    displayName: 'Event_component';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
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

export interface SharedGpsLines extends Struct.ComponentSchema {
  collectionName: 'components_shared_gps_lines';
  info: {
    displayName: 'gpsLines';
  };
  attributes: {
    E: Schema.Attribute.String & Schema.Attribute.Required;
    N: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_sections';
  info: {
    displayName: 'HeroSection';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
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

export interface SharedLocation extends Struct.ComponentSchema {
  collectionName: 'components_shared_locations';
  info: {
    displayName: 'location';
  };
  attributes: {
    addressLabel: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Factory address'>;
    addressLines: Schema.Attribute.Component<'shared.address-lines', true>;
    detailsTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'LOCATIONS & CONTACTS'>;
    gpsLabel: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'GPS coordinates:'>;
    gpsLines: Schema.Attribute.Component<'shared.gps-lines', false>;
    mainTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'LOCATION'>;
    mapEmbedUrl: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.679135760633!2d20.91264707687258!3d48.176335548682855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4740a1b0b5b5b5b5%3A0x5b0b5b5b5b5b5b5b!2sHell%20Energy%20Magyarorsz%C3%A1g%20Kft.!5e0!3m2!1sen!2shu!4v1708111111111!5m2!1sen!2shu'>;
  };
}

export interface SharedLogistics extends Struct.ComponentSchema {
  collectionName: 'components_shared_logistics';
  info: {
    displayName: 'logistics';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    card: Schema.Attribute.Component<'shared.media', true>;
    heading: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'LOGISTICS'>;
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

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'media';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    tittle: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface SharedPackaging extends Struct.ComponentSchema {
  collectionName: 'components_shared_packagings';
  info: {
    displayName: 'packaging';
  };
  attributes: {
    card: Schema.Attribute.Component<'shared.media', true>;
    heading: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'PACKAGING'>;
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

export interface SharedPrivacyPolicy extends Struct.ComponentSchema {
  collectionName: 'components_shared_privacy_policies';
  info: {
    displayName: 'privacyPolicy';
  };
  attributes: {
    linkText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Privacy Policy.'>;
    linkUrl: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    text: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'I accept the terms of the'>;
  };
}

export interface SharedProducts extends Struct.ComponentSchema {
  collectionName: 'components_shared_products';
  info: {
    displayName: 'products';
  };
  attributes: {
    productFooter: Schema.Attribute.Component<'page.product-footer', false>;
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

export interface SharedStats extends Struct.ComponentSchema {
  collectionName: 'components_shared_stats';
  info: {
    displayName: 'stats';
  };
  attributes: {
    aluminiumEmptyCanLines: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'3'>;
    canPerhour: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'750,000'>;
    fillinglines: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'8'>;
    totalcapacity: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'6,000,000,000'>;
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
      'default.abooutus': DefaultAbooutus;
      'default.factoryhighlights': DefaultFactoryhighlights;
      'default.faq': DefaultFaq;
      'default.footer-section': DefaultFooterSection;
      'default.hero-section-aboutus': DefaultHeroSectionAboutus;
      'default.hero2': DefaultHero2;
      'default.q-and-a': DefaultQAndA;
      'default.social-link': DefaultSocialLink;
      'default.whatwedo': DefaultWhatwedo;
      'page.cardsection': PageCardsection;
      'page.follow-us-on': PageFollowUsOn;
      'page.footer-link': PageFooterLink;
      'page.hero': PageHero;
      'page.herosection': PageHerosection;
      'page.manufacturing-component': PageManufacturingComponent;
      'page.product-footer': PageProductFooter;
      'shared.address-lines': SharedAddressLines;
      'shared.bullet-points': SharedBulletPoints;
      'shared.button': SharedButton;
      'shared.carditem': SharedCarditem;
      'shared.carousel-items': SharedCarouselItems;
      'shared.comtactus': SharedComtactus;
      'shared.event-component': SharedEventComponent;
      'shared.event-image': SharedEventImage;
      'shared.extension-row': SharedExtensionRow;
      'shared.footer-link': SharedFooterLink;
      'shared.footer-section': SharedFooterSection;
      'shared.gps-lines': SharedGpsLines;
      'shared.hero-section': SharedHeroSection;
      'shared.hero2': SharedHero2;
      'shared.left-expendable': SharedLeftExpendable;
      'shared.location': SharedLocation;
      'shared.logistics': SharedLogistics;
      'shared.manufacturer-s-details': SharedManufacturerSDetails;
      'shared.media': SharedMedia;
      'shared.our-services': SharedOurServices;
      'shared.packaging': SharedPackaging;
      'shared.packaging-cards': SharedPackagingCards;
      'shared.page-button': SharedPageButton;
      'shared.privacy-policy': SharedPrivacyPolicy;
      'shared.products': SharedProducts;
      'shared.seo': SharedSeo;
      'shared.stats': SharedStats;
      'shared.store': SharedStore;
    }
  }
}
