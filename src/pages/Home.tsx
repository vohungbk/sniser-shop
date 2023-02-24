import { useState } from "react";
import Slider from "react-slick";

const Home = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          arrows: false,
        },
      },
    ],
  };

  const [showShowSniserWord, setShowShowSniserWork] = useState(false);
  const [isShowBenefit, setIsShowBenefit] = useState(false);
  const [isShowNftInfo, setIsShowNftInfo] = useState(false);

  return (
    <>
      <div className="sm:pl-[80px] px-3 sm:px-4 py-3 bg-[#000000] text-white text-[14px] font-normal sm:font-medium sm:leading-3 leading-[1.5] text-center">
        Investing in crypto assets comes with <span className="text-primary-color font-bold">a high degree of risk</span>. Only invest an amount that you can
        accept a total loss of. Always be cautious of promised returns that sound too good to be true.
      </div>
      <div className="bg-[url('../public/assets/images/bg-home.svg')] pt-[113px] pb-[178px] bg-cover hidden sm:block">
        <div style={{ margin: "0 auto" }} className="font-[800] text-[42px] text-white leading-[150%] max-w-[623px] text-center">
          Listen, watch, and read exclusive content from talented artists.
        </div>
      </div>
      <div className="sm:hidden bg-[url('../public/assets/images/bg-home-mobile.svg')] bg-no-repeat bg-cover py-20 text-white font-[800] text-2xl leading-[150%] text-center">
        Listen, watch, and read exclusive content from talented artists.
      </div>
      <div className="sm:py-[46px] py-7 px-4 sm:px-0 bg-primary-color flex justify-between items-center text-center sm:pr-[60px]">
        <div className="flex justify-evenly flex-wrap sm:flex-nowrap text-center flex-1">
          <div className="font-[800] text-[24px] leading-[29px] sm:text-[42px] sm:leading-[42px] text-[#333333] sm:text-secondary-color mb-0 text-center max-w-[310px] sm:max-w-max">
            Explore Our Collection of NFTs
          </div>
          {/* <a className="flex items-center gap-5 cursor-pointer font-bold mt-4 sm:mt-0" href="https://shop.sniser.com/">
            <span>See More</span>
            <img src="assets/images/arrow-forward.svg" alt="" />
          </a> */}
        </div>

        <img
          src={`${isShowNftInfo ? "assets/images/arrow-ios-up-outline.svg" : "assets/images/arrow-ios-downward-outline.svg"}`}
          className="float-right sm:ml-[60px] cursor-pointer mr-2 sm:mr-0 sm:mb-0"
          alt=""
          onClick={() => setIsShowNftInfo(!isShowNftInfo)}
        />
      </div>
      {isShowNftInfo && (
        <div className="bg-[#F9F9F9] py-20">
          <div className="xl:max-w-[1250px] lg:max-w-[960px] md:max-w-[720px] w-full mr-auto ml-auto">
            <Slider {...settings} swipe>
              {[1, 2, 3, 4, 5].map(() => (
                <div className="w-full border border-solid border-[#EEEEEE] bg-white">
                  <img src="assets/images/image17.svg" alt="" className="w-full" />
                  <div className="mt-[14px] ml-[14px] font-semibold text-[18px] leading-[18px] text-[#0C0C0C]">Podder Special NFT</div>
                  <div className="ml-[14px] flex items-center mt-3 text-[#0C0C0C]">
                    <img src="assets/images/image12.svg" alt="" className="mr-2" />
                    <div className="px-[10px]">40.00</div>
                    <div>USDT</div>
                  </div>
                  <div className="flex mt-3 ml-[14px]">
                    <div className="bg-[#F8F8F8] rounded-[4px] text-sm font-bold text-[#000000] py-[6px] px-2 mr-[10px]">Book</div>
                    <div className="bg-[#F8F8F8] rounded-[4px] text-sm font-bold text-[#000000] py-[6px] px-2 mr-[10px]">Film</div>
                  </div>
                  <div className="w-full flex cursor-pointer mt-[23px] justify-between">
                    <div className="bg-primary-color py-4 px-[56px] font-bold text-white rounded-bl-[4px] w-auto flex-1 text-center text-base">Buy Now</div>
                    <div className="bg-[#385626] py-4 px-[19px] rounded-br-[4px] max-w-[62px]">
                      <img src="assets/images/shopping-cart-outline.svg" alt="" />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}

      <div
        className="bg-secondary-color py-[46px] text-primary-color font-[800] sm:text-[42px] text-[24px] leading-6 sm:leading-[42px] text-center cursor-pointer pr-6 sm:pr-[60px] flex justify-between items-center"
        onClick={() => setShowShowSniserWork(!showShowSniserWord)}
      >
        <p className="flex-1">How Sniser Works</p>
        <img
          src={`${showShowSniserWord ? "assets/images/arrow-ios-downward.svg" : "assets/images/arrow-ios-downward-green.svg"}`}
          className="float-right sm:ml-[60px]"
          alt=""
        />
      </div>

      {showShowSniserWord && (
        <div className="py-10 pb-20 sm:pb-10 xl:max-w-[1250px] lg:max-w-[960px] md:max-w-[720px] w-full mr-auto ml-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 mb-10 sm:mb-0">
            <div className="flex items-center justify-center flex-col px-[30px] mb-6 sm:mb-0">
              <img src="assets/images/number1.svg" alt="" className="mb-6 inline-block" />
              <div className="sm:font-bold font-semibold text-[22px] sm:text-2xl text-secondary-color mb-6 text-center">Buy an NFT to put in your wallet</div>
              <div className="font-medium text-secondary-color text-[16px] sm:text-[20px] leading-5 sm:leading-6 text-center">
                NFT are bits of software that identify assets. You can purchase an NFT from our site that relates to the content that you want to view.
              </div>
            </div>
            <div className="px-[50px] flex items-center justify-center">
              <img src="assets/images/image1.svg" alt="" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 mb-10 sm:mb-0">
            <div className="px-[50px] flex items-center justify-center order-last sm:order-first">
              <img src="assets/images/image2.svg" alt="" />
            </div>
            <div className="flex items-center justify-center flex-col px-[30px]">
              <img src="assets/images/number2.svg" alt="" className="mb-6 inline-block" />
              <div className="font-bold text-[22px] sm:text-2xl text-secondary-color mb-6 text-center">
                Use your NFT to access pages with exclusive NFT content
              </div>
              <div className="font-medium text-secondary-color text-[16px] sm:text-[20px] leading-5 sm:leading-6 text-center">
                You can view pages that have a range of media. From videos to audio and online books; with Sniser content is always exclusive
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="flex items-center justify-center flex-col px-[30px]">
              <img src="assets/images/number3.svg" alt="" className="mb-6 inline-block" />
              <div className="font-bold text-[22px] sm:text-2xl text-secondary-color mb-6 text-center">
                Sell your NFT to other users when its value increases
              </div>
              <div className="font-medium text-secondary-color text-[16px] sm:text-[20px] leading-5 sm:leading-6  text-center">
                If you no longer wish to keep your NFT or bought it as an asset, you can sell it onwards. Where it is scarce and in demand, the value of it sold
                will be more than when bought.
              </div>
            </div>
            <div className="px-[50px] flex items-center justify-center">
              <img src="assets/images/image3.svg" alt="" />
            </div>
          </div>
        </div>
      )}
      <div
        className="bg-primary-color py-[46px] text-secondary-color font-[800] text-[24px] sm:text-[42px] leading-6 sm:leading-[42px] cursor-pointer sm:pr-[60px] flex justify-between items-center text-center px-[22px]"
        onClick={() => setIsShowBenefit(!isShowBenefit)}
      >
        <p className="flex-1"> Benefits of purchasing our NFTs</p>
        <img
          src={`${isShowBenefit ? "assets/images/arrow-ios-up-outline.svg" : "assets/images/arrow-ios-downward-outline.svg"}`}
          className="float-right sm:ml-[60px]"
          alt=""
        />
      </div>
      {isShowBenefit && (
        <div className="py-20 pb-[60px] sm:py-20 px-4 sm:px-0 xl:max-w-[1250px] lg:max-w-[960px] md:max-w-[720px] w-full mx-auto">
          <table className="table-auto bg-secondary-color w-full text-white border-[2px] border-solid border-primary-color p-[18px]">
            <tbody>
              <tr className="hidden sm:table-row">
                <th className="text-center w-[33%] p-[18px] border-[2px] border-solid border-primary-color font-bold text-2xl">Exclusive content</th>
                <th className="text-center p-[18px] border-[2px] border-solid border-primary-color">
                  Be able to view content that is not streamed on any website or television network. It may be a bonus feature to a film that you’ re a big fan
                  of or a track from an up and coming artist. Whatever it is, Sniser ensures that all of our content is unique and protected by our NFT
                  “firewall”.
                </th>
              </tr>
              <tr className="sm:hidden">
                <th className="text-center p-8 border-[2px] border-solid border-primary-color font-bold text-base leading-4">Exclusive content</th>
              </tr>
              <tr className="sm:hidden">
                <th className="text-center py-10 px-4 border-[2px] border-solid border-primary-color text-base leading-5">
                  Be able to view content that is not streamed on any website or television network. It may be a bonus feature to a film that you’ re a big fan
                  of or a track from an up and coming artist. Whatever it is, Sniser ensures that all of our content is unique and protected by our NFT
                  “firewall”.
                </th>
              </tr>
              <tr className="sm:hidden">
                <div className="h-5 bg-white border-none mx-[-5px] relative"></div>
              </tr>
              <tr className="sm:hidden">
                <th className="text-center p-8 border-[2px] border-solid border-primary-color font-bold text-base leading-4">
                  Low gas fees (on Polygon network)
                </th>
              </tr>
              <tr className="sm:hidden mb-5">
                <th className="text-center py-10 px-4 border-[2px] border-solid border-primary-color text-base leading-5">
                  Be able to view content that is not streamed on any website or television network. It may be a bonus feature to a film that you’ re a big fan
                  of or a track from an up and coming artist. Whatever it is, Sniser ensures that all of our content is unique and protected by our NFT
                  “firewall”.
                </th>
              </tr>
              <tr className="sm:hidden">
                <div className="h-5 bg-white border-none mx-[-5px] relative"></div>
              </tr>
              <tr className="sm:hidden">
                <th className="text-center p-8 border-[2px] border-solid border-primary-color font-bold text-base leading-4">
                  Good resale value as all of our NFTs are linked to exclusive artist content
                </th>
              </tr>
              <tr className="sm:hidden">
                <th className="text-center py-10 px-4 border-[2px] border-solid border-primary-color text-base leading-5">
                  As previously mentioned, ownership of one of our NFTs also gives rights to view exclusive content. In many cases the content will be limited
                  in number or be of up-and-coming artists in a range of different art forms. Therefore, in many cases our NFTs will increase in value due
                  either to their scarcity or because the of an increase in artist popularity. Footer
                </th>
              </tr>
              <tr className="hidden sm:table-row">
                <th className="text-center w-[33%] p-[18px] border-[2px] border-solid border-primary-color font-bold text-2xl">
                  Low gas fees (on Polygon network)
                </th>
                <th className="text-center p-[18px] border-[2px] border-solid border-primary-color">
                  Transferring and ownership of crypto assets involves gas fees. Using networks like Ethereum to transfer and own NFTs can come at great
                  expense; in many instances gas fees can even cost more than the asset being purchased. Sniser use a tier two network to ensure that gas fees
                  are extremely low and are never higher than the NFT being purchased.
                </th>
              </tr>
              <tr className="hidden sm:table-row">
                <th className="text-center w-[33%] p-[18px] border-[2px] border-solid border-primary-color font-bold text-2xl">
                  Good resale value as all of our NFTs are linked to exclusive artist content
                </th>
                <th className="text-center p-[18px] border-[2px] border-solid border-primary-color">
                  As previously mentioned, ownership of one of our NFTs also gives rights to view exclusive content. In many cases the content will be limited
                  in number or be of up-and-coming artists in a range of different art forms. Therefore, in many cases our NFTs will increase in value due
                  either to their scarcity or because the of an increase in artist popularity. Footer
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Home;
