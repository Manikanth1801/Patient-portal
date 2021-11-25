import { StrictMode } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  Grid,
  GridColumn as Column,
  GridToolbar
} from "@progress/kendo-react-grid";

import { MyCommandCell } from "./CommandCell";
import { DropDownCell } from "./DropDownCell";
import { ProductGrid } from "./Grid";
import { TaskScheduler } from "./Scheduler";

const sampleProducts = [
  {
    ProductID: 1,
    ProductName: "Chai",
    SupplierID: 1,
    CategoryID: 1,
    QuantityPerUnit: "10 boxes x 20 bags",
    UnitPrice: 18,
    UnitsInStock: 39,
    UnitsOnOrder: 0,
    ReorderLevel: 10,
    Discontinued: false,
    Category: {
      CategoryID: 1,
      CategoryName: "Beverages",
      Description: "Soft drinks, coffees, teas, beers, and ales"
    },
    FirstOrderedOn: new Date(1996, 8, 20)
  },
  {
    ProductID: 2,
    ProductName: "Chang",
    SupplierID: 1,
    CategoryID: 1,
    QuantityPerUnit: "24 - 12 oz bottles",
    UnitPrice: 19,
    UnitsInStock: 17,
    UnitsOnOrder: 40,
    ReorderLevel: 25,
    Discontinued: false,
    Category: {
      CategoryID: 1,
      CategoryName: "Beverages",
      Description: "Soft drinks, coffees, teas, beers, and ales"
    },
    FirstOrderedOn: new Date(1996, 7, 12)
  },
  {
    ProductID: 3,
    ProductName: "Aniseed Syrup",
    SupplierID: 1,
    CategoryID: 2,
    QuantityPerUnit: "12 - 550 ml bottles",
    UnitPrice: 10,
    UnitsInStock: 13,
    UnitsOnOrder: 70,
    ReorderLevel: 25,
    Discontinued: false,
    Category: {
      CategoryID: 2,
      CategoryName: "Condiments",
      Description: "Sweet and savory sauces, relishes, spreads, and seasonings"
    },
    FirstOrderedOn: new Date(1996, 8, 26)
  },
  {
    ProductID: 4,
    ProductName: "Chef Anton's Cajun Seasoning",
    SupplierID: 2,
    CategoryID: 2,
    QuantityPerUnit: "48 - 6 oz jars",
    UnitPrice: 22,
    UnitsInStock: 53,
    UnitsOnOrder: 0,
    ReorderLevel: 0,
    Discontinued: false,
    Category: {
      CategoryID: 2,
      CategoryName: "Condiments",
      Description: "Sweet and savory sauces, relishes, spreads, and seasonings"
    },
    FirstOrderedOn: new Date(1996, 9, 19)
  },
  {
    ProductID: 5,
    ProductName: "Chef Anton's Gumbo Mix",
    SupplierID: 2,
    CategoryID: 2,
    QuantityPerUnit: "36 boxes",
    UnitPrice: 21.35,
    UnitsInStock: 0,
    UnitsOnOrder: 0,
    ReorderLevel: 0,
    Discontinued: true,
    Category: {
      CategoryID: 2,
      CategoryName: "Condiments",
      Description: "Sweet and savory sauces, relishes, spreads, and seasonings"
    },
    FirstOrderedOn: new Date(1996, 7, 17)
  },
  {
    ProductID: 6,
    ProductName: "Grandma's Boysenberry Spread",
    SupplierID: 3,
    CategoryID: 2,
    QuantityPerUnit: "12 - 8 oz jars",
    UnitPrice: 25,
    UnitsInStock: 120,
    UnitsOnOrder: 0,
    ReorderLevel: 25,
    Discontinued: false,
    Category: {
      CategoryID: 2,
      CategoryName: "Condiments",
      Description: "Sweet and savory sauces, relishes, spreads, and seasonings"
    },
    FirstOrderedOn: new Date(1996, 9, 19)
  },
  {
    ProductID: 7,
    ProductName: "Uncle Bob's Organic Dried Pears",
    SupplierID: 3,
    CategoryID: 7,
    QuantityPerUnit: "12 - 1 lb pkgs.",
    UnitPrice: 30,
    UnitsInStock: 15,
    UnitsOnOrder: 0,
    ReorderLevel: 10,
    Discontinued: false,
    Category: {
      CategoryID: 7,
      CategoryName: "Produce",
      Description: "Dried fruit and bean curd"
    },
    FirstOrderedOn: new Date(1996, 7, 22)
  },
  {
    ProductID: 8,
    ProductName: "Northwoods Cranberry Sauce",
    SupplierID: 3,
    CategoryID: 2,
    QuantityPerUnit: "12 - 12 oz jars",
    UnitPrice: 40,
    UnitsInStock: 6,
    UnitsOnOrder: 0,
    ReorderLevel: 0,
    Discontinued: false,
    Category: {
      CategoryID: 2,
      CategoryName: "Condiments",
      Description: "Sweet and savory sauces, relishes, spreads, and seasonings"
    },
    FirstOrderedOn: new Date(1996, 11, 1)
  },
  {
    ProductID: 9,
    ProductName: "Mishi Kobe Niku",
    SupplierID: 4,
    CategoryID: 6,
    QuantityPerUnit: "18 - 500 g pkgs.",
    UnitPrice: 97,
    UnitsInStock: 29,
    UnitsOnOrder: 0,
    ReorderLevel: 0,
    Discontinued: true,
    Category: {
      CategoryID: 6,
      CategoryName: "Meat/Poultry",
      Description: "Prepared meats"
    },
    FirstOrderedOn: new Date(1997, 1, 21)
  },
  {
    ProductID: 10,
    ProductName: "Ikura",
    SupplierID: 4,
    CategoryID: 8,
    QuantityPerUnit: "12 - 200 ml jars",
    UnitPrice: 31,
    UnitsInStock: 31,
    UnitsOnOrder: 0,
    ReorderLevel: 0,
    Discontinued: false,
    Category: {
      CategoryID: 8,
      CategoryName: "Seafood",
      Description: "Seaweed and fish"
    },
    FirstOrderedOn: new Date(1996, 8, 5)
  }
];

class App extends React.Component {
  editField = "inEdit";
  CommandCell;

  state = {
    data: sampleProducts.slice(0)
  };

  CommandCell = (props) => (
    <MyCommandCell
      {...props}
      edit={this.enterEdit}
      remove={this.remove}
      add={this.add}
      discard={this.discard}
      update={this.update}
      cancel={this.cancel}
      editField={this.editField}
    />
  );

  enterEdit = (dataItem) => {
    this.setState({
      data: this.state.data.map((item) =>
        item.ProductID === dataItem.ProductID ? { ...item, inEdit: true } : item
      )
    });
  };

  add = (dataItem) => {
    dataItem.inEdit = undefined;
    dataItem.ProductID = this.generateId(sampleProducts);

    sampleProducts.unshift(dataItem);
    this.setState({
      data: [...this.state.data]
    });
  };

  update = (dataItem) => {
    const data = [...this.state.data];
    const updatedItem = { ...dataItem, inEdit: undefined };

    this.updateItem(data, updatedItem);
    this.updateItem(sampleProducts, updatedItem);

    this.setState({ data });
  };

  updateItem = (data, item) => {
    let index = data.findIndex(
      (p) => p === item || (item.ProductID && p.ProductID === item.ProductID)
    );
    if (index >= 0) {
      data[index] = { ...item };
    }
  };

  cancel = (dataItem) => {
    const originalItem = sampleProducts.find(
      (p) => p.ProductID === dataItem.ProductID
    );
    const data = this.state.data.map((item) =>
      item.ProductID === originalItem.ProductID ? originalItem : item
    );

    this.setState({ data });
  };

  discard = (dataItem) => {
    const data = [...this.state.data];
    this.removeItem(data, dataItem);

    this.setState({ data });
  };

  remove = (dataItem) => {
    const data = [...this.state.data];
    this.removeItem(data, dataItem);
    this.removeItem(sampleProducts, dataItem);

    this.setState({ data });
  };

  itemChange = (event) => {
    const data = this.state.data.map((item) =>
      item.ProductID === event.dataItem.ProductID
        ? { ...item, [event.field]: event.value }
        : item
    );

    this.setState({ data });
  };

  addNew = () => {
    const newDataItem = { inEdit: true, Discontinued: false };

    this.setState({
      data: [newDataItem, ...this.state.data]
    });
  };

  cancelCurrentChanges = () => {
    this.setState({ data: [...sampleProducts] });
  };

  render() {
    const { data } = this.state;
    const hasEditedItem = data.some((p) => p.inEdit);

    return (
      <Grid
        data={data}
        onItemChange={this.itemChange}
        editField={this.editField}
      >
        <GridToolbar>
          <button
            title="Add new"
            className="k-button k-primary"
            onClick={this.addNew}
          >
            Add new
          </button>
          {hasEditedItem && (
            <button
              title="Cancel current changes"
              className="k-button"
              onClick={this.cancelCurrentChanges}
            >
              Cancel current changes
            </button>
          )}
        </GridToolbar>
        <Column field="ProductID" title="Id" width="50px" editable={false} />
        <Column field="ProductName" title="Product Name" />
        <Column
          field="FirstOrderedOn"
          title="First Ordered"
          editor="date"
          format="{0:d}"
        />
        <Column field="UnitsInStock" title="Units" editor="numeric" />
        <Column field="Discontinued" title="Discontinued" cell={DropDownCell} />
        <Column cell={this.CommandCell} width="240px" />
      </Grid>
    );
  }

  generateId = (data) =>
    data.reduce((acc, current) => Math.max(acc, current.ProductID), 0) + 1;

  removeItem(data, item) {
    let index = data.findIndex(
      (p) => p === item || (item.ProductID && p.ProductID === item.ProductID)
    );
    if (index >= 0) {
      data.splice(index, 1);
    }
  }
}

class Record extends React.Component {
  render() {
    return (
        <>
            <App/>
        </>
    //   <Router>
    //     {/*All our Routes goes here!*/}
    //     <Route exact path="/" component={App} />
    //     <Route exact path="/scheduler" component={ProductGrid} />
    //     <Route exact path="/scheduler" component={TaskScheduler} />
    //   </Router>
    );
  }
}

export default Record;