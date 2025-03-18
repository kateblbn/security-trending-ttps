import { BaselineTechnique, IsoControl, MaturityModelControl, NistControl, TrendingTechnique } from "../Data";
import { getISOChapter, getMMChapter, getNistSubChapter } from "./helpers";

export function getNistControls(nistControls: NistControl[]) {
    return nistControls?.sort((a, b) => {
        const aNistChapter = a.esa_controlid.substring(0, 2);
        const bNistChapter = b.esa_controlid.substring(0, 2);
        if (aNistChapter.localeCompare(bNistChapter) === 0)
            return (
                getNistSubChapter(a.esa_controlid) - getNistSubChapter(b.esa_controlid)
            );
        else return aNistChapter.localeCompare(bNistChapter);
    });
}

  /// reduce to unique list and sort
export function getUniqueIsoControls(isoControls: IsoControl[] | undefined) {
    const uniqueIsoControls = isoControls?.reduce<IsoControl[]>((acc, cur) => {
        if (!acc.some((x) => x.esa_controlid === cur.esa_controlid)) acc.push(cur);

        return acc;
    }, []);

    uniqueIsoControls?.sort(
        (a, b) => getISOChapter(a.esa_controlid) - getISOChapter(b.esa_controlid)
    );
    return uniqueIsoControls
}

export function getUniqueMmControls(mmControls: MaturityModelControl[] | undefined) {
    return mmControls?.reduce<MaturityModelControl[]>(
        (acc, cur) => {
            if (!acc.some((x) => x.esa_controlid === cur.esa_controlid))
                acc.push(cur);

            return acc;
        },
        []
    ).sort(
        (a, b) => getMMChapter(a.esa_controlid) - getMMChapter(b.esa_controlid)
      );
    ;
}

export function getUniqueActorsAndOtherNames(occurences: TrendingTechnique[]) {
    return occurences.reduce<
        { mainName: string; otherNames: string; category: string; }[]
    >((acc, current) => {
        if (!acc.some((x) => x.mainName === current.taGroup.esa_name))
            acc.push({
                mainName: current.taGroup.esa_name,
                otherNames: current.taGroup.esa_othernames,
                category: current.taGroup.category.esa_name,
            });

        return acc;
    }, []);
}
//Baseline
export function getUniqueActorsAndOtherNamesByBaseline(occurences: BaselineTechnique[]) {
    return occurences.reduce<
        { mainName: string; otherNames: string; category: string; }[]
    >((acc, current) => {
        if (!acc.some((x) => x.mainName === current.taGroup.esa_name))
            acc.push({
                mainName: current.taGroup.esa_name,
                otherNames: current.taGroup.esa_othernames,
                category: current.taGroup.category.esa_name,
            });

        return acc;
    }, []);
}
