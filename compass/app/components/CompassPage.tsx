"use client"
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React,{useEffect} from "react";
import toplogos from "../../public/images/top-logos.svg"
import compass from "../../public/images/compass.svg"
import a from "../../public/images/a.svg"
import arrow from "../../public/images/arrow.svg"
import avatar from "../../public/images/avatar.png"
import card1 from "../../public/images/cards/card1.png"
import card2 from "../../public/images/cards/card2.png"
import card3 from "../../public/images/cards/card3.png"
import card4 from "../../public/images/cards/card4.png"


function randomRot(compassrose: HTMLElement) {
  var newOrientation = 0;

  function rotate() {
    var oldOrientation = newOrientation;
    newOrientation = Math.floor(Math.random() * 240);
    compassrose.animate(
      [
        { transform: "rotate(" + oldOrientation + "deg)" },
        { transform: "rotate(" + newOrientation + "deg)" },
      ],
      {
        duration: Math.abs(oldOrientation - newOrientation) * 30,
        fill: "forwards",
      }
    ).onfinish = rotate;
  }

  rotate(); // Initial call to start animation
}

export default function CompassPage() {
  useEffect(() => {
    var lineInc = 2,
      majMarkDegree = 10,
      degreeInc = 30,
      compassrose = document.getElementById("compassrose"),
      xmlns = "http://www.w3.org/2000/svg",
      xlink = "http://www.w3.org/1999/xlink";

    if (compassrose) {
      if (lineInc > 0) {
        for (var i = 0; i < 360; i += lineInc) {
          var newline = document.createElementNS(xmlns, "use");
          if (i % majMarkDegree == 0) {
            newline.setAttributeNS(xlink, "xlink:href", "#majline");
          } else {
            newline.setAttributeNS(xlink, "xlink:href", "#roseline");
          }
          newline.setAttributeNS(
            null,
            "transform",
            "rotate(" + i + " 250 250)"
          );
          compassrose.appendChild(newline);
        }
      }

      var writeDegs = document.createElementNS(xmlns, "text"),
        currentDeg = 0,
        writeOffset = 0;
      for (var i = 0; i < 99; i += (degreeInc / 360) * 100) {
        var degree = document.createElementNS(xmlns, "textPath");
        degree.setAttributeNS(xlink, "xlink:href", "#rosecircle");
        var length = (Math.log(i) * Math.LOG10E + 1) | 0;
        if (length > 1) {
          writeOffset = 1;
        }
        degree.setAttributeNS(null, "startOffset", i - writeOffset + "%");
        degree.textContent = currentDeg.toString(); // Convert number to string
        writeDegs.appendChild(degree);
        currentDeg += degreeInc;
      }
      compassrose.appendChild(writeDegs);

      randomRot(compassrose); // Call randomRot function passing compassrose element
    } else {
      console.error("Element with ID 'compassrose' not found");
    }
  }, []);
  return (
   
   
    <>
      <div className="container mx-auto px-6 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="mx-auto lg:mx-0">
            <Image
              src={toplogos}
              alt="top logo"
              className="mt-12 lg:mt-32 mb-14"
            />
            <div className="inline-block relative">
              <Image src={compass} alt="compass" className="max-w-full" />
              <Image 
                src={a}
                alt="a"
                className="absolute -top-4 right-1/4 compass-rotate"
              />
            </div>
            <div className="font-golos max-w-sm text-231F20 font-medium py-6">
              Залуус өөрсдийн тодорхойлсон зорилгынхоо төлөө хөдөлмөрлөж байгаа
              энэ үед өдөр тутмын амьдралд нь, боловсролд нь, хүрээлэлд нь хөтөч
              болох <span className="font-semibold">Compass Community Card</span>
            </div>
            <div className="my-16 inline-block">
              <Link href={''}>
                <div
                  className="w-80 max-w-md h-16 bg-231F20 text-white font-golos font-semibold flex place-content-between place-items-center rounded-full group"
                >
                  <span></span>
                  <span className="text-2xl">Захиалах</span>
                  <Image
                    src={arrow}
                    alt="arrow"
                    className="mr-6 group-hover:rotate-45 transition-transform duration-200"
                  />
                </div>
              </Link>
              <div
                className="flex text-231F20 text-opacity-50 text-xs my-5 gap-2 place-content-center"
              >
                <Link href="#">by TsoilogsoZ & Bogd Bank</Link>
                <span>/</span>
                <Link href="#">Карт захиалах</Link>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div className="absolute inset-0">
              <svg
                viewBox="0 0 500 500"
                id="compassrose"
              >
                <defs>
                  <symbol>
                    <line x1="40" y1="250" x2="50" y2="250" id="roseline" />
                    <line x1="40" y1="250" x2="60" y2="250" id="majline" />
                    <path
                      d="M10,250a240,240 0 1,0 480,0a240,240 0 1,0 -480,0"
                      id="rosecircle"
                    />
                  </symbol>
                </defs>
              </svg>
            </div>
            <div className="relative max-w-full pr-5">
              <Image
            
                src={avatar}
                alt="avatar"
                className="mt-12 lg:mt-24 z-10 relative max-w-full scale-125 mb-9"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="" id="cards">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-6 lg:px-12 my-20 gap-7"
        >
          <div
            className="bg-white border-[#ECECEC] border rounded-[20px] py-5 px-10 hover:bg-FED900 hover:border-FED900 transition-all duration-300 group relative mb-16"
          >
            <div className="text-FA6913 text-base font-medium">01</div>
            <div className="text-center text-4xl font-black">Communaholic</div>
            <Image
              src={card1}
              alt="Communiholic card"
              className="group-hover:shadowed mt-4 mb-12 transition-all duration-300 max-w-full xl:max-w-[300px] mx-auto"
            />
            <div className="text-[#1f1f1f] text-sm mb-16 leading-6">
              Юу байна даа? Би бол Communaholic! <br />Би шинэ хүмүүстэй уулзаж
              өөр, өөр хүрээлэлтэй танилцах дуртай. Өө нээрээ би одоо нэг эвент
              рүү явах гэж байна. Хамт явах уу? Би чамайг санаа нийлэх хүмүүс,
              сонирхолтой арга хэмжээнүүд рүү хөтлөх болно. Цоо шинэ аялалд
              гарахад бэлэн биз.
            </div>
            <div className="text-center absolute inset-x-0 -bottom-9 h-[70px]">
              <Link
                href={''}
                className="text-white text-base font-semibold text-center bg-231F20 rounded-full py-6 px-16 transition-all duration-300 mx-auto relative inline-block"
              >
                Захиалах
              </Link>
            </div>
          </div>
          <div
            className="bg-white border-[#ECECEC] border rounded-[20px] py-5 px-10 hover:bg-FED900 hover:border-FED900 transition-all duration-300 group relative mb-16"
          >
            <div className="text-FA6913 text-base font-medium">02</div>
            <div className="text-center text-4xl font-black">Realistic</div>
            <Image
              src={card2}
              alt="Realistic card"
              className="group-hover:shadowed mt-4 mb-12 transition-all duration-300 max-w-full xl:max-w-[300px] mx-auto"
            />
            <div className="text-[#1f1f1f] text-sm mb-16 leading-6">
              Намайг Realistic гэдэг.<br />
              Би хувийн болон ажлын асуудлыг байж болох хамгийн практик байдлаар
              шийдвэрлэхийг зорьдог. Чухал шийдвэрүүд гаргахдаа сэтгэл хөдлөлөө
              дарж аль болох объектив хандахыг хичээдэг. Ирээдүйдээ ухаалаг
              хөрөнгө оруулалт хийж санхүүгийн зорилгодоо хүрэхэд чинь би
              тусалъя!
            </div>
            <div className="text-center absolute inset-x-0 -bottom-9 h-[70px]">
              <Link
             href={''}
                className="text-white text-base font-semibold text-center bg-231F20 rounded-full py-6 px-16 transition-all duration-300 mx-auto relative inline-block"
              >
                Захиалах
              </Link>
            </div>
          </div>
          <div
            className="bg-white border-[#ECECEC] border rounded-[20px] py-5 px-10 hover:bg-FED900 hover:border-FED900 transition-all duration-300 group relative mb-16"
          >
            <div className="text-FA6913 text-base font-medium">03</div>
            <div className="text-center text-4xl font-black">Undefined ID</div>
            <Image
              src={card3}
              alt="Undefined ID card"
              className="group-hover:shadowed mt-4 mb-12 transition-all duration-300 max-w-full xl:max-w-[300px] mx-auto"
            />
            <div className="text-[#1f1f1f] text-sm mb-16 leading-6">
              Би бол санхүүгийн ертөнц дэх чиний ер бусын хамтрагч Undefined ID.
              <br />
              Чи бид хоёрыг хараагүй, дуулаагүй, хийж үзээгүй маш олон адал
              явдлууд хүлээж байна. Аялалдаа бэлдье гэж үү? Надтай хамт байхад
              юуг нь бэлдэх юм бэ? Зүгээр л надаас чанга атга!
            </div>
            <div className="text-center absolute inset-x-0 -bottom-9 h-[70px]">
              <Link
                href={''}
                className="text-white text-base font-semibold text-center bg-231F20 rounded-full py-6 px-16 transition-all duration-300 mx-auto relative inline-block"
              >
                Захиалах
              </Link>
            </div>
    </div>
          <div
            className="bg-white border-[#ECECEC] border rounded-[20px] py-5 px-10 hover:bg-FED900 hover:border-FED900 transition-all duration-300 group relative mb-16"
          >
            <div className="text-FA6913 text-base font-medium">04</div>
            <div className="text-center text-4xl font-black">Dialoguer</div>
            <Image
              src={card4}
              alt="Dialoguer card"
              className="group-hover:shadowed mt-4 mb-12 transition-all duration-300 max-w-full xl:max-w-[300px] mx-auto"
            />
            <div className="text-[#1f1f1f] text-sm mb-16 leading-6">
              Сайн уу, Dialoguer байна. <br />
              Бидний амьдралдаа хийсэн алхам бүр утга учиртай гэдэгт би итгэдэг.
              Дотны зөвлөх чинь байж хэрэгтэй зүйл рүү чинь хөтлөх болсондоо
              баяртай байна. Надтай хамт худалдан авсан бүхэн чинь утга учиртай
              байж хүсэл, сонирхол, зорилго руу чинь алхам алхмаар ойртуулах
              болно оо.
            </div>
            <div className="text-center absolute inset-x-0 -bottom-9 h-[70px]">
              <Link
                href={''}
                className="text-white text-base font-semibold text-center bg-231F20 rounded-full py-6 px-16 transition-all duration-300 mx-auto relative inline-block"
              >
                Захиалах
              </Link>
            </div>
            </div>
            </div>
      </div>
    </>
    


 



        

    
       
 
  );
}
