import axios from 'axios';
import React, { Component } from 'react';


class RegisteredTeams extends Component {
    state = { teams: [] }
    async componentDidMount() {
        const { data: teams } = await axios.get("https://hackapi.onrender.com/api/register");
        this.setState({ teams });
    }
    render() {

        return (
            <div className="container">
                <ul className="responsive-table">
                    <li className="table-header">
                        <div className="col col-1">Team Name</div>
                        <div className="col col-2">Team Leader</div>
                        <div className="col col-3">PS Number</div>
                        <div className="col col-4">Drive Link</div>
                    </li>
                    {this.state.teams.map(team => (
                        <li className="table-row" key={team._id}>
                            <div className="col col-1" data-label="Job Id">{team.team_name}</div>
                            <div className="col col-2" data-label="Customer Name">{team.leader_name}</div>
                            <div className="col col-3" data-label="Amount">{team.ps_number}</div>
                            <div className="col col-4" data-label="Payment Status"><a href={team.link}>drive_link</a></div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
export default RegisteredTeams;