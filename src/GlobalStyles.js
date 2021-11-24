import { createGlobalStyle } from 'styled-components'

// To compensate for the in-app browser's toolbar from messing up the vh
let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty('--vh', `${vh}px`)
if (window.innerWidth > 768) {
  let vh = window.screen.height * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

export default createGlobalStyle`
  :root {
      --primary-colour: #000000;
      --bg-colour: #ffffff;
      --max-content-width: 800px;
      --full-height : calc(var(--vh, 1vh) * 100);
      --deck-page-height: calc(var(--vh, 1vh) * 120);
      --spacer-height: calc(var(--vh, 1vh) * 20);
      --instruction-page-height: calc(var(--vh, 1vh) * 200);
      --fade-page-height: calc(var(--vh, 1vh) * 500);
      --fade-content-height: calc(var(--vh, 1vh) * 300);
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
        font-family: 'Alata', sans-serif;
        font-family: 'Quicksand', sans-serif;
    }
    
    html {
        /* scroll-behavior: smooth; */
        font-size: 22px;
    }
    
    @media (max-width: 800px) {
        html { font-size: 17px; }
    }
    @media (max-width: 400px) {
        html { font-size: 14px; }
    }
    
    
    html, body {
        overscroll-behavior-y: contain;
        user-select: none;
        scroll-behavior: smooth;
        overflow-y: scroll;
        scroll-snap-type: y proximity;
        height: 100%;
    }

    .scroll-snap {
        scroll-snap-align: center;
    }

    h1, h2, h3, h4, h5, h6, p,
    text {
        line-height: 2;
        user-select: none;
        color: var(--primary-colour);
    }
    h1 {
        font-size: 2rem;
    }

    h2{
        font-size: 1.8rem;
    }

    p, a {
    font-size: 1.3rem;
    }


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
