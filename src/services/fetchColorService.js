import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = (colors) => {
    axiosWithAuth()
    .get('/api/colors')
    .then((res)=> {
        console.log("Colors: ", res)
        colors(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
}

export default fetchColorService;