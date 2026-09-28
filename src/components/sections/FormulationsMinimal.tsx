import React, { useState } from 'react';
import {
  ShoppingBag,
  MessageSquare,
  Plus,
  Check,
  Search,
  ArrowRight,
  ShieldCheck,
  Zap,
  ChevronDown,
  ChevronUp,
  Eye,
} from 'lucide-react';

import { products } from '../../data/products';
import { Product } from '../../types';
import { ProductQuickViewModal } from '../modals/ProductQuickViewModal';

interface FormulationsMinimalProps {
  onAddToCart: (product: Product) => void;
  cartProductIds?: { [key: string]: number };
  onOpenCart?: () => void;
}

export const FormulationsMinimal: React.FC<FormulationsMinimalProps> = ({
  onAddToCart,
  cartProductIds = {},
  onOpenCart,
}) => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>('All');

  const [searchQuery, setSearchQuery] =
    useState<string>('');

  const [justAddedId, setJustAddedId] =
    useState<string | null>(null);

  const [expandedProductIds, setExpandedProductIds] =
    useState<{ [key: string]: boolean }>({});

  const [quickViewProduct, setQuickViewProduct] =
    useState<Product | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] =
    useState<boolean>(false);

  const handleOpenQuickView = (product: Product) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  const toggleExpand = (productId: string) => {
    setExpandedProductIds((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const categories = [
    'All',
    'Brain Health & Nutritional Support',
    'Nerve Health & Neuroprotection Support',
  ];

  /* =========================================================
     FILTER PRODUCTS
  ========================================================= */

  const filteredProducts = products.filter((p) => {
    const normSelected = selectedCategory.trim().toLowerCase();
    const normCategory = (p.category || '').toLowerCase();
    const normSlug = (p.slug || '').toLowerCase();

    let matchesCategory = false;
    if (selectedCategory === 'All') {
      matchesCategory = true;
    } else if (normSelected.includes('brain')) {
      matchesCategory = normSlug.includes('brain') || (normCategory.includes('brain') && !normCategory.includes('nerve'));
    } else if (normSelected.includes('nerve')) {
      matchesCategory = normSlug.includes('synovia') || normSlug.includes('nerve') || (normCategory.includes('nerve') && !normCategory.includes('brain'));
    } else {
      matchesCategory =
        normCategory === normSelected ||
        normCategory.includes(normSelected) ||
        normSelected.includes(normCategory);
    }

    const trimmedQuery = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !trimmedQuery ||
      p.name.toLowerCase().includes(trimmedQuery) ||
      p.tagline.toLowerCase().includes(trimmedQuery) ||
      p.description.toLowerCase().includes(trimmedQuery) ||
      (p.category && p.category.toLowerCase().includes(trimmedQuery)) ||
      (p.keyIngredients && p.keyIngredients.some(ing => ing.name.toLowerCase().includes(trimmedQuery)));

    return matchesCategory && matchesSearch;
  });

  /* =========================================================
     ADD TO CART
  ========================================================= */

  const handleAdd = (product: Product) => {
    onAddToCart(product);

    setJustAddedId(product.id);

    setTimeout(() => {
      setJustAddedId(null);
    }, 1500);
  };

  /* =========================================================
     WHATSAPP ORDER
  ========================================================= */

  const handleSingleItemWhatsApp = (product: Product) => {
    const targetWhatsAppNumber = '918870889620';

    const price = product.price || 0;

    let message =
      `*INSTANT ORDER REQUEST - LEVIX BIO SCIENCE*\n`;

    message +=
      `----------------------------------------\n`;

    message +=
      `*Product:* ${product.name}\n`;

    message +=
      `*Packaging:* ${product.packSize}\n`;

    message +=
      `*Price:* ₹${price.toLocaleString('en-IN')}\n`;

    message +=
      `*Dosage Form:* ${product.dosageForm}\n`;

    message +=
      `----------------------------------------\n`;

    message +=
      `Please share availability, payment details, and dispatch schedule. Thank you!`;

    const encoded =
      encodeURIComponent(message);

    window.open(
      `https://wa.me/${targetWhatsAppNumber}?text=${encoded}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section
      id="formulations"
      className="
        relative
        overflow-hidden
        bg-transparent
        text-[#17121F]
        py-20
        sm:py-24
        lg:py-28
        border-b
        border-[#EEE6F2]/60
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          relative
          z-10
        "
      >

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-end
            justify-between
            gap-8
            mb-10
          "
        >

          {/* LEFT CONTENT */}

          <div className="max-w-3xl">

            {/* Label */}

            <div
              className="
                inline-flex
                items-center
                gap-2.5
                px-4
                py-2
                rounded-full
                bg-[#F5EDF9]
                border
                border-[#E2D2EB]
                text-[#7137A5]
                text-[10px]
                sm:text-xs
                font-bold
                uppercase
                tracking-[0.15em]
                mb-5
              "
            >

              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-[#D49B24]
                "
              />

              Specialized Formulations

            </div>

            {/* Heading */}

            <h2
              className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-serif
                font-bold
                text-[#17121F]
                tracking-tight
                leading-[1.08]
              "
            >
              Featured Formulations

              <span
                className="
                  block
                  text-[#7137A5]
                  mt-1
                "
              >
                & Direct Order
              </span>
            </h2>

            {/* Gold divider */}

            <div
              className="
                flex
                items-center
                gap-2.5
                mt-5
              "
            >

              <span className="w-9 h-[2px] bg-[#D49B24]" />

              <span className="w-1.5 h-1.5 rounded-full bg-[#D49B24]" />

              <span className="w-12 h-px bg-[#E7DCCB]" />

            </div>

            <p
              className="
                text-sm
                sm:text-base
                text-[#706675]
                mt-5
                leading-7
                max-w-2xl
              "
            >
              Explore our specialized healthcare formulations.
              Order directly through WhatsApp or add products to
              your cart for bulk dispatch from our Chennai facility.
            </p>

          </div>

          {/* =================================================
              SEARCH + CART
          ================================================= */}

          <div
            className="
              flex
              items-center
              gap-3
              w-full
              lg:w-auto
            "
          >

            {/* Search */}

            <div
              className="
                relative
                flex-1
                lg:w-72
              "
            >

              <Search
                className="
                  w-4
                  h-4
                  text-[#927F9D]
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                "
              />

              <input
                type="text"
                placeholder="Search formulations..."
                value={searchQuery}
                onChange={(e) =>
                  setSearchQuery(e.target.value)
                }
                className="
                  w-full
                  pl-11
                  pr-4
                  py-3
                  rounded-full
                  bg-white
                  border
                  border-[#E5DAEA]
                  text-sm
                  text-[#302637]
                  placeholder:text-[#A79AAA]
                  focus:outline-none
                  focus:border-[#7137A5]
                  focus:ring-4
                  focus:ring-[#7137A5]/10
                  shadow-sm
                  transition-all
                "
              />

            </div>

            {/* Cart */}

            {onOpenCart && (
              <button
                onClick={onOpenCart}
                className="
                  shrink-0
                  h-11
                  px-4
                  sm:px-5
                  rounded-full
                  bg-[#7137A5]
                  hover:bg-[#5D278C]
                  text-white
                  text-xs
                  font-bold
                  flex
                  items-center
                  gap-2
                  shadow-lg
                  shadow-[#7137A5]/20
                  transition-all
                  hover:-translate-y-0.5
                "
              >

                <ShoppingBag className="w-4 h-4" />

                <span className="hidden sm:inline">
                  View Cart
                </span>

              </button>
            )}

          </div>

        </div>

        {/* =====================================================
            CATEGORY FILTER
        ===================================================== */}

        <div
          className="
            flex
            overflow-x-auto
            gap-2
            pb-4
            mb-8
            scrollbar-none
          "
        >

          {categories.map((category) => {

            const isActive =
              selectedCategory === category;

            return (
              <button
                key={category}
                onClick={() =>
                  setSelectedCategory(category)
                }
                className={`
                  shrink-0
                  px-4
                  py-2.5
                  rounded-full
                  text-xs
                  font-semibold
                  whitespace-nowrap
                  transition-all
                  ${isActive
                    ? `
                        bg-[#7137A5]
                        text-white
                        shadow-md
                        shadow-[#7137A5]/20
                      `
                    : `
                        bg-white
                        text-[#665A6D]
                        border
                        border-[#E5DAEA]
                        hover:border-[#7137A5]/40
                        hover:text-[#7137A5]
                        hover:bg-[#FCFAFD]
                      `
                  }
                `}
              >
                {category}
              </button>
            );
          })}

        </div>

        {/* =====================================================
            RESULT COUNT
        ===================================================== */}

        <div className="
          flex
          items-center
          justify-between
          mb-5
        ">

          <p className="
            text-xs
            text-[#8B7F91]
          ">
            Showing{' '}
            <span className="font-bold text-[#7137A5]">
              {filteredProducts.length}
            </span>{' '}
            formulations
          </p>

          <div
            className="
              hidden
              sm:flex
              items-center
              gap-2
              text-[10px]
              uppercase
              tracking-[0.12em]
              font-bold
              text-[#9B8DA2]
            "
          >

            <ShieldCheck
              className="w-3.5 h-3.5 text-[#D49B24]"
            />

            Quality Focused

          </div>

        </div>

        {/* =====================================================
            PRODUCT GRID
        ===================================================== */}

        {filteredProducts.length > 0 ? (

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              gap-5
              sm:gap-7
            "
          >

            {filteredProducts.map((product) => {

              const countInCart =
                cartProductIds[product.id] || 0;

              const isJustAdded =
                justAddedId === product.id;

              const price =
                product.price || 0;

              const mrp =
                product.mrp || 0;

              return (
                <div
                  key={product.id}
                  className="
                    group
                    rounded-[28px]
                    bg-white
                    border
                    border-[#EEE5F2]
                    shadow-[0_10px_35px_rgba(55,25,75,0.05)]
                    hover:border-[#D9C2E6]
                    hover:shadow-[0_20px_55px_rgba(55,25,75,0.11)]
                    hover:-translate-y-1
                    transition-all
                    duration-300
                    flex
                    flex-col
                    overflow-hidden
                  "
                >

                  {/* =================================================
                      PRODUCT IMAGE
                  ================================================= */}

                  <div
                    onClick={() => handleOpenQuickView(product)}
                    className="
                      relative
                      h-56
                      bg-gradient-to-br
                      from-[#F7F1FA]
                      via-white
                      to-[#FCF8F2]
                      p-6
                      flex
                      items-center
                      justify-center
                      overflow-hidden
                      border-b
                      border-[#F0E9F3]
                      cursor-pointer
                      group/img
                    "
                    title={`Click to view full details for ${product.name}`}
                  >

                    {/* Decorative circle */}

                    <div
                      className="
                        absolute
                        w-44
                        h-44
                        rounded-full
                        border
                        border-[#7137A5]/10
                      "
                    />

                    <div
                      className="
                        absolute
                        w-32
                        h-32
                        rounded-full
                        border
                        border-[#D49B24]/10
                      "
                    />

                    {/* Product */}

                    <img
                      src={product.image}
                      alt={product.name}
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (product.id === 'prod-brainvive' && !target.src.includes('BrainVIve')) {
                          target.src = '/BrainVIve_1.jpeg';
                        } else if (product.id === 'prod-synovia-plus' && !target.src.includes('Synovia')) {
                          target.src = '/Synovia-Plus.jpeg';
                        }
                      }}
                      className="
                        relative
                        z-10
                        max-h-40
                        max-w-[80%]
                        object-contain
                        group-hover:scale-105
                        transition-transform
                        duration-500
                        drop-shadow-md
                      "
                    />

                    {/* Interactive Zoom / Details Overlay on Hover */}
                    <div className="absolute inset-0 bg-[#32164F]/5 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center pointer-events-none z-30">
                      <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-[#32164F] text-xs font-bold shadow-lg flex items-center gap-1.5 backdrop-blur-sm transform translate-y-2 group-hover/img:translate-y-0 transition-transform border border-[#EEE6F2]">
                        <Eye className="w-3.5 h-3.5 text-[#7137A5]" />
                        <span>View Full Details</span>
                      </span>
                    </div>

                    {/* Category */}

                    <div
                      className="
                        absolute
                        top-4
                        left-4
                        z-20
                      "
                    >

                      <span
                        className="
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-wider
                          px-3
                          py-1.5
                          rounded-full
                          bg-white/95
                          backdrop-blur-sm
                          text-[#7137A5]
                          border
                          border-[#E4D8EB]
                          shadow-sm
                        "
                      >
                        {product.category}
                      </span>

                    </div>

                    {/* Dosage */}

                    <div
                      className="
                        absolute
                        bottom-4
                        right-4
                        z-20
                      "
                    >

                      <span
                        className="
                          text-[9px]
                          font-semibold
                          px-2.5
                          py-1
                          rounded-md
                          bg-[#32164F]
                          text-white
                          shadow-sm
                        "
                      >
                        {product.dosageForm}
                      </span>

                    </div>

                  </div>

                  {/* =================================================
                      PRODUCT BODY
                  ================================================= */}

                  <div
                    className="
                      p-5
                      sm:p-6
                      flex-1
                      flex
                      flex-col
                      gap-4
                    "
                  >

                    {/* Product heading */}

                    <div>

                      <div
                        className="
                          flex
                          items-start
                          justify-between
                          gap-3
                        "
                      >

                        <h3
                          onClick={() => handleOpenQuickView(product)}
                          className="
                            text-lg
                            sm:text-xl
                            font-bold
                            text-[#302637]
                            font-['Manrope']
                            leading-tight
                            group-hover:text-[#7137A5]
                            transition-colors
                            cursor-pointer
                          "
                          title={`Click to view full details for ${product.name}`}
                        >
                          {product.name}
                        </h3>

                        <span
                          className="
                            shrink-0
                            text-[10px]
                            font-semibold
                            text-[#8A7C91]
                            bg-[#FAF7FC]
                            px-2
                            py-1
                            rounded-md
                          "
                        >
                          {product.packSize}
                        </span>

                      </div>

                      <p
                        className="
                          text-xs
                          font-bold
                          text-[#7137A5]
                          mt-2
                        "
                      >
                        {product.tagline}
                      </p>

                      <div className="mt-2">
                        <p
                          className={`
                            text-xs
                            text-[#786D7D]
                            leading-relaxed
                            transition-all
                            ${expandedProductIds[product.id]
                              ? 'line-clamp-none'
                              : 'line-clamp-2'
                            }
                          `}
                        >
                          {product.description}
                        </p>

                        {product.description && product.description.length > 90 && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleExpand(product.id);
                            }}
                            className="
                              mt-1.5
                              inline-flex
                              items-center
                              gap-1
                              text-[11px]
                              font-bold
                              text-[#7137A5]
                              hover:text-[#521E7E]
                              hover:underline
                              cursor-pointer
                              transition-colors
                            "
                            aria-expanded={!!expandedProductIds[product.id]}
                          >
                            <span>
                              {expandedProductIds[product.id] ? 'Show less' : 'Read more'}
                            </span>
                            {expandedProductIds[product.id] ? (
                              <ChevronUp className="w-3.5 h-3.5" />
                            ) : (
                              <ChevronDown className="w-3.5 h-3.5" />
                            )}
                          </button>
                        )}

                        {expandedProductIds[product.id] && (
                          <div className="mt-3 pt-3 border-t border-[#EEE6F2] space-y-3 animate-fadeIn text-left">
                            {product.indicationFocus && (
                              <div className="p-2.5 rounded-xl bg-[#FAF8FC] border border-[#EEE6F2] text-xs">
                                <span className="text-[10px] font-mono uppercase text-[#7137A5] font-bold block mb-0.5">
                                  Indication Focus
                                </span>
                                <p className="text-[#2D1B36] font-semibold text-[11px] leading-relaxed">
                                  {product.indicationFocus}
                                </p>
                              </div>
                            )}

                            {product.benefitSections && product.benefitSections.length > 0 && (
                              <div className="space-y-2.5">
                                {product.benefitSections.map((sec, sIdx) => (
                                  <div key={sIdx} className="p-2.5 rounded-xl bg-white border border-[#EEE6F2] space-y-2 shadow-xs">
                                    <div className="flex items-center gap-1.5">
                                      <span className="w-1.5 h-1.5 rounded-full bg-[#7137A5]" />
                                      <h5 className="text-[11px] font-bold text-[#2D1B36] font-['Manrope']">
                                        {sec.category}
                                      </h5>
                                    </div>
                                    <div className="space-y-2">
                                      {sec.items.map((item, iIdx) => (
                                        <div key={iIdx} className="p-2 rounded-lg bg-[#FAF8FC] border border-[#F3EDF7] space-y-1">
                                          <p className="text-[11px] font-bold text-[#7137A5]">
                                            {item.title}
                                          </p>
                                          <ul className="space-y-0.5">
                                            {item.points.map((pt, pIdx) => (
                                              <li key={pIdx} className="text-[10px] text-[#5A4D61] leading-relaxed flex items-start gap-1">
                                                <span className="text-[#7137A5] shrink-0 mt-0.5">•</span>
                                                <span>{pt}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                    </div>

                    {/* =================================================
                        PRICE
                    ================================================= */}

                    <div
                      className="
                        p-3.5
                        rounded-2xl
                        bg-[#FAF8FC]
                        border
                        border-[#EEE6F2]
                        flex
                        items-center
                        justify-between
                        gap-3
                      "
                    >

                      <div>

                        <span
                          className="
                            text-[9px]
                            uppercase
                            tracking-wider
                            text-[#938598]
                            block
                            mb-1
                          "
                        >
                          Price per pack
                        </span>

                        <div
                          className="
                            flex
                            items-baseline
                            gap-2
                          "
                        >

                          <span
                            className="
                              text-lg
                              font-bold
                              text-[#32164F]
                            "
                          >
                            ₹{price.toLocaleString('en-IN')}
                          </span>

                          {mrp > price && (
                            <span
                              className="
                                text-xs
                                text-[#A99EAC]
                                line-through
                              "
                            >
                              ₹{mrp.toLocaleString('en-IN')}
                            </span>
                          )}

                        </div>

                      </div>

                      {/* Stock */}

                      <span
                        className="
                          text-[9px]
                          font-bold
                          px-2.5
                          py-1.5
                          rounded-full
                          bg-[#F0F9F4]
                          text-[#247348]
                          border
                          border-[#CDEBD9]
                          whitespace-nowrap
                        "
                      >
                        In Stock
                      </span>

                    </div>

                    {/* =================================================
                        ACTION BUTTONS
                    ================================================= */}

                    <div
                      className="
                        grid
                        grid-cols-2
                        gap-2
                        mt-auto
                      "
                    >

                      {/* ADD TO CART */}

                      <button
                        onClick={() => handleAdd(product)}
                        className={`
                          py-3
                          px-3
                          rounded-xl
                          text-xs
                          font-bold
                          transition-all
                          flex
                          items-center
                          justify-center
                          gap-1.5
                          ${isJustAdded
                            ? `
                                bg-[#23834E]
                                text-white
                              `
                            : countInCart > 0
                              ? `
                                bg-[#7137A5]
                                text-white
                                shadow-md
                              `
                              : `
                                bg-[#F5EFF9]
                                text-[#7137A5]
                                border
                                border-[#E4D6EB]
                                hover:bg-[#EDE1F4]
                              `
                          }
                        `}
                      >

                        {isJustAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />

                            <span>
                              Added!
                            </span>
                          </>
                        ) : countInCart > 0 ? (
                          <>
                            <ShoppingBag className="w-3.5 h-3.5" />

                            <span>
                              In Cart ({countInCart})
                            </span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />

                            <span>
                              Add to Cart
                            </span>
                          </>
                        )}

                      </button>

                      {/* WHATSAPP */}

                      <button
                        onClick={() =>
                          handleSingleItemWhatsApp(product)
                        }
                        className="
                          py-3
                          px-3
                          rounded-xl
                          bg-[#FFF9EC]
                          border
                          border-[#E9D8AC]
                          text-[#8D6517]
                          text-xs
                          font-bold
                          flex
                          items-center
                          justify-center
                          gap-1.5
                          hover:bg-[#FFF4D8]
                          hover:border-[#D9B45A]
                          transition-all
                        "
                      >

                        <MessageSquare
                          className="w-3.5 h-3.5"
                        />

                        <span>
                          WhatsApp
                        </span>

                      </button>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        ) : (

          /* =====================================================
             EMPTY STATE
          ===================================================== */

          <div
            className="
              py-20
              rounded-[28px]
              bg-white
              border
              border-[#EEE6F2]
              text-center
            "
          >

            <div
              className="
                w-16
                h-16
                mx-auto
                rounded-full
                bg-[#F5EFF9]
                flex
                items-center
                justify-center
                mb-5
              "
            >
              <Search
                className="w-7 h-7 text-[#7137A5]"
              />
            </div>

            <h3
              className="
                text-xl
                font-serif
                font-bold
                text-[#302637]
              "
            >
              No formulations found
            </h3>

            <p
              className="
                text-sm
                text-[#817582]
                mt-2
              "
            >
              Try another search term or category.
            </p>

            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="
                mt-5
                inline-flex
                items-center
                gap-2
                text-sm
                font-bold
                text-[#7137A5]
                hover:text-[#5D278C]
              "
            >
              View all formulations

              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        )}

        {/* =====================================================
            BOTTOM TRUST STRIP
        ===================================================== */}

        <div
          className="
            mt-10
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            gap-4
            px-5
            py-4
            rounded-2xl
            bg-white
            border
            border-[#EEE6F2]
          "
        >

          <div className="
            flex
            items-center
            gap-2
          ">

            <ShieldCheck
              className="
                w-5
                h-5
                text-[#7137A5]
              "
            />

            <span className="
              text-xs
              font-semibold
              text-[#5F5365]
            ">
              Quality-focused pharmaceutical formulations
            </span>

          </div>

          <div className="
            flex
            items-center
            gap-2
            text-xs
            text-[#8A7E8E]"
          >

            <Zap
              className="w-4 h-4 text-[#D49B24]"
            />

            <span>
              Direct ordering available
            </span>

          </div>

        </div>

      </div>

      {/* =========================================================
          COMPREHENSIVE PRODUCT POPUP MODAL
      ========================================================== */}
      <ProductQuickViewModal
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        product={quickViewProduct}
        onAddToCart={handleAdd}
        onSelectProduct={(p) => setQuickViewProduct(p)}
      />

    </section>
  );
};