import { Collapse, Modal, Table } from "antd";
import {
  BaselineTechnique,
  IsoControl,
  MaturityModelControl,
  MitreTechnique,
  NistControl,
} from "../Data";
import "./modal.css";
import { useEffect, useState } from "react";
import { IRepository } from "../../repositories/repository-interface";
import {
  getNistControls,
  getUniqueActorsAndOtherNamesByBaseline,
  getUniqueIsoControls,
  getUniqueMmControls,
} from "./utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faShieldAlt,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import Markdown from "marked-react";

type BaselineModalProps = {
  repository: IRepository;
  occurences: BaselineTechnique[];
  onClose: () => void;
};

export default function TrendingModal({
  repository,
  occurences,
  onClose,
}: BaselineModalProps) {
  const [open, setOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [technique, setTechnique] = useState<MitreTechnique | undefined>();
  const [nistControls, setNistControls] = useState<NistControl[] | undefined>();
  const [isoControls, setIsoControls] = useState<IsoControl[] | undefined>();
  const [mmControls, setMmControls] = useState<
    MaturityModelControl[] | undefined
  >();
  const [expandedSummaryId, setExpandedSummaryId] = useState<number>(null);

  useEffect(() => {
    if (occurences.length === 0) setOpen(false);
    else {
      openNewModal();
    }

    async function openNewModal() {
      setOpen(true);
      setIsLoading(true);
      const mitreGuid = occurences[0].technique.esa_mitreenterpriseid;
      const [
        techniqueResponse,
        nistControlsResponse,
        isoControlsResponse,
        mmControlsResponse,
      ] = await Promise.all([
        repository.getMitreTechnique(mitreGuid),
        repository.getNistControls(mitreGuid),
        repository.getIsoControls(mitreGuid),
        repository.getMaturityModelControls(mitreGuid),
      ]);
      setTechnique(techniqueResponse);
      setNistControls(nistControlsResponse.map((x) => x.nistControl));
      setIsoControls(isoControlsResponse.map((x) => x.isoControl));
      setMmControls(mmControlsResponse.map((x) => x.mmControl));
      setIsLoading(false);
    }
  }, [occurences]);

  function handleClose() {
    setOpen(false);
    onClose();
  }

  function toggleSummaryExpand(id) {
    setExpandedSummaryId(expandedSummaryId === id ? null : id);
  }

  const firstOccurance = occurences[0];

  if (!firstOccurance) return;

  let nist = getNistControls(nistControls);

  const uniqueIsoControls = getUniqueIsoControls(isoControls);

  const uniqueMmControls = getUniqueMmControls(mmControls);

  const uniqueActors = getUniqueActorsAndOtherNamesByBaseline(occurences);

  console.log(uniqueActors);

  let title =
    firstOccurance.technique.esa_mitreid +
    " " +
    firstOccurance.technique.esa_name;

  if (firstOccurance.technique.esa_deprecated) title += " (deprecated)";

  return (
    <Modal
    className="popup"
    title={title}
    open={open}
    footer={null}
    width={{
      xs: "90%",
      sm: "90%",
      md: "80%",
      lg: "80%",
      xl: "70%",
      xxl: "60%",
    }}
    onCancel={handleClose}
    loading={isLoading}
  >
    <Collapse
      size="large"
      items={[
        {
          key: "description",
          label: (
            <>
              <FontAwesomeIcon icon={faInfoCircle} /> Description
            </>
          ),
          children: <Markdown>{technique?.esa_description}</Markdown>,
        },
        {
          key: "actors",
          label: (
            <>
              <FontAwesomeIcon icon={faUserSecret} /> Threat Actors{" "}
              <span>({uniqueActors.length})</span>
            </>
          ),
          children: (
            <Table
              columns={[
                {
                  title: "Main name",
                  key: "Mainname",
                  dataIndex: "mainName",
                },
                {
                  title: "Other names",
                  key: "OtherNames",
                  dataIndex: "otherNames",
                },
                {
                  title: "Category",
                  key: "category",
                  dataIndex: "category",
                },
              ]}
              dataSource={uniqueActors.map((x) => ({
                ...x,
                key: x.mainName,
              }))}
            />
          ),
        },
        {
          key: "controls",
          label: (
            <>
              <FontAwesomeIcon icon={faShieldAlt} /> Controls
            </>
          ),
          children: (
            <div className="controls">
              <Table
                title={() => <h3>NIST 800-53</h3>}
                columns={[
                  {
                    title: "Control ID",
                    key: "controlId",
                    dataIndex: "esa_controlid",
                  },
                  {
                    title: "Control name",
                    key: "controlName",
                    dataIndex: "esa_controlname",
                  },
                ]}
                dataSource={nistControls?.map((x) => ({
                  ...x,
                  key: x.esa_controlid,
                }))}
              />
              <Table
                title={() => <h3>ISO 27001:2022</h3>}
                columns={[
                  {
                    title: "Control ID",
                    key: "controlId",
                    dataIndex: "esa_controlid",
                  },
                  {
                    title: "Control name",
                    key: "controlName",
                    dataIndex: "esa_controlname",
                  },
                ]}
                dataSource={uniqueIsoControls?.map((x) => ({
                  ...x,
                  key: x.esa_controlid,
                }))}
              />
              <Table
                title={() => <h3>Telenor Maturity Model</h3>}
                columns={[
                  {
                    title: "Control ID",
                    key: "controlId",
                    dataIndex: "esa_controlid",
                  },
                  {
                    title: "Control name",
                    key: "controlName",
                    dataIndex: "esa_controlname",
                  },
                ]}
                dataSource={uniqueMmControls?.map((x) => ({
                  ...x,
                  key: x.esa_controlid,
                }))}
              />
            </div>
          ),
        },
      ]}
    />
  </Modal>
  );
}
