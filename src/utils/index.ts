
export const handleScroll = (tagId: string) => {

    const element = document.querySelector(`#${tagId}`)
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        return true
    }
    return false
}