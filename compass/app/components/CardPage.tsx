import React from 'react'

const CardPage = () => {
  return (
    <div className="container mx-auto px-6 md:px-0 mb-20 lg:mb-32">
        <div className="text-231F20 text-4xl lg:text-6xl font-black">
          Картын онцлог, давуу тал
        </div>
        <div className="text-[#232324] text-opacity-60 font-medium my-3">
          Сар бүр танд зориулсан онцгой урамшуулал, буцаан олголт, бэлгүүдийг
          бэлдсэн байгаа.
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <div
            className="bg-white rounded-[20px] py-9 px-10 gradient-border-card z-10 hover:bg-opacity-90"
          >
            <i aria-hidden="true" className="first-gradient z-10"></i>
            <div className="inline-flex gap-9 mb-11">
              <img src="images/events.svg" alt="Эвентүүд" />
              <div className="text-FA6913 text-lg font-medium">
                Шинэ хүрээлэл, <br />
                шинэ боломжууд
              </div>
            </div>
            <div className="text-black">
              <div className="font-medium mb-2">
                Боловсрол, хүрээлэлд хөтөч болох
              </div>
              <div className="text-4xl lg:text-5xl font-bold mb-10">
                Эвентүүд<br />Контентууд
              </div>
              <div className="text-[15px]">
                Compass карт эзэмшигчдийг нэг коммюнити гэж үзэх бөгөөд
                коммюнитийн гишүүн таныг төрөл бүрийн хаалттай эвентүүд, тусгай
                контентууд, нийгмийн төслүүд хүлээж байна.
              </div>
            </div>
          </div>
          <div
            className="bg-white rounded-[20px] py-9 px-10 gradient-border-card z-10 hover:bg-opacity-90"
          >
            <i aria-hidden="true" className="second-gradient"></i>
            <div className="inline-flex gap-9 mb-11">
              <img src="images/opportunities.svg" alt="Боломжууд" />
              <div className="text-FA6913 text-lg font-medium">
                Хамтрагч байгууллагын<br />
                хөнгөлөлт, бэлгүүд
              </div>
            </div>
            <div className="text-black">
              <div className="font-medium mb-2">
                Карьер, санхүүгээ дараагийн түвшинд гаргах
              </div>
              <div className="text-4xl lg:text-5xl font-bold mb-10">Боломжууд</div>
              <div className="text-[15px]">
                Сар бүр танд зориулсан онцгой урамшуулал, буцаан олголт,
                бэлгүүдийг бэлдсэн байгаа. Мөн тун удахгүй карьер, боловсролд
                чиглэх олон боломжууд нээгдэх болно.
              </div>
            </div>
          </div>

          <div
            className="bg-white rounded-[20px] py-9 px-10 gradient-border-card z-10 hover:bg-opacity-90"
          >
            <i aria-hidden="true"></i>
            <div className="inline-flex gap-9 mb-11">
              <img src="images/b-point.svg" alt="B-Point" />
              <div className="text-FA6913 text-lg font-medium">
                Нэмэлт B-Point, <br />
                + нэмэлт урамшуулал
              </div>
            </div>
            <div className="text-black">
              <div className="font-medium mb-2">1₮ тус бүр</div>
              <div className="text-4xl lg:text-5xl font-bold mb-10">1B-Point</div>
              <div className="text-[15px]">
                Карт зурах, гүйлгээ хийх, найзаа урих, хадгаламж нээх зэрэг
                бүхий л үйлдэлд B-Point оноогоо цуглуулж, урамшууллууд авах
                боломжтой.
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CardPage