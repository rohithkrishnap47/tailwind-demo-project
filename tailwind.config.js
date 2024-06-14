module.exports = {
  purge: {
    enabled: true,
    content: ['./dist/**/*.html'],
  }, 
  darkMode:"class" ,
  content: ['dist/*.html'],
  theme: {
    extend: {
      fontFamily: {
        headline: ['Oswald']
        },
        colors: {
          mainColor: '#212f49'
          }
              
    },
  },
  plugins: [],
}