# Shopify Theme Conversion

This branch contains an editable Shopify Online Store 2.0 theme scaffold generated from `vijaypriyansh/shopifyweb`.

## Included

- Liquid theme layout
- Home, product, collection, cart, search, page, blog, article, 404, and password templates
- Editable header, announcement bar, hero, featured product, and footer sections
- Responsive storefront CSS
- Product card snippet
- Repository JavaScript files preserved for later integration

## Important

The source repository contains implementation assets (JavaScript and binary files) but no original HTML/CSS/theme structure or store images. This theme must be completed in Shopify theme editor settings. Upload the original store images and configure menus, collections, and branding.

## Install

1. Download or export this branch as a ZIP.
2. In Shopify Admin: **Online Store → Themes → Upload theme**.
3. Choose the ZIP.
4. Open **Customize** to configure sections and navigation.

## Shopify CLI

```bash
shopify theme dev --store your-store.myshopify.com
shopify theme push
```
