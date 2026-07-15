import MediaCard, { type MediaCardData } from "../components/media-card";
import { MediaCard_styles } from "../_styles";
const MediaCard_data: MediaCardData[] = [
    { id: "post-358984", kind: "link", href: "/how-transparency-can-make-or-break-supplier-relationships", kind2: "image", alt: "How Transparency Can Make or Break Supplier Relationships", imgSrc: "/assets/cloned/images/ac09c38b7024.jpg", srcSet: "/assets/cloned/images/fbcae8e0ea58.jpg 479w, /assets/cloned/images/ac09c38b7024.jpg 480w", kind3: "heading", kind4: "link", href2: "/how-transparency-can-make-or-break-supplier-relationships", title: "How Transparency Can Make or Break Supplier Relationships", description: "Jan 15, 2025", description2: "You and your team manage dozens or even hundreds of supplier contracts across different regions. A major project deadline is approaching, and everything seems on track - until you get an urgent message. One of your key suppliers missed a critical milestone. Panic sets..." },
    { id: "post-358971", href: "/feature-presentation-6-reporting-how-to-create-unified-vendor-reports-within-managedsuppliers", alt: "Feature Presentation #6 Reporting: How to create unified Vendor Reports within managedsuppliers", imgSrc: "/assets/cloned/images/b94f79b18135.jpg", srcSet: "/assets/cloned/images/f19bd16c435f.jpg 479w, /assets/cloned/images/b94f79b18135.jpg 480w", href2: "/feature-presentation-6-reporting-how-to-create-unified-vendor-reports-within-managedsuppliers", title: "Feature Presentation #6 Reporting: How to create unified Vendor Reports within managedsuppliers", description: "Dec 16, 2024", description2: "Maximize Supplier Management Insights with managedsuppliers’ Reporting Feature In complex supplier networks, having access to detailed and reliable data is crucial for maintaining strong vendor relationships and driving strategic decisions. The Reporting feature of..." },
    { id: "post-358965", href: "/feature-presentation-5-forecasting-predict-the-future-with-managedsuppliers", alt: "Feature Presentation #5 Forecasting: Predict the Future with managedsuppliers", imgSrc: "/assets/cloned/images/53ecd87d44ca.jpg", srcSet: "/assets/cloned/images/c4611ace2c68.jpg 479w, /assets/cloned/images/53ecd87d44ca.jpg 480w", href2: "/feature-presentation-5-forecasting-predict-the-future-with-managedsuppliers", title: "Feature Presentation #5 Forecasting: Predict the Future with managedsuppliers", description: "Dec 16, 2024", description2: "How managedsuppliers’ Forecast Feature Empowers Data-Driven Supplier Management Effective supplier management goes beyond tracking current performance - it’s about predicting future trends, optimizing budgets, and ensuring that your company is prepared for any changes..." }
];
/** Blog section. */
export default function BlogSection({ mediaCardData = MediaCard_data } = {}) {
  return (
    <div className="block relative pt-0.5 pb-24 bg-background bg-cover [background-position:50%_50%]">
      <div className="w-256 block relative max-w-270 mx-32 pt-0.5 pb-[1.6rem] bg-cover [background-position:50%_50%] bg-no-repeat max-md:w-75 max-md:mx-[37.5px] max-lg:pb-7.5 md:max-lg:w-[38.4rem] md:max-lg:mx-[4.8rem] 2xl:w-270 2xl:mx-105 2xl:pb-[2.4rem] after:content-[''] after:block after:w-0 after:h-0">
        <div className="w-full h-46.5 min-h-px block relative float-left z-2 bg-cover [background-position:50%_50%] bg-no-repeat">
          <div className="block relative mt-32 text-color-002 text-2xl leading-[1rem] text-left [overflow-wrap:break-word] bg-cover [background-position:50%_50%] bg-no-repeat">
            <div className="block relative">
              <h2 className="block pb-2.5 text-border [font-family:Lato,_Helvetica,_Arial,_Lucida,_sans-serif] text-5xl font-black leading-12 text-center" data-component="heading">
                Blog
              </h2>
              {" "}
              <p className="block text-center" />
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      <div className="w-256 block relative max-w-270 mx-32 pt-[1.6rem] pb-27.5 bg-cover [background-position:50%_50%] bg-no-repeat max-md:w-75 max-md:mx-[37.5px] max-lg:pt-7.5 md:max-lg:w-[38.4rem] md:max-lg:mx-[4.8rem] 2xl:w-270 2xl:mx-105 2xl:pt-[2.4rem] after:content-[''] after:block after:w-0 after:h-0">
        <div className="h-[40.3125rem] min-h-px block relative float-left z-2 bg-cover [background-position:50%_50%] bg-no-repeat max-md:h-[116rem] md:max-lg:h-[1241.7px] 2xl:h-[40.9625rem]">
          <div className="block relative bg-cover [background-position:50%_50%] bg-no-repeat">
            <div className="block relative after:content-['_'] after:block after:w-full after:h-0 after:text-foreground after:text-[0rem] after:font-medium after:leading-[1.5rem]">
              <div className="block">
                <div className="block before:content-['3_.column.size-1of3'] before:hidden before:absolute before:text-foreground before:text-[0.0625rem] before:font-medium before:leading-0 before:opacity-0 max-md:before:content-['1_.column.size-1of1'] md:max-lg:before:content-['2_.column.size-1of2']">
                  <div className="w-[18.9875rem] block float-left max-w-full mr-[56.3px] max-md:w-75 max-md:[float:initial] max-md:mr-0 md:max-lg:w-[290.3px] md:max-lg:clear-both md:max-lg:mr-[2.1125rem] 2xl:w-[20.025rem] 2xl:mr-[3.7125rem]">
                    {mediaCardData.map((d, i) => <MediaCard key={i} d={d} styles={MediaCard_styles[i]} />)}
                  </div>
                  <div className="w-[18.9875rem] block float-left max-w-full mr-[56.3px] max-md:hidden md:max-lg:w-[290.3px] md:max-lg:mr-0 2xl:w-[20.025rem] 2xl:mr-[3.7125rem]">
                    <article className="block mb-7.5 py-[1.1875rem] [overflow-wrap:break-word] bg-background max-md:hidden after:content-['_'] after:block after:w-full after:h-0 after:text-foreground after:text-[0rem] after:font-medium after:leading-[1.5rem] max-md:after:hidden" id="post-358971">
                      <div className="block relative -mt-5 mb-[1.8125rem] -mx-5 p-[1.1875rem] max-md:hidden">
                        <a className="block relative mb-7.5 rounded-lg overflow-hidden text-primary cursor-pointer max-md:hidden" data-component="link" href="/feature-presentation-6-reporting-how-to-create-unified-vendor-reports-within-managedsuppliers">
                          <img className="w-76.5 h-[11.9375rem] inline min-w-full max-w-full overflow-clip aspect-[auto_400/250] align-bottom max-md:hidden md:max-lg:w-73 md:max-lg:h-[11.4375rem] 2xl:w-80.5 2xl:h-[12.5625rem]" data-component="image" alt="Feature Presentation #6 Reporting: How to create unified Vendor Reports within managedsuppliers" height="250" sizes="(max-width:479px) 479px, 100vw " src="/assets/cloned/images/b94f79b18135.jpg" srcSet="/assets/cloned/images/f19bd16c435f.jpg 479w, /assets/cloned/images/b94f79b18135.jpg 480w" width="400" />
                        </a>
                      </div>
                      {" "}
                      <h2 className="block pb-2.5 text-border text-xl leading-[1.4375rem] max-md:hidden" data-component="heading">
                        <a className="inline [font-family:Lato,_Helvetica,_Arial,_Lucida,_sans-serif] font-black cursor-pointer max-md:hidden" data-component="link" href="/feature-presentation-6-reporting-how-to-create-unified-vendor-reports-within-managedsuppliers">
                          Feature Presentation #6 Reporting: How to create unified Vendor Reports within managedsuppliers
                        </a>
                        {" "}
                      </h2>
                      {" "}
                      <p className="block mb-1.5 text-muted-foreground [font-family:Roboto,_Helvetica,_Arial,_Lucida,_sans-serif] text-xs leading-[1.1875rem] text-left max-md:hidden">
                        <span className="inline max-md:hidden">
                          Dec 16, 2024
                        </span>
                      </p>
                      <div className="block [font-family:Roboto,_Helvetica,_Arial,_Lucida,_sans-serif] text-base leading-[1.625rem] max-md:hidden">
                        <div className="block max-md:hidden">
                          <p className="block max-md:hidden">
                            Maximize Supplier Management Insights with managedsuppliers’ Reporting Feature In complex supplier networks, having access to detailed and reliable data is crucial for maintaining strong vendor relationships and driving strategic decisions. The Reporting feature of...
                          </p>
                          {" "}
                        </div>
                      </div>
                      {" "}
                    </article>
                  </div>
                  <div className="w-[18.9875rem] block float-left max-w-full max-lg:hidden 2xl:w-[20.025rem]">
                    <article className="block mb-7.5 py-[1.1875rem] [overflow-wrap:break-word] bg-background max-lg:hidden after:content-['_'] after:block after:w-full after:h-0 after:text-foreground after:text-[0rem] after:font-medium after:leading-[1.5rem] max-lg:after:hidden" id="post-358965">
                      <div className="block relative -mt-5 mb-[1.8125rem] -mx-5 p-[1.1875rem] max-lg:hidden">
                        <a className="block relative mb-7.5 rounded-lg overflow-hidden text-primary cursor-pointer max-lg:hidden" data-component="link" href="/feature-presentation-5-forecasting-predict-the-future-with-managedsuppliers">
                          <img className="w-76.5 h-[11.9375rem] inline min-w-full max-w-full overflow-clip aspect-[auto_400/250] align-bottom max-lg:hidden 2xl:w-80.5 2xl:h-[12.5625rem]" data-component="image" alt="Feature Presentation #5 Forecasting: Predict the Future with managedsuppliers" height="250" sizes="(max-width:479px) 479px, 100vw " src="/assets/cloned/images/53ecd87d44ca.jpg" srcSet="/assets/cloned/images/c4611ace2c68.jpg 479w, /assets/cloned/images/53ecd87d44ca.jpg 480w" width="400" />
                        </a>
                      </div>
                      {" "}
                      <h2 className="block pb-2.5 text-border text-xl leading-[1.4375rem] max-lg:hidden" data-component="heading">
                        <a className="inline [font-family:Lato,_Helvetica,_Arial,_Lucida,_sans-serif] font-black cursor-pointer max-lg:hidden" data-component="link" href="/feature-presentation-5-forecasting-predict-the-future-with-managedsuppliers">
                          Feature Presentation #5 Forecasting: Predict the Future with managedsuppliers
                        </a>
                        {" "}
                      </h2>
                      {" "}
                      <p className="block mb-1.5 text-muted-foreground [font-family:Roboto,_Helvetica,_Arial,_Lucida,_sans-serif] text-xs leading-[1.1875rem] text-left max-lg:hidden">
                        <span className="inline max-lg:hidden">
                          Dec 16, 2024
                        </span>
                      </p>
                      <div className="block [font-family:Roboto,_Helvetica,_Arial,_Lucida,_sans-serif] text-base leading-[1.625rem] max-lg:hidden">
                        <div className="block max-lg:hidden">
                          <p className="block max-lg:hidden">
                            How managedsuppliers’ Forecast Feature Empowers Data-Driven Supplier Management Effective supplier management goes beyond tracking current performance - it’s about predicting future trends, optimizing budgets, and ensuring that your company is prepared for any changes...
                          </p>
                          {" "}
                        </div>
                      </div>
                      {" "}
                    </article>
                  </div>
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      <div className="w-256 h-[22.375rem] min-h-[19.9375rem] block relative max-w-270 mx-32 pt-[0.3125rem] pb-1 px-26 rounded-2xl overflow-hidden bg-clr-10 bg-cover [background-position:50%_50%] bg-no-repeat max-md:w-75 max-md:h-[28.9875rem] max-md:mx-[37.5px] max-md:px-4 md:max-lg:w-[38.4rem] md:max-lg:h-[28.875rem] md:max-lg:mx-[4.8rem] 2xl:w-270 2xl:mx-105 after:content-[''] after:block after:w-0 after:h-0">
        <div className="w-[385.5px] h-[21.8125rem] min-h-px block relative float-left z-2 mr-[44.9px] bg-cover [background-position:50%_50%] bg-no-repeat max-md:w-67 max-md:h-[26.55rem] max-lg:mb-7.5 max-lg:mr-0 md:max-lg:w-[25.4rem] 2xl:w-[25.75rem] 2xl:mr-12">
          <div className="block relative mt-18.5 text-left [overflow-wrap:break-word] bg-cover [background-position:50%_50%] bg-no-repeat">
            <div className="block relative">
              <h2 className="block pb-2.5 text-background [font-family:Lato,_Helvetica,_Arial,_Lucida,_sans-serif] text-[2.0625rem] font-bold leading-[2.375rem]" data-component="heading">
                <span className="inline text-color-001 font-normal text-start" />
                <span className="inline text-color-001 font-normal text-start" />
                <span className="inline text-color-001 font-normal text-start" />
                <span className="inline">
                  How advanced is your
                  <br className="inline" />
                  supplier management?
                </span>
              </h2>
              {" "}
              <p className="block" />
            </div>
            {" "}
          </div>
          <div className="block relative mb-11 text-background [font-family:Roboto,_Helvetica,_Arial,_Lucida,_sans-serif] text-[1.25rem] text-left [overflow-wrap:break-word] bg-cover [background-position:50%_50%] bg-no-repeat">
            <div className="block relative">
              <p className="block">
                Take a test and find out
                <span className="inline text-color-001 font-normal text-start" />
              </p>
            </div>
            {" "}
          </div>
          <div className="block relative mb-18.5 bg-cover [background-position:50%_50%] bg-no-repeat">
            <a className="inline-block relative py-2.5 pr-10 pl-5 rounded-[9px] text-clr-11 [font-family:Roboto,_Helvetica,_Arial,_Lucida,_sans-serif] text-base leading-[1.6875rem] bg-background bg-cover [background-position:50%_50%] bg-no-repeat cursor-pointer before:content-['5'] before:hidden before:absolute before:-ml-8 before:text-clr-11 before:text-[2rem] before:leading-8 before:opacity-0 after:content-['$'] after:block after:absolute after:inset-y-2.5 after:right-[1.2rem] after:left-[10.8125rem] after:w-4 after:h-[1.7rem] after:ml-[0.3rem] after:text-clr-11 after:text-base after:leading-[1.6875rem] hover:border-clr-21 focus:border-clr-29" data-component="button" href="https://aventario.com/vm-maturity-assessment">
              Take anonymous test
            </a>
            {" "}
          </div>
          {" "}
        </div>
        <div className="w-[385.5px] h-18.5 min-h-px block relative float-left z-2 bg-cover [background-position:50%_50%] bg-no-repeat max-md:hidden md:max-lg:w-[25.4rem] 2xl:w-[25.75rem]">
          <div className="w-full block relative mt-[4.3125rem] -mr-[3.6875rem] ml-[3.6875rem] leading-0 text-left bg-cover [background-position:50%_50%] bg-no-repeat">
            <span className="block relative max-w-full" />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
