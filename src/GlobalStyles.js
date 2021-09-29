import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
      --primary-color: #ECA72C;
      --secondary-color: #44355B;
      --third-color: #5296A5;
      --accent-bg-color: #221E22;
      --page-horizontal-padding: 20px;
      --page-horizontal-padding-mobile: 10px;
      --page-vertical-padding-mobile: 1rem;
      --page-vertical-padding: 3rem;
      --recipe-page-padding: 50px;
      --header-height: 50px;
      --max-content-width: 1200px;
      --user-img-width: 120px;
      --user-img-margin: 5px;
      --nav-width: 250px;
      --page-height: 100vh;
      --recipe-box-shadow: 10px 10px 0 5px black, 0 0 5px 0px rgba(0, 0, 0, 0.3);
    }
    
    *,
    *:before,
    *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300&display=swap');
        font-family: 'Barlow', sans-serif, Arial, Helvetica;
    }
    
    html, body, div,
    input, button, select, option,
    h1, h2, h3, h4, h5, h6, p,
    text {
    }
    
    html {
        font-size: 16px;
        scroll-behavior: smooth;
    }


body {
    /* font-family: 'Barlow', sans-serif, Arial, Helvetica; */
    /* font-family:  Arial, Helvetica; */
    }

    html, body {
    }
    
    
    input, button, select, option,
    h1, h2, h3, h4, h5, h6, p,
    text {
        z-index: 1;
    }
    h1 {
        /* font-size: clamp(3.5em,calc(15 / 80 * 100vw), 10em); */
    /* user-select: none; */
}

    h2{
        /* font-size: clamp(1.5em,calc(5 / 80 * 100vw), 3em); */
}

p, a {
    /* font-size: clamp(.5em,calc(3 / 80 * 100vw), 1.2em);} */

html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {

/* 
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        /* list-style: none; */
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
 
`
