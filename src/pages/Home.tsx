import "./Home.css";
import NikeIcon from "../assets/nike-icon.svg";
import airmaxShoes from "../assets/shoes-airmax.png";
import { Navigation } from "../components/Navigation";
import { Aside } from "../components/Aside";
import { ShoesCard, type ItemProps } from "../components/ShoesCard";

export function Home() {
   const contentItens: ItemProps = {
      title: "Air Max",
      subtitle: "Nike Air Max 90",
      price: "$90",
      textShoes: "Nike Air Max is a line of shoes produced by Nike, Inc., with the first model released in 1987. Air Max shoes are identified by their midsoles incorporating flexible urethane pouches filled with pressurized gas, visible from the exterior of the shoe and intended to provide cushioning to the underfoot.",
      srcImgShoes: airmaxShoes,
      altImageAcessibility: "shoes Air Max 90 color black",
   };

   return (
         <section className="page-shell">
            <Aside srcImage={NikeIcon} altImageAcessibility="nike icon" textParagraph="Stylish Text Over" />
            <div className="page-content">
               <header className="site-header">
                  <Navigation />
               </header>
               <main className="product-main">
                  <ShoesCard itemProps={contentItens} />
               </main>
            </div>
         </section>
   );
}
