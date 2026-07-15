import Tile, { type TileData } from "../components/tile";
import { Tile_styles } from "../_styles";
import { ctaSectionContent } from "../content";
const Tile_data: TileData[] = [
    { id: "btn_create", description: "Creation" },
    { id: "btn_negotiate", description: "Negotiation" },
    { id: "btn_measure", description: "Measurement" },
    { id: "btn_improve", description: "Improvement" },
    { id: "btn_forecast", description: "Forecasting" },
    { id: "btn_report", description: "Reporting" }
];
/** Cta section. */
export default function CtaSection({ tileData = Tile_data, content = ctaSectionContent } = {}) {
  return (
    <div className="block relative pt-19 pb-[3.2rem] bg-background bg-cover [background-position:50%_50%] max-lg:pb-12.5 2xl:pb-[4.8rem]" style={{ backgroundImage: "linear-gradient(var(--clr-6) 0%, var(--clr-7) 100%)" }}>
      <div className="w-256 block relative max-w-270 mx-32 pt-1.5 bg-cover [background-position:50%_50%] bg-no-repeat max-md:w-75 max-md:mx-[37.5px] md:max-lg:w-[38.4rem] md:max-lg:mx-[4.8rem] 2xl:w-270 2xl:mx-105 after:content-[''] after:block after:w-0 after:h-0">
        <div className="w-full h-[4.6rem] min-h-px block relative float-left z-2 bg-cover [background-position:50%_50%] bg-no-repeat max-md:h-38.5">
          <div className="h-full block relative text-color-002 text-2xl leading-[1rem] text-left [overflow-wrap:break-word] bg-cover [background-position:50%_50%] bg-no-repeat max-md:leading-6">
            <div className="h-full block relative">
              <h2 className="block pb-2.5 text-border [font-family:Lato,_Helvetica,_Arial,_Lucida,_sans-serif] text-5xl font-black leading-12 text-center" data-component="heading">
                {content.title}
              </h2>
              {" "}
              <p className="block text-center">
                <strong className="inline font-bold">
                  of managedsuppliers magic
                </strong>
              </p>
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      <div className="w-256 block relative max-w-270 mt-16 mb-[1.1875rem] mx-32 bg-cover [background-position:50%_50%] bg-no-repeat max-md:w-75 max-lg:flex max-md:mx-[37.5px] max-lg:flex-wrap md:max-lg:w-[38.4rem] md:max-lg:mx-[4.8rem] 2xl:w-270 2xl:mx-105 after:content-[''] after:block after:w-0 after:h-0">
        {tileData.map((d, i) => <Tile key={i} d={d} styles={Tile_styles[i]} />)}
        {" "}
      </div>
      <div className="w-256 block relative max-w-270 mx-32 pb-[1.6rem] bg-cover [background-position:50%_50%] bg-no-repeat max-md:w-75 max-md:mx-[37.5px] max-lg:pb-7.5 md:max-lg:w-[38.4rem] md:max-lg:mx-[4.8rem] 2xl:w-270 2xl:mx-105 2xl:pb-[2.4rem] after:content-[''] after:block after:w-0 after:h-0">
        <div className="w-full h-[2.075rem] min-h-px block relative float-left z-2 bg-cover [background-position:50%_50%] bg-no-repeat max-lg:h-[2.1875rem] 2xl:h-[34.7px]">
          <div className="w-162.5 block relative mb-7 mx-auto leading-0 text-left bg-cover [background-position:50%_50%] bg-no-repeat max-md:w-75 max-lg:mb-7.5 max-md:mx-0 md:max-lg:-mr-[2.225rem] md:max-lg:ml-0 2xl:mb-[29.7px]" id="screen_create">
            <span className="block relative max-w-full rounded-xl overflow-hidden shadow-[var(--clr-9)_0px_8px_92px_0px]">
              <div className="h-full block absolute top-0 inset-x-0 z-10 pointer-events-none" />
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      <div className="w-256 block relative max-w-270 mx-32 pt-[1.5625rem] pb-[1.6rem] bg-cover [background-position:50%_50%] bg-no-repeat max-md:w-75 max-md:mx-[37.5px] max-lg:pb-7.5 md:max-lg:w-[38.4rem] md:max-lg:mx-[4.8rem] 2xl:w-270 2xl:mx-105 2xl:pb-[2.4rem] after:content-[''] after:block after:w-0 after:h-0" id="div_create">
        <div className="w-[30.2375rem] h-[11.4rem] min-h-px block relative float-left z-2 mr-[56.3px] bg-cover [background-position:50%_50%] bg-no-repeat max-md:w-75 max-md:h-[17rem] max-lg:mb-7.5 max-lg:mr-0 md:max-lg:w-[38.4rem] md:max-lg:h-40 2xl:w-[510.3px] 2xl:mr-[3.7125rem]">
          <div className="block relative mb-2.5 leading-0 text-left bg-cover [background-position:50%_50%] bg-no-repeat">
            <span className="block relative max-w-full" />
            {" "}
          </div>
          <div className="block relative text-color-001 [font-family:Lato,_Helvetica,_Arial,_Lucida,_sans-serif] leading-[1.375rem] text-left [overflow-wrap:break-word] bg-cover [background-position:50%_50%] bg-no-repeat">
            <div className="block relative">
              <h3 className="block pb-2.5 text-border [font-family:Roboto,_Helvetica,_Arial,_Lucida,_sans-serif] text-xl font-black leading-[1.4375rem]" data-component="heading">
                Challenge Of SOW Creation
              </h3>
              {" "}
              <p className="block">
                Vendor and contract management involves managing numerous pieces of information, including various document types and versions. This often results in extensive email exchanges and poorly documented meetings, causing issues with transparency and traceability in change tracking. Without a clear and standardised SOW, companies have difficulty maintaining clarity on who needs to do what to achieve the defined goal.
              </p>
            </div>
            {" "}
          </div>
          {" "}
        </div>
        <div className="w-[30.2375rem] h-[10.5375rem] min-h-px block relative float-left z-2 bg-cover [background-position:50%_50%] bg-no-repeat max-md:w-75 max-md:h-[12.05rem] md:max-lg:w-[38.4rem] md:max-lg:h-[9.25rem] 2xl:w-[510.3px] 2xl:h-[170.1px]">
          <div className="block relative mb-2.5 leading-0 text-left bg-cover [background-position:50%_50%] bg-no-repeat">
            <span className="block relative max-w-full" />
            {" "}
          </div>
          <div className="block relative mb-7 text-color-001 [font-family:Lato,_Helvetica,_Arial,_Lucida,_sans-serif] leading-[1.375rem] text-left [overflow-wrap:break-word] bg-cover [background-position:50%_50%] bg-no-repeat max-lg:mb-7.5 2xl:mb-[29.7px]">
            <div className="block relative">
              <h3 className="block pb-2.5 text-border [font-family:Roboto,_Helvetica,_Arial,_Lucida,_sans-serif] text-xl font-black leading-[1.4375rem]" data-component="heading">
                Solution
              </h3>
              {" "}
              <p className="block">
                Implement managedsuppliers! managedsuppliers is a central collaboration solution that provides an online SOW framework, enhancing collaboration, productivity, and accuracy.
              </p>
            </div>
            {" "}
          </div>
          <div className="block relative -mt-3 bg-cover [background-position:50%_50%] bg-no-repeat">
            <a className="inline-block relative py-[0.3125rem] pr-9.5 pl-5.5 rounded-md text-background [font-family:Roboto,_Helvetica,_Arial,_Lucida,_sans-serif] text-base leading-[1.6875rem] bg-accent bg-cover [background-position:50%_50%] bg-no-repeat cursor-pointer before:content-['5'] before:hidden before:absolute before:-ml-8 before:text-background before:text-[2rem] before:leading-8 before:opacity-0 after:content-['$'] after:block after:absolute after:inset-y-[0.3125rem] after:right-[1.075rem] after:left-[212.9px] after:w-4 after:h-[1.7rem] after:ml-[0.3rem] after:text-background after:text-base after:leading-[1.6875rem] hover:border-clr-18 focus:border-clr-28" data-component="button" href={content.actions[0].href}>
              {content.actions[0].label}
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      <div className="w-256 block relative max-w-270 mx-32 py-[1.6rem] bg-cover [background-position:50%_50%] bg-no-repeat max-md:w-75 max-md:mx-[37.5px] max-lg:py-7.5 md:max-lg:w-[38.4rem] md:max-lg:mx-[4.8rem] 2xl:w-270 2xl:mx-105 2xl:py-[2.4rem] after:content-[''] after:block after:w-0 after:h-0">
        <div className="w-full min-h-px block relative float-left z-2 bg-cover [background-position:50%_50%] bg-no-repeat">
          <div className="block relative bg-cover [background-position:50%_50%] bg-no-repeat">
            <div className="block relative" />
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
