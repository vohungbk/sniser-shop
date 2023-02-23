const Footer = () => {
  const siteLinks = ["Homepage", "How it works", "Artist service", "FAQs", "About Us", "Contact Us", "Nft Shop Signup", "Sitemap"];
  const corporateInformation = [
    "SNISER LTD",
    "3RD Floor",
    "86-90 Paul street",
    "London",
    "EC2A 4NE",
    "Contact Us",
    "support@sniser.com",
    "Registered in England and Wales (13149945)",
  ];
  return (
    <>
      <div className="bg-secondary-color sm:pt-[100px] pt-[42px] pl-4 sm:pl-0 pb-[44px] sm:pb-0">
        <div className="px-15 mx-auto xl:max-w-[1250px] lg:max-w-[960px] md:max-w-[720px] w-full">
          <div className="grid sm:grid-cols-6 lg:grid-cols-3">
            <div className="mb-[30px]">
              <div className="mb-4">
                <a href="https://sniser.com/" className="font-bold text-[28px] leading-[28px] text-white">
                  <span className="text-primary-color">S</span>niser
                </a>
              </div>
              <div className="mb-5 text-white font-medium text-[14px] leading-[21px] max-w-[296px]">
                Sniser provides an innovative solution to protect artist creativity using blockchain technology
              </div>
              <ul className="mb-0 mt-5 p-0">
                <li className="inline-block mr-[25px]">
                  <img src="assets/images/facebook.svg" alt="" className="cursor-pointer" />
                </li>
                <li className="inline-block mr-[25px]">
                  <img src="assets/images/twitter.svg" alt="" className="cursor-pointer" />
                </li>
                <li className="inline-block mr-[25px]">
                  <img src="assets/images/linkedin.svg" alt="" className="cursor-pointer" />
                </li>
                <li className="inline-block mr-[25px]">
                  <img src="assets/images/instagram.svg" alt="" className="cursor-pointer" />
                </li>
              </ul>
            </div>
            <div className="mb-[30px] pl-10 hidden sm:block">
              <h3 className="font-semibold text-white mb-5">Site links</h3>
              <ul className="pl-0 mb-0">
                {siteLinks?.map((item, index) => (
                  <li className="text-white mb-4" key={index}>
                    <a className="text-[14px] text-[#BFBFBF] inline-block cursor-pointer hover:text-primary-color">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-[30px] pl-5 hidden sm:block">
              <h3 className="font-semibold text-white mb-5">Corporate Information</h3>
              <ul className="pl-0 mb-0">
                {corporateInformation?.map((item, index) => (
                  <li className="text-white mb-4" key={index}>
                    <a className="text-[14px] text-[#BFBFBF] inline-block cursor-pointer hover:text-primary-color">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: "linear-gradient(0deg, #22282F, #22282F), #2F3538" }} className="py-5 px-4 sm:px-0">
        <div className="xl:max-w-[1250px] lg:max-w-[960px] md:max-w-[720px] w-full mx-auto">
          <div>
            <p className="font-medium text-[12px] leading-4 text-white">Copyright Sniser Ltd 2020-2021. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
