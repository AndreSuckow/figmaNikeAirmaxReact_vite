export type ItemProps = {
    title: string;
    subtitle: string;
    price: string;
    textShoes: string;
    srcImgShoes: string;
    altImageAcessibility: string;
}

type ShoesCardProps = {
  itemProps: ItemProps
};

export function ShoesCard(props: ShoesCardProps) {
  return (
      <article className="content-main">
        <div className="content-left">
          <p className="eyebrow">The original icon</p>
          <h1>{props.itemProps.title}</h1>
          <h2>{props.itemProps.subtitle}</h2>
          <p className="price">{props.itemProps.price}</p>
          <p className="text">{props.itemProps.textShoes}</p>
          <button>Add to cart</button>
        </div>
        <div className="content-right">
          <span className="visual-glow" aria-hidden="true" />
          <img src={props.itemProps.srcImgShoes} alt={props.itemProps.altImageAcessibility} />
        </div>
      </article>
  );
}
