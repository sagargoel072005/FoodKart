import User from "./User";
import UserClass from "./Userclass";
import { Component } from "react";
class About extends Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <User name={"Sagar (function)"} />
                <UserClass name={"sagar (class)"} location={"mzn fn"} />
            </div>
        );
    }
}
export default About;