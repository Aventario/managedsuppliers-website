import type { TileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TileData = {
  id: string;
  description: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className={cn("w-[123.7px] h-[3.675rem] min-h-px block relative float-left z-2 py-3 rounded-2xl overflow-hidden bg-cover [background-position:50%_50%] bg-no-repeat max-md:w-22.5 md:max-lg:w-[182.3px] 2xl:w-[130.5px]", styles.className)} id={d.id}>
      <div className={cn("block relative mb-1.5 leading-0 text-center bg-cover [background-position:50%_50%] bg-no-repeat", styles.className2)}>
        <span className="block relative max-w-full" />
        {" "}
      </div>
      <div className="block relative [font-family:Lato,_Helvetica,_Arial,_Lucida,_sans-serif] text-[0.9375rem] font-black text-left [overflow-wrap:break-word] bg-cover [background-position:50%_50%] bg-no-repeat">
        <div className="block relative">
          <p className="block text-center">
            {d.description}
          </p>
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
