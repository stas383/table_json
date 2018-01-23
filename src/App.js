import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";

import "./App.css";
import Table from "./Table";

let json_file = require('./data.json');
injectTapEventPlugin();

class App extends Component {
    state = {
        data: json_file,
};
    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <Table
                        data={this.state.data}
                        header={[
                            {
                                name: "Идентификатор",
                                prop: "id"
                            },
                            {
                                name: "Название",
                                prop: "name"
                            },
                            {
                                name: "Стоимость",
                                prop: "price"
                            },
                            {
                                name: "Количество",
                                prop: "quantity"
                            },
                        ]}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;