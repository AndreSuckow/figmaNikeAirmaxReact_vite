import { NavigationItem } from "./Navigation-item";

export function Navigation() {

    const itensLink = ['Home', 'Collection', 'About', 'Contact']
    return (
        <>
            <nav>
                <ul>
                    {itensLink.map((item)=>{
                        return <NavigationItem value={item} link={"/" + item} key={item}/>
                    })}
                </ul>
            </nav>
        </>
    )
}
