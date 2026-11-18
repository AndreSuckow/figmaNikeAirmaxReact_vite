import { NavigationItem } from "./Navigation-item";

export function Navigation() {

    const itensLink = ['Home', 'Collection', 'About', 'Contact']
    return (
        <>
            <nav aria-label="Main navigation">
                <ul>
                    {itensLink.map((item)=>{
                        const link = item === "Home" ? import.meta.env.BASE_URL : "/" + item;
                        return <NavigationItem value={item} link={link} key={item}/>
                    })}
                </ul>
            </nav>
        </>
    )
}
