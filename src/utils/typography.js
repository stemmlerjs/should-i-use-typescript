import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '19.75',
  baseLineHeight: '1.64',
  scaleRatio: '2.50',
  googleFonts: [
    {
      name: 'Roboto',
      styles: [
        '400',
        '500',
        '700',
      ],
    },
  ],
  headerFontFamily: ['Roboto', 'sans-serif'],
  headerWeight: '700',
  bodyFontFamily: ['Roboto', 'sans-serif'],
  bodyColor: '#2D2D2D',
  headerGray: "0",
  bodyGray: "0",
  bodyWeight: "400",
  bodyBoldWeight: '700',
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    
    p: {
      fontWeight: '500',
      lineHeight: '1.6em',
      fontSize: '1.16rem'
    },
    // h4: {
    //   lineHeight: '1.4em',
    //   margin: '0',
    //   color: '#c9c9c9',
    //   fontSize: '1.1em !important',
    //   marginBottom: '20px'
    // },
    // pre: {
    //   marginTop: '3em !important',
    //   marginBottom: '3em !important',
    //   borderRadius: '0 !important',
    // },
    // ol: {
    //   fontSize: '1.3em',
    // }
  }),
})

typography.injectStyles()

export default typography
