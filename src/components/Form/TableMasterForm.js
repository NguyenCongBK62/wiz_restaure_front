import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import {
  Input,
  List,
  NumberInput,
  RadioButton,
  Select,
  TextArea,
} from "components/FormControllers";
import Label from "components/Form/atoms/Label";
import SectionHeader from "components/Form/atoms/SectionHeader";

const displaySettingsButton = [
  {
    value: "true",
    label: "表示",
  },
  {
    value: "false",
    label: "非表示",
  },
];

function TableMasterForm({
  control,
  stores,
  smokeOption,
  role,
  selectedStore,
  loadedStoreId,
  loadedStoreName,
}) {
  return (
    <div className="form-wrapper">
      <Row className="form-section">
        <Col span={24}>
          <SectionHeader label={"テーブル"} />
        </Col>
        <Col span={24}>
          <div className="input-group">
            <Label label={"テーブル名"} />
            <div className="input-element">
              <Input
                control={control}
                inputName="name"
                inputProps={{
                  placeholder: "テーブル名を入力してください",
                  autoComplete: "off",
                }}
              />
            </div>
          </div>
        </Col>
        <Col span={24} style={{ marginTop: 25 }}>
          <div className="input-group">
            <div className="input-element">
              <Label label={"人数"} required={false} />
              <NumberInput
                control={control}
                inputName={"numberOfSeats"}
                defaultValue={""}
                inputNumberProps={{
                  min: 0,
                  max: 30,
                  placeholder: "4",
                  type: "number",
                }}
                label={"人"}
              />
            </div>
          </div>
        </Col>

        <Col span={24} style={{ marginTop: 25 }}>
          <div className="input-group">
            <Label label={"禁煙/喫煙"} required={false} />
            <div className="input-element" style={{ marginRight: 25 }}>
              <Select
                control={control}
                inputName={"smokeStatus"}
                placeholder={"選択してください"}
                Options={smokeOption.map((m) => ({
                  key: m.id,
                  label: m.name,
                }))}
              />
            </div>
          </div>
        </Col>

        <Col span={24} style={{ marginTop: 25 }}>
          <div className="input-group">
            <Label label={"対象店舗"} required={!loadedStoreId ? true : ""} />
            <div className="input-element" style={{ marginRight: 25 }}>
              {role === "admin" && loadedStoreId ? (
                <p>{loadedStoreName}</p>
              ) : role === "admin" && !loadedStoreId ? (
                <List
                  control={control}
                  inputName={"stores"}
                  options={stores.map((s) => ({
                    ...s,
                    disabled: s.status !== 0,
                  }))}
                />
              ) : (
                <p>{loadedStoreId ? loadedStoreName : selectedStore.name}</p>
              )}
            </div>
          </div>
        </Col>

        <Col span={24} style={{ marginTop: 25 }}>
          <div className="input-group">
            <Label label={"メモ"} required={false} />
            <div className="input-element" style={{ marginRight: 25 }}>
              <TextArea
                control={control}
                inputName={"note"}
                inputProps={{
                  rows: 5,
                  placeholder: " ",
                  maxLength: 300,
                }}
              />
            </div>
          </div>
        </Col>

        <Col span={24} style={{ marginTop: 25 }}>
          <div className="input-group">
            <Label label={"表示設定"} required={false} />
            <div className="input-element" style={{ marginRight: 25 }}>
              <RadioButton
                control={control}
                defaultValue={"true"}
                inputName={"displayStatus"}
                buttons={displaySettingsButton}
                classes={"radio-button-container-flex-start"}
              />
            </div>
          </div>
        </Col>
      </Row>
      <Row className="form-section" style={{ marginTop: "30px" }}>
        <Col span={24}>
          <SectionHeader label={"グルメサイト連携情報"} />
        </Col>
        <Col span={24}>
          <div style={{ color: "#121958" }}>
            <span>
              ※グルメサイト管理画面で設定しているテーブル名称を入力してください。
              （入力された名称は、部分一致で連携を行います）
            </span>
          </div>
          <div className="input-group">
            <Label label={"食べログ"} required={false} />
            <div className="input-element">
              <Input
                control={control}
                inputName="nameTaberogu"
                defaultValue=""
                inputProps={{
                  autoComplete: "off",
                  style: { maxWidth: "100%" },
                }}
              />
            </div>
          </div>
        </Col>
        <Col span={24}>
          <div className="input-group">
            <Label label={"ぐるなび"} required={false} />
            <div className="input-element">
              <Input
                control={control}
                inputName="nameGurunavi"
                defaultValue=""
                inputProps={{
                  autoComplete: "off",
                  style: { maxWidth: "100%" },
                }}
              />
            </div>
          </div>
        </Col>
        <Col span={24}>
          <div className="input-group">
            <Label label={"ホットペッパー"} required={false} />
            <div className="input-element">
              <Input
                control={control}
                inputName="nameHotopepper"
                defaultValue=""
                inputProps={{
                  autoComplete: "off",
                  style: { maxWidth: "100%" },
                }}
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

TableMasterForm.propTypes = {
  control: PropTypes.any,
  stores: PropTypes.array,
  smokeOption: PropTypes.array,
  role: PropTypes.string,
  selectedStore: PropTypes.any,
  loadedStoreId: PropTypes.any,
  loadedStoreName: PropTypes.any,
};

export default TableMasterForm;
