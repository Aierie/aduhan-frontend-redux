export const styles = {
  container: {
    display:'flex', 
    flexDirection:"column", 
    height:'100%'
  },
  //#notetake - similar to https://www.w3schools.com/howto/howto_css_image_overlay_title.asp
  image: {
    position: 'relative',
  },
  iconBar: {
    position: 'absolute',
    bottom: '16px',
    right: '8px'
  },
  textScroller: {
    overflow:'scroll', 
    overflowX:'hidden'
  }
}