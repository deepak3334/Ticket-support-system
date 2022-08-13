import {AppBar, Toolbar, styled, Box} from '@mui/material';

const StyleHeader = styled(AppBar)`
     background: #F4FBFF;
     height: 80px;

`;




const Header = () => {
     const logoURL = "https://s3-alpha-sig.figma.com/img/3a0d/2a26/764ffe795fb1cdf6d860002a3ae140dc?Expires=1659312000&Signature=DOY99AMrAkEW8ncK1aLmI9rq~zGFuMGXYJta2GvWlruLEvu-WHHAmjAAEVyqfZThqzTfLbypZsRG2CtR0sAEvEWIxZ9roFZldrcWQ9Dvi85o1qDeglVnSbunP5FsmCSnAto2QOZrP3v0QJIQlnOf0BZFNcrDKNsV8-jWPW0dfIrzkWxh59BwJ6Fk3oRmOOSr4VXFU0yIPhuTOd-tpUgtaJ4ahhRtafLo9pBgLArowBF9OYUrGRYbINkfiY8yLwnk-ZG0J4hnMaKvNBfCGnhyF3IEUPrROod~vW66m5jpTVTW24mENO2LkkCuXnuZTr7CjtztB5bjA5GL999v59ZX3g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";

    return (
        <StyleHeader>
            <Toolbar>
               <Box>
                <img src={logoURL} alt="logo" style={{ width: 220, marginTop: 18}}  />
                
               </Box>
            </Toolbar>
        </StyleHeader>

    )
}

export default Header;