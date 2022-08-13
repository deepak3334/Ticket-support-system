import {AppBar, Toolbar, styled, Box, Typography} from '@mui/material';

const StyleHeader = styled(AppBar)`
     background: #F4FBFF;
     height: 700px;
     margin-right: 1100px;
`;
const Side = styled(Box)`
      width: 500%;
      margin-left: 1100px;

`;
const SideTool = styled(Toolbar)`
     
     
`



const DashBoard = () => {
     const logoURL = "https://s3-alpha-sig.figma.com/img/3a0d/2a26/764ffe795fb1cdf6d860002a3ae140dc?Expires=1659312000&Signature=DOY99AMrAkEW8ncK1aLmI9rq~zGFuMGXYJta2GvWlruLEvu-WHHAmjAAEVyqfZThqzTfLbypZsRG2CtR0sAEvEWIxZ9roFZldrcWQ9Dvi85o1qDeglVnSbunP5FsmCSnAto2QOZrP3v0QJIQlnOf0BZFNcrDKNsV8-jWPW0dfIrzkWxh59BwJ6Fk3oRmOOSr4VXFU0yIPhuTOd-tpUgtaJ4ahhRtafLo9pBgLArowBF9OYUrGRYbINkfiY8yLwnk-ZG0J4hnMaKvNBfCGnhyF3IEUPrROod~vW66m5jpTVTW24mENO2LkkCuXnuZTr7CjtztB5bjA5GL999v59ZX3g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";
     const logo2URL = "https://icons.veryicon.com/png/o/business/data-chart-display/dashboard-85.png";
     const logo3URL =  "https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/002/537/original/friends.png";
     const logo4URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP0bQD9Z5N73AgCnXlk8QO7zej4mX02MMhDLK3feV1jfpVM9yWEsRCMkCbw6kTtF4yiSQ&usqp=CAU";
    return (
        <StyleHeader>
            <SideTool>
               <Side>
                <img src={logoURL} alt="logo" style={{ width: 200, marginTop: 18}}  /> 
                <img src={logo2URL} alt="logo" style={{ width: 25, marginTop: 18}}  />
                <Typography style={{ color: 'blue', margin: 'auto'}} >Dashboard</Typography>
                <img src={logo3URL} alt="logo" style={{ width: 25, marginTop: 18}}  />
                <Typography style={{ color: 'blue'}} >Manage Users</Typography>
                <img src={logo4URL} alt="logo" style={{ width: 25, marginTop: 18}}  />
                <Typography style={{ color: 'blue'}} >My Profile</Typography>
               </Side>
            </SideTool>
        </StyleHeader>

    )
}

export default DashBoard;

