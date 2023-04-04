import React, { useState } from 'react';
import PsCards from './common/psCard';
import Footer from './common/footer';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';

const AllPs = () => {
    const data = [
        {
            ps_no: 1,
            title: "New age women safety app",
            about: `Design and develop a Women safety app that automatically senses 
            the danger to a mobile user and triggers
             an SOS alert with location details based
              on multimodal data from a mobile device
               such as audio, video, image, motion 
               detection etc., given a situation that
                the user is not able to operate the mobile.`
        },
        {
            ps_no: 2,
            title: "Obscenity blocker solution",
            about: `Design and develop a 
            technological solution for identifying and blocking any obscene media (image/video/audio) at the user’s end. The solution should be able to send alerts to the concerned nodal agency in case of the spread of such content. The solution may be in the form of a desktop/mobile application or a web browser plugin.`
        },
        {
            ps_no: 3,
            title: "Advanced fake news detection system",
            about: `Design and develop a technological solution/software tool for Tracking & Tracing Fake News and its origin using official sources as the input filter. The solution should have a mechanism to mitigate the impact of the spread of Fake News by auto-populating the fake news spreaders’ inboxes with the official/authenticated news content.`
        },
        {
            ps_no: 4,
            title: "Phishing Detection Solution",
            about: `Design and develop a technological solution for AI-enabled Phishing Links Detection and Alert System. The solution should be able to identify the source of phishing attacks in web pages, email apps, social media, instant messenger apps, text messages etc. The solution may be in the form of a desktop/mobile application or a web browser plugin.`
        },
        {
            ps_no: 5,
            title: "Advanced ANPR & FRS solution",
            about: `Design and develop a technological solution that can accurately perform the Automatic Number Plate Recognition (ANPR) along with Facial Recognition from the available CCTV feeds. The solution should be able to recognize number plates that are written in typical non-standard ways using varying font styles, sizes, designs, symbols, languages etc., i.e. difficult to recognize by existing ANPR Systems.
            `
        },
        {
            ps_no: 6,
            title: "Dark web crawler",
            about : `Design and develop an AI-enabled technological solution for actionable Crime Intelligence from the Deep and Dark Web including but not limited to child pornography, weapons, drugs etc. The solution should have the capability to raise demands for additional information from clear-net and proprietary databases viz. TSPs/ISPs for attempting correlation and attribution.`
        },
        {
            ps_no: 7,
            title: "Spam alert system",
            about : `Design and develop a crowd-sourcing based solution that can analyse and verify the source of any incoming call, SMS and Email based on the inputs from the end-users. The solution should be able to classify, whether the source is genuine or spam. Also, the solution should be able to generate a risk score for incoming calls, SMS and Emails, based on the crowd-sourced input.
            `
        },
        {
            ps_no: 8,
            title: "Malware analysis tool",
            about : `Design and develop a technological solution for the detection and prevention of Fileless Malware (a type of malicious software that uses legitimate programs to infect a computer). The solution may be in the form of a desktop or mobile application.`
        },
        {
            ps_no: 9,
            title: "Advanced CCTV analytics solution",
            about : `Design and develop a technological solution based on live CCTV feeds, that can automatically detect incidents related to street crime, violence, burglary, theft, infiltration, unauthorized access etc. and generate alerts to the nearest Police Station. The solution should also be able to generate a report and maintain a database that includes the nature of incident/crime, location, time, level of alert (i.e., low, medium, high risk alert) etc.`
        },
        {
            ps_no: 10,
            title: "RAM dump collection tool",
            about : `Design and develop a technological solution that can collect RAM Dump from any Windows, Linux or Mac based operating system. The solution may be in the form of an Auto-Executable/Lite Version that can be run/executed from any USB storage device without installation at the target computer system.`
        },
        {
            ps_no: 11,
            title: "Citizen safety app for protection against cyber crimes",
            about : `Developing an App to flag malicious/ fraud indicators in real-time.
            a) Mobile Number
            b) SMS Headers
            c) URL Links.
            d) UPI addresses
            e) Bit coin Wallet Address etc.
            f) SMS Templates`
        },
        {
            ps_no: 12,
            title: "Fund trail analysis tool",
            about : `Fund Trail Analysis Tool (Financial Statements in various Formats- pdf, csv etc).`
        },
        {
            ps_no: 13,
            title: "Tool for monitoring ground personnel",
            about : `Platform/tool to remotely track police officers deployed to bandobast duty using NFC(Near Field Communication)to ensure that they stay where they are posted.`
        },
        {
            ps_no: 14,
            title: "Chat messenger decryption tool",
            about : `Utility to decrypt We Chat, and Ding Talk from cloud / local storage from evidence.
            `
        },
        {
            ps_no: 15,
            title: "Mesh network app detection",
            about : `Design and develop a technological solution for detecting apps like Fire chat that use Mesh Networking to connect users without cell service in a given area. The solution should be man-portable and should be able to scan an area corresponding to a relatable TSP-BTS`
        },
        {
            ps_no: 16,
            title: "Detecting usage of LoRa",
            about : `Design and develop a technological solution for detecting usage of LoRa (low-power wide-area network modulation derived from chirp spread spectrum) in a given area.
            `
        },
        {
            ps_no: 17,
            title: "Hardware forensic suite",
            about : `Hardware Forensic Suite- Disk, memory, and Network Traffic (windows, Linux, Mac) with On-Prem and Cloud options.`
        },
        {
            ps_no: 18,
            title: "Plug & play system security audit tool",
            about : `Plug and Play System Security Audit Tool for Windows, and Linux. Agent-based with a centralized dashboard.`
        },
        {
            ps_no: 19,
            title: "Solution for auditing propriety cellular/portable electronic device hardware",
            about : `Design and develop a technological solution for auditing proprietary cellular/portable electronic device hardware for backdoors and vulnerabilities. The solution should have the capability to audit OEM embedded as well as third-party integrated hardware.
            `
        },
        {
            ps_no: 20,
            title: "Indigenous Crypto Currency Investigation Tool",
            about : `Indigenous technological Crypto Currency Investigation Tools with multi-blockchain platform support.
            `
        }

    ]
    const [currentPage, setCurrentPage] = useState(1);
    const itemCount = data.length;
    const pageSize = 5;
    const handlePageChange = (page) =>{
        setCurrentPage(page);
    }
    const ps = paginate(data, currentPage, pageSize);
    return (
        <React.Fragment>
        <div className="ps">
            <h1 className="ps-header">PROBLEM STATEMENT</h1>
            <div className="ps-table">
                <PsCards data={ps}/>
            </div>
        </div>
        <Pagination 
        totalCount = {itemCount}
        pageSize={pageSize}
        currentPage = {currentPage}
        onPageChange = {handlePageChange}
        />
        <Footer/>
        </React.Fragment>
     );
}
 
export default AllPs;