import { useModal } from "@/components/ModalContext";
import { Box, Button, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const CardBanner = ({
  title,
  image,
  desc
}: {
  title: string;
  desc: string;
  image: string;

}) => {
  const { isOpen, onOpen, onClose } = useModal();

  return (
    <Box>
      <Image
        className="Image"
        src={image}
        alt={title}
        width={"100%"}
        objectFit={"cover"}
        height={{ lg: "auto", base: "800px" }}
      />
      <ImageOverlay />
      <SimpleGrid flexDirection={"column"} pos={"absolute"} top={{ lg: "200px", base: "25%" }} left={{ lg: "105px", base: "5px", md: "15px" }} maxW={"900px"} spacing={5} >
        <Heading fontSize={{ lg: "47px", base: "32px" }} color={"#fff"} lineHeight={"1.6em"}>{desc}</Heading>
        <Text fontSize={{ lg: "23px", base: "16px" }} color={"#fff"} fontStyle={"italic"} >{title}</Text>

        <Button style={{ background: "#fff", width: "230px", height: "45px", marginTop: "16px", fontWeight: "600" }} onClick={()=>!isOpen && onOpen && onOpen()} > TÌM HIỂU THÊM</Button>

      </SimpleGrid>
  
    </Box>
  );

};
const SwiperContainer = styled.div`
.swiper-button-next, .swiper-button-prev {
  color: #fff;
}
.swiper-button-prev:after,.swiper-container-rtl .swiper-button-next:after {
  font-size:30px
}
.swiper-button-next:after, .swiper-rtl .swiper-button-prev:after{
  font-size:30px
}

}`
const ImageOverlay = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.4); 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media (max-width: 820px) {
  top: -400px;
}
@media (max-width: 420px) {
  top: -210px;
}
`;
const NavButton = styled.button`
display: flex;
width: 40px;
height: 40px;
border: none;
    outline: none;
    background-color: hsl(0, 0%, 100%);
    color: #000000;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: all 0.5s;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    &:hover {
      background-color: hsl(
        40.08298755186722,
        96.7871485943775%,
        48.82352941176471%
      );
      cursor: pointer;
      color: #ffffff;
    }
    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
    }
`;
export const Banner = () => {
  const teachers = [
    {
      title: "Ứng dụng nền tảng Đại học số tiên tiến, Tuyển sinh liên tục, Xét duyệt hồ sơ dự tuyển, Bằng cấp tương đương hệ chính quy      ",
      avt: `/banner-ptit.jpg`,
      desc: `ĐẠI HỌC TỪ XA`
    },
    {
      title: "Với hệ đào tạo từ xa PTIT, chương trình học được thiết kế theo quy chuẩn của Bộ GD&ĐT, đảm bảo cho học viên đầy đủ kiến thức chuyên môn và kinh nghiệm thực hành thực tế, thỏa sức theo đuổi đam mê.",
      avt: `/bannerptit1.png`,
      desc: `CÁC NGÀNH ĐÀO TẠO "HOT"`
    },

  ];
  return (
    <SwiperContainer >
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, EffectFade, Navigation]}
        className="mySwiper"
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
      >
        {teachers?.map((teacher, index) => (
          <SwiperSlide key={index} className="swiperSlide">
            <CardBanner
              key={index}
              desc={teacher.desc}
              title={teacher.title}
              image={teacher.avt}
            />
          </SwiperSlide>
        ))}
      </Swiper>

    </SwiperContainer>
  );
};