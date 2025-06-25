type NavigationItemProps = {
  value: string,
  link: string,
};

export function NavigationItem(props: NavigationItemProps) {
  return (
      <li>
        <a href={props.link}>{props.value}</a>
      </li>
  );
}
