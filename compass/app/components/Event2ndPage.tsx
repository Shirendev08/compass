import React from 'react'
import Image from 'next/image'
import image1 from "../../public/images/e/1.jpg"
import image2 from "../../public/images/e/2.jpg"
import image3 from "../../public/images/e/3.jpg"
import image4 from "../../public/images/e/4.jpg"
import image5 from "../../public/images/e/5.jpg"
import image6 from "../../public/images/e/6.jpg"
import image7 from "../../public/images/e/7.jpg"
import image8 from "../../public/images/e/8.jpg"
import image9 from "../../public/images/e/9.jpg"
import image10 from "../../public/images/e/10.jpg"
import image11 from "../../public/images/e/11.jpg"
import image12 from "../../public/images/e/12.jpg"
const Event2ndPage = () => {
  return (
    <>
     <div
        className="container mx-auto px-6 md:px-0 mb-32 fade-up"
        id="fade-up-element4"
      >
        <div className="text-black font-bold my-3 text-3xl lg:text-4xl mb-4">
          Эвентийн онцлогууд
        </div>
        <div className="text-black my-3 text-base lg:text-lg max-w-4xl mb-6">
          Compass Card эзэмшигчид сар бүр санхүү, боловсрол, амьдралын хэв маяг,
          нийгмийн хариуцлага зэрэг сонирхолтой сэдвүүдийн хүрээнд арга хэмжээнд
          урилгаар оролцох бөгөөд улирал бүрийн төгсгөлд бүүр олуулаа цугларах
          болно.
        </div>

        <div className="my-6 w-full relative inline-block">
          <div className="swiper event-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide relative py-4">
                <div className="">
                  <div
                    className="absolute bg-[#FA6913] right-5 -top-2 py-3 px-3 text-center text-white font-bold"
                  >
                    <div className="text-2xl leading-none">01</div>
                    <div className="text-base leading-none">сар</div>
                  </div>
                  <div
                    className="bg-white rounded-[20px] h-full overflow-hidden hover:shadow-md transition-all duration-300"
                  >
                    <Image src={image1} alt="" className="w-full" />
                    <div className="p-5 relative">
                      <div
                        className="absolute bg-FED900 rounded-full px-4 py-1 text-xs -top-2.5 right-4 font-medium"
                      >
                        Finance
                      </div>
                      <div className="text-[#33333D] font-bold text-lg">
                        Smart Budgeting
                      </div>
                      <div
                        className="text-232324 text-opacity-80 font-medium my-2 text-sm"
                      >
                        Шинэ оноо хамтдаа төсөвлөж, санхүүгийн зорилгоо
                        биелүүлэхэд туслах Compass Card эзэмшигчдийн воркшоп
                        амжилттай боллоо.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide relative py-4">
                <div className="">
                  <div
                    className="absolute bg-[#FA6913] right-5 -top-2 py-3 px-3 text-center text-white font-bold"
                  >
                    <div className="text-2xl leading-none">02</div>
                    <div className="text-base leading-none">сар</div>
                  </div>
                  <div
                    className="bg-white rounded-[20px] h-full overflow-hidden hover:shadow-md transition-all duration-300"
                  >
                    <Image src={image2} alt="" className="w-full" />
                    <div className="p-5 relative">
                      <div
                        className="absolute bg-FED900 rounded-full px-4 py-1 text-xs -top-2.5 right-4 font-medium"
                      >
                        Finance
                      </div>
                      <div className="text-[#33333D] font-bold text-lg">
                        Investment 101: <br />
                        Investor’s Journey
                      </div>
                      <div
                        className="text-232324 text-opacity-80 font-medium my-2 leading-0 text-sm"
                      >
                        Амжилттай хөрөнгө оруулагч эрхмүүдийн туршлага, алдаа
                        онооноос суралцаж, нэгэн оройг сонирхолтой quiz, movie
                        night, воркшопд оролцон "Investor"-уудын ертөнцөөр
                        хамтдаа аялж өнгөрүүллээ.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide relative py-4">
                <div className="">
                  <div
                    className="absolute bg-[#FA6913] right-5 -top-2 py-3 px-3 text-center text-white font-bold"
                  >
                    <div className="text-2xl leading-none">03</div>
                    <div className="text-base leading-none">сар</div>
                  </div>
                  <div
                    className="bg-white rounded-[20px] h-full overflow-hidden hover:shadow-md transition-all duration-300"
                  >
                    <Image src={image3} alt="" className="w-full" />
                    <div className="p-5 relative">
                      <div
                        className="absolute bg-FED900 rounded-full px-4 py-1 text-xs -top-2.5 right-4 font-medium"
                      >
                        Finance
                      </div>
                      <div className="text-[#33333D] font-bold text-lg">
                        <span className="text-[#FF9C09]">Quarterly</span>: Compass
                        <br />
                        Financial Event
                      </div>
                      <div className="text-right text-2xl">🔒</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide relative py-4">
                <div className="">
                  <div
                    className="absolute bg-[#FA6913] right-5 -top-2 py-3 px-3 text-center text-white font-bold"
                  >
                    <div className="text-2xl leading-none">04</div>
                    <div className="text-base leading-none">сар</div>
                  </div>
                  <div
                    className="bg-white rounded-[20px] h-full overflow-hidden hover:shadow-md transition-all duration-300"
                  >
                    <Image src={image4} alt="" className="w-full" />
                    <div className="p-5 relative">
                      <div
                        className="absolute bg-FED900 rounded-full px-4 py-1 text-xs -top-2.5 right-4 font-medium"
                      >
                        Education
                      </div>
                      <div className="text-[#33333D] font-bold text-lg">
                        Creative Writing and <br />
                        Literature Event
                      </div>
                      <div className="text-right text-2xl">🔒</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide relative py-4">
                <div className="">
                  <div
                    className="absolute bg-[#FA6913] right-5 -top-2 py-3 px-3 text-center text-white font-bold"
                  >
                    <div className="text-2xl leading-none">05</div>
                    <div className="text-base leading-none">сар</div>
                  </div>
                  <div
                    className="bg-white rounded-[20px] h-full overflow-hidden hover:shadow-md transition-all duration-300"
                  >
                    <Image src={image5} alt="" className="w-full" />
                    <div className="p-5 relative">
                      <div
                        className="absolute bg-FED900 rounded-full px-4 py-1 text-xs -top-2.5 right-4 font-medium"
                      >
                        Education
                      </div>
                      <div className="text-[#33333D] font-bold text-lg">
                        Career and Job Skills <br />
                        Workshop
                      </div>
                      <div className="text-right text-2xl">🔒</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide relative py-4">
                <div className="">
                  <div
                    className="absolute bg-[#FA6913] right-5 -top-2 py-3 px-3 text-center text-white font-bold"
                  >
                    <div className="text-2xl leading-none">06</div>
                    <div className="text-base leading-none">сар</div>
                  </div>
                  <div
                    className="bg-white rounded-[20px] h-full overflow-hidden hover:shadow-md transition-all duration-300"
                  >
                    <Image src={image6} alt="" className="w-full" />
                    <div className="p-5 relative">
                      <div
                        className="absolute bg-FED900 rounded-full px-4 py-1 text-xs -top-2.5 right-4 font-medium"
                      >
                        Education
                      </div>
                      <div className="text-[#33333D] font-bold text-lg">
                        <span className="text-[#FF9C09]">Quarterly</span>: Film and
                        <br />
                        Photography Exhibition
                      </div>
                      <div className="text-right text-2xl">🔒</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide relative py-4">
                <div className="">
                  <div
                    className="absolute bg-[#FA6913] right-5 -top-2 py-3 px-3 text-center text-white font-bold"
                  >
                    <div className="text-2xl leading-none">07</div>
                    <div className="text-base leading-none">сар</div>
                  </div>
                  <div
                    className="bg-white rounded-[20px] h-full overflow-hidden hover:shadow-md transition-all duration-300"
                  >
                    <Image src={image7} alt="" className="w-full" />
                    <div className="p-5 relative">
                      <div
                        className="absolute bg-FED900 rounded-full px-4 py-1 text-xs -top-2.5 right-4 font-medium"
                      >
                        Lifestyle
                      </div>
                      <div className="text-[#33333D] font-bold text-lg">
                        Environmental Awareness <br />
                        Event
                      </div>
                      <div className="text-right text-2xl">🔒</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide relative py-4">
                <div className="">
                  <div
                    className="absolute bg-[#FA6913] right-5 -top-2 py-3 px-3 text-center text-white font-bold"
                  >
                    <div className="text-2xl leading-none">08</div>
                    <div className="text-base leading-none">сар</div>
                  </div>
                  <div
                    className="bg-white rounded-[20px] h-full overflow-hidden hover:shadow-md transition-all duration-300"
                  >
                    <Image src={image8} alt="" className="w-full" />
                    <div className="p-5 relative">
                      <div
                        className="absolute bg-FED900 rounded-full px-4 py-1 text-xs -top-2.5 right-4 font-medium"
                      >
                        Lifestyle
                      </div>
                      <div className="text-[#33333D] font-bold text-lg">
                        Health and Wellness <br />
                        Event
                      </div>
                      <div className="text-right text-2xl">🔒</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide relative py-4">
                <div className="">
                  <div
                    className="absolute bg-[#FA6913] right-5 -top-2 py-3 px-3 text-center text-white font-bold"
                  >
                    <div className="text-2xl leading-none">09</div>
                    <div className="text-base leading-none">сар</div>
                  </div>
                  <div
                    className="bg-white rounded-[20px] h-full overflow-hidden hover:shadow-md transition-all duration-300"
                  >
                    <Image src={image9} alt="" className="w-full" />
                    <div className="p-5 relative">
                      <div
                        className="absolute bg-FED900 rounded-full px-4 py-1 text-xs -top-2.5 right-4 font-medium"
                      >
                        Lifestyle
                      </div>
                      <div className="text-[#33333D] font-bold text-lg">
                        <span className="text-[#FF9C09]">Quarterly</span>: Cultural
                        Arts <br />
                        and Music
                      </div>
                      <div className="text-right text-2xl">🔒</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide relative py-4">
                <div className="">
                  <div
                    className="absolute bg-[#FA6913] right-5 -top-2 py-3 px-3 text-center text-white font-bold"
                  >
                    <div className="text-2xl leading-none">10</div>
                    <div className="text-base leading-none">сар</div>
                  </div>
                  <div
                    className="bg-white rounded-[20px] h-full overflow-hidden hover:shadow-md transition-all duration-300"
                  >
                    <Image src={image10} alt="" className="w-full" />
                    <div className="p-5 relative">
                      <div
                        className="absolute bg-FED900 rounded-full px-4 py-1 text-xs -top-2.5 right-4 font-medium"
                      >
                        Social responsibility
                      </div>
                      <div className="text-[#33333D] font-bold text-lg">
                        Technology and Innovation<br />
                        <br />
                      </div>
                      <div className="text-right text-2xl">🔒</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide relative py-4">
                <div className="">
                  <div
                    className="absolute bg-[#FA6913] right-5 -top-2 py-3 px-3 text-center text-white font-bold"
                  >
                    <div className="text-2xl leading-none">11</div>
                    <div className="text-base leading-none">сар</div>
                  </div>
                  <div
                    className="bg-white rounded-[20px] h-full overflow-hidden hover:shadow-md transition-all duration-300"
                  >
                    <Image src={image11} alt="" className="w-full" />
                    <div className="p-5 relative">
                      <div
                        className="absolute bg-FED900 rounded-full px-4 py-1 text-xs -top-2.5 right-4 font-medium"
                      >
                        Social responsibility
                      </div>
                      <div className="text-[#33333D] font-bold text-lg">
                        <span className="text-[#FF9C09]">Quarterly</span>: Synergy
                        funding<br />
                        event
                      </div>
                      <div className="text-right text-2xl">🔒</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide relative py-4">
                <div className="">
                  <div
                    className="absolute bg-[#FA6913] right-5 -top-2 py-3 px-3 text-center text-white font-bold"
                  >
                    <div className="text-2xl leading-none">12</div>
                    <div className="text-base leading-none">сар</div>
                  </div>
                  <div
                    className="bg-white rounded-[20px] h-full overflow-hidden hover:shadow-md transition-all duration-300"
                  >
                    <Image src={image12} alt="" className="w-full" />
                    <div className="p-5 relative">
                      <div
                        className="absolute bg-FED900 rounded-full px-4 py-1 text-xs -top-2.5 right-4 font-medium"
                      >
                        Social responsibility
                      </div>
                      <div className="text-[#33333D] font-bold text-lg">
                        End-of-Year Gala and<br />Networking
                      </div>
                      <div className="text-right text-2xl">🔒</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Event2ndPage