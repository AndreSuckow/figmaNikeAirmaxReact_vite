type AsideProps = {
    srcImage?: string,
    textParagraph?: string,
    altImageAcessibility?: string
}

export function Aside(props: AsideProps ) {
    return (
        <>
            <aside className="aside-content">
                <img src={props.srcImage} alt={props.altImageAcessibility} />
                <p className="text">{props.textParagraph}</p>
            </aside>
        </>
    )
}