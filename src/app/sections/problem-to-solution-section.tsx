/** Problem To Solution section. */
export default function ProblemToSolutionSection() {
  return (
    <div className="block relative py-[3.2rem] bg-background bg-cover [background-position:50%_50%] max-lg:py-12.5 2xl:py-[4.8rem]">
      <div className="w-256 block relative max-w-270 mx-32 py-[1.6rem] bg-cover [background-position:50%_50%] bg-no-repeat max-md:w-75 max-md:mx-[37.5px] max-lg:py-7.5 md:max-lg:w-[38.4rem] md:max-lg:mx-[4.8rem] 2xl:w-270 2xl:mx-105 2xl:py-[2.4rem] after:content-[''] after:block after:w-0 after:h-0">
        <div className="w-full h-[16.9125rem] min-h-px block relative float-left z-2 bg-cover [background-position:50%_50%] bg-no-repeat max-md:h-[24.9375rem]">
          <div className="block relative pt-[1.0625rem] pb-7.5 text-color-002 text-2xl leading-[1rem] text-left [overflow-wrap:break-word] bg-cover [background-position:50%_50%] bg-no-repeat max-md:leading-6">
            <div className="block relative">
              <h2 className="block pb-2.5 text-border [font-family:Lato,_Helvetica,_Arial,_Lucida,_sans-serif] text-5xl font-black leading-12 text-center" data-component="heading">
                <span className="inline text-color-001 font-normal text-start" />
                <span className="inline text-color-001 font-normal text-start" />
                From Problem to Solution
              </h2>
              {" "}
              <p className="block text-center">
                <strong className="inline font-bold">
                  The Story behind managedsuppliers
                </strong>
              </p>
            </div>
            {" "}
          </div>
          <div className="block relative bg-cover [background-position:50%_50%] bg-no-repeat">
            <div className="block relative z-1 leading-0">
              <video className="w-full h-37.5 inline max-w-full overflow-clip object-contain" controls>
                {" "}
                <source className="inline text-color-001 [font-family:'Times_New_Roman'] text-base font-normal leading-4.5" src="/assets/cloned/videos/f75ba35e9ed1.mov" type="video/mp4" />
                {" "}
              </video>
            </div>
            {" "}
            <div className="h-full block absolute top-0 inset-x-0 z-10 bg-cover [background-position:50%_50%] bg-no-repeat cursor-pointer" style={{ backgroundImage: "url(\"/assets/cloned/images/774645211a22.jpg\")" }}>
              <div className="h-full block absolute top-0 inset-x-0 z-100 bg-clr-1 hover:bg-clr-20">
                <a className="h-[6.3125rem] block absolute top-[4.6875rem] right-116 left-128 z-100 -mt-12 -ml-12 text-background text-8xl leading-24 max-lg:h-[3.1875rem] max-md:right-31.5 max-md:left-37.5 max-lg:-mt-6 max-lg:-ml-6 max-lg:text-5xl max-lg:leading-12 md:max-lg:right-[17.7rem] md:max-lg:left-[19.2rem] 2xl:right-123 2xl:left-135 before:content-['I'] before:text-background before:text-8xl before:font-medium before:leading-24 max-lg:before:text-5xl max-lg:before:leading-12" data-component="link" href="#" />
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
  );
}
