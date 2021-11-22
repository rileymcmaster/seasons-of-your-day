import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
      --primary-color: #000000;
      --max-content-width: 800px;
      font-size: 10px;
    }
    
    *,
    *:before,
    *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html, body, div,
    input, button, select, option,
    h1, h2, h3, h4, h5, h6, p,
    text {
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300&display=swap');
        font-family: 'Barlow', sans-serif, Arial, Helvetica;
    }
    
    html {
        scroll-behavior: smooth;
    }


body {
    }

    html, body {
    }
    
    
    input, button, select, option,
    h1, h2, h3, h4, h5, h6, p,
    text {
        z-index: 1;
    }
    h1 {
        font-size: 2rem;
    }

    h2{
        /* font-size: clamp(1.5em,calc(5 / 80 * 100vw), 3em); */
}

p, a {
    font-size: 1rem;
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
