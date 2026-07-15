import ListRow from "../components/list-row";
import ListRow2 from "../components/list-row2";
import { ListRow2_styles } from "../_styles";
import { listRowData as listRowDataContent, listRow2Data as listRow2DataContent } from "../content";
/** Site footer. */
export default function Footer({ listRowData = listRowDataContent, listRow2Data = listRow2DataContent } = {}) {
  return (
    <footer className="block" id="main-footer">
      <div className="w-256 block relative max-w-270 mx-32 max-md:w-75 max-md:mx-[37.5px] md:max-lg:w-[38.4rem] md:max-lg:mx-[4.8rem] 2xl:w-270 2xl:mx-105">
        <div className="block after:content-['_'] after:block after:w-full after:h-0 after:text-foreground after:text-[0rem] after:font-medium after:leading-[1.5rem]" id="footer-widgets">
          <div className="block">
            <div className="block float-left max-w-full [overflow-wrap:break-word]" id="block-5">
              <div className="block">
                <h2 className="block pb-2.5 text-border text-[1.625rem] leading-6.5" data-component="heading">
                  Archives
                </h2>
                <ul className="block [list-style-type:none] list-outside">
                  {listRowData.map((d, i) => <ListRow key={i} d={d} />)}
                </ul>
              </div>
            </div>
            <div className="block float-left max-w-full [overflow-wrap:break-word]" id="block-6">
              <div className="block">
                <h2 className="block pb-2.5 text-border text-[1.625rem] leading-6.5" data-component="heading">
                  Categories
                </h2>
                <ul className="block [list-style-type:none] list-outside">
                  <li className="list-item mb-[0.4375rem]">
                    <a className="inline cursor-pointer hover:border-clr-22 hover:text-clr-22 hover:outline-clr-22 hover:[text-decoration-color:var(--clr-22)]" data-component="link" href="/category/blog-post">
                      Blog Post
                    </a>
                    {" "}
                  </li>
                  <li className="list-item mb-[0.4375rem]">
                    <a className="inline cursor-pointer hover:border-clr-22 hover:text-clr-22 hover:outline-clr-22 hover:[text-decoration-color:var(--clr-22)]" data-component="link" href="/category/uncategorized">
                      Uncategorized
                    </a>
                    {" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="block" />
          <div className="block" />
          <div className="block" />
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <div className="block" id="footer-bottom">
        <div className="w-256 block relative max-w-270 mx-32 max-md:w-75 max-md:mx-[37.5px] md:max-lg:w-[38.4rem] md:max-lg:mx-[4.8rem] 2xl:w-270 2xl:mx-105 after:content-['_'] after:block after:w-full after:h-0 after:text-foreground after:text-[0rem] after:font-medium after:leading-[1.5rem]">
          <ul className="block [list-style-type:none] list-outside">
            {listRow2Data.map((d, i) => <ListRow2 key={i} d={d} styles={ListRow2_styles[i]} />)}
          </ul>
          <p className="block" id="footer-info">
            {"Designed by "}
            <a className="inline text-primary cursor-pointer" data-component="link" href="https://www.elegantthemes.com/" title="Premium WordPress Themes">
              Elegant Themes
            </a>
            {" | Powered by "}
            <a className="inline text-primary cursor-pointer" data-component="link" href="https://www.wordpress.org/">
              WordPress
            </a>
          </p>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </footer>
  );
}
