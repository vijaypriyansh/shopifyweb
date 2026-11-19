# Shopify Theme Conversion

This branch contains a starter Shopify Online Store 2.0 theme scaffold—not a faithful conversion of a complete storefront.

## Included

- Shopify Liquid layout, section groups, sections, snippets, and templates for home, product, collection, cart, search, page, blog, article, 404, and password pages
- Theme-editor settings for the announcement bar, header, homepage hero, and featured collection
- Responsive starter CSS and basic theme JavaScript
- A `SOURCE_ASSETS.txt` inventory of JavaScript and binary files found in the repository root

## Important limitations

The source repository contains JavaScript/binary assets only; it does not contain the original storefront HTML, CSS, product images, fonts, or Shopify Liquid markup. The files listed in `SOURCE_ASSETS.txt` are an inventory only: they are **not copied into the theme's `assets/` directory or integrated**. Some appear to be platform or app scripts and require review and their original dependencies/configuration before use.

Therefore this scaffold cannot reproduce the original store's full look or behavior yet. It provides a Shopify theme structure and starter storefront, but still needs real product/brand imagery, styling, navigation and collection configuration, and selective review/integration of source scripts. It has not been run through Shopify Theme Check or tested against a live store.

## Install

1. Download this branch as a ZIP using GitHub's **Code → Download ZIP**.
2. In Shopify Admin, open **Online Store → Themes → Add theme → Upload ZIP**.
3. Use **Customize** to configure available sections and menus.
4. Add products, collections, images, and branding in Shopify Admin.

## Shopify CLI validation

```bash
shopify theme check
shopify theme dev --store your-store.myshopify.com
```
