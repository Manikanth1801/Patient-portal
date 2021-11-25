import * as React from "react";
import { DropDownList } from "@progress/kendo-react-dropdowns";

export class DropDownCell extends React.Component {
  localizedData = [
    { text: "yes", value: true },
    { text: "no", value: false },
    { text: "(empty)", value: null }
  ];

  handleChange = (e) => {
    this.props.onChange({
      dataItem: this.props.dataItem,
      field: this.props.field,
      syntheticEvent: e.syntheticEvent,
      value: e.target.value.value
    });
  };

  render() {
    const { dataItem, field } = this.props;
    const dataValue = dataItem[field] === null ? "" : dataItem[field];

    return (
      <td>
        {dataItem.inEdit ? (
          <DropDownList
            style={{ width: "100px" }}
            onChange={this.handleChange}
            value={this.localizedData.find((c) => c.value === dataValue)}
            data={this.localizedData}
            textField="text"
          />
        ) : (
          dataValue.toString()
        )}
      </td>
    );
  }
}
