"use client"
import React, { useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import image1 from '../../public/images/events/1.jpg'
import image2 from '../../public/images/events/2.jpg'
import image3 from '../../public/images/events/3.jpg'
import image4 from '../../public/images/events/4.jpg'
import image5 from '../../public/images/events/5.jpg'
import image6 from '../../public/images/events/6.jpg'
import image7 from '../../public/images/events/7.jpg'
import image8 from '../../public/images/events/8.jpg'
import image9 from '../../public/images/events/9.jpg'
import image10 from '../../public/images/events/10.jpg'
import "../../public/assets/masonry.css"
import $jQuery from "jquery"


declare global {
    interface JQuery {
      marqueeSlider(options?: any): JQuery;
    }
  }
const EventPage = () => {
    
//     useEffect(() => {
//         (function($) {
//             $.fn.marqueeSlider = function(options) {
//               const defaults = {
//                 sensitivity: 0.1,
//                 repeatItems: true,
//               };
          
//               return this.each(function(index, element) {
//                 const container = $(element);
//                 const lists = container.find('.marquee-slider__list');
//                 const settings = $.extend({}, defaults, options[index]);
          
//                 if (settings.repeatItems) {
//                     lists.each(function() {
//                       const list = $(this);
//                       const items = list.find('.marquee-slider__list--item');
                  
//                       // Initialize totalItemsWidth with a default value of 0
//                       let totalItemsWidth = 0;
                  
//                       items.each(function() {
//                         totalItemsWidth += $(this).outerWidth(true) ?? 0; // Ensure outerWidth is defined
//                       });
                  
//                       // Calculate the number of items to repeat based on the container width
//                       const containerWidth = container.width()?.valueOf() ?? 0; // Ensure containerWidth is defined
//                       const itemsToRepeat = Math.ceil(containerWidth / totalItemsWidth) + 1;
                  
//                       // Clone and append items to meet the required count
//                       for (let i = 0; i < itemsToRepeat; i++) {
//                         items.clone().addClass('cloned').appendTo(list);
//                       }
//                     });
//                   }
                  
//                   let scrollPosition = 0;
// let lastScrollTop = 0;

// function handleScroll() {
//   const st = $(window).scrollTop() ?? 0; // Ensure st is defined

//   if (st > lastScrollTop) {
//     // Scroll down
//     scrollPosition += settings.sensitivity;
//   } else {
//     // Scroll up
//     scrollPosition -= settings.sensitivity;
//   }

//   lists.each(function(index) {
//     const direction = index % 2 === 0 ? -1 : 1;
//     const translateValue = scrollPosition * direction;

//     $(this).css('transform', `translate3d(${translateValue}%, 0, 0)`);
//   });

//   lastScrollTop = st; // Assign st to lastScrollTop
// }

// $(window).on('scroll', function() {
//   const st = $(window).scrollTop() ?? 0; // Ensure st is defined
//   const containerTop = container.offset()?.top ?? 0; // Ensure containerTop is defined
//   const containerBottom = containerTop + (container.outerHeight() ?? 0); // Ensure containerBottom is defined
//   const windowTop = st; // Assign st to windowTop
//   const windowBottom = windowTop + ($(window).height() ?? 0); // Ensure windowBottom is defined

//   if (windowBottom > containerTop && windowTop < containerBottom) {
//     // The container is in the viewport
//     handleScroll();
//   }
// });

                
//               });
//             };
//           })(jQuery);
          
//       }, []); 
    
  return (
    <>
     <div className="container mx-auto px-6 md:px-0 fade-up" id="fade-up-element2">
        <div className="text-black font-bold my-3 text-lg lg:text-xl">
          Сар бүрийн нэгэн хэвийн бус
        </div>
        <div className="text-231F20 text-4xl lg:text-6xl font-black mb-5">
          Тогтмол эвентүүд
        </div>
        <div className="text-black my-3 text-base lg:text-lg max-w-xl">
          Өдөр тутмын ажлаасаа түрхэн хугацаанд салж, ур чадвар, танилын
          хүрээллээ тэлэх боломжтой эвентүүдэд салбартаа мэргэшиж яваа залуус,
          экспертүүдтэй танилцаарай.
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="marquee-slider marquee-slider1 fade-up"
          id="fade-up-element3"
        >
          <div className="marquee-slider__list">
            <div
              className="marquee-slider__list--item max-w-[315px] lg:max-w-[501px] max-h-[200] lg:max-h-[318px]"
            >
              <Link href={''} data-lightbox="image-1">
                <Image src={image1} alt="" />
              </Link>
            </div>
            <div
              className="marquee-slider__list--item max-w-[315px] lg:max-w-[501px] max-h-[200] lg:max-h-[318px]"
            >
              <Link href={''} data-lightbox="image-1">
                <Image src={image2} alt="" />
              </Link>
            </div>
            <div
              className="marquee-slider__list--item max-w-[315px] lg:max-w-[501px] max-h-[200] lg:max-h-[318px]"
            >
              <Link href={''} data-lightbox="image-1">
                <Image src={image3} alt="" />
              </Link>
            </div>
            <div
              className="marquee-slider__list--item max-w-[315px] lg:max-w-[501px] max-h-[200] lg:max-h-[318px]"
            >
              <Link href={''} data-lightbox="image-1">
                <Image src={image4} alt="" />
              </Link>
            </div>
            <div
              className="marquee-slider__list--item max-w-[315px] lg:max-w-[501px] max-h-[200] lg:max-h-[318px]"
            >
              <Link href={''} data-lightbox="image-1">
                <Image src={image5} alt="" />
              </Link>
            </div>
          </div>
          <div className="marquee-slider__list">
            <div
              className="marquee-slider__list--item max-w-[315px] lg:max-w-[501px] max-h-[200] lg:max-h-[318px]"
            >
              <Link href={''}data-lightbox="image-1">
                <Image src={image6} alt="" />
              </Link>
            </div>
            <div
              className="marquee-slider__list--item max-w-[315px] lg:max-w-[501px] max-h-[200] lg:max-h-[318px]"
            >
              <Link href={''}data-lightbox="image-1">
                <Image src={image7} alt="" />
              </Link>
            </div>
            <div
              className="marquee-slider__list--item max-w-[315px] lg:max-w-[501px] max-h-[200] lg:max-h-[318px]"
            >
              <Link href={''}data-lightbox="image-1">
                <Image src={image8} alt="" />
              </Link>
            </div>
            <div
              className="marquee-slider__list--item max-w-[315px] lg:max-w-[501px] max-h-[200] lg:max-h-[318px]"
            >
              <Link href={''}data-lightbox="image-1">
                <Image src={image9} alt="" />
              </Link>
            </div>
            <div
              className="marquee-slider__list--item max-w-[315px] lg:max-w-[501px] max-h-[200] lg:max-h-[318px]"
            >
              <Link href={''} data-lightbox="image-1">
                <Image src={image10} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EventPage