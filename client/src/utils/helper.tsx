import { ACTIVE_CLASSNAME } from "./constants";

export const isIOSDevice = () => {
    return [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
    ].includes(navigator.platform)
}

export const isTouchDevice = (): boolean => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

export const removeActiveClassName = (findElementByClassName: string) => {
    const filterItems = Array.from(
        document.getElementsByClassName(findElementByClassName)
    ) as HTMLElement[];
    filterItems.forEach(emt => emt.classList.remove(ACTIVE_CLASSNAME));
}
