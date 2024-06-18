/* eslint-disable */
import * as types from './graphql';
import type {TypedDocumentNode as DocumentNode} from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
	'\n  mutation LogInMutation($email: String!, $password: String!) {\n    tokenCreate(email: $email, password: $password) {\n      token\n      refreshToken\n      csrfToken\n      errors {\n        field\n        code\n      }\n    }\n  }\n':
		types.LogInMutationDocument,
	'\n  mutation ConfirmAccountMutation($email: String!, $token: String!) {\n    confirmAccount(email: $email, token: $token) {\n      user {\n        isActive\n      }\n      errors {\n        field\n        code\n      }\n    }\n  }\n':
		types.ConfirmAccountMutationDocument,
	'\n  mutation RequestPasswordResetMutation(\n    $email: String!\n    $redirectUrl: String!\n    $channel: String!\n  ) {\n    requestPasswordReset(\n      email: $email\n      redirectUrl: $redirectUrl\n      channel: $channel\n    ) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n':
		types.RequestPasswordResetMutationDocument,
	'\n  mutation SetPasswordMutation(\n    $email: String!\n    $token: String!\n    $password: String!\n  ) {\n    setPassword(email: $email, token: $token, password: $password) {\n      token\n      refreshToken\n      csrfToken\n      errors {\n        field\n        code\n      }\n    }\n  }\n':
		types.SetPasswordMutationDocument,
	'\n  mutation SignUpMutation(\n    $email: String!\n    $password: String!\n    $channel: String!\n    $redirectUrl: String!\n  ) {\n    accountRegister(\n      input: {\n        email: $email\n        password: $password\n        channel: $channel\n        redirectUrl: $redirectUrl\n      }\n    ) {\n      user {\n        email\n      }\n      errors {\n        field\n        code\n      }\n      requiresConfirmation\n    }\n  }\n':
		types.SignUpMutationDocument,
	'\n  mutation ConfirmEmailChangeMutation($channel: String!, $token: String!) {\n    confirmEmailChange(channel: $channel, token: $token) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n':
		types.ConfirmEmailChangeMutationDocument,
	'\n  mutation ChangePasswordMutation(\n    $newPassword: String!\n    $oldPassword: String!\n  ) {\n    passwordChange(newPassword: $newPassword, oldPassword: $oldPassword) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n':
		types.ChangePasswordMutationDocument,
	'\n  mutation RequestEmailChangeMutation(\n    $channel: String!\n    $newEmail: String!\n    $password: String!\n    $redirectUrl: String!\n  ) {\n    requestEmailChange(\n      channel: $channel\n      newEmail: $newEmail\n      password: $password\n      redirectUrl: $redirectUrl\n    ) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n':
		types.RequestEmailChangeMutationDocument,
	'\n  fragment ProductCategoryName_CategoryFragment on Category {\n    __typename\n    id\n    name\n    translation(languageCode: $languageCode) {\n      __typename\n      id\n      name\n    }\n  }\n':
		types.ProductCategoryName_CategoryFragmentFragmentDoc,
	'\n  fragment ProductPriceRange_PricingInfoFragment on ProductPricingInfo {\n    priceRange {\n      start {\n        gross {\n          currency\n          amount\n        }\n      }\n      stop {\n        gross {\n          currency\n          amount\n        }\n      }\n    }\n  }\n':
		types.ProductPriceRange_PricingInfoFragmentFragmentDoc,
	'\n  fragment ProductThumbnail_ImageFragment on Image {\n    __typename\n    url\n    alt\n  }\n':
		types.ProductThumbnail_ImageFragmentFragmentDoc,
	'\n  fragment NavbarItem_MenuItemFragment on MenuItem {\n    children {\n      __typename\n    }\n    ...NavbarLink_MenuItemFragment\n    ...NavbarDropdown_MenuItemFragment\n  }\n':
		types.NavbarItem_MenuItemFragmentFragmentDoc,
	'\n  fragment NavbarLink_MenuItemFragment on MenuItem {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    page {\n      slug\n    }\n  }\n':
		types.NavbarLink_MenuItemFragmentFragmentDoc,
	'\n  query NavbarMenu_MenuQuery(\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    menu(name: "navbar", channel: $channel) {\n      items {\n        id\n        ...NavbarItem_MenuItemFragment\n      }\n    }\n  }\n':
		types.NavbarMenu_MenuQueryDocument,
	'\n  fragment NavbarDropdown_MenuItemFragment on MenuItem {\n    ...NavbarDropdownTrigger_MenuItemFragment\n    ...NavbarDropdownContent_MenuItemFragment\n  }\n':
		types.NavbarDropdown_MenuItemFragmentFragmentDoc,
	'\n  fragment NavbarDropdownContent_MenuItemFragment on MenuItem {\n    page {\n      slug\n    }\n    children {\n      id\n      ...NavbarDropdownItem_MenuItemFragment\n    }\n  }\n':
		types.NavbarDropdownContent_MenuItemFragmentFragmentDoc,
	'\n  fragment NavbarDropdownItem_MenuItemFragment on MenuItem {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    category {\n      slug\n    }\n    collection {\n      slug\n    }\n  }\n':
		types.NavbarDropdownItem_MenuItemFragmentFragmentDoc,
	'\n  fragment NavbarDropdownTrigger_MenuItemFragment on MenuItem {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n  }\n':
		types.NavbarDropdownTrigger_MenuItemFragmentFragmentDoc,
	'\n  fragment ProductItem_ProductFragment on Product {\n    __typename\n    id\n    name\n    slug\n    translation(languageCode: $languageCode) {\n      __typename\n      id\n      name\n    }\n    thumbnail(format: WEBP, size: 4096) {\n      ...ProductThumbnail_ImageFragment\n    }\n    pricing {\n      ...ProductPriceRange_PricingInfoFragment\n    }\n    category {\n      ...ProductCategoryName_CategoryFragment\n    }\n    variants {\n      __typename\n      id\n    }\n  }\n':
		types.ProductItem_ProductFragmentFragmentDoc,
	'\n  fragment ShoppingCartButton_CheckoutFragment on Checkout {\n    quantity\n  }\n':
		types.ShoppingCartButton_CheckoutFragmentFragmentDoc,
	'\n  query CartDialog_CheckoutQuery($id: ID!, $languageCode: LanguageCodeEnum!) {\n    checkout(id: $id) {\n      quantity\n      ...ShoppingCartButton_CheckoutFragment\n      ...CartBody_CheckoutFragment\n      ...CartFooter_CheckoutFragment\n    }\n  }\n':
		types.CartDialog_CheckoutQueryDocument,
	'\n  fragment CartBody_CheckoutFragment on Checkout {\n    lines {\n      id\n      ...CheckoutLine_CheckoutLineFragment\n    }\n    ...CheckoutLine_CheckoutFragment\n  }\n':
		types.CartBody_CheckoutFragmentFragmentDoc,
	'\n  fragment CheckoutLine_CheckoutFragment on Checkout {\n    displayGrossPrices\n  }\n':
		types.CheckoutLine_CheckoutFragmentFragmentDoc,
	'\n  fragment CheckoutLine_CheckoutLineFragment on CheckoutLine {\n    id\n    quantity\n    totalPrice {\n      currency\n      net {\n        amount\n      }\n      gross {\n        amount\n      }\n    }\n    variant {\n      product {\n        name\n        translation(languageCode: $languageCode) {\n          name\n        }\n        attributes {\n          values {\n            name\n            translation(languageCode: $languageCode) {\n              name\n            }\n          }\n        }\n        media {\n          url\n          alt\n        }\n      }\n    }\n  }\n':
		types.CheckoutLine_CheckoutLineFragmentFragmentDoc,
	'\n  mutation UpdateCheckoutLinesMutation(\n    $checkoutId: ID!\n    $lines: [CheckoutLineUpdateInput!]!\n  ) {\n    checkoutLinesUpdate(checkoutId: $checkoutId, lines: $lines) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n':
		types.UpdateCheckoutLinesMutationDocument,
	'\n  mutation DeleteCheckoutLinesMutation($id: ID!, $linesIds: [ID!]!) {\n    checkoutLinesDelete(id: $id, linesIds: $linesIds) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n':
		types.DeleteCheckoutLinesMutationDocument,
	'\n  fragment CartFooter_CheckoutFragment on Checkout {\n    ...CartTotal_CheckoutFragment\n  }\n':
		types.CartFooter_CheckoutFragmentFragmentDoc,
	'\n  fragment CartTotal_CheckoutFragment on Checkout {\n    subtotalPrice {\n      currency\n      net {\n        amount\n      }\n      gross {\n        amount\n      }\n    }\n    shippingPrice {\n      currency\n      net {\n        amount\n      }\n      gross {\n        amount\n      }\n    }\n    totalPrice {\n      currency\n      net {\n        amount\n      }\n      gross {\n        amount\n      }\n    }\n    displayGrossPrices\n  }\n':
		types.CartTotal_CheckoutFragmentFragmentDoc,
	'\n  query CategoryPage_CategoryQuery(\n    $slug: String\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    category(slug: $slug) {\n      __typename\n      id\n      products(first: 100, channel: $channel) {\n        edges {\n          node {\n            __typename\n            id\n            ...ProductItem_ProductFragment\n          }\n        }\n      }\n    }\n  }\n':
		types.CategoryPage_CategoryQueryDocument,
	'\n  query CollectionPage_CollectionQuery(\n    $slug: String\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    collection(slug: $slug, channel: $channel) {\n      __typename\n      id\n      products(first: 100) {\n        edges {\n          node {\n            __typename\n            id\n            ...ProductItem_ProductFragment\n          }\n        }\n      }\n    }\n  }\n':
		types.CollectionPage_CollectionQueryDocument,
	'\n  fragment Product_ProductFragment on Product {\n    __typename\n    id\n    name\n    description\n    translation(languageCode: $languageCode) {\n      __typename\n      id\n      name\n      description\n    }\n    isAvailable\n    thumbnail(format: WEBP, size: 4096) {\n      ...ProductThumbnail_ImageFragment\n    }\n    pricing {\n      ...ProductPriceRange_PricingInfoFragment\n    }\n    variants {\n      __typename\n      id\n    }\n    ...VariantLinks_ProductFragment\n  }\n':
		types.Product_ProductFragmentFragmentDoc,
	'\n  fragment VariantLink_ProductVariantFragment on ProductVariant {\n    __typename\n    id\n    name\n    translation(languageCode: $languageCode) {\n      __typename\n      id\n      name\n    }\n    product {\n      __typename\n      id\n      slug\n    }\n  }\n':
		types.VariantLink_ProductVariantFragmentFragmentDoc,
	'\n  fragment VariantLinks_ProductFragment on Product {\n    variants {\n      __typename\n      id\n      ...VariantLink_ProductVariantFragment\n    }\n  }\n':
		types.VariantLinks_ProductFragmentFragmentDoc,
	'\n  query ProductPage_ProductQuery(\n    $slug: String!\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    product(slug: $slug, channel: $channel) {\n      __typename\n      id\n      ...Product_ProductFragment\n    }\n  }\n':
		types.ProductPage_ProductQueryDocument,
	'\n  fragment CategoryDropdownItem_CategoryFragment on Category {\n    __typename\n    id\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    slug\n  }\n':
		types.CategoryDropdownItem_CategoryFragmentFragmentDoc,
	'\n  query CategoryDropdownItems_CategoriesQuery(\n    $first: Int\n    $after: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    categories(first: $first, after: $after) {\n      edges {\n        node {\n          __typename\n          id\n          ...CategoryDropdownItem_CategoryFragment\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n        hasPreviousPage\n        startCursor\n      }\n    }\n  }\n':
		types.CategoryDropdownItems_CategoriesQueryDocument,
	'\n  fragment CollectionDropdownItem_CategoryFragment on Collection {\n    __typename\n    id\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    slug\n  }\n':
		types.CollectionDropdownItem_CategoryFragmentFragmentDoc,
	'\n  query CollectionDropdownItems_CategoriesQuery(\n    $first: Int\n    $after: String\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    collections(first: $first, after: $after, channel: $channel) {\n      edges {\n        node {\n          __typename\n          id\n          ...CollectionDropdownItem_CategoryFragment\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n        hasPreviousPage\n        startCursor\n      }\n    }\n  }\n':
		types.CollectionDropdownItems_CategoriesQueryDocument,
	'\n  query ProductItems_ProductsQuery(\n    $first: Int\n    $after: String\n    $last: Int\n    $before: String\n    $channel: String\n    $categoryIds: [ID!]\n    $collectionIds: [ID!]\n    $languageCode: LanguageCodeEnum!\n  ) {\n    products(\n      first: $first\n      after: $after\n      last: $last\n      before: $before\n      filter: {categories: $categoryIds, collections: $collectionIds}\n      channel: $channel\n    ) {\n      edges {\n        node {\n          id\n          ...ProductItem_ProductFragment\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n        hasPreviousPage\n        startCursor\n      }\n    }\n  }\n':
		types.ProductItems_ProductsQueryDocument,
	'\n  query GetCategoryIds($first: Int!, $slugs: [String!]!) {\n    categories(first: $first, filter: {slugs: $slugs}) {\n      edges {\n        node {\n          id\n        }\n      }\n    }\n  }\n':
		types.GetCategoryIdsDocument,
	'\n  query GetCollectionIds($first: Int!, $slugs: [String!]!, $channel: String) {\n    collections(first: $first, filter: {slugs: $slugs}, channel: $channel) {\n      edges {\n        node {\n          id\n        }\n      }\n    }\n  }\n':
		types.GetCollectionIdsDocument,
	'\n  fragment AddressFields_ChannelFragment on Channel {\n    ...CountrySelect_ChannelFragment\n  }\n':
		types.AddressFields_ChannelFragmentFragmentDoc,
	'\n  fragment AddressFields_AddressValidationDataFragment on AddressValidationData {\n    ...CityFormField_AddressValidationDataFragment\n    ...CountryAreaFormField_AddressValidationDataFragment\n  }\n':
		types.AddressFields_AddressValidationDataFragmentFragmentDoc,
	'\n  fragment CityFormField_AddressValidationDataFragment on AddressValidationData {\n    cityType\n    cityChoices {\n      raw\n      verbose\n    }\n  }\n':
		types.CityFormField_AddressValidationDataFragmentFragmentDoc,
	'\n    fragment CountryAreaFormField_AddressValidationDataFragment on AddressValidationData {\n      countryAreaType\n      countryAreaChoices {\n        raw\n        verbose\n      }\n    }\n  ':
		types.CountryAreaFormField_AddressValidationDataFragmentFragmentDoc,
	'\n  fragment CountrySelect_ChannelFragment on Channel {\n    countries {\n      code\n    }\n  }\n':
		types.CountrySelect_ChannelFragmentFragmentDoc,
	'\n  fragment Breadcrumbs_CheckoutFragment on Checkout {\n    shippingAddress {\n      __typename\n    }\n    deliveryMethod {\n      __typename\n    }\n    billingAddress {\n      __typename\n    }\n  }\n':
		types.Breadcrumbs_CheckoutFragmentFragmentDoc,
	'\n  query Summary_Query($id: ID!, $languageCode: LanguageCodeEnum!) {\n    checkout(id: $id) {\n      ...Lines_CheckoutFragment\n      ...CheckoutTotal_CheckoutFragment\n    }\n  }\n':
		types.Summary_QueryDocument,
	'\n  fragment Lines_CheckoutFragment on Checkout {\n    lines {\n      id\n      ...Line_CheckoutLineFragment\n    }\n    ...Line_CheckoutFragment\n  }\n':
		types.Lines_CheckoutFragmentFragmentDoc,
	'\n  fragment Line_CheckoutFragment on Checkout {\n    displayGrossPrices\n  }\n':
		types.Line_CheckoutFragmentFragmentDoc,
	'\n  fragment Line_CheckoutLineFragment on CheckoutLine {\n    quantity\n    totalPrice {\n      currency\n      net {\n        amount\n      }\n      gross {\n        amount\n      }\n    }\n    variant {\n      product {\n        name\n        translation(languageCode: $languageCode) {\n          name\n        }\n        attributes {\n          values {\n            name\n            translation(languageCode: $languageCode) {\n              name\n            }\n          }\n        }\n        media {\n          url\n          alt\n        }\n      }\n    }\n  }\n':
		types.Line_CheckoutLineFragmentFragmentDoc,
	'\n  fragment CheckoutTotal_CheckoutFragment on Checkout {\n    subtotalPrice {\n      currency\n      net {\n        amount\n      }\n      gross {\n        amount\n      }\n    }\n    shippingPrice {\n      currency\n      net {\n        amount\n      }\n      gross {\n        amount\n      }\n    }\n    totalPrice {\n      currency\n      net {\n        amount\n      }\n      gross {\n        amount\n      }\n    }\n    displayGrossPrices\n  }\n':
		types.CheckoutTotal_CheckoutFragmentFragmentDoc,
	'\n  mutation UpdateCheckoutBillingAddressMutation(\n    $id: ID!\n    $billingAddress: AddressInput!\n  ) {\n    checkoutBillingAddressUpdate(id: $id, billingAddress: $billingAddress) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n':
		types.UpdateCheckoutBillingAddressMutationDocument,
	'\n  query BillingSection_ChannelQuery($channel: String!) {\n    channel(slug: $channel) {\n      ...BillingAddressForm_ChannelFragment\n    }\n  }\n':
		types.BillingSection_ChannelQueryDocument,
	'\n  query BillingSection_AddressValidationRulesQuery($countryCode: CountryCode!) {\n    addressValidationRules(countryCode: $countryCode) {\n      cityChoices {\n        raw\n      }\n      countryAreaChoices {\n        raw\n      }\n      ...BillingAddressForm_AddressValidationDataFragment\n    }\n  }\n':
		types.BillingSection_AddressValidationRulesQueryDocument,
	'\n  fragment BillingSection_CheckoutFragment on Checkout {\n    email\n    billingAddress {\n      country {\n        code\n        country\n      }\n      firstName\n      lastName\n      streetAddress1\n      streetAddress2\n      city\n      countryArea\n      postalCode\n    }\n  }\n':
		types.BillingSection_CheckoutFragmentFragmentDoc,
	'\n  fragment BillingAddressForm_ChannelFragment on Channel {\n    ...AddressFields_ChannelFragment\n  }\n':
		types.BillingAddressForm_ChannelFragmentFragmentDoc,
	'\n  fragment BillingAddressForm_AddressValidationDataFragment on AddressValidationData {\n    postalCodeMatchers\n    postalCodeExamples\n    ...AddressFields_AddressValidationDataFragment\n  }\n':
		types.BillingAddressForm_AddressValidationDataFragmentFragmentDoc,
	'\n  query BillingPage_CheckoutQuery($id: ID!) {\n    checkout(id: $id) {\n      quantity\n      shippingAddress {\n        __typename\n      }\n      deliveryMethod {\n        __typename\n      }\n      billingAddress {\n        __typename\n      }\n      ...Breadcrumbs_CheckoutFragment\n      ...BillingSection_CheckoutFragment\n    }\n  }\n':
		types.BillingPage_CheckoutQueryDocument,
	'\n  query InformationSection_ChannelQuery($channel: String!) {\n    channel(slug: $channel) {\n      ...InformationForm_ChannelFragment\n    }\n  }\n':
		types.InformationSection_ChannelQueryDocument,
	'\n  query InformationSection_AddressValidationRulesQuery(\n    $countryCode: CountryCode!\n  ) {\n    addressValidationRules(countryCode: $countryCode) {\n      cityChoices {\n        raw\n      }\n      countryAreaChoices {\n        raw\n      }\n      ...InformationForm_AddressValidationDataFragment\n    }\n  }\n':
		types.InformationSection_AddressValidationRulesQueryDocument,
	'\n  fragment InformationSection_CheckoutFragment on Checkout {\n    email\n    shippingAddress {\n      country {\n        code\n        country\n      }\n      firstName\n      lastName\n      streetAddress1\n      streetAddress2\n      city\n      countryArea\n      postalCode\n    }\n  }\n':
		types.InformationSection_CheckoutFragmentFragmentDoc,
	'\n  fragment InformationForm_ChannelFragment on Channel {\n    ...AddressFields_ChannelFragment\n  }\n':
		types.InformationForm_ChannelFragmentFragmentDoc,
	'\n  fragment InformationForm_AddressValidationDataFragment on AddressValidationData {\n    postalCodeMatchers\n    postalCodeExamples\n    ...AddressFields_AddressValidationDataFragment\n  }\n':
		types.InformationForm_AddressValidationDataFragmentFragmentDoc,
	'\n  mutation UpdateCheckoutEmailMutation($id: ID!, $email: String!) {\n    checkoutEmailUpdate(id: $id, email: $email) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n':
		types.UpdateCheckoutEmailMutationDocument,
	'\n  mutation UpdateCheckoutShippingAddressMutation(\n    $id: ID!\n    $shippingAddress: AddressInput!\n  ) {\n    checkoutShippingAddressUpdate(id: $id, shippingAddress: $shippingAddress) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n':
		types.UpdateCheckoutShippingAddressMutationDocument,
	'\n  query InformationPage_Query($id: ID!) {\n    checkout(id: $id) {\n      quantity\n      shippingAddress {\n        __typename\n      }\n      deliveryMethod {\n        __typename\n      }\n      billingAddress {\n        __typename\n      }\n      ...Breadcrumbs_CheckoutFragment\n      ...InformationSection_CheckoutFragment\n    }\n  }\n':
		types.InformationPage_QueryDocument,
	'\n  query PaymentPage_CheckoutQuery($id: ID!) {\n    checkout(id: $id) {\n      quantity\n      shippingAddress {\n        __typename\n      }\n      deliveryMethod {\n        __typename\n      }\n      billingAddress {\n        __typename\n      }\n      ...Breadcrumbs_CheckoutFragment\n    }\n  }\n':
		types.PaymentPage_CheckoutQueryDocument,
	'\n  fragment ShippingMethodSection_CheckoutFragment on Checkout {\n    ...ShippingMethodForm_CheckoutFragment\n  }\n':
		types.ShippingMethodSection_CheckoutFragmentFragmentDoc,
	'\n  fragment ShippingMethodForm_CheckoutFragment on Checkout {\n    shippingMethod: deliveryMethod {\n      ... on ShippingMethod {\n        id\n      }\n    }\n    shippingMethods {\n      id\n      active\n      ...ShippingMethodRadioItem_ShippingMethod\n    }\n  }\n':
		types.ShippingMethodForm_CheckoutFragmentFragmentDoc,
	'\n  fragment DeliveryDays_ShippingMethod on ShippingMethod {\n    minimumDeliveryDays\n    maximumDeliveryDays\n  }\n':
		types.DeliveryDays_ShippingMethodFragmentDoc,
	'\n  fragment ShippingMethodRadioItem_ShippingMethod on ShippingMethod {\n    id\n    name\n    price {\n      currency\n      amount\n    }\n    ...DeliveryDays_ShippingMethod\n  }\n':
		types.ShippingMethodRadioItem_ShippingMethodFragmentDoc,
	'\n  mutation UpdateCheckoutDeliveryMethodMutation(\n    $id: ID!\n    $deliveryMethodId: ID!\n  ) {\n    checkoutDeliveryMethodUpdate(id: $id, deliveryMethodId: $deliveryMethodId) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n':
		types.UpdateCheckoutDeliveryMethodMutationDocument,
	'\n  fragment ShippingReviewTable_CheckoutFragment on Checkout {\n    email\n    shippingAddress {\n      streetAddress1\n      city\n      countryArea\n      postalCode\n      country {\n        code\n      }\n    }\n  }\n':
		types.ShippingReviewTable_CheckoutFragmentFragmentDoc,
	'\n  query ShippingPage_CheckoutQuery($id: ID!) {\n    checkout(id: $id) {\n      quantity\n      shippingAddress {\n        __typename\n      }\n      deliveryMethod {\n        __typename\n      }\n      billingAddress {\n        __typename\n      }\n      ...Breadcrumbs_CheckoutFragment\n      ...ShippingReviewTable_CheckoutFragment\n      ...ShippingMethodSection_CheckoutFragment\n    }\n  }\n':
		types.ShippingPage_CheckoutQueryDocument,
	'\n  mutation DeactivateAllTokensMutation {\n    tokensDeactivateAll {\n      errors {\n        field\n        message\n        code\n      }\n    }\n  }\n':
		types.DeactivateAllTokensMutationDocument,
	'\n  mutation RefreshAccessTokenMutation($refreshToken: String!) {\n    tokenRefresh(refreshToken: $refreshToken) {\n      token\n      errors {\n        field\n        message\n        code\n      }\n    }\n  }\n':
		types.RefreshAccessTokenMutationDocument,
	'\n  mutation AddCheckoutLineMutation($id: ID, $line: CheckoutLineInput!) {\n    checkoutLinesAdd(id: $id, lines: [$line]) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n':
		types.AddCheckoutLineMutationDocument,
	'\n  mutation CreateCheckoutMutation(\n    $lines: [CheckoutLineInput!]!\n    $channel: String!\n    $languageCode: LanguageCodeEnum!\n    $email: String\n  ) {\n    checkoutCreate(\n      input: {\n        channel: $channel\n        lines: $lines\n        languageCode: $languageCode\n        email: $email\n      }\n    ) {\n      checkout {\n        id\n      }\n      errors {\n        field\n        code\n      }\n    }\n  }\n':
		types.CreateCheckoutMutationDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  mutation LogInMutation($email: String!, $password: String!) {\n    tokenCreate(email: $email, password: $password) {\n      token\n      refreshToken\n      csrfToken\n      errors {\n        field\n        code\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation LogInMutation($email: String!, $password: String!) {\n    tokenCreate(email: $email, password: $password) {\n      token\n      refreshToken\n      csrfToken\n      errors {\n        field\n        code\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  mutation ConfirmAccountMutation($email: String!, $token: String!) {\n    confirmAccount(email: $email, token: $token) {\n      user {\n        isActive\n      }\n      errors {\n        field\n        code\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation ConfirmAccountMutation($email: String!, $token: String!) {\n    confirmAccount(email: $email, token: $token) {\n      user {\n        isActive\n      }\n      errors {\n        field\n        code\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  mutation RequestPasswordResetMutation(\n    $email: String!\n    $redirectUrl: String!\n    $channel: String!\n  ) {\n    requestPasswordReset(\n      email: $email\n      redirectUrl: $redirectUrl\n      channel: $channel\n    ) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation RequestPasswordResetMutation(\n    $email: String!\n    $redirectUrl: String!\n    $channel: String!\n  ) {\n    requestPasswordReset(\n      email: $email\n      redirectUrl: $redirectUrl\n      channel: $channel\n    ) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  mutation SetPasswordMutation(\n    $email: String!\n    $token: String!\n    $password: String!\n  ) {\n    setPassword(email: $email, token: $token, password: $password) {\n      token\n      refreshToken\n      csrfToken\n      errors {\n        field\n        code\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation SetPasswordMutation(\n    $email: String!\n    $token: String!\n    $password: String!\n  ) {\n    setPassword(email: $email, token: $token, password: $password) {\n      token\n      refreshToken\n      csrfToken\n      errors {\n        field\n        code\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  mutation SignUpMutation(\n    $email: String!\n    $password: String!\n    $channel: String!\n    $redirectUrl: String!\n  ) {\n    accountRegister(\n      input: {\n        email: $email\n        password: $password\n        channel: $channel\n        redirectUrl: $redirectUrl\n      }\n    ) {\n      user {\n        email\n      }\n      errors {\n        field\n        code\n      }\n      requiresConfirmation\n    }\n  }\n',
): (typeof documents)['\n  mutation SignUpMutation(\n    $email: String!\n    $password: String!\n    $channel: String!\n    $redirectUrl: String!\n  ) {\n    accountRegister(\n      input: {\n        email: $email\n        password: $password\n        channel: $channel\n        redirectUrl: $redirectUrl\n      }\n    ) {\n      user {\n        email\n      }\n      errors {\n        field\n        code\n      }\n      requiresConfirmation\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  mutation ConfirmEmailChangeMutation($channel: String!, $token: String!) {\n    confirmEmailChange(channel: $channel, token: $token) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation ConfirmEmailChangeMutation($channel: String!, $token: String!) {\n    confirmEmailChange(channel: $channel, token: $token) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  mutation ChangePasswordMutation(\n    $newPassword: String!\n    $oldPassword: String!\n  ) {\n    passwordChange(newPassword: $newPassword, oldPassword: $oldPassword) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation ChangePasswordMutation(\n    $newPassword: String!\n    $oldPassword: String!\n  ) {\n    passwordChange(newPassword: $newPassword, oldPassword: $oldPassword) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  mutation RequestEmailChangeMutation(\n    $channel: String!\n    $newEmail: String!\n    $password: String!\n    $redirectUrl: String!\n  ) {\n    requestEmailChange(\n      channel: $channel\n      newEmail: $newEmail\n      password: $password\n      redirectUrl: $redirectUrl\n    ) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation RequestEmailChangeMutation(\n    $channel: String!\n    $newEmail: String!\n    $password: String!\n    $redirectUrl: String!\n  ) {\n    requestEmailChange(\n      channel: $channel\n      newEmail: $newEmail\n      password: $password\n      redirectUrl: $redirectUrl\n    ) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment ProductCategoryName_CategoryFragment on Category {\n    __typename\n    id\n    name\n    translation(languageCode: $languageCode) {\n      __typename\n      id\n      name\n    }\n  }\n',
): (typeof documents)['\n  fragment ProductCategoryName_CategoryFragment on Category {\n    __typename\n    id\n    name\n    translation(languageCode: $languageCode) {\n      __typename\n      id\n      name\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment ProductPriceRange_PricingInfoFragment on ProductPricingInfo {\n    priceRange {\n      start {\n        gross {\n          currency\n          amount\n        }\n      }\n      stop {\n        gross {\n          currency\n          amount\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  fragment ProductPriceRange_PricingInfoFragment on ProductPricingInfo {\n    priceRange {\n      start {\n        gross {\n          currency\n          amount\n        }\n      }\n      stop {\n        gross {\n          currency\n          amount\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment ProductThumbnail_ImageFragment on Image {\n    __typename\n    url\n    alt\n  }\n',
): (typeof documents)['\n  fragment ProductThumbnail_ImageFragment on Image {\n    __typename\n    url\n    alt\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment NavbarItem_MenuItemFragment on MenuItem {\n    children {\n      __typename\n    }\n    ...NavbarLink_MenuItemFragment\n    ...NavbarDropdown_MenuItemFragment\n  }\n',
): (typeof documents)['\n  fragment NavbarItem_MenuItemFragment on MenuItem {\n    children {\n      __typename\n    }\n    ...NavbarLink_MenuItemFragment\n    ...NavbarDropdown_MenuItemFragment\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment NavbarLink_MenuItemFragment on MenuItem {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    page {\n      slug\n    }\n  }\n',
): (typeof documents)['\n  fragment NavbarLink_MenuItemFragment on MenuItem {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    page {\n      slug\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  query NavbarMenu_MenuQuery(\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    menu(name: "navbar", channel: $channel) {\n      items {\n        id\n        ...NavbarItem_MenuItemFragment\n      }\n    }\n  }\n',
): (typeof documents)['\n  query NavbarMenu_MenuQuery(\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    menu(name: "navbar", channel: $channel) {\n      items {\n        id\n        ...NavbarItem_MenuItemFragment\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment NavbarDropdown_MenuItemFragment on MenuItem {\n    ...NavbarDropdownTrigger_MenuItemFragment\n    ...NavbarDropdownContent_MenuItemFragment\n  }\n',
): (typeof documents)['\n  fragment NavbarDropdown_MenuItemFragment on MenuItem {\n    ...NavbarDropdownTrigger_MenuItemFragment\n    ...NavbarDropdownContent_MenuItemFragment\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment NavbarDropdownContent_MenuItemFragment on MenuItem {\n    page {\n      slug\n    }\n    children {\n      id\n      ...NavbarDropdownItem_MenuItemFragment\n    }\n  }\n',
): (typeof documents)['\n  fragment NavbarDropdownContent_MenuItemFragment on MenuItem {\n    page {\n      slug\n    }\n    children {\n      id\n      ...NavbarDropdownItem_MenuItemFragment\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment NavbarDropdownItem_MenuItemFragment on MenuItem {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    category {\n      slug\n    }\n    collection {\n      slug\n    }\n  }\n',
): (typeof documents)['\n  fragment NavbarDropdownItem_MenuItemFragment on MenuItem {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    category {\n      slug\n    }\n    collection {\n      slug\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment NavbarDropdownTrigger_MenuItemFragment on MenuItem {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n  }\n',
): (typeof documents)['\n  fragment NavbarDropdownTrigger_MenuItemFragment on MenuItem {\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment ProductItem_ProductFragment on Product {\n    __typename\n    id\n    name\n    slug\n    translation(languageCode: $languageCode) {\n      __typename\n      id\n      name\n    }\n    thumbnail(format: WEBP, size: 4096) {\n      ...ProductThumbnail_ImageFragment\n    }\n    pricing {\n      ...ProductPriceRange_PricingInfoFragment\n    }\n    category {\n      ...ProductCategoryName_CategoryFragment\n    }\n    variants {\n      __typename\n      id\n    }\n  }\n',
): (typeof documents)['\n  fragment ProductItem_ProductFragment on Product {\n    __typename\n    id\n    name\n    slug\n    translation(languageCode: $languageCode) {\n      __typename\n      id\n      name\n    }\n    thumbnail(format: WEBP, size: 4096) {\n      ...ProductThumbnail_ImageFragment\n    }\n    pricing {\n      ...ProductPriceRange_PricingInfoFragment\n    }\n    category {\n      ...ProductCategoryName_CategoryFragment\n    }\n    variants {\n      __typename\n      id\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment ShoppingCartButton_CheckoutFragment on Checkout {\n    quantity\n  }\n',
): (typeof documents)['\n  fragment ShoppingCartButton_CheckoutFragment on Checkout {\n    quantity\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  query CartDialog_CheckoutQuery($id: ID!, $languageCode: LanguageCodeEnum!) {\n    checkout(id: $id) {\n      quantity\n      ...ShoppingCartButton_CheckoutFragment\n      ...CartBody_CheckoutFragment\n      ...CartFooter_CheckoutFragment\n    }\n  }\n',
): (typeof documents)['\n  query CartDialog_CheckoutQuery($id: ID!, $languageCode: LanguageCodeEnum!) {\n    checkout(id: $id) {\n      quantity\n      ...ShoppingCartButton_CheckoutFragment\n      ...CartBody_CheckoutFragment\n      ...CartFooter_CheckoutFragment\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment CartBody_CheckoutFragment on Checkout {\n    lines {\n      id\n      ...CheckoutLine_CheckoutLineFragment\n    }\n    ...CheckoutLine_CheckoutFragment\n  }\n',
): (typeof documents)['\n  fragment CartBody_CheckoutFragment on Checkout {\n    lines {\n      id\n      ...CheckoutLine_CheckoutLineFragment\n    }\n    ...CheckoutLine_CheckoutFragment\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment CheckoutLine_CheckoutFragment on Checkout {\n    displayGrossPrices\n  }\n',
): (typeof documents)['\n  fragment CheckoutLine_CheckoutFragment on Checkout {\n    displayGrossPrices\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment CheckoutLine_CheckoutLineFragment on CheckoutLine {\n    id\n    quantity\n    totalPrice {\n      currency\n      net {\n        amount\n      }\n      gross {\n        amount\n      }\n    }\n    variant {\n      product {\n        name\n        translation(languageCode: $languageCode) {\n          name\n        }\n        attributes {\n          values {\n            name\n            translation(languageCode: $languageCode) {\n              name\n            }\n          }\n        }\n        media {\n          url\n          alt\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  fragment CheckoutLine_CheckoutLineFragment on CheckoutLine {\n    id\n    quantity\n    totalPrice {\n      currency\n      net {\n        amount\n      }\n      gross {\n        amount\n      }\n    }\n    variant {\n      product {\n        name\n        translation(languageCode: $languageCode) {\n          name\n        }\n        attributes {\n          values {\n            name\n            translation(languageCode: $languageCode) {\n              name\n            }\n          }\n        }\n        media {\n          url\n          alt\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  mutation UpdateCheckoutLinesMutation(\n    $checkoutId: ID!\n    $lines: [CheckoutLineUpdateInput!]!\n  ) {\n    checkoutLinesUpdate(checkoutId: $checkoutId, lines: $lines) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation UpdateCheckoutLinesMutation(\n    $checkoutId: ID!\n    $lines: [CheckoutLineUpdateInput!]!\n  ) {\n    checkoutLinesUpdate(checkoutId: $checkoutId, lines: $lines) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  mutation DeleteCheckoutLinesMutation($id: ID!, $linesIds: [ID!]!) {\n    checkoutLinesDelete(id: $id, linesIds: $linesIds) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation DeleteCheckoutLinesMutation($id: ID!, $linesIds: [ID!]!) {\n    checkoutLinesDelete(id: $id, linesIds: $linesIds) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment CartFooter_CheckoutFragment on Checkout {\n    ...CartTotal_CheckoutFragment\n  }\n',
): (typeof documents)['\n  fragment CartFooter_CheckoutFragment on Checkout {\n    ...CartTotal_CheckoutFragment\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment CartTotal_CheckoutFragment on Checkout {\n    subtotalPrice {\n      currency\n      net {\n        amount\n      }\n      gross {\n        amount\n      }\n    }\n    shippingPrice {\n      currency\n      net {\n        amount\n      }\n      gross {\n        amount\n      }\n    }\n    totalPrice {\n      currency\n      net {\n        amount\n      }\n      gross {\n        amount\n      }\n    }\n    displayGrossPrices\n  }\n',
): (typeof documents)['\n  fragment CartTotal_CheckoutFragment on Checkout {\n    subtotalPrice {\n      currency\n      net {\n        amount\n      }\n      gross {\n        amount\n      }\n    }\n    shippingPrice {\n      currency\n      net {\n        amount\n      }\n      gross {\n        amount\n      }\n    }\n    totalPrice {\n      currency\n      net {\n        amount\n      }\n      gross {\n        amount\n      }\n    }\n    displayGrossPrices\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  query CategoryPage_CategoryQuery(\n    $slug: String\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    category(slug: $slug) {\n      __typename\n      id\n      products(first: 100, channel: $channel) {\n        edges {\n          node {\n            __typename\n            id\n            ...ProductItem_ProductFragment\n          }\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query CategoryPage_CategoryQuery(\n    $slug: String\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    category(slug: $slug) {\n      __typename\n      id\n      products(first: 100, channel: $channel) {\n        edges {\n          node {\n            __typename\n            id\n            ...ProductItem_ProductFragment\n          }\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  query CollectionPage_CollectionQuery(\n    $slug: String\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    collection(slug: $slug, channel: $channel) {\n      __typename\n      id\n      products(first: 100) {\n        edges {\n          node {\n            __typename\n            id\n            ...ProductItem_ProductFragment\n          }\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query CollectionPage_CollectionQuery(\n    $slug: String\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    collection(slug: $slug, channel: $channel) {\n      __typename\n      id\n      products(first: 100) {\n        edges {\n          node {\n            __typename\n            id\n            ...ProductItem_ProductFragment\n          }\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment Product_ProductFragment on Product {\n    __typename\n    id\n    name\n    description\n    translation(languageCode: $languageCode) {\n      __typename\n      id\n      name\n      description\n    }\n    isAvailable\n    thumbnail(format: WEBP, size: 4096) {\n      ...ProductThumbnail_ImageFragment\n    }\n    pricing {\n      ...ProductPriceRange_PricingInfoFragment\n    }\n    variants {\n      __typename\n      id\n    }\n    ...VariantLinks_ProductFragment\n  }\n',
): (typeof documents)['\n  fragment Product_ProductFragment on Product {\n    __typename\n    id\n    name\n    description\n    translation(languageCode: $languageCode) {\n      __typename\n      id\n      name\n      description\n    }\n    isAvailable\n    thumbnail(format: WEBP, size: 4096) {\n      ...ProductThumbnail_ImageFragment\n    }\n    pricing {\n      ...ProductPriceRange_PricingInfoFragment\n    }\n    variants {\n      __typename\n      id\n    }\n    ...VariantLinks_ProductFragment\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment VariantLink_ProductVariantFragment on ProductVariant {\n    __typename\n    id\n    name\n    translation(languageCode: $languageCode) {\n      __typename\n      id\n      name\n    }\n    product {\n      __typename\n      id\n      slug\n    }\n  }\n',
): (typeof documents)['\n  fragment VariantLink_ProductVariantFragment on ProductVariant {\n    __typename\n    id\n    name\n    translation(languageCode: $languageCode) {\n      __typename\n      id\n      name\n    }\n    product {\n      __typename\n      id\n      slug\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment VariantLinks_ProductFragment on Product {\n    variants {\n      __typename\n      id\n      ...VariantLink_ProductVariantFragment\n    }\n  }\n',
): (typeof documents)['\n  fragment VariantLinks_ProductFragment on Product {\n    variants {\n      __typename\n      id\n      ...VariantLink_ProductVariantFragment\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  query ProductPage_ProductQuery(\n    $slug: String!\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    product(slug: $slug, channel: $channel) {\n      __typename\n      id\n      ...Product_ProductFragment\n    }\n  }\n',
): (typeof documents)['\n  query ProductPage_ProductQuery(\n    $slug: String!\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    product(slug: $slug, channel: $channel) {\n      __typename\n      id\n      ...Product_ProductFragment\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment CategoryDropdownItem_CategoryFragment on Category {\n    __typename\n    id\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    slug\n  }\n',
): (typeof documents)['\n  fragment CategoryDropdownItem_CategoryFragment on Category {\n    __typename\n    id\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    slug\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  query CategoryDropdownItems_CategoriesQuery(\n    $first: Int\n    $after: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    categories(first: $first, after: $after) {\n      edges {\n        node {\n          __typename\n          id\n          ...CategoryDropdownItem_CategoryFragment\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n        hasPreviousPage\n        startCursor\n      }\n    }\n  }\n',
): (typeof documents)['\n  query CategoryDropdownItems_CategoriesQuery(\n    $first: Int\n    $after: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    categories(first: $first, after: $after) {\n      edges {\n        node {\n          __typename\n          id\n          ...CategoryDropdownItem_CategoryFragment\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n        hasPreviousPage\n        startCursor\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment CollectionDropdownItem_CategoryFragment on Collection {\n    __typename\n    id\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    slug\n  }\n',
): (typeof documents)['\n  fragment CollectionDropdownItem_CategoryFragment on Collection {\n    __typename\n    id\n    name\n    translation(languageCode: $languageCode) {\n      name\n    }\n    slug\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  query CollectionDropdownItems_CategoriesQuery(\n    $first: Int\n    $after: String\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    collections(first: $first, after: $after, channel: $channel) {\n      edges {\n        node {\n          __typename\n          id\n          ...CollectionDropdownItem_CategoryFragment\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n        hasPreviousPage\n        startCursor\n      }\n    }\n  }\n',
): (typeof documents)['\n  query CollectionDropdownItems_CategoriesQuery(\n    $first: Int\n    $after: String\n    $channel: String\n    $languageCode: LanguageCodeEnum!\n  ) {\n    collections(first: $first, after: $after, channel: $channel) {\n      edges {\n        node {\n          __typename\n          id\n          ...CollectionDropdownItem_CategoryFragment\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n        hasPreviousPage\n        startCursor\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  query ProductItems_ProductsQuery(\n    $first: Int\n    $after: String\n    $last: Int\n    $before: String\n    $channel: String\n    $categoryIds: [ID!]\n    $collectionIds: [ID!]\n    $languageCode: LanguageCodeEnum!\n  ) {\n    products(\n      first: $first\n      after: $after\n      last: $last\n      before: $before\n      filter: {categories: $categoryIds, collections: $collectionIds}\n      channel: $channel\n    ) {\n      edges {\n        node {\n          id\n          ...ProductItem_ProductFragment\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n        hasPreviousPage\n        startCursor\n      }\n    }\n  }\n',
): (typeof documents)['\n  query ProductItems_ProductsQuery(\n    $first: Int\n    $after: String\n    $last: Int\n    $before: String\n    $channel: String\n    $categoryIds: [ID!]\n    $collectionIds: [ID!]\n    $languageCode: LanguageCodeEnum!\n  ) {\n    products(\n      first: $first\n      after: $after\n      last: $last\n      before: $before\n      filter: {categories: $categoryIds, collections: $collectionIds}\n      channel: $channel\n    ) {\n      edges {\n        node {\n          id\n          ...ProductItem_ProductFragment\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n        hasPreviousPage\n        startCursor\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  query GetCategoryIds($first: Int!, $slugs: [String!]!) {\n    categories(first: $first, filter: {slugs: $slugs}) {\n      edges {\n        node {\n          id\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query GetCategoryIds($first: Int!, $slugs: [String!]!) {\n    categories(first: $first, filter: {slugs: $slugs}) {\n      edges {\n        node {\n          id\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  query GetCollectionIds($first: Int!, $slugs: [String!]!, $channel: String) {\n    collections(first: $first, filter: {slugs: $slugs}, channel: $channel) {\n      edges {\n        node {\n          id\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query GetCollectionIds($first: Int!, $slugs: [String!]!, $channel: String) {\n    collections(first: $first, filter: {slugs: $slugs}, channel: $channel) {\n      edges {\n        node {\n          id\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment AddressFields_ChannelFragment on Channel {\n    ...CountrySelect_ChannelFragment\n  }\n',
): (typeof documents)['\n  fragment AddressFields_ChannelFragment on Channel {\n    ...CountrySelect_ChannelFragment\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment AddressFields_AddressValidationDataFragment on AddressValidationData {\n    ...CityFormField_AddressValidationDataFragment\n    ...CountryAreaFormField_AddressValidationDataFragment\n  }\n',
): (typeof documents)['\n  fragment AddressFields_AddressValidationDataFragment on AddressValidationData {\n    ...CityFormField_AddressValidationDataFragment\n    ...CountryAreaFormField_AddressValidationDataFragment\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment CityFormField_AddressValidationDataFragment on AddressValidationData {\n    cityType\n    cityChoices {\n      raw\n      verbose\n    }\n  }\n',
): (typeof documents)['\n  fragment CityFormField_AddressValidationDataFragment on AddressValidationData {\n    cityType\n    cityChoices {\n      raw\n      verbose\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n    fragment CountryAreaFormField_AddressValidationDataFragment on AddressValidationData {\n      countryAreaType\n      countryAreaChoices {\n        raw\n        verbose\n      }\n    }\n  ',
): (typeof documents)['\n    fragment CountryAreaFormField_AddressValidationDataFragment on AddressValidationData {\n      countryAreaType\n      countryAreaChoices {\n        raw\n        verbose\n      }\n    }\n  '];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment CountrySelect_ChannelFragment on Channel {\n    countries {\n      code\n    }\n  }\n',
): (typeof documents)['\n  fragment CountrySelect_ChannelFragment on Channel {\n    countries {\n      code\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment Breadcrumbs_CheckoutFragment on Checkout {\n    shippingAddress {\n      __typename\n    }\n    deliveryMethod {\n      __typename\n    }\n    billingAddress {\n      __typename\n    }\n  }\n',
): (typeof documents)['\n  fragment Breadcrumbs_CheckoutFragment on Checkout {\n    shippingAddress {\n      __typename\n    }\n    deliveryMethod {\n      __typename\n    }\n    billingAddress {\n      __typename\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  query Summary_Query($id: ID!, $languageCode: LanguageCodeEnum!) {\n    checkout(id: $id) {\n      ...Lines_CheckoutFragment\n      ...CheckoutTotal_CheckoutFragment\n    }\n  }\n',
): (typeof documents)['\n  query Summary_Query($id: ID!, $languageCode: LanguageCodeEnum!) {\n    checkout(id: $id) {\n      ...Lines_CheckoutFragment\n      ...CheckoutTotal_CheckoutFragment\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment Lines_CheckoutFragment on Checkout {\n    lines {\n      id\n      ...Line_CheckoutLineFragment\n    }\n    ...Line_CheckoutFragment\n  }\n',
): (typeof documents)['\n  fragment Lines_CheckoutFragment on Checkout {\n    lines {\n      id\n      ...Line_CheckoutLineFragment\n    }\n    ...Line_CheckoutFragment\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment Line_CheckoutFragment on Checkout {\n    displayGrossPrices\n  }\n',
): (typeof documents)['\n  fragment Line_CheckoutFragment on Checkout {\n    displayGrossPrices\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment Line_CheckoutLineFragment on CheckoutLine {\n    quantity\n    totalPrice {\n      currency\n      net {\n        amount\n      }\n      gross {\n        amount\n      }\n    }\n    variant {\n      product {\n        name\n        translation(languageCode: $languageCode) {\n          name\n        }\n        attributes {\n          values {\n            name\n            translation(languageCode: $languageCode) {\n              name\n            }\n          }\n        }\n        media {\n          url\n          alt\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  fragment Line_CheckoutLineFragment on CheckoutLine {\n    quantity\n    totalPrice {\n      currency\n      net {\n        amount\n      }\n      gross {\n        amount\n      }\n    }\n    variant {\n      product {\n        name\n        translation(languageCode: $languageCode) {\n          name\n        }\n        attributes {\n          values {\n            name\n            translation(languageCode: $languageCode) {\n              name\n            }\n          }\n        }\n        media {\n          url\n          alt\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment CheckoutTotal_CheckoutFragment on Checkout {\n    subtotalPrice {\n      currency\n      net {\n        amount\n      }\n      gross {\n        amount\n      }\n    }\n    shippingPrice {\n      currency\n      net {\n        amount\n      }\n      gross {\n        amount\n      }\n    }\n    totalPrice {\n      currency\n      net {\n        amount\n      }\n      gross {\n        amount\n      }\n    }\n    displayGrossPrices\n  }\n',
): (typeof documents)['\n  fragment CheckoutTotal_CheckoutFragment on Checkout {\n    subtotalPrice {\n      currency\n      net {\n        amount\n      }\n      gross {\n        amount\n      }\n    }\n    shippingPrice {\n      currency\n      net {\n        amount\n      }\n      gross {\n        amount\n      }\n    }\n    totalPrice {\n      currency\n      net {\n        amount\n      }\n      gross {\n        amount\n      }\n    }\n    displayGrossPrices\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  mutation UpdateCheckoutBillingAddressMutation(\n    $id: ID!\n    $billingAddress: AddressInput!\n  ) {\n    checkoutBillingAddressUpdate(id: $id, billingAddress: $billingAddress) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation UpdateCheckoutBillingAddressMutation(\n    $id: ID!\n    $billingAddress: AddressInput!\n  ) {\n    checkoutBillingAddressUpdate(id: $id, billingAddress: $billingAddress) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  query BillingSection_ChannelQuery($channel: String!) {\n    channel(slug: $channel) {\n      ...BillingAddressForm_ChannelFragment\n    }\n  }\n',
): (typeof documents)['\n  query BillingSection_ChannelQuery($channel: String!) {\n    channel(slug: $channel) {\n      ...BillingAddressForm_ChannelFragment\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  query BillingSection_AddressValidationRulesQuery($countryCode: CountryCode!) {\n    addressValidationRules(countryCode: $countryCode) {\n      cityChoices {\n        raw\n      }\n      countryAreaChoices {\n        raw\n      }\n      ...BillingAddressForm_AddressValidationDataFragment\n    }\n  }\n',
): (typeof documents)['\n  query BillingSection_AddressValidationRulesQuery($countryCode: CountryCode!) {\n    addressValidationRules(countryCode: $countryCode) {\n      cityChoices {\n        raw\n      }\n      countryAreaChoices {\n        raw\n      }\n      ...BillingAddressForm_AddressValidationDataFragment\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment BillingSection_CheckoutFragment on Checkout {\n    email\n    billingAddress {\n      country {\n        code\n        country\n      }\n      firstName\n      lastName\n      streetAddress1\n      streetAddress2\n      city\n      countryArea\n      postalCode\n    }\n  }\n',
): (typeof documents)['\n  fragment BillingSection_CheckoutFragment on Checkout {\n    email\n    billingAddress {\n      country {\n        code\n        country\n      }\n      firstName\n      lastName\n      streetAddress1\n      streetAddress2\n      city\n      countryArea\n      postalCode\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment BillingAddressForm_ChannelFragment on Channel {\n    ...AddressFields_ChannelFragment\n  }\n',
): (typeof documents)['\n  fragment BillingAddressForm_ChannelFragment on Channel {\n    ...AddressFields_ChannelFragment\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment BillingAddressForm_AddressValidationDataFragment on AddressValidationData {\n    postalCodeMatchers\n    postalCodeExamples\n    ...AddressFields_AddressValidationDataFragment\n  }\n',
): (typeof documents)['\n  fragment BillingAddressForm_AddressValidationDataFragment on AddressValidationData {\n    postalCodeMatchers\n    postalCodeExamples\n    ...AddressFields_AddressValidationDataFragment\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  query BillingPage_CheckoutQuery($id: ID!) {\n    checkout(id: $id) {\n      quantity\n      shippingAddress {\n        __typename\n      }\n      deliveryMethod {\n        __typename\n      }\n      billingAddress {\n        __typename\n      }\n      ...Breadcrumbs_CheckoutFragment\n      ...BillingSection_CheckoutFragment\n    }\n  }\n',
): (typeof documents)['\n  query BillingPage_CheckoutQuery($id: ID!) {\n    checkout(id: $id) {\n      quantity\n      shippingAddress {\n        __typename\n      }\n      deliveryMethod {\n        __typename\n      }\n      billingAddress {\n        __typename\n      }\n      ...Breadcrumbs_CheckoutFragment\n      ...BillingSection_CheckoutFragment\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  query InformationSection_ChannelQuery($channel: String!) {\n    channel(slug: $channel) {\n      ...InformationForm_ChannelFragment\n    }\n  }\n',
): (typeof documents)['\n  query InformationSection_ChannelQuery($channel: String!) {\n    channel(slug: $channel) {\n      ...InformationForm_ChannelFragment\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  query InformationSection_AddressValidationRulesQuery(\n    $countryCode: CountryCode!\n  ) {\n    addressValidationRules(countryCode: $countryCode) {\n      cityChoices {\n        raw\n      }\n      countryAreaChoices {\n        raw\n      }\n      ...InformationForm_AddressValidationDataFragment\n    }\n  }\n',
): (typeof documents)['\n  query InformationSection_AddressValidationRulesQuery(\n    $countryCode: CountryCode!\n  ) {\n    addressValidationRules(countryCode: $countryCode) {\n      cityChoices {\n        raw\n      }\n      countryAreaChoices {\n        raw\n      }\n      ...InformationForm_AddressValidationDataFragment\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment InformationSection_CheckoutFragment on Checkout {\n    email\n    shippingAddress {\n      country {\n        code\n        country\n      }\n      firstName\n      lastName\n      streetAddress1\n      streetAddress2\n      city\n      countryArea\n      postalCode\n    }\n  }\n',
): (typeof documents)['\n  fragment InformationSection_CheckoutFragment on Checkout {\n    email\n    shippingAddress {\n      country {\n        code\n        country\n      }\n      firstName\n      lastName\n      streetAddress1\n      streetAddress2\n      city\n      countryArea\n      postalCode\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment InformationForm_ChannelFragment on Channel {\n    ...AddressFields_ChannelFragment\n  }\n',
): (typeof documents)['\n  fragment InformationForm_ChannelFragment on Channel {\n    ...AddressFields_ChannelFragment\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment InformationForm_AddressValidationDataFragment on AddressValidationData {\n    postalCodeMatchers\n    postalCodeExamples\n    ...AddressFields_AddressValidationDataFragment\n  }\n',
): (typeof documents)['\n  fragment InformationForm_AddressValidationDataFragment on AddressValidationData {\n    postalCodeMatchers\n    postalCodeExamples\n    ...AddressFields_AddressValidationDataFragment\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  mutation UpdateCheckoutEmailMutation($id: ID!, $email: String!) {\n    checkoutEmailUpdate(id: $id, email: $email) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation UpdateCheckoutEmailMutation($id: ID!, $email: String!) {\n    checkoutEmailUpdate(id: $id, email: $email) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  mutation UpdateCheckoutShippingAddressMutation(\n    $id: ID!\n    $shippingAddress: AddressInput!\n  ) {\n    checkoutShippingAddressUpdate(id: $id, shippingAddress: $shippingAddress) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation UpdateCheckoutShippingAddressMutation(\n    $id: ID!\n    $shippingAddress: AddressInput!\n  ) {\n    checkoutShippingAddressUpdate(id: $id, shippingAddress: $shippingAddress) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  query InformationPage_Query($id: ID!) {\n    checkout(id: $id) {\n      quantity\n      shippingAddress {\n        __typename\n      }\n      deliveryMethod {\n        __typename\n      }\n      billingAddress {\n        __typename\n      }\n      ...Breadcrumbs_CheckoutFragment\n      ...InformationSection_CheckoutFragment\n    }\n  }\n',
): (typeof documents)['\n  query InformationPage_Query($id: ID!) {\n    checkout(id: $id) {\n      quantity\n      shippingAddress {\n        __typename\n      }\n      deliveryMethod {\n        __typename\n      }\n      billingAddress {\n        __typename\n      }\n      ...Breadcrumbs_CheckoutFragment\n      ...InformationSection_CheckoutFragment\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  query PaymentPage_CheckoutQuery($id: ID!) {\n    checkout(id: $id) {\n      quantity\n      shippingAddress {\n        __typename\n      }\n      deliveryMethod {\n        __typename\n      }\n      billingAddress {\n        __typename\n      }\n      ...Breadcrumbs_CheckoutFragment\n    }\n  }\n',
): (typeof documents)['\n  query PaymentPage_CheckoutQuery($id: ID!) {\n    checkout(id: $id) {\n      quantity\n      shippingAddress {\n        __typename\n      }\n      deliveryMethod {\n        __typename\n      }\n      billingAddress {\n        __typename\n      }\n      ...Breadcrumbs_CheckoutFragment\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment ShippingMethodSection_CheckoutFragment on Checkout {\n    ...ShippingMethodForm_CheckoutFragment\n  }\n',
): (typeof documents)['\n  fragment ShippingMethodSection_CheckoutFragment on Checkout {\n    ...ShippingMethodForm_CheckoutFragment\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment ShippingMethodForm_CheckoutFragment on Checkout {\n    shippingMethod: deliveryMethod {\n      ... on ShippingMethod {\n        id\n      }\n    }\n    shippingMethods {\n      id\n      active\n      ...ShippingMethodRadioItem_ShippingMethod\n    }\n  }\n',
): (typeof documents)['\n  fragment ShippingMethodForm_CheckoutFragment on Checkout {\n    shippingMethod: deliveryMethod {\n      ... on ShippingMethod {\n        id\n      }\n    }\n    shippingMethods {\n      id\n      active\n      ...ShippingMethodRadioItem_ShippingMethod\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment DeliveryDays_ShippingMethod on ShippingMethod {\n    minimumDeliveryDays\n    maximumDeliveryDays\n  }\n',
): (typeof documents)['\n  fragment DeliveryDays_ShippingMethod on ShippingMethod {\n    minimumDeliveryDays\n    maximumDeliveryDays\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment ShippingMethodRadioItem_ShippingMethod on ShippingMethod {\n    id\n    name\n    price {\n      currency\n      amount\n    }\n    ...DeliveryDays_ShippingMethod\n  }\n',
): (typeof documents)['\n  fragment ShippingMethodRadioItem_ShippingMethod on ShippingMethod {\n    id\n    name\n    price {\n      currency\n      amount\n    }\n    ...DeliveryDays_ShippingMethod\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  mutation UpdateCheckoutDeliveryMethodMutation(\n    $id: ID!\n    $deliveryMethodId: ID!\n  ) {\n    checkoutDeliveryMethodUpdate(id: $id, deliveryMethodId: $deliveryMethodId) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation UpdateCheckoutDeliveryMethodMutation(\n    $id: ID!\n    $deliveryMethodId: ID!\n  ) {\n    checkoutDeliveryMethodUpdate(id: $id, deliveryMethodId: $deliveryMethodId) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  fragment ShippingReviewTable_CheckoutFragment on Checkout {\n    email\n    shippingAddress {\n      streetAddress1\n      city\n      countryArea\n      postalCode\n      country {\n        code\n      }\n    }\n  }\n',
): (typeof documents)['\n  fragment ShippingReviewTable_CheckoutFragment on Checkout {\n    email\n    shippingAddress {\n      streetAddress1\n      city\n      countryArea\n      postalCode\n      country {\n        code\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  query ShippingPage_CheckoutQuery($id: ID!) {\n    checkout(id: $id) {\n      quantity\n      shippingAddress {\n        __typename\n      }\n      deliveryMethod {\n        __typename\n      }\n      billingAddress {\n        __typename\n      }\n      ...Breadcrumbs_CheckoutFragment\n      ...ShippingReviewTable_CheckoutFragment\n      ...ShippingMethodSection_CheckoutFragment\n    }\n  }\n',
): (typeof documents)['\n  query ShippingPage_CheckoutQuery($id: ID!) {\n    checkout(id: $id) {\n      quantity\n      shippingAddress {\n        __typename\n      }\n      deliveryMethod {\n        __typename\n      }\n      billingAddress {\n        __typename\n      }\n      ...Breadcrumbs_CheckoutFragment\n      ...ShippingReviewTable_CheckoutFragment\n      ...ShippingMethodSection_CheckoutFragment\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  mutation DeactivateAllTokensMutation {\n    tokensDeactivateAll {\n      errors {\n        field\n        message\n        code\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation DeactivateAllTokensMutation {\n    tokensDeactivateAll {\n      errors {\n        field\n        message\n        code\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  mutation RefreshAccessTokenMutation($refreshToken: String!) {\n    tokenRefresh(refreshToken: $refreshToken) {\n      token\n      errors {\n        field\n        message\n        code\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation RefreshAccessTokenMutation($refreshToken: String!) {\n    tokenRefresh(refreshToken: $refreshToken) {\n      token\n      errors {\n        field\n        message\n        code\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  mutation AddCheckoutLineMutation($id: ID, $line: CheckoutLineInput!) {\n    checkoutLinesAdd(id: $id, lines: [$line]) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation AddCheckoutLineMutation($id: ID, $line: CheckoutLineInput!) {\n    checkoutLinesAdd(id: $id, lines: [$line]) {\n      errors {\n        field\n        code\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n  mutation CreateCheckoutMutation(\n    $lines: [CheckoutLineInput!]!\n    $channel: String!\n    $languageCode: LanguageCodeEnum!\n    $email: String\n  ) {\n    checkoutCreate(\n      input: {\n        channel: $channel\n        lines: $lines\n        languageCode: $languageCode\n        email: $email\n      }\n    ) {\n      checkout {\n        id\n      }\n      errors {\n        field\n        code\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation CreateCheckoutMutation(\n    $lines: [CheckoutLineInput!]!\n    $channel: String!\n    $languageCode: LanguageCodeEnum!\n    $email: String\n  ) {\n    checkoutCreate(\n      input: {\n        channel: $channel\n        lines: $lines\n        languageCode: $languageCode\n        email: $email\n      }\n    ) {\n      checkout {\n        id\n      }\n      errors {\n        field\n        code\n      }\n    }\n  }\n'];

export function graphql(source: string) {
	return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
	TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
