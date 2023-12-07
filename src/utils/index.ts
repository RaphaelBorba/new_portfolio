

export const handleScroll = (tagId: string) => {
    const element = document.querySelector(`#${tagId}`)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
}

/* export const handleScroll = (tagId: string) => {
    var node = document.querySelector(`#${tagId}`)
    var yourHeight = 80;

    // scroll to your element
    if(!node) return

    node.scrollIntoView(true);

    // now account for fixed header
    var scrolledY = window.scrollY;

    if (scrolledY) {
        window.scroll(0, scrolledY - yourHeight);
    }
} */

