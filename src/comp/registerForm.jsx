import React, { Component } from 'react';
import axios from 'axios';
import Joi from 'joi-browser';
import { ToastContainer, toast } from 'react-toastify';
import Form from './common/form';
import { NavLink } from 'react-router-dom';

class RegisterForm extends Form {
    state = {
        data: {
            team_name: "",
            team_lead: "",
            ps_number: "",
            link: "",
            team_member1: "",
            team_member2: "",
            team_member3: "",
            team_member4: "",
            team_member5: ""
        },
        errors: {}
    };

    schema = {
        team_name: Joi.string()
            .required()
            .label("Teamname"),
        team_lead: Joi.string()
            .required()
            .label("TeamLead"),
        ps_number: Joi.number()
            .required()
            .label("PSnumber"),
        link: Joi.string().required(),
        team_member1: Joi.string().required(),
        team_member2: Joi.string().required(),
        team_member3: Joi.string().required(),
        team_member4: Joi.string().required(),
        team_member5: Joi.string().required()
    };

    doSubmit = async () => {
        try {
            const { data } = this.state;
            const res = await axios.post("https://hachtechapi-kucp.onrender.com/post", {
                team_name: data.team_name,
                leader_name: data.team_lead,
                ps_number: data.ps_number,
                link: data.link,
                member1: data.team_member1,
                member2: data.team_member2,
                member3: data.team_member3,
                member4: data.team_member4,
                member5: data.team_member5
            });
            window.location = '/';
            toast.success('Registered');
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors }
                errors.team_name = ex.response.data;
                this.setState({ errors });
            }
        }
    }
    render() {
        return (
            <div className="form-container">
                <div className="title">Register</div>
                <div className="subtitle">Last date 10th apr</div>
                <form className="form" onSubmit={this.handleSubmit}>
                    {this.renderInput("team_name", "Team name")}
                    {this.renderInput("team_lead", "Leader name")}
                    {this.renderInput("ps_number", "PS Number")}
                    {this.renderInput("link", "Link")}
                    {this.renderInput("team_member1", "Member1")}
                    {this.renderInput("team_member2", "Member2")}
                    {this.renderInput("team_member3", "Member3")}
                    {this.renderInput("team_member4", "Member4")}
                    {this.renderInput("team_member5", "Member5")}
                    <button type="submit" className='submit' disabled={this.validate()}>submit</button>
                    <NavLink className='submit' to='/teams'>View Teams</NavLink>
                    <ToastContainer />
                </form>
            </div>
        );
    }
}

export default RegisterForm;
