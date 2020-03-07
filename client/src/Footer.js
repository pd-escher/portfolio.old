import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiMail } from 'react-icons/fi'
import { GoMarkGithub } from 'react-icons/go'
import { FaMedium } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import './style.css'

const Footer = () => {
    return (
        <div class="d-flex justify-content-center footer">
            <a href="" class="button-white-footer p-2 bd-highlight"><FiMail/></a>
            <a href="http://github.com/pd-escher" class="button-white-footer p-2 bd-highlight"><GoMarkGithub /></a>
            <a href="http://medium.com/@dhoolia.pranav" class="button-white-footer p-2 bd-highlight"><FaMedium /></a>
            <a href="https://www.linkedin.com/in/pranav-dhoolia-777b66155/" class="button-white-footer p-2 bd-highlight"><FaLinkedin/></a>
        </div>
    )
}

export default Footer