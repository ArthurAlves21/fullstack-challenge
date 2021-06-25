export default function trimTitle (title){
  if(title.length > 14){
    return title.substring(0, 12)+'...';
  }else{
    return title;
  }
}