import {Component} from "react";

class TaskList extends Component {
    state = {
        tasks: []
    }

    async componentDidMount() {
        const response = await fetch('/tasks');
        const body = response.json();
        this.setState({tasks: body});
    }

    render() {
        const {tasks} = this.state;
        return(
            <div className={"placeholder"}>

            </div>
        )
    }
}