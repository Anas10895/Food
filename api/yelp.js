import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer ZAX5W6fsZEZMG3lYDFXrqO8KQk6ck-EJlZu8635v1klynqvsxlD8XVomsdvcS5z8MDUAC8j3z-9O4imfpPAwYgCtwmqlGP_KzPcr0O-xtrniBYgOqep--89IrP00X3Yx'
    }
});   