import { ctaSection2Content } from "../content";
/** Cta section. */
export default function CtaSection2({ content = ctaSection2Content } = {}) {
  return (
    <div className="block relative pt-[3.2rem] pb-0.5 bg-background bg-cover [background-position:50%_50%] max-lg:pt-12.5 2xl:pt-[4.8rem]">
      <div className="w-4/5 hidden relative max-w-270 my-auto py-[2%] bg-cover [background-position:50%_50%] bg-no-repeat max-md:w-75 max-md:block max-md:mx-[37.5px] max-md:py-7.5 max-md:my-0 after:content-[''] after:block after:w-0 after:h-0">
        <div className="min-h-px block relative float-left z-2 bg-cover [background-position:50%_50%] bg-no-repeat max-md:h-[38.3125rem]">
          <div className="block relative leading-0 text-center bg-cover [background-position:50%_50%] bg-no-repeat">
            <span className="block relative max-w-full" />
            {" "}
          </div>
          <div className="block relative mt-21.5 mb-[0.3125rem] [font-family:Roboto,_Helvetica,_Arial,_Lucida,_sans-serif] text-[1.5625rem] font-bold text-left [overflow-wrap:break-word] bg-cover [background-position:50%_50%] bg-no-repeat">
            <div className="block relative">
              <h3 className="block pb-2.5 text-border [font-family:Lato,_Helvetica,_Arial,_Lucida,_sans-serif] text-[2.5rem] font-black leading-11.5">
                {content.title}
                <br className="inline" />
                At Your Fingertips
              </h3>
            </div>
            {" "}
          </div>
          <div className="block relative mb-[2.75%] pb-2 [font-family:Roboto,_Helvetica,_Arial,_Lucida,_sans-serif] text-base leading-[1.625rem] text-left [overflow-wrap:break-word] bg-cover [background-position:50%_50%] bg-no-repeat max-md:mb-7.5">
            <div className="block relative">
              <p className="block">
                managedsupplier’s customizable supplier reporting, available immediately, helps companies make better choices and improve supplier collaboration. It provides a comprehensive history for easy comparison of supplier performance, even on data previously invisible to the company (number of change requests, holistic reporting, and others).
              </p>
            </div>
            {" "}
          </div>
          <div className="block relative mt-2 text-left bg-cover [background-position:50%_50%] bg-no-repeat">
            <a className="inline-block relative pb-1 rounded-[3px] text-accent [font-family:Roboto,_Helvetica,_Arial,_Lucida,_sans-serif] underline bg-cover [background-position:50%_50%] bg-no-repeat cursor-pointer before:content-['5'] before:hidden before:absolute before:-ml-8 before:text-accent before:text-[2rem] before:leading-8 before:text-left before:opacity-0 after:content-['$'] after:block after:absolute after:ml-1 after:text-accent after:text-sm after:leading-[1.5rem] after:text-left max-md:after:top-0 max-md:after:-right-[1.1375rem] max-md:after:bottom-1 max-md:after:left-[10.9625rem] max-md:after:w-3.5 max-md:after:h-6" href={content.actions[0].href}>
              {content.actions[0].label}
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      <div className="block relative max-w-270 mx-auto py-[1.6rem] bg-cover [background-position:50%_50%] bg-no-repeat max-md:hidden md:max-lg:py-7.5 2xl:py-[2.4rem] after:content-[''] after:block after:w-0 after:h-0">
        <div className="w-135 h-[0.3125rem] min-h-px block relative float-left z-2 bg-cover [background-position:50%_50%] bg-no-repeat md:max-lg:w-96">
          <div className="block relative leading-0 text-center bg-cover [background-position:50%_50%] bg-no-repeat">
            <span className="block relative max-w-full" />
            {" "}
          </div>
          {" "}
        </div>
        <div className="w-135 h-[22.875rem] min-h-px block relative float-left z-2 bg-cover [background-position:50%_50%] bg-no-repeat md:max-lg:w-96 md:max-lg:h-[417.1px]">
          <div className="block relative mt-21.5 mb-[0.3125rem] [font-family:Roboto,_Helvetica,_Arial,_Lucida,_sans-serif] text-[1.5625rem] font-bold text-left [overflow-wrap:break-word] bg-cover [background-position:50%_50%] bg-no-repeat">
            <div className="block relative">
              <h3 className="block pb-2.5 text-border [font-family:Lato,_Helvetica,_Arial,_Lucida,_sans-serif] text-[2.5rem] font-black leading-11.5" data-component="heading">
                Real-Time Reporting,
                <br className="inline" />
                At Your Fingertips
              </h3>
            </div>
            {" "}
          </div>
          <div className="block relative pb-2 [font-family:Roboto,_Helvetica,_Arial,_Lucida,_sans-serif] text-base leading-[1.625rem] text-left [overflow-wrap:break-word] bg-cover [background-position:50%_50%] bg-no-repeat">
            <div className="block relative">
              managedsupplier’s customizable supplier reporting, available immediately, helps companies make better choices and improve supplier collaboration. It provides a comprehensive history for easy comparison of supplier performance, even on data previously invisible to the company (number of change requests, holistic reporting, and others).
            </div>
            {" "}
          </div>
          <div className="block relative mt-2 text-left bg-cover [background-position:50%_50%] bg-no-repeat">
            <a className="inline-block relative pb-1 rounded-[3px] text-accent [font-family:Roboto,_Helvetica,_Arial,_Lucida,_sans-serif] underline bg-cover [background-position:50%_50%] bg-no-repeat cursor-pointer before:content-['5'] before:hidden before:absolute before:-ml-8 before:text-accent before:text-[2rem] before:leading-8 before:text-left before:opacity-0 after:content-['$'] after:block after:absolute after:top-0 after:-right-[1.1375rem] after:bottom-1 after:left-[10.9625rem] after:w-3.5 after:h-6 after:ml-1 after:text-accent after:text-sm after:leading-[1.5rem] after:text-left max-md:after:inset-auto max-md:after:w-auto max-md:after:h-auto hover:bg-clr-15 hover:border-clr-16 focus:bg-clr-24 focus:border-clr-26" data-component="link" href={content.actions[1].href}>
              {content.actions[1].label}
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      <div className="w-4/5 hidden relative max-w-270 my-auto py-[2%] bg-cover [background-position:50%_50%] bg-no-repeat max-md:w-75 max-md:block max-md:mx-[37.5px] max-md:py-7.5 max-md:my-0 after:content-[''] after:block after:w-0 after:h-0">
        <div className="min-h-px block relative float-left z-2 bg-cover [background-position:50%_50%] bg-no-repeat max-md:h-[669.3px]">
          <div className="block relative mb-[2.75%] leading-0 text-left bg-cover [background-position:50%_50%] bg-no-repeat max-md:mb-7.5">
            <span className="block relative max-w-full" />
            {" "}
          </div>
          <div className="block relative mt-21.5 mb-[0.3125rem] [font-family:Roboto,_Helvetica,_Arial,_Lucida,_sans-serif] text-[1.5625rem] font-bold text-left [overflow-wrap:break-word] bg-cover [background-position:50%_50%] bg-no-repeat">
            <div className="block relative">
              <h3 className="block pb-2.5 text-border [font-family:Lato,_Helvetica,_Arial,_Lucida,_sans-serif] text-[2.5rem] font-black leading-11.5">
                Based On Decades Of Experience
              </h3>
            </div>
            {" "}
          </div>
          <div className="block relative mb-[2.75%] pb-2 [font-family:Roboto,_Helvetica,_Arial,_Lucida,_sans-serif] text-base leading-[1.625rem] text-left [overflow-wrap:break-word] bg-cover [background-position:50%_50%] bg-no-repeat max-md:mb-7.5">
            <div className="block relative">
              <p className="block">
                {"Modern corporations have long focused on outsourcing activities and buying in expertise and support. This has multiplied the number of suppliers as well as the number of individual engagements per company in recent years. Due to their greater dependency and larger order volumes, most of them have understood that managing the suppliers in their value chain is of enormous importance. Our parent company "}
                <a className="inline text-primary cursor-pointer" href={content.actions[2].href}>
                  {content.actions[2].label}
                </a>
                , consults companies on solving these issues for the past two decades. managedsuppliers builds on that experience.
              </p>
            </div>
            {" "}
          </div>
          <div className="block relative mt-2 text-left bg-cover [background-position:50%_50%] bg-no-repeat">
            <a className="inline-block relative pb-1 rounded-[3px] text-accent [font-family:Roboto,_Helvetica,_Arial,_Lucida,_sans-serif] underline bg-cover [background-position:50%_50%] bg-no-repeat cursor-pointer before:content-['5'] before:hidden before:absolute before:-ml-8 before:text-accent before:text-[2rem] before:leading-8 before:text-left before:opacity-0 after:content-['$'] after:block after:absolute after:ml-1 after:text-accent after:text-sm after:leading-[1.5rem] after:text-left max-md:after:top-0 max-md:after:-right-[1.1375rem] max-md:after:bottom-1 max-md:after:left-[90.7px] max-md:after:w-3.5 max-md:after:h-6" href={content.actions[3].href}>
              {content.actions[3].label}
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      <div className="w-256 block relative max-w-270 mx-auto pt-[1.6rem] pb-29 bg-cover [background-position:50%_50%] bg-no-repeat max-md:hidden md:max-lg:w-[38.4rem] md:max-lg:pt-7.5 2xl:w-270 2xl:pt-[2.4rem] after:content-[''] after:block after:w-0 after:h-0">
        <div className="w-128 h-[442.7px] min-h-px block relative float-left z-2 bg-cover [background-position:50%_50%] bg-no-repeat md:max-lg:w-[19.2rem] md:max-lg:h-[642.3px] 2xl:w-135">
          <div className="block relative mt-21.5 mb-[0.3125rem] [font-family:Roboto,_Helvetica,_Arial,_Lucida,_sans-serif] text-[1.5625rem] font-bold text-left [overflow-wrap:break-word] bg-cover [background-position:50%_50%] bg-no-repeat">
            <div className="block relative">
              <h3 className="block pb-2.5 text-border [font-family:Lato,_Helvetica,_Arial,_Lucida,_sans-serif] text-[2.5rem] font-black leading-11.5" data-component="heading">
                Based On Decades Of Experience
              </h3>
            </div>
            {" "}
          </div>
          <div className="block relative pb-2 [font-family:Roboto,_Helvetica,_Arial,_Lucida,_sans-serif] text-base leading-[1.625rem] text-left [overflow-wrap:break-word] bg-cover [background-position:50%_50%] bg-no-repeat">
            <div className="block relative">
              <p className="block">
                {"Modern corporations have long focused on outsourcing activities and buying in expertise and support. This has multiplied the number of suppliers as well as the number of individual engagements per company in recent years. Due to their greater dependency and larger order volumes, most of them have understood that managing the suppliers in their value chain is of enormous importance. Our parent company "}
                <a className="inline text-primary cursor-pointer" data-component="link" href={content.actions[4].href}>
                  <span className="inline underline">
                    {content.actions[4].label}
                  </span>
                </a>
                , consults companies on solving these issues for the past two decades. managedsuppliers builds on that experience.
              </p>
            </div>
            {" "}
          </div>
          <div className="block relative mt-2 text-left bg-cover [background-position:50%_50%] bg-no-repeat">
            <a className="inline-block relative pb-1 rounded-[3px] text-accent [font-family:Roboto,_Helvetica,_Arial,_Lucida,_sans-serif] underline bg-cover [background-position:50%_50%] bg-no-repeat cursor-pointer before:content-['5'] before:hidden before:absolute before:-ml-8 before:text-accent before:text-[2rem] before:leading-8 before:text-left before:opacity-0 after:content-['$'] after:block after:absolute after:top-0 after:-right-[1.1375rem] after:bottom-1 after:left-[90.7px] after:w-3.5 after:h-6 after:ml-1 after:text-accent after:text-sm after:leading-[1.5rem] after:text-left max-md:after:inset-auto max-md:after:w-auto max-md:after:h-auto hover:bg-clr-15 hover:border-clr-17 focus:bg-clr-24 focus:border-clr-25" data-component="link" href={content.actions[5].href}>
              {content.actions[5].label}
            </a>
            {" "}
          </div>
          {" "}
        </div>
        <div className="w-128 h-[0.3125rem] min-h-px block relative float-left z-2 bg-cover [background-position:50%_50%] bg-no-repeat md:max-lg:w-[19.2rem] 2xl:w-135">
          <div className="block relative leading-0 text-left bg-cover [background-position:50%_50%] bg-no-repeat">
            <span className="block relative max-w-full" />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      <div className="w-256 h-[16.6rem] min-h-[14.825rem] block relative max-w-270 mx-32 pt-4 pb-8.5 px-26 rounded-2xl overflow-hidden bg-cover [background-position:50%_50%] bg-no-repeat max-md:w-75 max-md:h-[25.7rem] max-md:mx-[37.5px] max-md:px-4 md:max-lg:w-[38.4rem] md:max-lg:h-[19.95rem] md:max-lg:mx-[4.8rem] 2xl:w-270 2xl:h-[16.7rem] 2xl:mx-105 after:content-[''] after:block after:w-0 after:h-0" style={{ backgroundImage: "url(\"data:image/gif" }}>
        <div className="w-full h-[13.475rem] min-h-px block relative float-left z-2 bg-cover [background-position:50%_50%] bg-no-repeat max-md:h-[22.575rem] md:max-lg:h-[16.825rem] 2xl:h-[13.575rem]">
          <div className="h-25.5 min-h-[6.0625rem] block relative mt-8 mb-[1.4rem] text-left [overflow-wrap:break-word] bg-cover [background-position:50%_50%] bg-no-repeat max-md:h-60 max-lg:mb-7.5 md:max-lg:h-37 2xl:mb-6">
            <div className="h-full block relative">
              <h2 className="h-full block pb-2.5 text-border [font-family:Lato,_Helvetica,_Arial,_Lucida,_sans-serif] text-[2.5rem] font-bold leading-11.5" data-component="heading">
                Take your supplier relationships
                <br className="inline" />
                to the next level.
              </h2>
            </div>
            {" "}
          </div>
          <div className="block relative mb-4 bg-cover [background-position:50%_50%] bg-no-repeat">
            <a className="inline-block relative py-2 pr-10 pl-5.5 rounded-md text-background [font-family:Roboto,_Helvetica,_Arial,_Lucida,_sans-serif] text-base leading-[1.6875rem] bg-accent bg-cover [background-position:50%_50%] bg-no-repeat cursor-pointer before:content-['5'] before:hidden before:absolute before:-ml-8 before:text-background before:text-[2rem] before:leading-8 before:opacity-0 after:content-['$'] after:block after:absolute after:inset-y-2 after:right-[1.2rem] after:left-[7.2375rem] after:w-4 after:h-[1.7rem] after:ml-[0.3rem] after:text-background after:text-base after:leading-[1.6875rem] hover:border-clr-19 focus:border-background" data-component="button" href={content.actions[6].href}>
              {content.actions[6].label}
            </a>
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
