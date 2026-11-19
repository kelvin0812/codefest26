/* On-page sections of the homepage, shared by the nav and the footer */
export const NAV_LINKS = ["About", "Timeline", "Roadmap", "Workshops", "Finalists", "Venue", "Committee", "FAQ"];

/* "#about" on the homepage, "/#about" everywhere else */
export function sectionHref(item: string, home: boolean) {
  return `${home ? "" : "/"}#${item.toLowerCase()}`;
}
