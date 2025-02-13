export function getMMChapter(mmControlId:string) : number{
    const subChapterMaxNumDigits = 2
    const subSubChapterMaxNumDigits = 2
    const firstDotIndex = mmControlId.indexOf(".")
    const chapter = Number.parseInt(mmControlId.substring(0, firstDotIndex));
    const secondDotIndex = mmControlId.indexOf(".", firstDotIndex+1)
    const hasSubSubChapter = secondDotIndex != -1 && secondDotIndex < 6 // To avoid errors if control name contains a dot

    const endSubChapter = hasSubSubChapter ? secondDotIndex : mmControlId.indexOf(" ", firstDotIndex)

    const subChapter = Number.parseInt(mmControlId.substring(firstDotIndex+1, endSubChapter))
    if (Number.isNaN(subChapter)) return Number.parseInt(chapter + Array(subChapterMaxNumDigits + subSubChapterMaxNumDigits).fill('0').toString())
    const paddedSubChapter = String(subChapter).padStart(subChapterMaxNumDigits, '0')

    if (!hasSubSubChapter) return Number.parseInt(chapter + paddedSubChapter + Array(subSubChapterMaxNumDigits).fill('0').toString())
        
    const subSubChapter = Number.parseInt(mmControlId.substring(secondDotIndex, mmControlId.indexOf(" ", secondDotIndex)))
    if (Number.isNaN(subSubChapter)) return Number.parseInt(chapter + paddedSubChapter + Array(subSubChapterMaxNumDigits).fill('0').toString())
    const paddedSubSubChapter = String(subSubChapter).padStart(subSubChapterMaxNumDigits, '0')
    return Number.parseInt(chapter + paddedSubChapter + paddedSubSubChapter)
}

export function getISOChapter(isoControlId:string) : number{
    if (isoControlId == null || isoControlId.length == 0) return 0
    const chapterStartIndex = isoControlId[0] === 'A' ? 1 : 0
    const dotIndex = isoControlId.indexOf(".")
    const chapter = Number.parseInt(isoControlId.substring(chapterStartIndex, dotIndex));
    if (Number.isNaN(chapter)) return 0
    const subChap = Number.parseInt(isoControlId.substring(dotIndex+1, isoControlId.indexOf(" ")))
    if (Number.isNaN(subChap)) return chapter
    const subChapPadded = String(subChap).padStart(3, '0')
    return Number.parseFloat(chapter+subChapPadded)
}

export function getNistSubChapter(nistControlId:string) : number{
    if (nistControlId == null || nistControlId.length == 0) return 0
    const chapterStartIndex = 3
    const res = Number.parseInt(nistControlId.substring(chapterStartIndex));
    if (Number.isNaN(res)) return 0
    return res
}