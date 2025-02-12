import { Collapse, Modal, Table } from "antd"
import { MitreTechnique, TrendingTechnique } from "../Data"
import "./modal.css"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faChevronDown, faChevronUp, faInfoCircle, faShield, faShieldAlt, faUserSecret } from "@fortawesome/free-solid-svg-icons";
import Markdown from "marked-react";
import { IRepository } from "../../repositories/repository-interface";

type TrendingModalProps = {
    repository: IRepository
    occurences: TrendingTechnique[]
    onClose: () => void
}

export default function TrendingModal({ repository, occurences, onClose }: TrendingModalProps) {
    const [open, setOpen] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [technique, setTechnique] = useState<MitreTechnique | undefined>()
    const [expandedSummaryId, setExpandedSummaryId] = useState<number>(null);

    useEffect(() => {
        if (occurences.length === 0)
            setOpen(false)
        else {
            openNewModal()
        }

        async function openNewModal() {
            setOpen(true)
            setIsLoading(true)
            const technique = await repository.getMitreTechnique(occurences[0].technique.esa_mitreenterpriseid)
            setTechnique(technique)
            setIsLoading(false)
        }

    }, [occurences])

    function handleClose() {
        setOpen(false)
        onClose()
    }

    function toggleSummaryExpand(id) {
        setExpandedSummaryId(expandedSummaryId === id ? null : id);
    };

    const firstOccurance = occurences[0]

    if (!firstOccurance) return

    occurences.sort((a, b) => b.esa_eventdate.getTime() - a.esa_eventdate.getTime())

    const uniqueActors = occurences.reduce<{ mainName: string, otherNames: string, category: string, }[]>((acc, current) => {
        if (!acc.some(x => x.mainName === current.taGroup.esa_name))
            acc.push({
                mainName: current.taGroup.esa_name,
                otherNames: current.taGroup.esa_othernames,
                category: current.taGroup.category.esa_name,
            })

        return acc
    }, [])

    return (
        <Modal
            className="popup"
            title={firstOccurance.technique.esa_mitreid +
                " " + firstOccurance.technique.esa_name}
            open={open}
            footer={null}
            width={{
                xs: '90%',
                sm: '90%',
                md: '80%',
                lg: '80%',
                xl: '70%',
                xxl: '60%',
            }}
            onCancel={handleClose}
            loading={isLoading}

        >
            <Collapse
                size="large"
                items={[
                    {
                        key: "description",
                        label: <><FontAwesomeIcon icon={faInfoCircle} /> Description</>,
                        children: <Markdown>{technique?.esa_description}</Markdown>
                    },
                    {
                        key: "events",
                        label: <><FontAwesomeIcon icon={faCalendarAlt} /> Events <span>({occurences.length})</span></>,
                        children: (
                            <table className="events">
                                <thead>
                                    <tr>
                                        <th>Actor</th>
                                        <th>Summary</th>
                                        <th>Event Date</th>
                                        <th>Source</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {occurences.map((x, index) => (
                                        <tr key={index}>
                                            <td>{x.taGroup.esa_name}</td>
                                            <td data-id={index} className={`collapsibleCell ${expandedSummaryId === index ? "expandedCell" : ""}`}>
                                                <div className={"collapsibleCellContent"}>
                                                    <Markdown>{x.esa_articlesummary}</Markdown>
                                                </div>
                                                <button
                                                    className="toggle"
                                                    onClick={() => toggleSummaryExpand(index)}
                                                >
                                                    <FontAwesomeIcon icon={expandedSummaryId === index ? faChevronUp : faChevronDown} />
                                                </button>
                                            </td>
                                            <td className="date">{x.esa_eventdate.toLocaleDateString("en-GB", { year: "numeric", month: "short" })}</td>
                                            <td>
                                                <a href={x.esa_articlelink} target="_blank">
                                                    {x.esa_articletitle}
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )
                    },
                    {
                        key: "actors",
                        label: <><FontAwesomeIcon icon={faUserSecret} /> Threat Actors <span>({uniqueActors.length})</span></>,
                        children: (
                            <Table columns={[
                                {
                                    title: "Main name",
                                    key: "Mainname",
                                    dataIndex: "mainName"
                                },
                                {
                                    title: "Other names",
                                    key: "OtherNames",
                                    dataIndex: "otherNames"
                                },
                                {
                                    title: "Category",
                                    key: "category",
                                    dataIndex: "category"
                                },
                            ]} 
                            dataSource={uniqueActors.map(x => ({...x, key:x.mainName}))}
                     />
                    )
                    },
                    {
                        key: "controls",
                        label: <><FontAwesomeIcon icon={faShieldAlt} /> Controls</>,
                        children: "Lorem ipsum."
                    },
                ]} />
        </Modal>
    )
}